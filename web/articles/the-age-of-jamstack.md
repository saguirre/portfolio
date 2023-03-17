---
title: The Age of JAMstack - Enhancing Performance, Scalability, and Security in Modern Web Development
date: 2023-03-2
---

## Introduction to JAMstack and Its Benefits

JAMstack (JavaScript, APIs, and Markup) is a modern web development architecture that has gained popularity for its ability to enhance performance, scalability, and security in web applications. By leveraging client-side JavaScript, reusable APIs, and pre-built markup, JAMstack offers a streamlined and efficient development process. In this article, we'll dive into JAMstack, explore its benefits, and walk through an example project using a popular JAMstack framework.

## Popular JAMstack Frameworks

There are several JAMstack frameworks available, each with its unique features and advantages:

1.  **Next.js:** A versatile framework built on React, Next.js offers features like automatic code splitting, server-side rendering, and static site generation, making it suitable for various types of projects.
2.  **Gatsby:** A powerful static site generator built on React, Gatsby leverages GraphQL for efficient data management and offers a rich plugin ecosystem to extend its functionality.
3.  **Nuxt.js:** Built on Vue.js, Nuxt.js is a versatile framework that supports server-side rendering, static site generation, and single-page applications, offering an intuitive and modular development experience.

For our example, we'll use **Next.js** to create a simple JAMstack blog application.

## Building a JAMstack Blog with Next.js

To create a JAMstack blog using **Next.js**, follow these steps:

1.  Set up your development environment:

    - Install Node.js (v14.0 or later) and npm (v5.2 or later).
    - Install the Next.js CLI globally: `npm install -g create-next-app`

2.  Create a new Next.js project:

    ```
    npx create-next-app my-jamstack-blog cd my-jamstack-blog
    ```

3.  Add an `articles` folder inside the base folder of your project. Create a Markdown file for each blog article, using the following format:

    ```
    ---
    title: My First Article
	date: 2023-03-2
    ---
    The content of your article
    ```

4.  Install the required dependencies for parsing Markdown files:

    ```
    yarn add react-markdown remark-frontmatter
    ```

5.  Create a `lib` folder at the root of your project since we'll now need to create a file to extract the metadata we added at the top of our articles. Create it under the `lib` folder and name it `extract-metadata-from-markdown.ts`:

```ts
type MarkdownWithYamlFrontmatter<T> = {
  content: string;
} & {
  [K in keyof T]?: string;
};

export const parseMarkdownWithYamlFrontmatter = <T>(markdown: string): MarkdownWithYamlFrontmatter<T> => {
  const metaRegExp = new RegExp(/^---[\n\r](((?!---).|[\n\r])*)[\n\r]---$/m);
  // "rawYamlHeader" is the full matching string, including the --- and ---
  // "yamlVariables" is the first capturing group, which is the string content between the --- and ---
  const [rawYamlHeader, yamlVariables] = metaRegExp.exec(markdown) ?? [];

  if (!rawYamlHeader || !yamlVariables) {
    return {
      title: "Oops, this article doesn't have a title yet!",
      date: '',
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
  ) as Record<keyof MarkdownFrontmatter, string>;

  return {
    ...frontmatter,
    content: markdown.replace(rawYamlHeader, '').trim(),
  };
};
```

This piece of code will help us extract the `title`, `date` and any other data we want to place inside our articles (for example, a `description` as well).

6.  We'll now add an `articles.ts` file inside the `lib` folder with the following code to read and parse the Markdown files:

```ts
import fs from 'fs';
import path from 'path';

interface MarkdownFrontmatter {
  title: string;
  date: string;
}

interface ArticleNameParams {
  params: { article: string };
}

interface ArticleData {
  article: string;
  content: string;
  title: string;
  date: string;
}

const articlesDirectory = path.join(process.cwd(), 'articles');

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
```

7.  Create a new file `pages/articles/[article].tsx` to display the content of each blog article:

```tsx
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import ReactMarkdown from 'react-markdown';
import { ArticleData, getAllArticleNames, getArticleData } from '../../lib/articles';

interface ArticleProps {
  articleData: ArticleData;
}

const Article: NextPage<ArticleProps> = ({ articleData }: ArticleProps) => {
  return (
    <div>
      <h1>{articleData.title}</h1>
      <time>{articleData.date}</time>
      <ReactMarkdown className="markdown-body" children={articleData.content} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllArticleNames();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const articleData = await getArticleData(params?.article as string);
  return {
    props: {
      articleData,
    },
  };
};

export default Article;
```

