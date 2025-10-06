import RevealOnScroll from "../sub-part/RevealOnScroll";
import logo from "../../assets/logo.png";
import LogoIgf from "../logoIgf/IgfLogo";
import Marquee from "react-fast-marquee";
import BaraMboupElectronics from "../../assets/Bara_Mboup_Electronics_(BME)_logo.png";
import OumouGroup from "../../assets/oumou_logo.png";
import BaEauBab from "../../assets/BaEauBab_Sénégal_logo.png";
import AUBISA from "../../assets/AUBI_logo.png";
import ToubaOil from "../../assets/touba_oil_logo.png";
import TitanOil from "../../assets/titan_oil_logo.png";
import FaryInstitute from "../../assets/fary_institute_logo.png";
import VIALOGISTICS from "../../assets/vialogistics_logo.png";
import Codex from "../../assets/Codex.jpg";
import Confisen from "../../assets/confisene.png";
import DPA from "../../assets/DPA.png";
import GVA from "../../assets/GVA.jpg";
import JahOil from "../../assets/JahOil.png";
import Neptune from "../../assets/neptune.png";
import Performance from "../../assets/performance.png";

export default function Clients() {
  const partners = [
    BaraMboupElectronics,
    OumouGroup,
    BaEauBab,
    Confisen,
    FaryInstitute,
    AUBISA,
    ToubaOil,
    TitanOil,
    JahOil,
    Neptune,
    VIALOGISTICS,
    Codex,
    DPA,
    GVA,
    Performance,
  ];
  return (
    <RevealOnScroll>
      <section className="h-full pt-16 transition-transform duration-200 hover:scale-105  max-w-7xl mx-auto">
        <h2 className="text-igf-primary text-center text-3xl pb-5 font-bold font-heading flex flex-col items-center">
          {/* <img src={logo} alt="Cruip Logo" width={120} height={96} /> */} 
          <LogoIgf />
          Ils nous font confiance
        </h2>
        <Marquee gradient={false} speed={40}>
          {partners.map((logo, i) => (
            <div
              key={i}
              className="mx-6 pt-5 w-40 flex items-center justify-center"
            >
              <img
                src={logo}
                alt={`Partenaire ${i + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </Marquee>
        <hr className="border-t border-gray-300 my-6" />
      </section>
    </RevealOnScroll>
  );
}
