import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="bg-[#0a0f1c] text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
    </div>
  );
};

export default Home;