import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { execSync } from 'node:child_process';

const readWindowsEnv = (name) => {
  if (process.platform !== 'win32') return '';

  const psCommand = `[Environment]::GetEnvironmentVariable('${name}','User'); [Environment]::GetEnvironmentVariable('${name}','Machine')`;
  const raw = execSync(`powershell -NoProfile -Command "${psCommand}"`, {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'ignore']
  });

  return (
    raw
      .split(/\r?\n/)
      .map((line) => line.trim())
      .find((line) => line.length > 0) ?? ''
  );
};

const readEnv = (name) => process.env[name]?.trim() || readWindowsEnv(name);

const publicKey = readEnv('EMAILJS_PUBLIC_KEY');
const serviceId = readEnv('EMAILJS_SERVICE_ID');
const templateId = readEnv('EMAILJS_TEMPLATE_ID');

const missing = [
  ['EMAILJS_PUBLIC_KEY', publicKey],
  ['EMAILJS_SERVICE_ID', serviceId],
  ['EMAILJS_TEMPLATE_ID', templateId]
].filter(([, value]) => !value);

if (missing.length > 0) {
  const missingNames = missing.map(([name]) => name).join(', ');
  throw new Error(`Missing required EmailJS env vars: ${missingNames}`);
}

const filePath = resolve(process.cwd(), 'public/env.js');
const content = `window.__APP_CONFIG__ = {
  emailjs: {
    publicKey: '${publicKey.replace(/'/g, "\\'")}',
    serviceId: '${serviceId.replace(/'/g, "\\'")}',
    templateId: '${templateId.replace(/'/g, "\\'")}'
  }
};
`;

await mkdir(resolve(process.cwd(), 'public'), { recursive: true });
await writeFile(filePath, content, 'utf8');

console.log('Generated public/env.js from system environment variables.');
