import type enMessages from "@/i18n/messages/en.json";

export type MessageKey = keyof typeof enMessages;

export type MessageVars = Record<string, string | number>;

export function interpolate(
  template: string,
  vars?: MessageVars,
): string {
  if (!vars) {
    return template;
  }
  return template.replace(/\{(\w+)\}/g, (_, key: string) => {
    const value = vars[key];
    return value === undefined ? `{${key}}` : String(value);
  });
}

export type Messages = Record<string, string>;

export function createTranslator(messages: Messages) {
  return function t(key: MessageKey, vars?: MessageVars): string {
    const raw = messages[key as string] ?? (key as string);
    return interpolate(raw, vars);
  };
}
