export function capitalize(text: string) {
  const words = text.split(" ");
  const result = words
    .map((word: string) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");

  return result;
}

export function textCapitalize(text: string) {
  const result = capitalize(text.replace(/-/gi, " "));
  return result
}
