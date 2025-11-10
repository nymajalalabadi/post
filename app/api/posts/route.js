export async function POST(request) {
  const { title, image, content } = await request.json();
  return new Response('Post created', { status: 201 });
}