// Sample Utility

const isString = (str) => typeof str === "string";

export const replaceAllSpaces = (str) =>
  isString(str) ? str.replaceAll(" ", "") : str;
