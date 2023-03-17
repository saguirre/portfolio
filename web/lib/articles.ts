import fs from 'fs';
import path from 'path';
import { parseMarkdownWithYamlFrontmatter } from './extract-metadata-from-markdown';

interface MarkdownFrontmatter {
  title: string;
  date: string;
}

interface ArticleNameParams {
  params: { article: string };
}

export interface ArticleData {
  article: string;
  content: string;
  title: string;
  date: string;
}

const articlesDirectory = path.join(process.cwd(), 'articles');

export const getSortedArticlesData = (): ArticleData[] => {
  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData: ArticleData[] = fileNames.map((fileName) => {
    return getArticleData(fileName);
  });

  return allArticlesData.sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const getAllArticleNames = (): ArticleNameParams[] => {
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        article: fileName.replace(/\.md$/, ''),
      },
    };
  });
};

export const getArticleData = (article: string): ArticleData => {
  const fullPath = path.join(articlesDirectory, `${article}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const markdownMetadata = parseMarkdownWithYamlFrontmatter<MarkdownFrontmatter>(fileContents.toString());
  const { title, date, content } = markdownMetadata;
  return {
    article,
    title,
    date,
    content,
  };
};
