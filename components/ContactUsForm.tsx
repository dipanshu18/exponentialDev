"use client";

import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import Spinner from "./Spinner";

type MailData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<MailData>();

  async function mailHandler(data: MailData) {
    try {
      const sendMail = await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      if (sendMail.status === 200) {
        toast.success("Mail sent successfully...");
        reset();
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
  }

  return (
    <>
      <Toaster richColors />
      <form
        onSubmit={handleSubmit(mailHandler)}
        className="max-w-md md:max-w-xl lg:max-w-2xl mx-10 sm:mx-auto "
      >
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            Your name
          </label>
          <input
            id="name"
            type="text"
            {...register("name", { min: 5 })}
            placeholder="Dipanshu Torawane"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Your email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="dipanshu@gmail.com"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="subject" className="block mb-2 text-sm font-medium">
            Your subject
          </label>
          <input
            id="subject"
            type="text"
            {...register("subject", { min: 20, max: 100 })}
            placeholder="Regarding landing page development"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="block mb-2 text-sm font-medium">
            Your message
          </label>
          <textarea
            id="message"
            className="textarea textarea-bordered w-full"
            {...register("message", { min: 50 })}
            placeholder="Your message"
            rows={10}
            required
          ></textarea>
        </div>
        <div className="text-center my-10">
          <div className="flex justify-center items-center">
            {isSubmitting && <Spinner />}
          </div>
          <button className="btn btn-primary">Send Message</button>
        </div>
      </form>
    </>
  );
}
