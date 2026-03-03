import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
   <main
      id="Contact"
      className="w-full text-base p-4 md:p-8 lg:py-20 xl:py-28 xl:px-20 h-screen lg:grid lg:grid-cols-2"
    >
      <div className="lg:h-full pt-24 md:pt-40 lg:pt-0 flex flex-col items-center">
        <Image
          src="/images/Celeste Burr-Herrera.png"
          alt="Celeste Hererra"
          width={500}
          height={500}
          className="my-4 w-40 h-auto md:w-60 lg:w-[350px] lg:h-full lg:object-cover lg:object-top"
        />
      </div>
      <div className="lg:h-full flex flex-col justify-between xl:mr-24">
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
