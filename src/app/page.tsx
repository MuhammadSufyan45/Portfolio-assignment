import Hero from "./components/hero";
import About from "./components/about";
import Contact from "./components/contact";
import './global.css';


export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Contact/>
    </div>
  );
};
