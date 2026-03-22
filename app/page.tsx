import React from 'react';
import Image from 'next/image';
import './globals.css';
import { Database, GitBranch, GitlabIcon, Hash, Waypoints, Layers, Cloud, ShieldCheck, Download, ArrowRight } from 'lucide-react';
import ScrollToTopButton from '@/components/ui/ScrollToTopButton';
import MenuToggle from '@/components/ui/MenuToggle';
import ContactForm from "@/components/ui/ContactForm";
import { SiTypescript } from 'react-icons/si';
import { Sora } from 'next/font/google';

const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });

const Page = () => {
  return (
    <main className={sora.variable}>
      <div className="flex flex-col min-h-screen">

        {/* HEADER */}
        <MenuToggle />

        <div id="home" className="flex flex-col min-h-[100dvh] pt-14">

          {/* HERO */}
          <section className="w-full min-h-[85vh] bg-gradient-to-br from-[#0a0a0a] via-[#0d1b2a] to-[#0077b6] relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />

            <div
              className="container px-4 md:px-6 flex flex-col items-center justify-center text-center mx-auto max-w-[700px] relative z-10"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="flex items-center gap-3 mb-8" data-aos="fade-down" data-aos-delay="100">
                <div className="h-px w-12 bg-primary/60" />
                <span className="text-primary/80 text-xs font-mono uppercase tracking-[0.3em]">
                  Backend Developer
                </span>
                <div className="h-px w-12 bg-primary/60" />
              </div>

              <h1
                className="[font-family:var(--font-sora)] text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl text-white leading-tight"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Olá, eu sou o{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">
                  Lucas
                </span>
              </h1>

              <p
                className="text-base sm:text-lg text-white/50 mt-6 max-w-[480px] leading-relaxed font-light"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Conheça mais sobre{' '}
                <span className="text-white/80 font-medium">mim, tecnologias e projetos</span>
              </p>

              <div className="mt-16 flex flex-col items-center gap-2" data-aos="fade-up" data-aos-delay="800">
                <span className="text-white/20 text-xs tracking-widest uppercase font-mono mb-1">scroll</span>
                <div className="flex flex-col items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                    className="text-white/40 animate-bounce"
                  >
                    <path d="M12 5v14" />
                    <path d="m19 12-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-5xl mx-auto">
              <div data-aos="fade-right" data-aos-duration="1500" className="justify-self-center md:justify-self-end">
                <div className="relative group">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary/50 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                  <Image
                    src="/Perfil.png"
                    width={400} height={400}
                    alt="Profile Photo"
                    className="relative rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="space-y-6" data-aos="fade-left" data-aos-duration="1500">
                <div>
                  <h2 className="[font-family:var(--font-sora)] text-3xl font-bold mt-1">Sobre</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Ingressei no mundo da programação na faculdade, há mais de 4 anos, quando fui
                  introduzido ao Front-End e outras áreas. Desde então, busco conhecimento e
                  aprendizado para crescer mais a cada dia no desenvolvimento, com foco no
                  Back-End. Ao longo da minha trajetória, trabalhei com linguagens como C# e
                  TypeScript.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Recentemente, concluí o Bacharelado em Ciência da Computação pelo IFC e
                  aprimoro continuamente minha proficiência no ecossistema .NET. Meu foco está
                  no desenvolvimento de aplicações eficientes e escaláveis, com arquiteturas
                  monolíticas e microsserviços. Busco aplicar meus conhecimentos com dedicação,
                  priorizando qualidade, boas práticas e integridade no trabalho.
                </p>
                <a
                  className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  href="/Lucas_Magalhaes_CV.pdf"
                  download
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  data-aos-duration="1500"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Currículo
                </a>
              </div>
            </div>
          </section>

          {/* TECHNOLOGIES */}
          <section id="technologies" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container max-w-5xl mx-auto px-4 md:px-6 text-center">
              <div className="space-y-4 text-center mb-12">
                <h2
                  className="[font-family:var(--font-sora)] text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Stack
                </h2>
                <p className="text-muted-foreground max-w-[600px] mx-auto" data-aos="fade-up" data-aos-delay="200">
                  Tecnologias e ferramentas que utilizo para construir aplicações robustas e escaláveis.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
                {[
                  {
                    icon: <Hash className="w-8 h-8" />,
                    name: 'C#',
                    description: 'Minha linguagem principal. Desenvolvo no ecossistema .NET há mais de 3 anos, APIs, microsserviços e sistemas de gestão em projetos profissionais e pessoais.'
                  },
                  {
                    icon: <SiTypescript className="w-8 h-8" />,
                    name: 'TypeScript',
                    description: 'Uso com Next.js para tipagem e segurança no desenvolvimento. Tive contato direto em experiências profissionais, cobrindo toda a camada back-end.'
                  },
                  {
                    icon: <Waypoints className="w-8 h-8" />,
                    name: 'Mensageria & Events',
                    description: 'Utilizo RabbitMQ para comunicação assíncrona entre microsserviços. Já implementei integração com webhooks e filas em produção, automatizando cobranças e confirmações.'
                  },
                  {
                    icon: <Layers className="w-8 h-8" />,
                    name: 'Arquitetura & Design',
                    description: 'Clean Architecture, DDD, CQRS, SOLID e Design Patterns aplicados desde o System Design até a separação em microsserviços. Foco em organização, manutenibilidade e escalabilidade.'
                  },
                  {
                    icon: <Database className="w-8 h-8" />,
                    name: 'Banco de Dados',
                    description: 'PostgreSQL e SQL Server como relacionais principais. MongoDB e Redis para cenários NoSQL e cache — com atenção a modelagem e performance.'
                  },
                  {
                    icon: <GitBranch className="w-8 h-8" />,
                    name: 'Git & CI/CD',
                    description: 'Git e GitHub no dia a dia. Experiência com GitHub Actions para pipelines de CI/CD, automatizando builds, testes e deploys de forma contínua.'
                  },
                  {
                    icon: <Cloud className="w-8 h-8" />,
                    name: 'Cloud & DevOps',
                    description: 'Conhecimento em AWS e Azure. Docker para containerização de serviços integrado aos pipelines de entrega.'
                  },
                  {
                    icon: <ShieldCheck className="w-8 h-8" />,
                    name: 'Testes & Obs.',
                    description: 'xUnit e Testcontainers para testes unitários e de integração. Serilog com Grafana para monitoramento e observabilidade em produção.'
                  }
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="group flex flex-col items-center text-center bg-background border border-border hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 rounded-xl cursor-default"
                    data-aos="zoom-in"
                    data-aos-delay={index * 80}
                  >
                    <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 p-3 rounded-xl mb-4 flex items-center justify-center">
                      {tech.icon}
                    </div>
                    <h3 className="[font-family:var(--font-sora)] text-sm font-bold mb-2 min-h-[2.5rem] flex items-center justify-center leading-tight">
                      {tech.name}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container max-w-5xl mx-auto px-4 text-center">
              <div className="space-y-3 mb-12">
                <h2
                  className="[font-family:var(--font-sora)] text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Portfólio
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground" data-aos="fade-up" data-aos-delay="200">
                  Alguns dos projetos em que trabalhei e suas tecnologias.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Big */}
                <div
                  className="group rounded-xl border border-border bg-card text-card-foreground shadow-sm flex flex-col hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  data-aos="fade-up" data-aos-duration="800"
                >
                  <div className="overflow-hidden rounded-t-xl">
                    <Image src="/Home.png" width={400} height={225} alt="Big"
                      className="object-cover w-full group-hover:scale-105 transition-transform duration-500"
                      style={{ aspectRatio: '400 / 225', objectFit: 'cover' }} />
                  </div>
                  <div className="p-5 flex-1">
                    <h3 className="[font-family:var(--font-sora)] text-lg font-bold mb-2">Big</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Sistema de gestão comercial para controle de clientes, vendedores e produtos.
                      Permite registrar pedidos, acompanhar vendas e gerar relatórios de desempenho.
                      Desenvolvido em C# e .NET com foco em organização de dados e fluxo operacional.
                    </p>
                  </div>
                  <div className="p-5 mt-auto">
                    <a className="inline-flex h-9 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 hover:scale-[1.02]"
                      href="https://github.com/Lucas-magalhaes1/Big" target="_blank" rel="noopener noreferrer">
                      <GitlabIcon className="mr-2 h-4 w-4" /> Ver Projeto
                    </a>
                  </div>
                </div>

                {/* DIMA */}
                <div
                  className="group rounded-xl border border-border bg-card text-card-foreground shadow-sm flex flex-col hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  data-aos="fade-up" data-aos-duration="800" data-aos-delay="100"
                >
                  <div className="overflow-hidden rounded-t-xl">
                    <Image src="/DimaApp.png" width={400} height={225} alt="DIMA"
                      className="object-cover w-full group-hover:scale-105 transition-transform duration-500"
                      style={{ aspectRatio: '400 / 225', objectFit: 'cover' }} />
                  </div>
                  <div className="p-5 flex-1">
                    <h3 className="[font-family:var(--font-sora)] text-lg font-bold mb-2">DIMA</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Aplicativo de controle financeiro pessoal com dashboard interativo, gráficos de gastos
                      e integração com Stripe para pagamentos. Construído com C#, Minimal APIs,
                      MudBlazor e autenticação via ASP.NET Identity.
                    </p>
                  </div>
                  <div className="p-5 mt-auto">
                    <a className="inline-flex w-full h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 hover:scale-[1.02]"
                      href="https://github.com/Lucas-magalhaes1/Dima" target="_blank" rel="noopener noreferrer">
                      <GitlabIcon className="mr-2 h-4 w-4" /> Ver Projeto
                    </a>
                  </div>
                </div>

                {/* DecimalToIntegerConverter */}
                <div
                  className="group rounded-xl border border-border bg-card text-card-foreground shadow-sm flex flex-col hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  data-aos="fade-up" data-aos-duration="800" data-aos-delay="200"
                >
                  <div className="overflow-hidden rounded-t-xl">
                    <Image src="/DecimalToInteger.png" width={400} height={225} alt="DecimalToIntegerConverter"
                      className="object-cover w-full group-hover:scale-105 transition-transform duration-500"
                      style={{ aspectRatio: '400 / 225', objectFit: 'cover' }} />
                  </div>
                  <div className="p-5 flex-1">
                    <h3 className="[font-family:var(--font-sora)] text-lg font-bold mb-2">DecimalToIntegerConverter</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Biblioteca .NET publicada no NuGet com mais de 450 downloads. Converte valores
                      decimais em inteiros com precisão, evitando erros de arredondamento em cenários
                      financeiros. Compatível com .NET 9+.
                    </p>
                  </div>
                  <div className="p-5 mt-auto">
                    <a className="inline-flex w-full h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 hover:scale-[1.02]"
                      href="https://www.nuget.org/packages/DecimalToIntegerConverter" target="_blank" rel="noopener noreferrer">
                      <GitlabIcon className="mr-2 h-4 w-4" /> Ver no NuGet
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <ContactForm />
          <ScrollToTopButton />

          <footer className="bg-black text-white py-8 border-t border-white/10">
            <div className="container mx-auto px-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <p className="text-xs text-white/40">
                &copy; {new Date().getFullYear()}{' '}
                <span className="text-white/70 font-medium">Lucas Magalhães</span>
                {' '}— Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-3">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Lucas-magalhaes1"
                  className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-200" title="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lucasmagalhaes11"
                  className="p-2 rounded-lg text-white/40 hover:text-[#0077b5] hover:bg-white/10 hover:scale-110 transition-all duration-200" title="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </main>
  );
};

export default Page;
