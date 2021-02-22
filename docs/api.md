# API

## Log levels

There are 5 log levels:

1. Debug
2. Info
3. Warning
4. Error
5. Fatal

These log levels are exported by the package in the enum `LogLevel`.

Every log entry has a level, and entries with a level lower than the application's specified log level will be silently dropped instead of being logged to the standard output.

The first way to set an application's log level is programmatically:

```javascript
import Logger, { LogLevel } from 'eleventh';

Logger.setLogLevel(LogLevel.debug);
// Logger.setLogLevel(LogLevel.info);
// Logger.setLogLevel(LogLevel.warning);
// Logger.setLogLevel(LogLevel.error);
// Logger.setLogLevel(LogLevel.fatal);
```

If a log level has not been programmatically set, the logger will check for a `LOG_LEVEL` environment variable. This environment variable is not case sensitive, and valid values are `debug`, `info`, `warning`, `error`, and `fatal`. For example:

```bash
LOG_LEVEL=warning npm start
```

If the `LOG_LEVEL` environment variable is not set, the logger will then check for a `NODE_ENV` environment variable. This environment variable is not case sensitive, and valid values are `development` and `production`. For a development environment, the log level will be set to `'info'`. For a production environment, the log level will be set to `'warning'`.

Finally, if the `NODE_ENV` environment variable has also not been specified, the logger will fall back to a default log level of `'info'`.

## Log entries

To log an entry, simply use the logger function with the name of the log level for that entry. For example:

```javascript
import Logger from 'eleventh';

Logger.debug('Skipping authentication check because user is a guest');
Logger.info('A connection to the database has been opened successfully');
Logger.warning('Memory usage is exceeding 50%');
Logger.error('Unable to parse the JSON response from the authentication API');
Logger.fatal('Unhandled exception from the file system');
```

If the level of the log entry is greater than or equal to the application's log level, it will be logged to the standard output in the following format:

```
[{timestamp}] ${level}: {message}
```

* The `{timestamp}` value is the current timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
* The `{level}` is the all-capitalized log level of the entry.
* The `{message}` is the submitted log entry's text.

Each log entry is terminated with a new line, and the characters `\r` and `\n` within the log message will be escaped by the 2-character strings `'\r'` and `'\n'`.

Here is an example of a log with multiple entries:

```
[2021-01-21T07:51:43:0076Z] DEBUG: Skipping authentication check because user is a guest
[2021-01-21T07:51:43:0083Z] INFO: A connection to the database has been opened successfully
[2021-01-21T07:51:43:0085Z] WARNING: Memory usage is exceeding 50%
[2021-01-21T07:51:43:0086Z] ERROR: Unable to parse the JSON response from the authentication API
[2021-01-21T07:51:43:0088Z] FATAL: Unhandled exception from the file system
```

# Subscribing to log entries

If you would like to subscribe to your application's logs directly rather than listening to the standard output, you can use the `subscribe` method:

```javascript
import Logger from 'eleventh';

const unsubscribe = Logger.subscribe(logEntry => {
  // An entry is being logged, and its value is provided here as `logEntry`:

  // '[2021-01-21T07:51:43:0076Z] DEBUG: Skipping authentication check because user is a guest'

  // Do not use the Logger within a subscription callback, because you will
  // trigger a recursive infinite loop.
});

Logger.info('This message will be received by the subscription');

// The returned unsubscribe function can be called to stop receiving log
// entries.
unsubscribe();
```
