import { notFound } from "next/navigation";

async function page({ params }) {
  const { productId, reviewId } = await params;
  if (reviewId > 1000) {
    notFound();
  }
  return (
    <main className="max-w-5xl w-full m-auto bg-lime-50 grow">
      <h1 className="text-3xl">
        Review {reviewId} for product {productId}
      </h1>
    </main>
  );
}

export default page;
