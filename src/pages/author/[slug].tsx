import { StrapiPostAndSettings, loadPosts } from "@/api/load-posts";
import { PostsTemplate } from "@/templates/PostsTemplate";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

export default function AuthorPage({ posts, setting }: StrapiPostAndSettings) {
  const router = useRouter();

  if (router.isFallback) return <h1>Loading...</h1>;

  return (
    <>
      <Head>
        <title>
          Author: {posts.data[0].attributes.author.data.attributes.displayName} - {setting.data.attributes.blogName}
        </title>
      </Head>
      <PostsTemplate posts={posts.data} settings={setting} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<StrapiPostAndSettings> = async (ctx) => {
  let data = null;

  try {
    data = await loadPosts({ authorSlug: { eq: ctx.params.slug as string } });
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
