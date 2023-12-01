import { StrapiPostAndSettings, defaultLoadPostsVariables, loadPosts } from "@/api/load-posts";
import { PostsTemplate } from "@/templates/PostsTemplate";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

export default function CategoryPage({ posts, setting, variables }: StrapiPostAndSettings) {
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
      <PostsTemplate posts={posts.data} settings={setting} variables={variables} />
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

  const variables = { categorySlug: { eq: ctx.params.slug as string } };

  try {
    data = await loadPosts(variables);
  } catch (e) {
    data = null;
  }

  if (!data.posts || !data.posts.data || !data.posts.data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: data.posts,
      setting: data.setting,
      variables: {
        ...defaultLoadPostsVariables,
        ...variables,
      },
    },
    revalidate: 20 * 60 * 60,
  };
};
