import Link from "next/link";
function page() {
  return (
    <main className="max-w-5xl w-full m-auto bg-lime-50 grow flex flex-col gap-[10px]">
      <h1 className="text-4xl">My Blog</h1>
      <Link href="/">Home</Link>
      <Link href="/blog/first">First</Link>
      <Link href="/blog/second">Second</Link>
    </main>
  );
}

export default page;
