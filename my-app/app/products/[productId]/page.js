async function page({ params }) {
  const { productId } = await params;
  return (
    <main className="max-w-5xl w-full m-auto bg-lime-50 grow">
      <h1 className="text-3xl">Detail about product-{productId} </h1>
    </main>
  );
}

export default page;
