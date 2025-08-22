import photo from "../../assets/laptop-and-paperwork-on-conference-table_42628905.jpg";

export default function HeroHome() {
  return (
    <section
      id="apropos"
      className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-16 flex flex-col md:flex-row justify-center items-center gap-6"
    >
      {/* Card */}
      <div
        id="fade-in-first"
        className="bg-igf-primary text-white p-6 rounded-xl shadow-md max-w-lg h-full border-4 transition duration-200 hover:scale-105 hover:border-igf-accent"
      >
        <h1 className="mb-2 text-2xl font-bold font-heading text-center">
          Qu'est ce que nous faisons
        </h1>
        <p className="font-sans text-center">
          IGF est une entreprise informatique partenaire agréé Sage et
          fournisseur de solutions Odoo. Nous proposons des services complets :
          gestion d’entreprise, développement de logiciels sur mesure, paie,
          comptabilité, RH, et formation. Notre équipe accompagne nos clients
          dans l’intégration comptable, le développement web et mobile, et la
          mise en place de solutions cloud sécurisées avec assistance en temps
          réel.
        </p>
      </div>

      {/* image */}
      <div>
        <img
          src={photo}
          className="rounded-xl h-full border-4 transition duration-200 hover:scale-105 hover:border-igf-accent"
          alt="photo of a laptop and paperwork on a conference table"
          id="fade-in-second"
          style={{ width: "500px", height: "288px" }}
        />
      </div>
    </section>
  );
}
