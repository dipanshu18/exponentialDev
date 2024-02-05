import Button from "@/components/Button";
import Image from "next/image";
import Webpage from "@/public/webpage.png";

export default function page() {
  return (
    <section id="projects" className="min-h-screen py-16">
      <h1 className="text-center font-extrabold text-4xl lg:text-5xl mb-14">
        Our Projects
      </h1>
      <div className="max-w-4xl xl:max-w-5xl lg:mx-auto mx-10 grid md:grid-cols-2 lg:grid-cols-1 gap-10">
        <div className="card lg:card-side border border-slate-900 shadow-2xl">
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

        <div className="card lg:card-side border border-slate-900 shadow-2xl">
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

        <div className="card lg:card-side border border-slate-900 shadow-2xl">
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

        <div className="card lg:card-side border border-slate-900 shadow-2xl">
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
  );
}
