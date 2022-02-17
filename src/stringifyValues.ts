import escapeNewlines from './escapeNewlines';

type SafelyStringifiableValue = string | number | boolean | null | undefined;

export type SafelyStringifiableValues = (
  Record<string, SafelyStringifiableValue>
);

export default (values: SafelyStringifiableValues): string => (
  Object
    .keys(values)
    .reduce((result, key) => (
      `${result} ${escapeNewlines(key)}=${JSON.stringify(values[key])}`
    ), '')
);
