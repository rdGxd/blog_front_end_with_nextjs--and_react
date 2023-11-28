import { loadPosts } from "@/api/load-posts";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    loadPosts({
      authorSlug: {
        eq: "otavio",
      },
    }).then((r) => console.log(r));
  }, []);

  return (
    <>
      <h1>Oi</h1>
    </>
  );
}
