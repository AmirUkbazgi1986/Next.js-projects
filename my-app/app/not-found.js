function NoFound() {
  return (
    <div className="flex flex-col justify-cente items-center gap-[20px] py-[40px] px-[30px] border-[4px] border-red-800 ">
      <h2 className="text-4xl font-bold">Page Not Found</h2>
      <p className="text-2xl font-medium">Could not find requested resource</p>
    </div>
  );
}

export default NoFound;
