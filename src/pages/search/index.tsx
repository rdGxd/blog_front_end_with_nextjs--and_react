import { StrapiPostAndSettings, defaultLoadPostsVariables, loadPosts } from "@/api/load-posts";
import { PostsTemplate } from "@/templates/PostsTemplate";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

export default function SearchPage({ posts, setting, variables }: StrapiPostAndSettings) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Pesquisa: {router.query.q} </title>
      </Head>
      <PostsTemplate posts={posts.data} settings={setting} variables={variables} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<StrapiPostAndSettings> = async (ctx) => {
  let data = null;
  const query = ctx.query.q || "";

  if (!query) {
    return {
      notFound: true,
    };
  }

  const variables = { postSearch: { contains: query as string } };

  try {
    data = await loadPosts(variables);
  } catch (e) {
    data = null;
  }

  if (!data.posts || !data.posts.data) {
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
  };
};
