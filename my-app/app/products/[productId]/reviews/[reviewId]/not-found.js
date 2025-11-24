"use client";
import { usePathname } from "next/navigation";

function NotFound() {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  return (
    <main className="max-w-5xl w-full m-auto bg-lime-50 grow">
      <h2 className="text-3xl font-bold">
        Review {reviewId} not Found for product {productId}
      </h2>
    </main>
  );
}

export default NotFound;
