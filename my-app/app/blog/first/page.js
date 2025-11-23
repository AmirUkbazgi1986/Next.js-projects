import Link from "next/link";
function page() {
  return (
    <div>
      <h1 className="text-4xl">First Blog</h1>
      <Link href="/blog">Back to blog page</Link>
    </div>
  );
}

export default page;