8.  Run your development server with `yarn dev` and open `http://localhost:3000` in your browser to see your JAMstack blog.
9.  Voilá! You'll be able to see your `.md` file content display as HTML, also taking advantage of the static generation Next.js offers.

## Bonus: Listing all articles

You might have thought this already: "This is great and all but, how would I list all my articles?".
Let's take a look at how we can do this!

1. On our `articles.ts` file inside the `lib` folder, add the following function:

```ts
...

export const getSortedArticlesData = (): ArticleData[] => {
	const fileNames = fs.readdirSync(articlesDirectory);
	const allArticlesData: ArticleData[] = fileNames.map((fileName) => {
		return getArticleData(fileName);
	});

	return allArticlesData.sort((a, b) => (a.date < b.date ? 1 : -1));
};

...
```

2.  Now, in your `pages/index.tsx`, add the following code:

```tsx
import { GetStaticProps, NextPage } from 'next';
import { ArticleData, getSortedArticlesData } from '../lib/articles';

interface HomeProps {
  allArticlesData: ArticleData[];
}

const Home: NextPage<HomeProps> = ({ allArticlesData }: HomeProps) => {
  return (
    <div>
      <h1>My brand new Blog</h1>
      <ul>
        {allArticlesData.map(({ article, date, title }) => (
          <li key={article}>
            <a href={`/articles/${article}`}>{title}</a>
            <br />
            <small>{new Date(date).toLocaleDateString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const allArticlesData: ArticleData[] = getSortedArticlesData();
  return { props: { allArticlesData } };
};

export default Home;
```

3. If you now run your project using `yarn dev` you'll be able to see all the articles you've placed inside the `articles` folder show in a list!

## Bonus 2: Adding syntax highlighting to code blocks

What if now we want to add slick syntax highlighting to the code blocks and snippets we have on our blog articles? Here's how to do it!

1. Add the required dependencies:

```
yarn add react-syntax-highlighter
yarn add -D @types/react-syntax-highlighter
```

2. On your `pages/[article].tsx` file, add the following code:

```tsx
...
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
...

...
const Article: NextPage<ArticleProps> = ({ articleData }: ArticleProps) => {
	return (
		<div>
			<h1>{articleData.title}</h1>
			<time>{articleData.date}</time>
			<ReactMarkdown
				className="markdown-body"
				children={articleData.content}
				components={{
					code({ node, inline, className, children, ...props }) {
						const match = /language-(\w+)/.exec(className || '');
						return !inline ? (
								<SyntaxHighlighter
									style={atomDark}
									language={match?.[1] || ''}
								>
									{String(children).replace(/\n$/, '')}
								</SyntaxHighlighter>
							) : (
								<code className={className} {...props}>
									{children}
								</code>
							);
						},
					}}
				/>
		</div>
	);
}

```

3. And there we have it! You can change the styling by researching what prebuilt styles the `react-syntax-highlighter` package has to offer, and you can style the inline code blocks in a different way if you desire, by adding classes or styles independently.

Now that we have covered building a JAMstack blog with Next.js, you can move on to the deployment process as described in the next part.

## Deploying Your JAMstack Blog

To deploy your JAMstack blog, follow these steps:

1.  Push your project to a Git repository, such as GitHub or GitLab.
2.  Sign up for an account with a hosting service that supports JAMstack deployments, such as Vercel, Netlify, or Gatsby Cloud.
3.  Connect your Git repository to the hosting service and configure the build settings according to the hosting service's documentation.
4.  Deploy your JAMstack blog by triggering a build on the hosting service. This will generate a static version of your site that can be served globally with optimal performance, scalability, and security.

## Conclusion

As a way to conclude this very long article, we can say that harnessing the power of JAMstack with Next.js has proven to be a real game-changer in the world of frontend development. We've explored the process of creating a lightning-fast, scalable, and secure blog, all while sipping our favorite cup of coffee.

The world of web development is vast and ever-evolving, but one thing's for sure: JAMstack is jam-packed with potential. So, grab your keyboard, unleash your creativity, and let the JAMstack revolution sweep you off your feet!
