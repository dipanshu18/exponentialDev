import ContactUsForm from "@/components/ContactUsForm";

export default function page() {
  return (
    <section id="contact-us" className="py-16 min-h-screen">
      <h1 className="text-center font-extrabold text-4xl lg:text-5xl mb-14">
        Contact us
      </h1>

      <ContactUsForm />
    </section>
  );
}
