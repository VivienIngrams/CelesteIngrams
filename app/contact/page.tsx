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
      <div className="h-full  flex flex-col justify-center items-center">
        <Image
          src="/images/Profile.jpg"
          alt="Celeste Ingrams"
          width={300}
          height={500}
        />
      </div>
      <div className="h-full  flex flex-col justify-center ">
        <Link className="m-4 underline decoration-1" href="mailto:ingramsceleste@gmail.com" target="_blank">
          ingramsceleste@gmail.com
        </Link>
        <p className="m-4">+44 7824805518</p>
        <p className="m-4 text-justify">
          If you would be interested in receiving more information from time to
          time please feel free to subscribe to my contacts list.
        </p>
        <ContactForm />
      </div>
    </main>
  );
};

export default Contact;
