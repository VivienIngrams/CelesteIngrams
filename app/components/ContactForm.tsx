"use client";

const ContactForm: React.FC = () => {
  async function handleSubmit(event: any) {
    event.preventDefault();

    const formData = new FormData(event.target);
    console.log(formData);
    try {
      const response = await fetch("/api", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData);
      alert("Message successfully sent");
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    }
  }
  return (
    <form onSubmit={handleSubmit} className="w-full py-4">
        <div className="flex flex-col">
          <label htmlFor="name" className=" text-lg py-2">
            Nome
          </label>
          <input
            id="name"
            name="name"
            autoComplete="off"
            required
            minLength={3}
            maxLength={150}
            className="border-[1px] border-neutral-300 p-1"
            type="text"
          />
        </div>
      <div className="flex flex-col py-2">
        <label htmlFor="email" className=" text-lg py-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          autoComplete="off"
          required
          minLength={8}
          maxLength={150}
          className="border-[1px] border-neutral-300 p-1"
          type="email"
        />
        <p className=" py-2 text-xs uppercase">BY SUBMITTING YOUR INFORMATION, YOU ARE GIVING US PERMISSION TO EMAIL YOU. YOU MAY UNSUBSCRIBE AT ANY TIME.</p>
      </div>      <div className="flex flex-col items-center">
        <button
          type="submit"
          className=" p-2 mt-8 text-lg shadow-md  shadow-gray-400  "
        >
          Enviar mensagem
        </button>
      </div>
    </form>
  );
};

export default ContactForm;