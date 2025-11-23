async function page({ params }) {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <h1>
        Viewing docs for features {slug[0]} and concept {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1> Viewing docs for feature {slug[0]}</h1>;
  } else if (slug?.length === 3) {
    return (
      <h1>
        Viewing docs for features {slug[0]} and concept {slug[1]} and example{" "}
        {slug[2]}
      </h1>
    );
  }
  return (
    <div>
      <h1>Doc home page</h1>
    </div>
  );
}

export default page;
