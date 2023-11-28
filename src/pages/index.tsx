import { StrapiPostAndSettings, loadPosts } from "@/api/load-posts";
import { PostsTemplate } from "@/templates/PostsTemplate";
import { GetStaticProps } from "next";
import Head from "next/head";

export default function Index({ posts, setting }: StrapiPostAndSettings) {
  return (
    <>
      <Head>
        <title>
          {setting.data.attributes.blogName} - {setting.data.attributes.blogDescription}
        </title>
        <meta name="description" content={setting.data.attributes.blogDescription} />
      </Head>
      <PostsTemplate posts={posts.data} settings={setting} />
    </>
  );
}

export const getStaticProps: GetStaticProps<StrapiPostAndSettings> = async () => {
  let data = null;

  try {
    data = await loadPosts();
  } catch (e) {
    data = null;
  }

  return {
    props: {
      posts: data.posts,
      setting: data.setting,
    },
  };
};
