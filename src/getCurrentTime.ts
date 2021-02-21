export default (): string => {
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = now.getUTCMonth().toString().padStart(2, '0');
  const day = now.getUTCDate().toString().padStart(2, '0');
  const hours = now.getUTCHours().toString().padStart(2, '0');
  const minutes = now.getUTCMinutes().toString().padStart(2, '0');
  const seconds = now.getUTCSeconds().toString().padStart(2, '0');
  const milliseconds = now.getUTCMilliseconds().toString().padStart(4, '0');
  const date = `${year}-${month}-${day}`;
  const time = `${hours}:${minutes}:${seconds}:${milliseconds}`;
  return `${date}T${time}Z`;
};
