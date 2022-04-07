enum LogLevel {
  debug = 'debug',
  info = 'info',
  warning = 'warning',
  error = 'error',
  fatal = 'fatal',
}

enum NodeEnv {
  development = 'development',
  production = 'production',
}

type NumericLogLevels = Record<string, number>;

const numericLogLevels: NumericLogLevels = {
  [LogLevel.debug]: 1,
  [LogLevel.info]: 2,
  [LogLevel.warning]: 3,
  [LogLevel.error]: 4,
  [LogLevel.fatal]: 5,
};

type NodeEnvLogLevels = Record<string, LogLevel>;

const nodeEnvLogLevels: NodeEnvLogLevels = {
  [NodeEnv.development]: LogLevel.info,
  [NodeEnv.production]: LogLevel.warning,
};

export const isLogLevel = (value: unknown): value is LogLevel => (
  typeof value === 'string'
    && typeof numericLogLevels[value] === 'number'
);

const isNodeEnv = (value: unknown): value is NodeEnv => (
  typeof value === 'string'
    && typeof nodeEnvLogLevels[value] === 'string'
);

const getEnvironmentLogLevel = (): LogLevel | undefined => {
  if (typeof process !== 'object') {
    return undefined;
  }
  const LOG_LEVEL = process.env.LOG_LEVEL?.toLowerCase();
  if (isLogLevel(LOG_LEVEL)) {
    return LOG_LEVEL;
  }
};

const getNodeEnvLogLevel = (): LogLevel | undefined => {
  if (typeof process !== 'object') {
    return undefined;
  }
  const NODE_ENV = process.env.NODE_ENV?.toLowerCase();
  if (isNodeEnv(NODE_ENV)) {
    return nodeEnvLogLevels[NODE_ENV];
  }
};

const DEFAULT_LOG_LEVEL = LogLevel.info;

let currentLogLevel = getEnvironmentLogLevel()
  ?? getNodeEnvLogLevel()
  ?? DEFAULT_LOG_LEVEL;

export const setLogLevel = (logLevel: LogLevel): void => {
  currentLogLevel = logLevel;
};

export const getLogLevel = (): LogLevel => currentLogLevel;

export const shouldLog = (logLevel: LogLevel): boolean => (
  numericLogLevels[logLevel] >= numericLogLevels[currentLogLevel]
);

export default LogLevel;
