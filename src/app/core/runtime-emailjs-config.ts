type RuntimeEmailJsConfig = {
  publicKey: string;
  serviceId: string;
  templateId: string;
};

type RuntimeAppConfig = {
  emailjs?: Partial<RuntimeEmailJsConfig>;
};

declare global {
  interface Window {
    __APP_CONFIG__?: RuntimeAppConfig;
  }
}

const readValue = (value: unknown): string =>
  typeof value === 'string' ? value.trim() : '';

export const getRuntimeEmailJsConfig = (): RuntimeEmailJsConfig => {
  const emailjs = window.__APP_CONFIG__?.emailjs;

  return {
    publicKey: readValue(emailjs?.publicKey),
    serviceId: readValue(emailjs?.serviceId),
    templateId: readValue(emailjs?.templateId)
  };
};
