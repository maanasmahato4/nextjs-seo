import { MetadataRoute } from "next";
import { BlogPostsResponse } from "@/models/BlogPost";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch("https://dummyjson.com/posts");
  const { posts }: BlogPostsResponse = await response.json();

  const postsMap: MetadataRoute.Sitemap = posts.map(({ id }) => ({
    url: `https://thedailyblogs.com/posts/${id}`,
  }));

  return [
    {
      url: "https://thedailyblogs.com",
      lastModified: new Date(),
    },
    ...postsMap,
  ];
}
