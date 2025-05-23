import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <main
      id="Contact"
      className="w-full p-4 md:p-8 lg:pt-20 xl:pt-20 xl:px-20 h-screen lg:grid lg:grid-cols-2"
    >
      <div className="lg:h-full pt-24 md:pt:40 lg:pt-12 flex flex-col justify-center items-center">
        <Image
          src="/images/Profile.jpg"
          alt="Celeste Hererra"
          width={300}
          height={500}
          className="w-40 h-auto md:w-60 lg:w-[400px]" // Adjust sizes for different screen sizes
        />
      </div>
      <div className="lg:h-full  flex flex-col justify-center xl:mr-24 ">
        <Link className="my-4 underline decoration-1" href="mailto:celesteburrherrera@gmail.com" target="_blank">
          celesteburrherrera@gmail.com
        </Link>
        <p className="my-4">+44 7824805518</p>
        <p className="my-4 text-justify">
          If you would be interested in receiving more information from time to
          time please feel free to subscribe to my contacts list.
        </p>
        <ContactForm />
      </div>
    </main>
  );
};

export default Contact;
