import TeamMemberCard from "../sub-part/team-member";
import placeholderImage from "../../assets/hero-image-01.jpg";
import Diop from "../../assets/Diop.jpeg";
import Moussa from "../../assets/Moussa.jpeg";
import Juste from "../../assets/juste.jpg";
import RevealOnScroll from "../sub-part/RevealOnScroll";
import logo from "../../assets/logo.png";
import LogoIgf from "../logoIgf/IgfLogo";
import Marquee from "react-fast-marquee";

export default function Team() {
  return (
    <RevealOnScroll>
      <section id="equipe" className="backdrop-blur-md">
        <div className="mx-auto max-w-screen-xl px-4 pt-32 sm:px-6">
          {/* Section header */}
          <h2 className="text-igf-primary text-3xl font-bold my-4 text-center font-heading flex flex-col items-center">
            {/* <img src={logo} alt="Cruip Logo" width={120} height={96} /> */}
            <LogoIgf />
            L'équipe
          </h2>

          {/* Marquee */}
          <div className="pt-10">
            <Marquee gradient={true} speed={40} pauseOnHover>
              <div className="mx-4 w-[300px] h-[300px] ">
                <TeamMemberCard
                  name="Doudou Diop"
                  role="Directeur Général"
                  image={Diop}
                  facebookUrl="https://www.facebook.com/andalla13"
                  linkedinUrl="https://www.linkedin.com/in/andalla-ndiaye-16a84a212"
                />
              </div>

              <div className="mx-4 h-[300px] w-[300px] ">
                <TeamMemberCard
                  name="Moussa Gueye"
                  role="Responsable IT"
                  image={Moussa}
                  linkedinUrl="https://linkedin.com"
                />
              </div>

              <div className="mx-4 w-[300px]">
                <TeamMemberCard
                  name="Binta Diallo"
                  role="assistante administrative"
                  image={placeholderImage}
                  linkedinUrl="https://linkedin.com"
                />
              </div>

              <div className="mx-4 w-[300px]">
                <TeamMemberCard
                  name="Modou Diagne"
                  role="Chargé projet Odoo"
                  image={placeholderImage}
                  linkedinUrl="https://linkedin.com"
                />
              </div>
              <div className="mx-4  h-[300px] w-[300px]">
                <TeamMemberCard
                  name="Juste Amour"
                  role="Responsable du suivi de projet"
                  image={Juste}
                  linkedinUrl="https://linkedin.com"
                />
              </div>
            </Marquee>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
}
