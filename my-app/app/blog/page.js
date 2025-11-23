import Link from "next/link";
function page() {
  return (
    <div className="flex flex-col gap-[20px] py-[20px] px-[20px] border-[1px] border-black ">
      <h1 className="text-4xl">My Blog</h1>
      <Link href="/blog/first">First</Link>
      <Link href="/blog/second">Second</Link>
    </div>
  );
}

export default page;
