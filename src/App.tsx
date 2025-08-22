import HeroHome from "./components/sections/hero-home";
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
        <HeroHome />
        <Partners />
        <Clients />
        <Features />
        <Team />
        <Map />
      </main>
      <Footer />
    </>
  );
}

export default App;
