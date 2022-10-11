export const stringCleaner = (str) => {
  if (str) {
    var strLower = str.toLowerCase();
    return strLower.replace(/\W/g, "");
  }
  return false;
};
