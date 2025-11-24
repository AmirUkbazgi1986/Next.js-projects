import Link from "next/link";

function page() {
  return (
    <main className="max-w-5xl w-full m-auto bg-lime-50 grow flex flex-col gap-[20px]">
      <h1 className="text-4xl">Product List </h1>
      <Link href="/products/1">Product 1</Link>
      <Link href="/products/2">Product 2</Link>
      <Link href="/products/3">Product 3</Link>
    </main>
  );
}

export default page;
