import { StrapiPostAndSettings, loadPosts } from "@/api/load-posts";
import { PostsTemplate } from "@/templates/PostsTemplate";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

export default function CategoryPage({ posts, setting }: StrapiPostAndSettings) {
  // console.log(posts?.data[0].attributes.categories.data[0]);

  const router = useRouter();

  if (router.isFallback) return <h1>Loading...</h1>;
  const categoryName = posts?.data[0].attributes.categories.data.filter(
    (category) => category.attributes.slug === router.query.slug,
  )[0];

  return (
    <>
      <Head>
        <title>Category: {categoryName.attributes.displayName} </title>
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
  console.log(ctx);

  try {
    data = await loadPosts({ categorySlug: { eq: ctx.params.slug as string } });
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
