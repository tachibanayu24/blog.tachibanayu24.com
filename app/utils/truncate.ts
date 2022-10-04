export const truncate = (string: string, length: number) =>
  string.length <= length ? string : string.substr(0, length) + "...";
