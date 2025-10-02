import Logo from "./logo";
import Contacts from "../sub-part/contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-igf-primary w-full font-sans py-6">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 text-left sm:grid-cols-2 lg:grid-cols-4 items-start justify-items-center">
        {/* Block 1 */}
        <div className="space-y-2 w-full max-w-xs">
          <h3 className="text-sm font-medium text-gray-200 font-heading">
            Navigation
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#apropos"
                className="text-indigo-200/65 hover:text-igf-accent"
              >
                A Propos
              </a>
            </li>
            <li>
              <a
                href="#partenaires"
                className="text-indigo-200/65 hover:text-igf-accent"
              >
                Partenaires
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="text-indigo-200/65 hover:text-igf-accent"
              >
                Nos Produits
              </a>
            </li>
          </ul>
        </div>

        {/* Block 2*/}
        <div className="space-y-2 w-full max-w-xs">
          <h3 className="text-sm font-medium text-gray-200 font-heading">
            Navigation
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#equipe"
                className="text-indigo-200/65 hover:text-igf-accent"
              >
                L'équipe
              </a>
            </li>
            <li>
              <a
                href="#emplacement"
                className="text-indigo-200/65 hover:text-igf-accent"
              >
                Emplacement
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-indigo-200/65 hover:text-igf-accent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Block 2 */}
        <div id="contact" className="w-full max-w-xs">
          <Contacts />
        </div>

        {/* Block 3 */}
        <div className="w-full max-w-xs text-sm">
          <div className="mb-3">
            <Logo />
          </div>
          <ul className="inline-flex gap-2">
            <li>
              <a
                className="flex items-center justify-center text-indigo-500 transition hover:text-igf-accent"
                href="https://www.instagram.com/igf_sarl/"
                target="_blank"
                aria-label="Instagram"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="h-6 w-6 text-indigo-500 hover:text-igf-accent"
                />
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center text-indigo-500 transition hover:text-igf-accent"
                href="https://www.linkedin.com/company/igf/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.849-3.037-1.849 0-2.132 1.445-2.132 2.938v5.669H9.358V9h3.415v1.561h.049c.476-.9 1.637-1.849 3.37-1.849 3.601 0 4.268 2.37 4.268 5.451v6.289zM5.337 7.433c-1.144 0-2.07-.926-2.07-2.07s.926-2.07 2.07-2.07 2.07.926 2.07 2.07-.926 2.07-2.07 2.07zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.555C0 23.23.792 24 1.771 24h20.451C23.2 24 24 23.23 24 22.278V1.723C24 .771 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center text-indigo-500 transition hover:text-igf-accent"
                href="https://x.com/igf_sarl"
                target="_blank"
                aria-label="X (formerly Twitter)"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>X</title>
                  <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24h21.351c.73 0 1.324-.595 1.324-1.324V1.325C24 .595 23.405 0 22.675 0zm-6.136 19.338l-3.27-4.552-3.574 4.552H7.068l4.809-6.027L7.37 4.662h3.405l3.019 4.222 3.297-4.222h1.655l-4.538 5.806 5.154 7.592h-3.121z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center text-indigo-500 transition hover:text-igf-accent"
                href="https://www.facebook.com/igf.sarl/"
                aria-label="Facebook"
                target="_blank"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Facebook</title>
                  <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.917.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.405 24 22.676V1.325C24 .595 23.405 0 22.675 0z" />
                </svg>
              </a>
            </li>
          </ul>
          <p className="mb-3 text-indigo-200/65">
            © 2022 IGF. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
