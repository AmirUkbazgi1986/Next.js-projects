import Link from "next/link";
function page() {
  return (
    <main className="max-w-5xl w-full m-auto bg-lime-50 grow">
      <p className="text-3xl">About page</p>
      <Link href="/">Home</Link>
    </main>
  );
}

export default page;
