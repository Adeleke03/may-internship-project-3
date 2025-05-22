import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../utils/ValidationSchema.js";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
  });
  const onSubmit = async (data) => {
  try {
    const response = await fetch("https://formspree.io/f/mnndyzvw", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("Network error.");
  }
};
  return (
    <>
      <main className="wrapper bg-black text-white ">
        <article className="lg:flex border-t-1 border-t-white py-5">
          {/* Let connect section */}
          <section className="lg:w-[600px] ">
            <h2 className="font-Bebas-Neue font-[400] text-[43px] leading-[100%] tracking-[-2%] ">
              Let’s connect
            </h2>
            <p className="leading-[160%] mt-[8px] tracking-[0%]  ">
              Say hello at{" "}
              <span className="border-b-[#D3E97A] border-b-1">
                jephthahadeleke2003@gmail.com
              </span>
            </p>
            <p>
              For more Info, here is my{" "}
              <span className="border-b-[#D3E97A] border-b-1">resume</span>
            </p>
            {/* div for social icons */}
            <div className="text-[#D3E97A] flex items-center gap-5 py-6  text-[32px]">
              <a
                href="https://www.linkedin.com/in/jephthah-adeleke-a9207732b/"
                target="blank"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a href="https://github.com/Adeleke03/" target="blank">
                <ion-icon name="logo-github"></ion-icon>
              </a>
              <a href="https://x.com/x_rxxc?s=21" target="blank"></a>
              <ion-icon name="logo-twitter"></ion-icon>
              <a href="https://www.instagram.com/" target="blank"></a>
              <ion-icon name="logo-instagram"></ion-icon>
            </div>
          </section>
          {/* footer form section */}
          <section className="lg:w-[600px]">
            <form
              action="https://formspree.io/f/mnndyzvw"
              method="POST"
              onSubmit={handleSubmit(onSubmit)}
              className="leading-[160%] font-[500] flex flex-col gap-[10px] "
            >
              <label className="block text-[#C7C7C7]" htmlFor="name">
                Name
              </label>
              <div>
                <input
                  className="w-full bg-[#1A1A1A] py-[10px] px-[16px] rounded-[4px] "
                  type="text"
                  placeholder="John Doe"
                  {...register("name")}
                />
                <p className="text-red-600">{errors.name?.message}</p>
              </div>
              <label className="block text-[#C7C7C7]" htmlFor="email">
                Email
              </label>
              <div>
                <input
                  className="w-full bg-[#1A1A1A] py-[10px] px-[16px] rounded-[4px]"
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                />
                <p className="text-red-600">{errors.email?.message}</p>
              </div>
              <label className="block text-[#C7C7C7]" htmlFor="subject">
                Subject
              </label>
              <div>
                <input
                  className="w-full bg-[#1A1A1A] py-[10px] px-[16px] rounded-[4px]"
                  type="text"
                  placeholder=""
                />
              </div>
              <label className="block text-[#C7C7C7]" htmlFor="message">
                Message
              </label>
              <div>
                <input
                  className="w-full bg-[#1A1A1A] py-[10px] px-[16px] rounded-[4px] h-[148px] lg:h-[156px]"
                  type="text"
                  placeholder=""
                  {...register("message")}
                />
                <p className="text-red-600">{errors.message?.message}</p>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="block bg-[#D3E97A] text-black p-4 rounded-full leading-[100%] font-[700] w-[140px] my-4"
              >
                SUBMIT
              </button>
            </form>
          </section>
        </article>
      </main>
    </>
  );
};

export default Contact;
