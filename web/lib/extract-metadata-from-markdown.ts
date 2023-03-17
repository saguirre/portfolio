type MarkdownWithYamlFrontmatter<T> = {
  content: string;
} & {
  [K in keyof T]: string;
};

export const parseMarkdownWithYamlFrontmatter = <T>(markdown: string): MarkdownWithYamlFrontmatter<T> => {
  const metaRegExp = new RegExp(/^---[\n\r](((?!---).|[\n\r])*)[\n\r]---$/m);

  // "rawYamlHeader" is the full matching string, including the --- and ---
  // "yamlVariables" is the first capturing group, which is the string content between the --- and ---
  const [rawYamlHeader, yamlVariables] = metaRegExp.exec(markdown) ?? [];

  if (!rawYamlHeader || !yamlVariables) {
    return {
      title: "Oops, this article doesn't have a title yet!",
      date: 'No date either.',
      content: markdown,
    } as MarkdownWithYamlFrontmatter<T>;
  }

  const keyValues = yamlVariables.split('\n');

  const frontmatter = Object.fromEntries<string>(
    keyValues.map((keyValue) => {
      const splitValue = keyValue.split(':');
      const [key, value] = splitValue;

      return [key ?? keyValue, value?.trim() ?? ''];
    })
  ) as Record<keyof T, string>;

  return { ...frontmatter, content: markdown.replace(rawYamlHeader, '').trim() };
};
