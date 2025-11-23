import Link from "next/link";

function page() {
  return (
    <div className="flex flex-col gap-[20px] py-[20px] px-[20px] border-[1px] border-black">
      <h1 className="text-4xl">Product List </h1>
      <Link href="/products/1">Product 1</Link>
      <Link href="/products/2">Product 2</Link>
      <Link href="/products/3">Product 3</Link>
    </div>
  );
}

export default page;
