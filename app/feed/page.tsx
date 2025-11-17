import Posts from '@/component/posts';
import { getPosts } from '@/lib/posts';
import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'browse all our X posts',
//   description: 'Browse all posts from all users',
// };

export const generateMetadata = async () => {
  const posts = await getPosts();
  const postCount = posts.length;
  return {
    title: `browse all our ${postCount} posts`,
    description: `Browse all ${postCount} posts from all users`,
  };
};

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
