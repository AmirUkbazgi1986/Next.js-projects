async function page({ params }) {
  const { productId } = await params;
  return (
    <div>
      <h1 className="text-3xl">Detail about product-{productId} </h1>
    </div>
  );
}

export default page;
