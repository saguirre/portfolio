import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../../components/Layout';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { ArticleData, getAllArticleNames, getArticleData } from '../../lib/articles';
import ReactMarkdown from 'react-markdown';

const CodeBlock = ({ language, value }: { language: string; value: string }) => {
  return (
    <SyntaxHighlighter style={vscDarkPlus} language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

interface ArticleProps {
  articleData: ArticleData;
}
const Article: NextPage<ArticleProps> = ({ articleData }: ArticleProps) => {
  const formatDate = (date?: string) => {
    const newDate = date?.replace('date:  ', '');
    const splitDate = date?.split('-');
    if (!splitDate) return newDate;
    switch (splitDate[1]) {
      case '01':
        return `January ${splitDate[2]}, ${splitDate[0]}`;
      case '02':
        return `February ${splitDate[2]}, ${splitDate[0]}`;
      case '03':
        return `March ${splitDate[2]}, ${splitDate[0]}`;
      case '04':
        return `April ${splitDate[2]}, ${splitDate[0]}`;
      case '05':
        return `May ${splitDate[2]}, ${splitDate[0]}`;
      case '06':
        return `June ${splitDate[2]}, ${splitDate[0]}`;
      case '07':
        return `July ${splitDate[2]}, ${splitDate[0]}`;
      case '08':
        return `August ${splitDate[2]}, ${splitDate[0]}`;
      case '09':
        return `September ${splitDate[2]}, ${splitDate[0]}`;
      case '10':
        return `October ${splitDate[2]}, ${splitDate[0]}`;
      case '11':
        return `November ${splitDate[2]}, ${splitDate[0]}`;
      case '12':
        return `December ${splitDate[2]}, ${splitDate[0]}`;
      default:
        return newDate;
    }
  };
  return (
    <Layout>
      <Head>
        <meta name="Article page" content="View this interesting article about Web Development" />
      </Head>
      <div className="mt-24 flex flex-col items-start justify-start w-full max-w-2xl lg:max-w-5xl">
        <div className="w-full max-w-2xl sm:max-w-4xl px-4 sm:px-0">
          <div className="markdown-body">
            <h1>{articleData.title}</h1>
            <time
              className="mt-2 hidden md:block relative z-10 order-first mb-3 italic items-center text-sm text-zinc-700 dark:text-zinc-300"
              dateTime={articleData.date}
            >
              {formatDate(articleData.date)}
            </time>
          </div>
          <ReactMarkdown
            className="markdown-body"
            children={articleData.content}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline ? (
                  <CodeBlock language={match?.[1] || ''} value={String(children).replace(/\n$/, '')} />
                ) : (
                  <code
                    className={
                      className +
                      ' bg-zinc-300 text-sm dark:bg-zinc-700 rounded-md py-0.5 sm:py-1 px-1.5 text-zinc-600 dark:text-zinc-300'
                    }
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllArticleNames();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const articleData = await getArticleData(params?.article as string);
  return {
    props: {
      articleData,
    },
  };
};

export default Article;
