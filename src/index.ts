import LogLevel, { getLogLevel, setLogLevel, isLogLevel, shouldLog } from './logLevel';
import getCurrentTime from './getCurrentTime';
import escapeNewlines from './escapeNewlines';
import escapeReservedCharacters from './escapeReservedCharacters';
import type { SafelyStringifiableValues } from './stringifyValues';
import stringifyValues from './stringifyValues';

type Unsubscribe = () => void;

type Subscription = (message: string) => void;

type Subscribe = (subscription: Subscription) => Unsubscribe;

const subscriptions = new Set<Subscription>();

const subscribe: Subscribe = (subscription) => {
  subscriptions.add(subscription);
  return (): void => {
    subscriptions.delete(subscription);
  };
};

const output = (logLevel: LogLevel) => (
  message: string,
  values: SafelyStringifiableValues = {},
): void => {
  if (!shouldLog(logLevel)) {
    return;
  }
  const time = getCurrentTime();
  message = escapeNewlines(message);
  const stringifiedValues = stringifyValues(values);
  message = escapeReservedCharacters(message);
  if (stringifiedValues.length > 0) {
    message = `${message}:${stringifiedValues}`;
  }
  const log = `[${time}] [${logLevel.toUpperCase()}] ${escapeNewlines(message)}`;
  // eslint-disable-next-line no-console
  console.log(log);
  subscriptions.forEach(subscription => subscription(log));
};

export {
  LogLevel,
  isLogLevel,
};

export default {
  debug: output(LogLevel.debug),
  info: output(LogLevel.info),
  warning: output(LogLevel.warning),
  error: output(LogLevel.error),
  fatal: output(LogLevel.fatal),
  getLogLevel,
  setLogLevel,
  subscribe,
};
