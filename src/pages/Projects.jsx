import { projects } from "../constants";
import CTA from "../components/CTA";

const Projects = () => (
  <section className="min-h-screen bg-slate-50 px-5 pb-16 pt-28 text-slate-900 sm:px-10">
    <div className="mx-auto max-w-6xl">
      <p className="font-semibold uppercase tracking-[0.2em] text-blue-600">Selected work</p>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">My Projects</h1>
      <p className="mt-4 max-w-2xl leading-7 text-slate-600">These are the project repositories you shared. Open each repository to review its implementation, README, and technologies.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.name} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center gap-3">
              <img src={project.iconUrl} alt="" className="h-10 w-10 object-contain" />
              <h2 className="text-xl font-bold">{project.name}</h2>
            </div>
            <p className="mt-4 flex-1 leading-7 text-slate-600">{project.description}</p>
            <p className="mt-4 text-sm text-slate-500">Stack: confirm from the repository README</p>
            <a href={project.link} target="_blank" rel="noreferrer" className="mt-5 inline-flex w-fit items-center rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
              View GitHub repository <span className="ml-2" aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
      <div className="mt-12"><CTA /></div>
    </div>
  </section>
);

export default Projects;
