export default (value: string): string => (
  value
    .replace(/:/ug, '\\:') // replace : with \:
    .replace(/\[/ug, '\\[') // replace [ with \[
    .replace(/\]/ug, '\\]') // replace ] with \]
);
