import type { Metadata } from "next";

import { whatwedo } from "@/utils/data";

export const metadata: Metadata = {
  title: "What we do?",
};

export default function page() {
  return (
    <section id="what-we-do" className="min-h-screen py-16">
      <h1 className="text-center font-extrabold text-4xl lg:text-5xl mb-14">
        What we do?
      </h1>
      <div className="mx-10 lg:mx-auto flex justify-center items-center flex-wrap gap-10 max-w-2xl md:max-w-5xl lg:max-w-full">
        {whatwedo &&
          whatwedo.map((content) => {
            const Icon = content.icon;

            return (
              <div
                key={content.id}
                className="card lg:w-1/4 border border-slate-900 shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <figure className="pt-10 text-9xl">
                  <Icon />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{content.title}</h2>
                  <p>{content.desc}</p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
