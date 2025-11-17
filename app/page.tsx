import { Suspense } from 'react';
import Posts from '@/component/posts';
import { getPosts } from '@/lib/posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Latest Posts - NextPost',
  description: 'View the latest posts from all users',
};

async function LatestPosts() {
  const latestPosts = await getPosts(2);
  return <Posts posts={latestPosts} />;
}

export default async function Home() {
  return (
    <>
      <h1>Welcome back!</h1>
      <p>Here&apos;s what you might&apos;ve missed.</p>
      <section id="latest-posts">
      <Suspense fallback={<p>Loading recent posts...</p>}>
        <LatestPosts />
      </Suspense>
      </section>
    </>
  );
}
