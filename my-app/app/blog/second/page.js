import Link from "next/link";
function page() {
  return (
    <main className="max-w-5xl w-full m-auto bg-lime-50 grow">
      <h1 className="text-4xl">Second blog </h1>
      <Link href="/blog">Back to blog page</Link>
    </main>
  );
}

export default page;
