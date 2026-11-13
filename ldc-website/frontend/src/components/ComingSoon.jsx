const ComingSoon = ({ title, description }) => {
  return (
    <main className="flex min-h-[calc(100svh-8rem)] flex-col bg-gradient-to-b from-blue-50 to-orange-50 px-10 pt-5">
      <div className="mx-auto flex w-full max-w-screen-xl flex-1 flex-col">
        <h1 className="w-full border-b border-purple-950 pb-1 text-2xl font-bold text-red-900 md:text-3xl lg:text-5xl ">
          {title}
        </h1>

        <section className="flex flex-1 flex-col items-center justify-center pb-14 text-center">
          <h2 className="font-Mode text-5xl font-bold text-red-900 md:text-6xl lg:text-7xl">
            Coming Soon!
          </h2>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-[#334E68] md:text-2xl">
            {description}
          </p>
          <p className="mt-6 text-lg font-bold text-purple-950 md:text-xl">
            Check back soon for updates!
          </p>
        </section>
      </div>
    </main>
  );
};

export default ComingSoon;
