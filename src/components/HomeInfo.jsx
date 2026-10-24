import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import { profile } from "../constants";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1) {
    return (
      <h1 className="mx-5 px-6 py-4 text-center text-white neo-brutalism-blue sm:text-xl sm:leading-snug">
        Hi, I&apos;m <span className="mx-2 font-semibold">{profile.name}</span> 👋
        <br />
        A {profile.role}
      </h1>
    );
  }

  const content = {
    2: { text: "I enjoy building useful web applications and improving my development skills.", label: "About me", to: "/about" },
    3: { text: "Explore my projects and the source code available on GitHub.", label: "View projects", to: "/projects" },
    4: { text: "Have an opportunity or project in mind? Get in touch.", label: "Contact me", to: "/contact" },
  }[currentStage];

  if (!content) return null;

  return (
    <div className="info-box">
      <p className="text-center font-medium sm:text-xl">{content.text}</p>
      <Link to={content.to} className="neo-brutalism-white neo-btn">
        {content.label}
        <img src={arrow} alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
      </Link>
    </div>
  );
};

export default HomeInfo;
