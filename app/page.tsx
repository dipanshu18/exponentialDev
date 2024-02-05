import Link from "next/link";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <header>
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
            <div>
              <div className="max-w-9xl">
                <h1 className="type-header mb-5 text-3xl lg:text-5xl font-bold tracking-wider leading-relaxed"></h1>
              </div>
              <p className="mb-5 texl-xl lg:text-3xl text-slate-400">
                We are your dedicated partners in expertly designed and innovate
                solutions. Our team combines creativity and technical
                proficiency to ensure your online presence stands out. We help
                to take a step forward in the digital realm.
              </p>
              <Link href="/contact">
                <Button text="Get Started" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
