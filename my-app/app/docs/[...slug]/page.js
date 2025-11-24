async function page({ params }) {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <main className="max-w-5xl w-full m-auto bg-lime-50 grow">
        <h1>
          Viewing docs for features {slug[0]} and concept {slug[1]}
        </h1>
      </main>
    );
  } else if (slug?.length === 1) {
    return (
      <main className="max-w-5xl w-full m-auto bg-lime-50 grow">
        <h1> Viewing docs for feature {slug[0]}</h1>;
      </main>
    );
  } else if (slug?.length === 3) {
    return (
      <main className="max-w-5xl w-full m-auto bg-lime-50 grow">
        <h1>
          Viewing docs for features {slug[0]} and concept {slug[1]} and example{" "}
          {slug[2]}
        </h1>
      </main>
    );
  }
  return (
    <main className="max-w-5xl w-full m-auto bg-lime-50 grow">
      <h1>Doc home page</h1>
    </main>
  );
}

export default page;
