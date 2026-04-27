const Services = () => {
  return (
    <section id="services" className="px-10 py-20">
      <h2 className="text-3xl font-bold text-center">
        Services <span className="text-cyan-400">I Offer</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="p-6 border border-gray-700 rounded-xl">
          <h3 className="text-xl font-semibold">Frontend Development</h3>
          <p className="text-gray-400 mt-2">
            React.js, responsive UI, modern design.
          </p>
        </div>

        <div className="p-6 border border-gray-700 rounded-xl">
          <h3 className="text-xl font-semibold">Backend Development</h3>
          <p className="text-gray-400 mt-2">
            Node.js, Express, API development.
          </p>
        </div>

        <div className="p-6 border border-gray-700 rounded-xl">
          <h3 className="text-xl font-semibold">Manual Testing</h3>
          <p className="text-gray-400 mt-2">
            Bug tracking, test cases, QA validation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;