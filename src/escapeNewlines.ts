export default (message: string): string => (
  message
    .replace('\r', '\\r')
    .replace('\n', '\\n')
);
