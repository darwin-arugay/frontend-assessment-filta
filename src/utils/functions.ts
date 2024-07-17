interface TrimTextParams {
  maxCharacters: number;
  text: string;
}

export const trimText = ({ maxCharacters, text }: TrimTextParams): string => {
  if (!text) return text;

  if (text.length <= maxCharacters) {
    return text;
  }

  return text.slice(0, maxCharacters) + "...";
};
