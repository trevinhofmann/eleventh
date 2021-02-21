export default (number: number, characters: number): string => {
  let string = number.toString();
  while (string.length < characters) {
    string = `0${string}`;
  }
  return string;
};
