"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { SVGProps } from 'react';


export function MenuToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    if (targetId === 'home') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false); 
  };

  return (
    <div className="w-full">
      <header className="flex items-center justify-between px-6 py-2 bg-background border-b border-white">
        <button
          className="flex items-center gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="text-lg font-semibold ml-2">Lucas Magalhães</span>
        </button>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 bg-background">
            <nav className="flex flex-col gap-2 p-4">
              <a
                href="#home"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground"
                onClick={handleLinkClick} 
              >
                <HomeIcon className="h-4 w-4" />
                <span className="text-sm">Home</span>
              </a>
              <a
                href="#about"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground"
                onClick={handleLinkClick} 
              >
                <InfoIcon className="h-4 w-4" />
                <span className="text-sm">Sobre</span>
              </a>
              <a
                href="#technologies"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground"
                onClick={handleLinkClick} 
              >
                <ComputerIcon className="h-4 w-4" />
                <span className="text-sm">Tecnologias</span>
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground"
                onClick={handleLinkClick} 
              >
                <ProjectorIcon className="h-4 w-4" />
                <span className="text-sm">Projetos</span>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground"
                onClick={handleLinkClick} 
              >
                <ContactIcon className="h-4 w-4" />
                <span className="text-sm">Contato</span>
              </a>
            </nav>
          </SheetContent>
        </Sheet>
        <nav className="hidden gap-4 lg:flex">
          <button
            className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Home
          </button>
          <Link href="#about" className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground" prefetch={false}>
            Sobre
          </Link>
          <Link href="#technologies" className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground" prefetch={false}>
            Tecnologias
          </Link>
          <Link href="#projects" className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground" prefetch={false}>
            Projetos
          </Link>
          <Link href="#contact" className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground" prefetch={false}>
            Contato
          </Link>
        </nav>
      </header>
    </div>
  );
}



function ComputerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>
  );
}

function ContactIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  );
}

function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function InfoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function ProjectorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 7 3 5" />
      <path d="M9 6V3" />
      <path d="m13 7 2-2" />
      <circle cx="9" cy="13" r="3" />
      <path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" />
      <path d="M16 16h2" />
    </svg>
  );
}

export default MenuToggle;
