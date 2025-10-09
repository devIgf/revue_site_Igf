import RevealOnScroll from "../sub-part/RevealOnScroll";
import logo from "../../assets/logo.png";
import LogoIgf from "../logoIgf/IgfLogo";

export default function Map() {
  return (
    <RevealOnScroll>
      <section id="emplacement" className="w-full pt-32 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 pt-10 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-igf-primary text-3xl font-bold my-4 font-heading flex flex-col items-center">
              <LogoIgf />
              Emplacement
            </h2>
          </div>
        </div>

        <div className="h-[450px] flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1754384748403!6m8!1m7!1sFFrIpcbZKHiuf_35ZxOcow!2m2!1d14.74512183595285!2d-17.45909566031823!3f131.9417611682786!4f33.42208374471035!5f0.7820865974627469"
            width="80%%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="rounded-xl shadow-md border-4"
          ></iframe>
        </div>
      </section>
    </RevealOnScroll>
  );
}
