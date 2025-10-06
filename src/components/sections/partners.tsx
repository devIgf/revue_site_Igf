import RevealOnScroll from "../sub-part/RevealOnScroll";
import logo from "../../assets/logo.png";
import LogoIgf from "../logoIgf/IgfLogo";
import PartnersCard from "../sub-part/partnersCard";
import sageLogo from "../../assets/Sage-100-logo.png";
import odooLogo from "../../assets/odoo_logo.png";

export default function Partners() {
  return (
    <RevealOnScroll>
      <section
        id="partenaires"
        className="mx-auto pt-16 flex flex-wrap max-w-6xl md:flex-row justify-center items-center gap-6"
      >
        <h2 className="text-igf-primary text-center text-3xl font-bold pb-12 font-heading flex flex-col items-center">
          {/* <img src={logo} alt="Cruip Logo" width={120} height={96} /> */}
          <LogoIgf />
          Nos Partenaires
        </h2>

        <div className="flex flex-col md:flex-row pb-5 md:space-y-0 md:space-x-6 justify-center items-center gap-3">
          <PartnersCard
            description="IGF est partenaire certifié Sage et offre une expertise complète pour le déploiement de ses solutions : comptabilité, gestion commerciale, paie, RH, trésorerie, immobilisations, reporting financier et intégration cloud adaptée aux besoins des entreprises."
            image={sageLogo}
          />
          <PartnersCard
            description="Partenaire officiel d'Odoo, IGF accompagne les entreprises dans l'intégration personnalisée de ses modules : CRM, ventes, comptabilité, RH, projets, fabrication, support, etc., pour une mise en œuvre fluide et efficace du système ERP."
            image={odooLogo}
          />
        </div>
      </section>
    </RevealOnScroll>
  );
}
 