import padZeros from './padZeros';

export default (): string => {
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = padZeros(now.getUTCMonth(), 2);
  const day = padZeros(now.getUTCDate(), 2);
  const hours = padZeros(now.getUTCHours(), 2);
  const minutes = padZeros(now.getUTCMinutes(), 2);
  const seconds = padZeros(now.getUTCSeconds(), 2);
  const milliseconds = padZeros(now.getUTCMilliseconds(), 4);
  const date = `${year}-${month}-${day}`;
  const time = `${hours}:${minutes}:${seconds}:${milliseconds}`;
  return `${date}T${time}Z`;
};
