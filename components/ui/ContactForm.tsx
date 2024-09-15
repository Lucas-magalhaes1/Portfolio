"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogClose } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { CircleCheckIcon } from "lucide-react";


const ContactForm: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setOpen(true);
        form.reset();
      } else {
        alert("Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.");
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert("Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section id="contact" className="bg-muted py-12 md:py-24 relative">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {!open && (
            <div className="space-y-4" data-aos="fade-right" data-aos-duration="1500">
              <h2
                className="text-3xl font-bold"
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="1500"
              >
                Entre em contato
              </h2>
              <p
                className="text-muted-foreground"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1500"
              >
                Fique à vontade para me enviar uma mensagem. Será um prazer respondê-la.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Lucas-magalhaes1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none"
                  data-aos="fade-right"
                  data-aos-delay="500"
                  data-aos-duration="1500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-5 w-5"
                  >
                    <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"></path>
                  </svg>
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/lucas-magalhães-702684291"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none"
                  data-aos="fade-left"
                  data-aos-delay="600"
                  data-aos-duration="1500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          )}

          {!open && (
            <form
              action="https://formspree.io/f/xnnaleop"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-4"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="name"
                  >
                    Nome
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="subject"
                  >
                    Assunto
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="subject"
                    name="subject"
                    placeholder="Assunto"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Seu email"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="message"
                >
                  Mensagem
                </label>
                <textarea
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[150px]"
                  id="message"
                  name="message"
                  placeholder="Sua mensagem"
                  required
                ></textarea>
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Enviando..." : "Enviar"}
              </Button>
            </form>

          )}

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px] mx-auto">
              <div className="flex flex-col items-center justify-center gap-4 py-8">
                <CircleCheckIcon className="size-12 text-green-500" />
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-medium">Sucesso!</h3>
                  <p className="text-muted-foreground">Sua mensagem foi enviada com sucesso. Entrarei em contato em breve.</p>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" onClick={handleClose}>
                    Fechar
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
