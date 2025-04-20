export const converterTypes = [
  "alternative",
  "reversed",
  "lower",
  "upper",
  "caesarcode UTF-16",
  "cesardecode UTF-16",
] as const;

export type ConverterType = (typeof converterTypes)[number];

export class TextConverter {

  private type: ConverterType = converterTypes[0];

  public setType(type: ConverterType) {
    this.type = type;
  }

  public getType(): ConverterType {
    return this.type;
  }

  public convert(text: string): string {
    const chars = text.split("");

    switch (this.type) {
      case "alternative":
        let altIdx = 0;
        const firstLetter = chars.find(c => /[a-zA-Z]/.test(c));
        const startUpper = firstLetter ? firstLetter === firstLetter.toUpperCase() : true;

        return chars
          .map((char) => {
            if (!/[a-zA-Z]/.test(char)) return char;

            const result = (altIdx % 2 === 0) === startUpper
              ? char.toUpperCase()
              : char.toLowerCase();

            altIdx++;
            return result;
          })
          .join("");

      case "reversed":
        return chars.reverse().join("");

      case "lower":
        return text.toLowerCase();

      case "upper":
        return text.toUpperCase();

      case "caesarcode UTF-16":
        return chars
          .map((char, i) =>
            String.fromCharCode(
              char.charCodeAt(0) + (i % 2 === 1 ? 1 : -1)
            )
          )
          .join("");

      case "cesardecode UTF-16":
        return chars
          .map((char, i) =>
            String.fromCharCode(
              char.charCodeAt(0) + (i % 2 === 1 ? -1 : 1)
            )
          )
          .join("");

      default:
        return text;
    }
  }
}
