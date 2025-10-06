import HeroHome from "./components/sections/hero-home";
import MyHero from "./components/sections/myHeror";
import Features from "./components/sections/features";
import Team from "./components/sections/team";
import Footer from "./components/general/footer";
import Mynavbar from "./components/general/nav-bar";
import Partners from "./components/sections/partners";
import Map from "./components/sections/map";
import Clients from "./components/sections/clients";

function App() {
  return (
    <>
      <Mynavbar />
      <main className="pt-[80px]">
        <MyHero />
        <Partners />
        <Features />
        <Clients />
        <Team />
        <Map />
      </main>
      <Footer />
    </>
  );
}

export default App;
