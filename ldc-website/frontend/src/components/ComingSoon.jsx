const ComingSoon = ({ title, description, message }) => {
  return (
    <div className="flex flex-col items-center gap-14 bg-gradient-to-b from-blue-50 to-orange-50 pt-5 px-10 pb-14 min-h-[70vh]">
      <h1 className="flex justify-start max-w-screen-xl w-full font-bold md:text-3xl lg:text-5xl text-2xl text-red-900 border-b border-purple-950">
        {title}
      </h1>

      <div className="flex flex-col items-center justify-center flex-grow text-center gap-6">
        <h2 className="text-4xl md:text-6xl font-extrabold text-red-900">
          Coming Soon!
        </h2>

        <p className="text-lg md:text-2xl text-gray-700 max-w-xl">
          {description}
        </p>

        <p className="text-lg md:text-xl font-semibold text-purple-950">
          {message}
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;