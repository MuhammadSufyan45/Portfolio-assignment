import Hero from "./hero/page";
import About from "./about/page";
import Contact from "./contact/page";
import './global.css';


export default function Home() {
  return (
    <div>
      <Hero/>
      <About />
      <Contact />
    </div>
  );
};
