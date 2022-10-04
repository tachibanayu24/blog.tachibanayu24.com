export const removeHTMLTags = (elementString: string) =>
  elementString.replace(/(<([^>]+)>)/gi, "");
