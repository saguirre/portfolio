import type { GetServerSidePropsContext, NextPage } from 'next';
import { ArticleFullCard } from '../components/ArticleFullCard';
import { DesktopLayout } from '../components/DesktopLayout';

interface ArticlesPageProps {
  resolvedUrl: string;
}
const Articles: NextPage<ArticlesPageProps> = ({ resolvedUrl }) => {
  return (
    <DesktopLayout resolvedUrl={resolvedUrl} >
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <header className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  Articles on Software Development, Web3, new tendencies and AI.
                </h1>
              </header>
              <div className="mt-16 sm:mt-20">
                <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                  <div className="flex max-w-3xl flex-col space-y-16">
                    <ArticleFullCard
                      title="The Future of Frontend Development with Web3"
                      date="March 15, 2023"
                      paragraph="Web3 is revolutionizing the way we build and interact with web applications. In this article, we'll explore how
        Web3 offers exciting new possibilities for frontend development, from smart contracts to decentralized
        applications. Discover the potential of Web3 for the future of the industry."
                      href="/future-of-frontend-with-web3"
                    />
                    <ArticleFullCard
                      title="The Age of JAMstack: Enhancing Performance, Scalability, and Security in Modern Web Development"
                      date="March 15, 2023"
                      paragraph="Let's uncover the transformative power of JAMstack together, showcasing popular frameworks like Next.js, Gatsby, and Nuxt.js. I'll guide you through how this cutting-edge architecture elevates site performance, scalability, and security."
                      href="/the-age-of-jamstack"
                    />
                    <ArticleFullCard
                      title="UX/UI Design Trends for a Post-Pandemic World: How Remote Work and Digital Transformation Shape User Experience"
                      date="March 15, 2023"
                      paragraph="We'll investigate how remote work and digitalization influence UX/UI design trends. Gain insights into the latest approaches and best practices for creating user-centric, accessible web interfaces in a rapidly evolving digital landscape."
                      href="ux-ui-in-the-post-pandemic-world"
                    />
                    <ArticleFullCard
                      title="Harnessing the Power of Machine Learning in Frontend Development: Tools and Techniques for Smarter UI/UX"
                      date="March 15, 2023"
                      paragraph="Join me on a journey to explore the integration of machine learning and AI technologies in frontend development. Together, we'll learn about ML frameworks, libraries, and APIs that enable more intelligent, personalized, and efficient user experiences on the web."
                      href="harnessing-the-power-of-machine-learning"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DesktopLayout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { resolvedUrl } = context;
  return {
    props: {
      resolvedUrl,
    },
  };
}

export default Articles;
