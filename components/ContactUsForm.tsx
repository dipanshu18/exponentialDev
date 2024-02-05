"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster, toast } from "sonner";
import Spinner from "./Spinner";
import { FaTelegramPlane } from "react-icons/fa";
import Button from "./Button";

type MailData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const mailSchema = z.object({
  name: z.string().min(5, "Name must be more than 5 characters long..."),
  email: z.string().email(),
  subject: z
    .string()
    .min(10, "Subject must be more than 10 characters long..."),
  message: z
    .string()
    .min(30, "Message must be more than 30 characters long..."),
});

export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<MailData>({
    resolver: zodResolver(mailSchema),
  });

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
        className="md:max-w-xl lg:max-w-2xl mx-10 sm:mx-auto border border-slate-900 p-10 rounded-xl"
      >
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            Your name
          </label>
          <input
            id="name"
            type="text"
            {...register("name", { required: true, min: 5 })}
            placeholder="Dipanshu Torawane"
            className="input bg-slate-900 input-bordered w-full"
            required
          />
          {errors.name && (
            <span className="text-red-600">{errors.name.message}</span>
          )}
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Your email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", { required: true })}
            placeholder="dipanshu@gmail.com"
            className="input bg-slate-900 input-bordered w-full"
            required
          />
          {errors.email && (
            <span className="text-red-600">{errors.email.message}</span>
          )}
        </div>
        <div className="mb-5">
          <label htmlFor="subject" className="block mb-2 text-sm font-medium">
            Your subject
          </label>
          <input
            id="subject"
            type="text"
            {...register("subject", { required: true, min: 20, max: 100 })}
            placeholder="Regarding landing page development"
            className="input bg-slate-900 input-bordered w-full"
            required
          />
          {errors.subject && (
            <span className="text-red-600">{errors.subject.message}</span>
          )}
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="block mb-2 text-sm font-medium">
            Your message
          </label>
          <textarea
            id="message"
            className="textarea bg-slate-900 textarea-bordered w-full"
            {...register("message", { required: true, min: 50 })}
            placeholder="Your message"
            rows={10}
            required
          ></textarea>
          {errors.message && (
            <span className="text-red-600">{errors.message.message}</span>
          )}
        </div>
        <div className="text-center my-10">
          <div className="flex justify-center items-center">
            {isSubmitting && <Spinner />}
          </div>
          <Button text="Send Message" icon={<FaTelegramPlane />} />
        </div>
      </form>
    </>
  );
}
