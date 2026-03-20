"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { SVGProps } from 'react';

export function MenuToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault();
  const href = e.currentTarget.getAttribute('href');
  const targetId = href?.substring(1);

  // Fecha primeiro, depois rola — evita o focus trap do Radix brigar com o scroll
  setIsOpen(false);

  setTimeout(() => {
    if (!targetId || targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, 300); // 300ms = tempo da animação de fechar o Sheet
};


  const navLinkClass = "relative px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-4";
  return (
    <div className="w-full">
  <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 transition-all duration-300 ${
  scrolled
    ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border'
    : 'bg-background/80 backdrop-blur-md border-b border-border'
}`}>
        <button
          className="flex items-center gap-2 hover:opacity-70 transition-opacity duration-200"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="text-base font-semibold tracking-tight">Lucas Magalhães</span>
        </button>

        {/* Mobile */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden hover:bg-accent transition-colors duration-200">
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 bg-background border-border p-0">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                <span className="text-sm font-semibold">Menu</span>
              </div>
           <nav className="flex flex-col gap-1 p-4 flex-1">
  {[
    { href: '#home', icon: <HomeIcon className="h-4 w-4 shrink-0" />, label: 'Home' },
    { href: '#about', icon: <InfoIcon className="h-4 w-4 shrink-0" />, label: 'Sobre' },
    { href: '#technologies', icon: <ComputerIcon className="h-4 w-4 shrink-0" />, label: 'Tecnologias' },
    { href: '#projects', icon: <ProjectorIcon className="h-4 w-4 shrink-0" />, label: 'Projetos' },
    { href: '#contact', icon: <ContactIcon className="h-4 w-4 shrink-0" />, label: 'Contato' },
  ].map((item) => (
    <a
      key={item.href}
      href={item.href}
      className="group flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent active:scale-95 active:bg-primary/10 active:text-primary transition-all duration-150 select-none"
      onClick={handleLinkClick}
    >
      <span className="text-muted-foreground group-hover:text-primary group-active:text-primary transition-colors duration-150">
        {item.icon}
      </span>
      <span>{item.label}</span>
      <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
    </a>
  ))}
</nav>
              <div className="px-6 py-4 border-t border-border">
                <p className="text-xs text-muted-foreground">Lucas Magalhães</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop */}
        <nav className="hidden gap-1 lg:flex items-center">
          <button className={navLinkClass} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Home
          </button>
          <Link href="#about" className={navLinkClass} prefetch={false}>Sobre</Link>
          <Link href="#technologies" className={navLinkClass} prefetch={false}>Tecnologias</Link>
          <Link href="#projects" className={navLinkClass} prefetch={false}>Projetos</Link>
          <Link href="#contact" className={navLinkClass} prefetch={false}>Contato</Link>
        </nav>
      </header>
    </div>
  );
}

function ComputerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="8" x="5" y="2" rx="2" /><rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" /><path d="M12 18h6" />
    </svg>
  );
}

function ContactIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" /><line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  );
}

function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function InfoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" /><path d="M12 8h.01" />
    </svg>
  );
}

function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function ProjectorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 7 3 5" /><path d="M9 6V3" /><path d="m13 7 2-2" />
      <circle cx="9" cy="13" r="3" />
      <path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" />
      <path d="M16 16h2" />
    </svg>
  );
}

export default MenuToggle;
