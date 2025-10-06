import photo from "../../assets/laptop-and-paperwork-on-conference-table_42628905.jpg";

export default function MyHero() {
  return (
    <section className="relative mx-auto pt-10 gap-10 justify-center flex flex-col sm:flex-row min-h-[300px] sm:h-80 pb-5 w-[90%] sm:w-[75%]">
      {/* Image en premier sur mobile, deuxième sur écran sm et plus */}
      <div className="flex-1 rounded-lg border-4 bg-gray-400 sm:order-2 order-1 transition duration-200 hover:scale-105 hover:border-igf-accent">
        <img
          src={photo}
          alt="Image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Texte en deuxième sur mobile, premier sur écran sm et plus */}
      <div className="flex-1 rounded-lg border-4 bg-igf-primary text-white flex items-center justify-center p-4 shadow-md sm:order-1 order-2 transition duration-200 hover:scale-105 hover:border-igf-accent">
        <p className="font-sans text-center">
          IGF est une entreprise informatique partenaire agréé Sage et
          fournisseur de solutions Odoo. Nous proposons des services complets :
          gestion d'entreprise, développement de logiciels sur mesure, paie,
          comptabilité, RH, et formation. Notre équipe accompagne nos clients
          dans l'intégration comptable, le développement web et mobile, et la
          mise en place de solutions cloud sécurisées avec assistance en temps
          réel.
        </p>
      </div>
    </section>
  );
}
