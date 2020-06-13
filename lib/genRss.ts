import { writeFileSync } from "fs";
import { getPosts } from "./postHelper";
import { baseURL, description, title } from "../config.json";

const genLayout = (
  title: string,
  description: string,
  link: string,
  items: string
) => `<?xml version="1.0" encoding="utf-8" standalone="yes" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<language>en-us</language>
<lastBuildDate>${new Date().toDateString()}</lastBuildDate>

<channel>
  <title>${title}</title>
  <link>${link}</link>
  <description>${description}</description>
  ${items}
</channel>
</rss>`;
const genItem = (title: string, link: string, description: string) => ` 
  <item>
    <title>${title}</title>
    <link>${link}</link>
    <description>${description}</description>
  </item>
`;

function genPostsItems() {
  let items = "";
  const posts = getPosts();

  posts.forEach((post) => {
    const link = `${baseURL}/posts/${post.slug}`;
    const about = post.frontmatter.description ?? description;
    if (post.frontmatter.title) {
      items = items.concat(genItem(post.frontmatter.title, link, about));
    }
  });

  return items
}

export function genRssFile() {
  const rss = genLayout(title, description, baseURL, genPostsItems());
  return writeFileSync(`${process.cwd()}/public/rss.xml`, rss);
}
