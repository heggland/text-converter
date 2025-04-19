export const converterTypes = [
  "alternative",
  "reversed",
  "lower",
  "upper",
  "caesarcode",
  "cesardecode",
] as const;

export type ConverterType = (typeof converterTypes)[number];

export class TextConverter {
  static convert(text: string, type: ConverterType): string {
    const chars = text.split("");

    switch (type) {
      case "alternative":
        return chars
          .map((char, i) =>
            i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
          )
          .join("");

      case "reversed":
        return chars.reverse().join("");

      case "lower":
        return text.toLowerCase();

      case "upper":
        return text.toUpperCase();

      case "caesarcode":
        return chars
          .map((char, i) =>
            String.fromCharCode(
              char.charCodeAt(0) + (i % 2 === 1 ? 1 : -1)
            )
          )
          .join("");

      case "cesardecode":
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
