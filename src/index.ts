import LogLevel, { getLogLevel, setLogLevel, isLogLevel, shouldLog } from './logLevel';
import getCurrentTime from './getCurrentTime';
import escapeNewlines from './escapeNewlines';

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

const output = (logLevel: LogLevel) => (message: string): void => {
  const time = getCurrentTime();
  if (shouldLog(logLevel)) {
    const log = `[${time}] ${logLevel.toUpperCase()}: ${escapeNewlines(message)}`;
    // eslint-disable-next-line no-console
    console.log(log);
    subscriptions.forEach(subscription => subscription(log));
  }
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
