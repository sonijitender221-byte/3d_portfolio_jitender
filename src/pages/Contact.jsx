import { useState } from "react";
import { profile } from "../constants";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [error, setError] = useState("");

  const updateField = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  // This opens the visitor's email app; it does not send mail through a backend.
  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    const body = `Name: ${form.name}\nReply email: ${form.email}\n\n${form.message}`;
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section className="min-h-screen bg-slate-50 px-5 pb-16 pt-28 text-slate-900 sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div>
          <p className="font-semibold uppercase tracking-[0.2em] text-blue-600">Get in touch</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Contact me</h1>
          <p className="mt-5 leading-7 text-slate-600">For professional opportunities or project enquiries, contact me through email or my profiles.</p>
          <a className="mt-6 inline-block break-all font-semibold text-blue-700 underline underline-offset-4" href={`mailto:${profile.email},${profile.altEmail}`}>{profile.email}</a>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-300 bg-white px-4 py-2 font-semibold hover:border-blue-500">LinkedIn ↗</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-300 bg-white px-4 py-2 font-semibold hover:border-blue-500">GitHub ↗</a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Send an email</h2>
          <p className="mt-2 text-sm text-slate-500">Submitting opens your default email app with the message prepared.</p>
          {[["name", "Your name", "text"], ["email", "Your email", "email"], ["subject", "Subject", "text"]].map(([name, label, type]) => (
            <label key={name} className="mt-4 block text-sm font-semibold" htmlFor={name}>{label}
              <input id={name} name={name} type={type} value={form[name]} onChange={updateField} required className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 font-normal outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
            </label>
          ))}
          <label className="mt-4 block text-sm font-semibold" htmlFor="message">Message
            <textarea id="message" name="message" value={form.message} onChange={updateField} required rows={5} className="mt-2 w-full resize-y rounded-lg border border-slate-300 px-3 py-2 font-normal outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
          </label>
          {error && <p role="alert" className="mt-3 text-sm text-red-600">{error}</p>}
          <button type="submit" className="mt-5 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">Prepare email</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
