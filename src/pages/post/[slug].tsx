import { StrapiPostAndSettings, loadPosts } from "@/api/load-posts";
import { PostTemplate } from "@/templates/PostTemplate";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

export default function PostPage({ posts, setting }: StrapiPostAndSettings) {
  const router = useRouter();

  if (router.isFallback) return <h1>Loading...</h1>;

  const post = posts.data[0];

  return (
    <>
      <Head>
        <title>
          {post.attributes.title} - {setting.data.attributes.blogName}
        </title>
        <meta name="description" content={post.attributes.excerpt} />
      </Head>
      <PostTemplate post={posts.data[0]} settings={setting} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  let data: StrapiPostAndSettings | null = null;
  let paths = [];

  try {
    data = await loadPosts();
    paths = data.posts.data.map((post) => ({ params: { slug: post.data.attributes.slug } }));
  } catch (e) {
    data = null;
  }

  if (!data || !data.posts || !data.posts.data.length) {
    paths = [];
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<StrapiPostAndSettings> = async (ctx) => {
  let data = null;

  try {
    data = await loadPosts({ postSlug: { eq: ctx.params.slug as string } });
  } catch (e) {
    data = null;
  }

  return {
    props: {
      posts: data.posts,
      setting: data.setting,
    },
    revalidate: 20 * 60 * 60,
  };
};
