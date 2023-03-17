import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'articles');

export const getSortedArticlesData = () => {
  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = fileNames.map((fileName) => {
    const article = fileName.replace(/\.md$/, '');
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      article,
      ...(matterResult.data as { date: string; title: string }),
    };
  });

  return allArticlesData.sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const getAllArticleIds = () => {
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        article: fileName.replace(/\.md$/, ''),
      },
    };
  });
};

export const getArticleData = async (article: string) => {
  const fullPath = path.join(articlesDirectory, `${article}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  return {
    article,
    contentHtml: fileContents.toString(),
  };
};
