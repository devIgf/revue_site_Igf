import photo from "../../assets/Diop.jpeg";

export default function MyHero() {
  return (
    <section className="relative backdrop-blur-md mx-auto pt-10 gap-10 justify-center flex flex-col sm:flex-row min-h-[600px] sm:h-80 pb-5 w-[90%] sm:w-[75%]">
      {/* Image à gauche sur grand écran, première en flex-row */}
      <div className="flex-1 rounded-lg border-4 bg-gray-400 order-1 sm:order-1 transition duration-200 hover:scale-105 hover:border-igf-accent">
        <img
          src={photo}
          alt="Image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Texte à droite sur grand écran, deuxième en flex-row */}
      <div className="flex-1 rounded-lg border-4 bg-igf-primary text-white flex items-center justify-center p-4 shadow-md order-2 sm:order-2 transition duration-200 hover:scale-105 hover:border-igf-accent">
        <p className="font-sans text-center max-w-lg mx-auto">
          <strong>Mot du Directeur</strong>
          <br />
          Chez IGF, notre engagement est d'accompagner les entreprises dans leur
          transformation digitale avec des solutions informatiques innovantes et
          sur mesure. Partenaire agréé Sage et fournisseur de solutions Odoo,
          nous mettons au cœur de notre action l'efficacité opérationnelle, la
          sécurité et la performance des systèmes de gestion et des ressources
          humaines.
          <br />
          <br />
          Notre équipe dévouée met tout en œuvre pour offrir un service complet,
          allant du développement logiciel à l'intégration comptable, en passant
          par la paie, la formation spécialisée, et la mise en place de
          solutions cloud sécurisées, avec une assistance en temps réel.
          <br />
          <br />
          Nous croyons fermement que la technologie doit être un levier de
          croissance et de compétitivité pour nos clients. C'est pourquoi nous
          construisons avec eux des partenariats durables basés sur la
          confiance, l'expertise et l'innovation.
          <br />
          <br />
          Merci pour la confiance que vous nous accordez. Ensemble, continuons à
          façonner l'avenir numérique de vos entreprises.
          <br />
          <br />
          <em>Doudou Diop, Directeur Général IGF SARL</em>
        </p>
      </div>
    </section>
  );
}
