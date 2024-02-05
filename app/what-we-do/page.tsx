import { CgWebsite } from "react-icons/cg";
import { FaPenRuler } from "react-icons/fa6";
import { TbDeviceMobileCharging } from "react-icons/tb";

export default function page() {
  return (
    <section id="what-we-do" className="min-h-screen py-16">
      <h1 className="text-center font-extrabold text-4xl lg:text-5xl mb-14">
        What we do?
      </h1>
      <div className="mx-10 lg:mx-auto flex justify-center items-center flex-wrap gap-10 max-w-2xl md:max-w-5xl lg:max-w-full">
        <div className="card w-4/5 lg:w-1/4 border border-slate-900 shadow-2xl">
          <figure className="pt-10 text-9xl">
            <CgWebsite />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Web Development</h2>
            <p>
              Full-stack web app with tech stack includes Reactjs, Nextjs,
              TailwindCSS, Recoil, Redux-toolkit, RTK Query, GraphQL, Nodejs,
              Express, Typescript, Prisma, PostgreSQL, MongoDB
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>

        <div className="card w-4/5 lg:w-1/4 border border-slate-900 shadow-2xl">
          <figure className="pt-10 text-9xl">
            <FaPenRuler />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Figma Design</h2>
            <p>
              Impressive mockups, web page design, landing pages and some
              interesting designs for web apps/mobile apps using Figma.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>

        <div className="card w-4/5 lg:w-1/4 border border-slate-900 shadow-2xl">
          <figure className="pt-10 text-9xl">
            <TbDeviceMobileCharging />
          </figure>
          <div className="card-body">
            <h2 className="card-title">App Development</h2>
            <p>
              Mobile apps using cross-platform development tools like
              React-Native, Flutter and Firebase. Fully-working mobile apps with
              some animations and sleek-ui.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
