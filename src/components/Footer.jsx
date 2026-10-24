import { Link } from "react-router-dom";
import { profile, socialLinks } from "../constants";

const Footer = () => (
  <footer className="border-t border-slate-200 bg-white px-5 py-6 text-slate-600">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
      <p className="text-sm">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {socialLinks.map((item) => {
          const external = item.link.startsWith("http");
          const content = <>{item.iconUrl && <img src={item.iconUrl} alt="" className="h-5 w-5 object-contain" />}<span>{item.name}</span></>;
          return external ? (
            <a key={item.name} href={item.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium hover:text-blue-600">{content}</a>
          ) : (
            <a key={item.name} href={item.link} className="inline-flex items-center gap-2 text-sm font-medium hover:text-blue-600">{content}</a>
          );
        })}
        <Link to="/contact" className="text-sm font-medium hover:text-blue-600">Contact</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
