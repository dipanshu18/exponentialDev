import ContactUsForm from "@/components/ContactUsForm";
import Image from "next/image";
import Webpage from "@/public/webpage.png";

import MoinPic from "@/public/moin_headshot.png";
import DipanshuPic from "@/public/dipanshu_headshot.png";

import { CgWebsite } from "react-icons/cg";
import { FaLinkedin, FaPenRuler, FaPhone, FaTwitter } from "react-icons/fa6";
import { TbDeviceMobileCharging } from "react-icons/tb";
import Link from "next/link";
import Button from "@/components/Button";
import CopyPhoneNoButton from "@/components/CopyPhoneNoButton";

export default function Home() {
  return (
    <>
      <header>
        <div className="hero min-h-screen">
          <div className="hero-overlay bg-base-100 bg-opacity-60"></div>
          <div className="hero-content text-center">
            <div>
              <div className="max-w-9xl">
                <h1 className="mb-5 text-3xl lg:text-5xl font-bold tracking-wider leading-relaxed">
                  We craft software solutions for your ideas/business to achieve
                  online success.
                </h1>
              </div>
              <p className="mb-5 texl-xl lg:text-3xl text-slate-400">
                We are your dedicated partners in expertly designed and innovate
                solutions. Our team combines creativity and technical
                proficiency to ensure your online presence stands out. We help
                to take a step forward in the digital realm.
              </p>
              <a href="#contact-us">
                <Button text="Get Started" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="what-we-do" className="min-h-screen py-16 bg-base-300">
        <h1 className="text-center font-extrabold text-4xl lg:text-5xl mb-14">
          What we do?
        </h1>
        <div className="px-10 flex justify-center items-center flex-wrap lg:flex-nowrap gap-10 max-w-2xl md:max-w-5xl lg:max-w-7xl mx-auto">
          <div className="card w-96 shadow-xl bg-base-100">
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

          <div className="card w-96 shadow-xl bg-base-100">
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

          <div className="card w-96 shadow-xl bg-base-100">
            <figure className="pt-10 text-9xl">
              <TbDeviceMobileCharging />
            </figure>
            <div className="card-body">
              <h2 className="card-title">App Development</h2>
              <p>
                Mobile apps using cross-platform development tools like
                React-Native, Flutter and Firebase. Fully-working mobile apps
                with some animations and sleek-ui.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen py-16 bg-base-200">
        <h1 className="text-center font-extrabold text-4xl lg:text-5xl mb-14">
          Our Projects
        </h1>
        <div className="max-w-5xl mx-10 lg:mx-auto grid md:grid-cols-2 lg:grid-cols-1 gap-10">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <Image src={Webpage} alt="Album" width={500} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end gap-8">
                <Button text="Code" />
                <Button text="Demo" />
              </div>
            </div>
          </div>

          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <Image src={Webpage} alt="Album" width={500} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end gap-8">
                <Button text="Code" />
                <Button text="Demo" />
              </div>
            </div>
          </div>

          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <Image src={Webpage} alt="Album" width={500} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end gap-8">
                <Button text="Code" />
                <Button text="Demo" />
              </div>
            </div>
          </div>

          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <Image src={Webpage} alt="Album" width={500} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end gap-8">
                <Button text="Code" />
                <Button text="Demo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 bg-base-100">
        <h1 className="text-center font-extrabold text-4xl lg:text-5xl mb-14">
          Testimonials
        </h1>

        <div className="mx-10 flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-8">
          <div className="card md:w-2/3 bg-base-300 shadow-2xl">
            <figure className="pt-10 mx-10 rounded-full">
              <Image src={MoinPic} alt="Moin's Headshot" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Moin Hossain</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions mt-5">
                <Link href="/" className="btn btn-primary">
                  <FaLinkedin />
                  Linkedin
                </Link>
                <Link href="/" className="btn btn-primary">
                  <FaTwitter />
                  Twitter
                </Link>
                <CopyPhoneNoButton number="+91-9167717292" />
              </div>
            </div>
          </div>
          <div className="card md:w-2/3 bg-base-300 shadow-2xl">
            <figure className="pt-10 mx-10 rounded-full">
              <Image src={DipanshuPic} alt="Dipanshu's Headshot" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Dipanshu Torawane</h2>
              <p className="flex flex-col gap-4">
                <span>
                  I{`'`}m a 👨‍💻Full Stack Web Developer who enjoys creating web
                  applications to deliver great and satisfactory user
                  experiences. I love exploring new JavaScript frameworks,
                  backend solutions, and emerging technologies to stay
                  up-to-date with industry trends.
                </span>
                <span>My current tech toolkit includes:</span>
                <span>
                  Frontend: React.js, Next.js, Astro.js, TailwindCSS,
                  Redux-Toolkit, RTK-Query, Recoil
                </span>
                <span>
                  Backend: Typescript, Node.js, Express, Python, Flask, Django
                </span>
                <span>
                  Databases: PostgreSQL, MongoDB Tools: GraphQL, PrismaORM
                </span>
                <span>Cloud: AWS, Azure</span>
              </p>
              <div className="card-actions mt-5">
                <Link
                  href="https://www.linkedin.com/in/dipanshu-torawane/"
                  className="btn btn-primary"
                >
                  <FaLinkedin />
                  Linkedin
                </Link>
                <Link
                  href="https://twitter.com/dipanshu_twts"
                  className="btn btn-primary"
                >
                  <FaTwitter />
                  Twitter
                </Link>
                <CopyPhoneNoButton number="+91-7990582647" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-us" className="py-16 bg-base-200">
        <h1 className="text-center font-extrabold text-4xl lg:text-5xl mb-14">
          Contact us
        </h1>

        <ContactUsForm />
      </section>

      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
        </nav>
      </footer>
    </>
  );
}
