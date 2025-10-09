import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faClock,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

const Contacts: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 text-sm text-indigo-200/65 font-sans">
      {/* Phone */}
      <a
        href="tel:338673884"
        className="flex items-center gap-2 hover:text-igf-accent"
      >
        <FontAwesomeIcon icon={faPhone} />
        33 846 12 72
      </a>

      {/* Email */}
      <a
        href="mailto:contacts@igf-sn.com"
        className="flex items-center gap-2 hover:text-igf-accent"
      >
        <FontAwesomeIcon icon={faEnvelope} />
        contacts@igf-sn.com
      </a>

      {/* Hours */}
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faClock} />
        Lundi-Vendredi: 8:00 - 18:00
      </div>

      {/* Hours */}
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faAddressCard} />
        Lundi-Vendredi: 8:00 - 18:00
      </div>
    </div>
  );
};

export default Contacts;
