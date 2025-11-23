import { notFound } from "next/navigation";

async function page({ params }) {
  const { productId, reviewId } = await params;
  if (reviewId > 1000) {
    notFound();
  }
  return (
    <div>
      <h1 className="text-3xl">
        Review {reviewId} for product {productId}
      </h1>
    </div>
  );
}

export default page;
