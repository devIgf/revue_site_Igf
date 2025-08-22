import TeamMemberCard from "../sub-part/team-member";
import placeholderImage from "../../assets/hero-image-01.jpg";
import RevealOnScroll from "../sub-part/RevealOnScroll";
import logo from "../../assets/logo.png";
import Marquee from "react-fast-marquee";

export default function Team() {
  return (
    <RevealOnScroll>
      <section id="equipe" className="section-spacing">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
          {/* Section header */}
          <h2 className="text-igf-primary text-3xl font-bold my-4 text-center font-heading flex flex-col items-center">
            <img src={logo} alt="Cruip Logo" width={60} height={36} />
            L'équipe
          </h2>

          {/* Marquee */}
          <div className="pt-10">
            <Marquee gradient={true} speed={40} pauseOnHover>
              <div className="mx-4 w-[300px]">
                <TeamMemberCard
                  name="Andalla Ndiaye"
                  role="Consultant senior et formateur"
                  image={placeholderImage}
                  facebookUrl="https://www.facebook.com/andalla13"
                  linkedinUrl="https://www.linkedin.com/in/andalla-ndiaye-16a84a212"
                />
              </div>

              <div className="mx-4 w-[300px]">
                <TeamMemberCard
                  name="Jane Doe"
                  role="Développeuse Frontend"
                  image={placeholderImage}
                  linkedinUrl="https://linkedin.com"
                />
              </div>

              <div className="mx-4 w-[300px]">
                <TeamMemberCard
                  name="John Smith"
                  role="Chef de projet"
                  image={placeholderImage}
                  linkedinUrl="https://linkedin.com"
                />
              </div>

              <div className="mx-4 w-[300px]">
                <TeamMemberCard
                  name="John Smith"
                  role="Chef de projet"
                  image={placeholderImage}
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
