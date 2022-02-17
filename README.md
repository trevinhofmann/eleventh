# `eleventh`

A simple JavaScript logger for writing messages to the standard output, written in TypeScript

## Using `eleventh`

First, install the package:

```bash
npm install eleventh --save
```

Next, import the package into your project and start logging:

```javascript
// Import the package with the "CommonJS" syntax:
const Logger = require('eleventh');

// Or, import it with the "ES Modules" syntax:
import Logger from 'eleventh';

// Set the log level (the log level can also be detected from an environment
// variable; see the API docs):
Logger.setLogLevel('debug');

// For the lowest level messages that can be useful in debugging and exceedingly
// noisy otherwise, use Logger.debug:
Logger.debug('Skipping authentication check because user is a guest');
// [2021-01-21T07:51:43:0076Z] DEBUG: Skipping authentication check because user is a guest

// For generally useful runtime information, use Logger.info:
Logger.info('A connection to the database has been opened successfully');
// [2021-01-21T07:51:43:0083Z] INFO: A connection to the database has been opened successfully

// For atypical events which require attention and have the potential to result
// in problems, use Logger.warning:
Logger.warning('Memory usage is exceeding 50%');
// [2021-01-21T07:51:43:0085Z] WARNING: Memory usage is exceeding 50%

// For critical problems that are likely to affect functionality but allow the
// application to continue running, use Logger.error:
Logger.error('Unable to parse the JSON response from the authentication API');
// [2021-01-21T07:51:43:0086Z] ERROR: Unable to parse the JSON response from the authentication API

// For errors which have not been handled and result in the application being
// forced to shut down, use Logger.fatal:
Logger.fatal('Unhandled exception from the file system');
// [2021-01-21T07:51:43:0088Z] FATAL: Unhandled exception from the file system

// Optionally, a record of strings, numbers, and booleans (null and undefined
// are also accepted) can be provided and appended to the log.
Logger.info('Request has completed', { requestId: 'abc123', httpStatus: 200 });
// [2021-01-21T07:51:43:0083Z] INFO: Request has completed requestId="abc123" httpStatus=200
```

## Versioning

This project adheres to [Semantic Versioning](https://semver.org/).

## API

This project's API is specified in the [API document](https://github.com/trevinhofmann/eleventh/blob/master/docs/api.md).

## Contributing

This project is open for pull requests. Please refer to [CONTRIBUTING.md](https://github.com/trevinhofmann/eleventh/blob/master/CONTRIBUTING.md) for information about developing `eleventh` and submitting changes.

## Issues

Please feel welcome to [submit an issue](https://github.com/trevinhofmann/eleventh/issues/new) for any problems or suggestions you may have regarding `eleventh`.

## License

This project is licensed under the [Unlicense](https://unlicense.org). For the full license text, please see [LICENSE](https://github.com/trevinhofmann/eleventh/blob/master/LICENSE).
