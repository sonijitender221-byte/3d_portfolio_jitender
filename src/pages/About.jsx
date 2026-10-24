import { profile, skills } from "../constants";
import CTA from "../components/CTA";

const About = () => (
  <section className="min-h-screen bg-slate-50 px-5 pb-16 pt-28 text-slate-900 sm:px-10">
    <div className="mx-auto max-w-5xl">
      <p className="font-semibold uppercase tracking-[0.2em] text-blue-600">About</p>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">I&apos;m {profile.name}.</h1>
      <h2 className="mt-3 text-xl font-semibold text-slate-600">{profile.role}</h2>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">{profile.bio}</p>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-bold">Experience</h3>
        <p className="mt-3 text-slate-700"><strong>Webigeeks</strong> · {profile.experience}</p>
        <p className="mt-2 text-sm text-slate-500">Specific responsibilities and dates can be added when confirmed.</p>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-bold">Technologies used in this portfolio</h3>
        <p className="mt-2 text-slate-600">This list reflects technologies visible in this project&apos;s source code.</p>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
              <img src={skill.imageUrl} alt="" className="h-10 w-10 object-contain" />
              <span className="font-semibold">{skill.name}</span>
              <span className="text-xs text-slate-500">{skill.type}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12"><CTA /></div>
    </div>
  </section>
);

export default About;
