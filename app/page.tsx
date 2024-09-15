import React from 'react';
import Image from 'next/image';
import './globals.css';
import { Code, Coffee, Database, Figma, FileCode, FileJson, GitBranch, GitlabIcon, Hash } from 'lucide-react';
import ScrollToTopButton from '@/components/ui/ScrollToTopButton';
import MenuToggle from '@/components/ui/MenuToggle';
import ContactForm from "@/components/ui/ContactForm";


const Page = () => {
  return (
    <main>
      <div className="flex flex-col min-h-screen">
        <header className="w-full bg-background shadow-md sticky top-0 z-50">
          <nav className="">

            <MenuToggle />

          </nav>
        </header>
        <div id="home" className="flex flex-col min-h-[100dvh]">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-[#0077b6] to-[#00b894]">
            <div
              className="container px-4 md:px-6 flex flex-col items-center justify-center text-center text-primary-foreground mx-auto max-w-[700px]"
              data-aos="fade-up" 
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
                Olá!
              </h1>
              <h2
                className="text-2xl sm:text-4xl md:text-5xl mt-4 font-semibold"
                data-aos="fade-in" 
                data-aos-delay="1000" 
                data-aos-duration="1500" 
              >
                Meu nome é Lucas, sou um desenvolvedor Full-Stack
              </h2>
            </div>
          </section>
          <section id="about" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div data-aos="fade-right" data-aos-duration="1500">
                <Image
                  src="/foto.jpeg"
                  width={500}
                  height={500}
                  alt="Profile Photo"
                  className="rounded-xl"
                  style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
                />
              </div>
              <div className="space-y-4" data-aos="fade-left" data-aos-duration="1500">
                <div>
                  <h2 className="text-3xl font-bold">Sobre mim</h2>
                  <p className="text-muted-foreground mt-2">
                    Ingressei no mundo da programação na faculdade, há mais de 3 anos, quando fui introduzido ao Front-End e outras áreas. Desde então, busco conhecimento e aprendizado para crescer mais a cada dia no desenvolvimento, com foco no Back-End. Ao longo da minha trajetória, desenvolvi aplicações com linguagens como C#, JavaScript e Java.
                  </p>
                  <br />
                  <p>Atualmente cursando Bacharelado em Ciência da Computação, enquanto aprimoro ativamente minha proficiência em C#, com foco na utilização de seus recursos para o desenvolvimento eficiente e escalável de aplicações. Busco aplicar meus conhecimentos, mantendo sempre o foco, qualidade e integridade em meu trabalho.</p>
                </div>
                <div>
                  <a
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    href="#"
                    data-aos="zoom-in"
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
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" x2="12" y1="15" y2="3"></line>
                    </svg>
                    Download Currículo
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section id="technologies" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container max-w-5xl mx-auto px-4 md:px-6 text-center text-muted-foreground">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold" data-aos="fade-up">
                  Tecnologias
                </h2>
                <p className="text-muted-foreground max-w-[700px] mx-auto" data-aos="fade-up" data-aos-delay="200">
                  Tenho experiência em trabalhar com uma variedade de tecnologias e ferramentas de back-end e Front-end para construir aplicações robustas e escaláveis.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 mt-8">
                {[
                  { icon: <Hash className="w-12 h-12" />, name: 'C#', description: 'Tenho um sólido entendimento da linguagem C# e especialização em aplicações robustas e eficientes. Atualmente, desenvolvo o projeto "DistribuiPlus".' },
                  { icon: <Coffee className="w-12 h-12" />, name: 'Java', description: 'Onde aprendi e apliquei os principais conceitos de POO, aprimorando habilidades em design e estrutura de código, incluindo a implementação de uma aplicação para sistemas lineares.' },
                  { icon: <FileCode className="w-12 h-12" />, name: 'C', description: 'Linguagem utilizada em algumas matérias da faculdade, essencialmente para entendimento de conceitos gerais como estruturas de dados e algoritmos, tais como árvores, tabelas hash e grafos.' },
                  { icon: <Code className="w-12 h-12" />, name: 'HTML & CSS', description: 'Onde eu adquiri grande parte do interesse pelo desenvolvimento web. Possuo mais de 3 anos de experiência com ambas, onde eu usei-as para criar trabalhos da faculdade, projetos e aplicações responsivas.' },
                  { icon: <FileJson className="w-12 h-12" />, name: 'JavaScript', description: 'Especialização no desenvolvimento de aplicações web modernas e dinâmicas, e amplamente utilizada na maioria dos meus projetos, juntamente com JQuery.' },
                  { icon: <GitBranch className="w-12 h-12" />, name: 'Git', description: 'Uso Git para controle de versão, facilitando a colaboração e o gerenciamento de código em meus projetos. Tenho experiência em branches, merges e resolução de conflitos.' },
                  { icon: <Database className="w-12 h-12" />, name: 'SQL', description: 'Banco de dados relacionais que mais utilizo para otimizar consultas, além de estruturar e manipular dados para apoiar o desenvolvimento e a análise dos meus projetos.' },
                  { icon: <Figma className="w-12 h-12" />, name: 'Figma', description: 'Utilizo o Figma para prototipar projetos, criar interfaces de usuário e desenvolver layouts interativos, tanto colaborando com equipes quanto de forma independente.' },

                ].map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center bg-muted p-4 rounded-lg h-full"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <div className="bg-muted p-4 rounded-full mb-4 flex items-center justify-center">
                      {tech.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container max-w-7xl mx-auto px-4 text-center">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projetos</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Aqui estão alguns dos projetos em que trabalhei e suas tecnologias.
                </p>
                <br />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-aos="fade-up" data-aos-duration="2000">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <Image
                      src="/Captura de tela 2024-08-27 201037.png"
                      width="400"
                      height="225"
                      alt="Project 1"
                      className="rounded-t-lg object-cover"
                      style={{ aspectRatio: '400 / 225', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold">DistribuiPlus</h3>
                    <br />
                    <p className="text-muted-foreground">Sistema para gerenciar distribuidoras de alimentos, cobrindo vendas, estoque, emissão de notas fiscais e roteirização de entregas. Desenvolvido com C# e .NET.</p>
                  </div>
                  <div className="items-center p-6 flex justify-end">
                    <a
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      href="https://github.com/Lucas-magalhaes1/DistribuiPlus"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitlabIcon className="mr-2 h-5 w-5" />
                      Ver Projeto
                    </a>
                  </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-aos="fade-up" data-aos-duration="2000">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <Image
                      src="/Screenshot App.png"
                      width="400"
                      height="225"
                      alt="Project 2"
                      className="rounded-t-lg object-cover"
                      style={{ aspectRatio: '400 / 225', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold">BarberShop</h3>
                    <br />
                    <p className="text-muted-foreground">Plataforma desenvolvida com Node.js e MongoDB para otimizar agendamentos e gerenciamento de serviços em barbearias.</p>
                    <br />
                  </div>
                  <div className="items-center p-6 flex justify-end">
                    <a
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      href="https://github.com/Lucas-magalhaes1/BarberShop"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitlabIcon className="mr-2 h-5 w-5" />
                      Ver Projeto
                    </a>
                  </div>
                </div>

                <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-aos="fade-up" data-aos-duration="2000">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <Image
                      src="/Captura de tela 2024-08-27 211438.png"
                      width="400"
                      height="225"
                      alt="Project 3"
                      className="rounded-t-lg object-cover"
                      style={{ aspectRatio: '400 / 225', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold">API DistribuiPlus </h3>
                    <br />
                    <p className="text-muted-foreground">API da DistribuiPlus para otimização de rotas de entrega, calculando as trajetórias mais eficientes e econômicas para gerenciar a logística e reduzir custos. <br /> (Em desenvolvimento)</p>
                  </div>
                  <div className="items-center p-6 flex justify-end">
                    <a
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      href="#"
                    >
                      <GitlabIcon className="mr-2 h-5 w-5" />
                      Ver Projeto
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ContactForm />
          <ScrollToTopButton />
          <footer className="bg-black text-white py-8 sm:py-12">
            <div className="container mx-auto flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
              <p className="text-sm sm:order-1 sm:self-start"> &copy; <span className="text-gray-400">Todos os direitos reservados a</span> <span className="font-semibold text-white">Lucas Magalhães</span>.</p>
              <div className="flex justify-center gap-4 sm:order-3 sm:self-end">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Lucas-magalhaes1"
                  className="text-gray-400 hover:text-white"
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
                    className="w-5 h-5"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/lucas-magalhães-702684291"
                  className="text-gray-400 hover:text-white"
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
                    className="w-5 h-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
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
