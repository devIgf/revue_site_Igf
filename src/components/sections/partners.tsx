import RevealOnScroll from "../sub-part/RevealOnScroll";
import logo from "../../assets/logo.png";
import PartnersCard from "../sub-part/partnersCard";
import sageLogo from "../../assets/sage-green-logo-png.png";
import odooLogo from "../../assets/odoo_logo.png";

export default function Partners() {
  return (
    <RevealOnScroll>
      <section
        id="partenaires"
        className="text-2xl mx-auto px-4 overflow-hidden section-spacing"
      >
        <h2 className="text-igf-primary text-center text-3xl font-bold pb-12 font-heading flex flex-col items-center">
          <img src={logo} alt="Cruip Logo" width={60} height={36} />
          Nos Partenaires
        </h2>

        <div className="mx-auto flex flex-wrap justify-center gap-6 max-w-6xl pb-5">
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
