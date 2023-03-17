import { MarkdownFrontmatter } from '../models/MarkdownFrontmatter';

type MarkdownWithYamlFrontmatter<T> = {
  content: string;
} & {
  [K in keyof T]?: string;
};

export const parseMarkdownWithYamlFrontmatter = <MarkdownFrontmatter>(
  markdown: string
): MarkdownWithYamlFrontmatter<MarkdownFrontmatter> => {
  const metaRegExp = new RegExp(/^---[\n\r](((?!---).|[\n\r])*)[\n\r]---$/m);

  // "rawYamlHeader" is the full matching string, including the --- and ---
  // "yamlVariables" is the first capturing group, which is the string content between the --- and ---
  const [rawYamlHeader, yamlVariables] = metaRegExp.exec(markdown) ?? [];

  if (!rawYamlHeader || !yamlVariables) {
    return { content: markdown };
  }

  const keyValues = yamlVariables.split('\n');

  const frontmatter = Object.fromEntries<string>(
    keyValues.map((keyValue) => {
      const splitted = keyValue.split(':');
      const [key, value] = splitted;

      return [key ?? keyValue, value?.trim() ?? ''];
    })
  ) as Record<keyof MarkdownFrontmatter, string>;

  return { ...frontmatter, content: markdown.replace(rawYamlHeader, '').trim() };
};
