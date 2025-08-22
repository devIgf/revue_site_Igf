import logo from "../../assets/logo.png";

export default function Logo() {
  return (
    <a href="/" className="inline-flex shrink-0" aria-label="Cruip">
      <div className="bg-white rounded-md shadow-md transition-transform duration-200 hover:scale-125">
        <img src={logo} alt="Cruip Logo" width={60} height={36} />
      </div>
    </a>
  );
}
