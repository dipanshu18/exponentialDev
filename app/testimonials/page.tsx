import Link from "next/link";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import Image from "next/image";
import MoinPic from "@/public/moin_headshot.png";
import DipanshuPic from "@/public/dipanshu_headshot.png";
import CopyPhoneNoButton from "@/components/CopyPhoneNoButton";
import Button from "@/components/Button";

export default function page() {
  return (
    <section id="testimonials" className="py-16">
      <h1 className="text-center font-extrabold text-4xl lg:text-5xl mb-14">
        Testimonials
      </h1>

      <div className="mx-10 flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-8">
        <div className="card lg:w-1/2 border border-slate-900 shadow-2xl">
          <figure className="pt-10 mx-10 rounded-full">
            <Image src={MoinPic} alt="Moin's Headshot" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Moin Hossain</h2>
            <p className="flex flex-col gap-4">
              <span>
                I{`'`}m good at making websites with strong communication
                skills. I really enjoy creating web applications and connecting
                with new folks every day. I like trying out new easy-to-use
                tools and using AI to make software and businesses better. I
                possess a keen interest in exploring and utilizing emerging
                no-code tools.
              </span>
              <span>My current tech toolkit includes:</span>
              <span>Frontend: Reactjs, TailwindCSS</span>
              <span>Backend: Nodejs, Express</span>
              <span>Programming Languages: Python, Javascript</span>
              <span>Tools: PostgreSQL, MongoDB, AWS</span>
            </p>
            <div className="card-actions mt-5">
              <Link href="/">
                <Button text="Linkedin" icon={<FaLinkedin />} />
              </Link>
              <Link href="/">
                <Button text="Twitter" icon={<FaTwitter />} />
              </Link>
              <CopyPhoneNoButton number="+91-9167717292" />
            </div>
          </div>
        </div>
        <div className="card lg:w-1/2 border border-slate-900 shadow-2xl">
          <figure className="pt-10 mx-10 rounded-full">
            <Image src={DipanshuPic} alt="Dipanshu's Headshot" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Dipanshu Torawane</h2>
            <p className="flex flex-col gap-4">
              <span>
                I{`'`}m a Full Stack Web Developer who enjoys creating web
                applications to deliver great and satisfactory user experiences.
                I love exploring new JavaScript frameworks, backend solutions,
                and emerging technologies to stay up-to-date with industry
                trends.
              </span>
              <span>My current tech toolkit includes:</span>
              <span>
                Frontend: React.js, Next.js, Astro.js, TailwindCSS,
                Redux-Toolkit, RTK-Query, Recoil
              </span>
              <span>
                Backend: Typescript, Node.js, Express, Python, Flask, Django
              </span>
              <span>Databases: PostgreSQL, MongoDB</span>
              <span>Tools: GraphQL, PrismaORM, AWS, Azure</span>
            </p>
            <div className="card-actions mt-5">
              <Link href="https://www.linkedin.com/in/dipanshu-torawane/">
                <Button text="Linkedin" icon={<FaLinkedin />} />
              </Link>
              <Link href="https://twitter.com/dipanshu_twts">
                <Button text="Twitter" icon={<FaTwitter />} />
              </Link>
              <CopyPhoneNoButton number="+91-7990582647" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
