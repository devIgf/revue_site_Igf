import RevealOnScroll from "../sub-part/RevealOnScroll";
import logo from "../../assets/logo.png";
import installation from "../../assets/installation.jpg";
import informatique from "../../assets/informatique.jpg";
import finance from "../../assets/finance.jpg";
import formation from "../../assets/formation.jpg";
import sageLogo from "../../assets/sage-green-logo-png.png";
import odooLogo from "../../assets/odoo_logo.png";
import { FeatureCardHover } from "../sub-part/featureCardHover";

const sageProducts = [
  "COMPTABILITE",
  "GESTION COMMERCIALE",
  "PAIE/RH",
  "TRESORERIE",
  "IMMOBILISATIONS",
  "MOYENS DE PAYEMENT",
  "BI REPORTING",
];

const sageOtherProducts = [
  "SOLUTION EXPERT",
  "X3",
  "ETATS FINANCIERS SYSCOHADA",
  "FORMATION",
  "SOLUTION SUR MESURE",
  "E-COMMERCE",
  "AUTRES OUTILS DE GESTION ...",
];

const odooProducts = [
  "CRM",
  "CRÉATEUR DE SITE WEB",
  "E‑COMMERCE",
  "POINT DE VENTE",
  "GESTION DES STOCKS",
  "FABRICATION (MRP)",
  "ACHATS",
];

const odooOtherProducts = [
  "GESTION DE PROJET",
  "FEUILLES DE TEMPS",
  "ASSISTANCE (HELPDESK)",
  "SERVICE SUR LE TERRAIN",
  "PLANIFICATION / RENDEZ-VOUS",
  "AUTOMATISATION",
  "ODOO SIGN ...",
];

const products = [
  {
    title: "Synchronisation et intégration:",
    description:
      "Synchronisation et intégration fluide des données entre Sage100, Odoo et d'autres plateformes, garantissant une cohérence parfaite entre vos systèmes.",
  },
  {
    title: "Gestion comptable optimisée :",
    description:
      "Suivi précis et simplifié de votre comptabilité en temps réel, garantissant fiabilité et conformité.",
  },
  {
    title: "Gestion des stocks centralisée :",
    description:
      "Mise à jour instantanée des niveaux de stock pour éviter les ruptures et optimiser vos approvisionnements.",
  },
  {
    title: "Administration des ressources humaines :",
    description:
      "Suivi intégré des employés, congés et paies pour une gestion RH efficace et automatisée.",
  },
  {
    title: "Gestion des opérations intégrée :",
    description:
      "Coordination en temps réel des processus métiers liés aux ventes, achats et production.",
  },
  {
    title: "Administration système informatique:",
    description:
      "Gestion et maintenance de votre infrastructure informatique pour assurer performance et sécurité.",
  },
  {
    title: "Administration bases de données :",
    description:
      "Optimisation et sécurisation de vos bases de données pour garantir l'intégrité et la disponibilité des informations.",
  },
  {
    title: "Solutions Cloud :",
    description:
      "Hébergement sécurisé et accès flexible à vos applications et données depuis n'importe où.",
  },
  
];

export default function Features() {
  return (
    <RevealOnScroll>
      <section
        id="features"
        className="section-spacing text-center overflow-hidden"
      >
        <h2 className="text-igf-primary text-3xl font-bold mb-8 font-heading flex flex-col items-center">
          <img src={logo} alt="Cruip Logo" width={60} height={36} />
          Nos produits
        </h2>

        <div className="flex flex-col pb-8 px-6 items-center gap-y-6 max-w-screen-xl mx-auto">
          <div className="w-full flex flex-col md:flex-row justify-center gap-6">
            {/* Sage Section */}
            <div className="flex flex-col flex-1 items-center p-4 rounded-lg shadow-md h-full border-4 transition duration-200 hover:scale-105 hover:border-igf-accent">
              <img
                src={sageLogo}
                alt="Partner logo"
                className="w-24 h-24 object-contain"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 text-gray-800">
                <ul className="space-y-2">
                  {sageProducts.map((item, i) => (
                    <li key={i} className="flex items-center font-sans">
                      <span className="w-2 h-2 bg-igf-accent rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {sageOtherProducts.map((item, i) => (
                    <li key={i} className="flex items-center font-sans">
                      <span className="w-2 h-2 bg-igf-accent rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Odoo Section */}
            <div className="flex flex-col flex-1 items-center p-4 rounded-lg shadow-md h-full border-4 transition duration-200 hover:scale-105 hover:border-igf-accent">
              <img
                src={odooLogo}
                alt="Partner logo"
                className="w-24 h-24 object-contain"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 text-gray-800">
                <ul className="space-y-2">
                  {odooProducts.map((item, i) => (
                    <li key={i} className="flex items-center font-sans">
                      <span className="w-2 h-2 bg-igf-accent rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {odooOtherProducts.map((item, i) => (
                    <li key={i} className="flex items-center font-sans">
                      <span className="w-2 h-2 bg-igf-accent rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Integration Card - full width of top 2 cards */}
          <div className="w-full p-4 rounded-lg shadow-md border-4 transition duration-200 hover:scale-105 hover:border-igf-accent text-gray-800 text-left font-sans">
            <ul className="space-y-2 list-none w-full">
              {products.map(({ title, description,}, i) => (
                <li key={i} className="flex items-start w-full">
                  <span className="w-2 h-2 bg-igf-accent rounded-full mt-2 mr-2 flex-shrink-0" />
                  <span className={`w-full`}>
                    {title && <span className="font-semibold">{title} </span>}
                    {description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-7 max-w-screen-xl mx-auto">
          <FeatureCardHover
            title="Informatique"
            image={informatique}
            popoverText="Solutions informatiques adaptées à vos besoins métiers comme des graphiques, des rapports personnalisés,logiciels sur mesure, intelligence artificielle et plus encore."
          />
          <FeatureCardHover
            title="Gestion et Finance"
            image={finance}
            popoverText="Optimisation de la gestion comptable, financière et administrative de votre entreprise, avec des outils performants."
          />
          <FeatureCardHover
            title="Formation"
            image={formation}
            popoverText="Formations sur mesure pour tirer le meilleur de vos outils et logiciels de gestion commerciale et comptable avec Sage100 et Odoo et plus encore."
          />
          <FeatureCardHover
            title="Assistance RH"
            image={installation}
            popoverText="Support complet pour la gestion de vos ressources humaines : recrutement, formation, paie, administration du personnel et accompagnement personnalisé."
          />
        </div>
      </section>
    </RevealOnScroll>
  );
}
