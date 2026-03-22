"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogClose } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { CircleCheckIcon, Github, Linkedin, Mail, Send } from "lucide-react";
import { Sora } from 'next/font/google';

const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });

const fieldStyle: React.CSSProperties = {
  backgroundColor: 'transparent',
  color: 'white',
  borderColor: 'rgba(255,255,255,0.2)',
};

const fieldClass = "flex w-full rounded-md border px-3 py-2 text-sm placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all duration-200";

const ContactForm: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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

  return (
    <section
      id="contact"
      className={`${sora.variable} w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#0a0a0a] via-[#0d1b2a] to-[#0077b6] relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-2xl px-4 md:px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="[font-family:var(--font-sora)] text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Contato
          </h2>
          <p className="text-white/60 mt-3 max-w-[500px] mx-auto">
            Fique à vontade para me enviar uma mensagem. 
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <a
              href="mailto:lucasmagalhaes728@gmail.com"
              className="p-3 rounded-xl border border-white/20 bg-white/10 text-white/60 hover:text-[#EA4335] hover:bg-white/20 hover:border-[#EA4335]/50 hover:scale-110 transition-all duration-200"
              title="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/lucasmagalhaes11"
              target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-xl border border-white/20 bg-white/10 text-white/60 hover:text-[#0077b5] hover:bg-white/20 hover:border-[#0077b5]/50 hover:scale-110 transition-all duration-200"
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/Lucas-magalhaes1"
              target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-xl border border-white/20 bg-white/10 text-white/60 hover:text-white hover:bg-white/20 hover:border-white/40 hover:scale-110 transition-all duration-200"
              title="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Formulário */}
        {!open && (
          <form
            action="https://formspree.io/f/xnnaleop"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-4"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80" htmlFor="name">Nome</label>
                <input
                  className={`${fieldClass} h-10`}
                  style={fieldStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  id="name" name="name"
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80" htmlFor="subject">Assunto</label>
                <input
                  className={`${fieldClass} h-10`}
                  style={fieldStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  id="subject" name="subject"
                  placeholder="Assunto"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80" htmlFor="email">Email</label>
              <input
                className={`${fieldClass} h-10`}
                style={fieldStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
                id="email" name="email"
                type="email"
                placeholder="Seu email"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80" htmlFor="message">Mensagem</label>
              <textarea
                className={`${fieldClass} min-h-[150px] resize-none`}
                style={fieldStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
                id="message" name="message"
                placeholder="Sua mensagem"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 hover:scale-[1.02] disabled:opacity-50 disabled:pointer-events-none"
            >
              <Send className="h-4 w-4" />
              {loading ? "Enviando..." : "Enviar mensagem"}
            </button>
          </form>
        )}

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-[425px] mx-auto">
            <div className="flex flex-col items-center justify-center gap-4 py-8">
              <CircleCheckIcon className="size-12 text-green-500" />
              <div className="space-y-2 text-center">
                <h3 className="[font-family:var(--font-sora)] text-lg font-medium">Sucesso!</h3>
                <p className="text-muted-foreground">
                  Sua mensagem foi enviada com sucesso. Entrarei em contato em breve.
                </p>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" onClick={() => setOpen(false)}>Fechar</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

      </div>
    </section>
  );
};

export default ContactForm;
