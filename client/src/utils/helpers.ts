export const randomId = (): string => {
  return Math.random().toString(16).substring(7);
};
