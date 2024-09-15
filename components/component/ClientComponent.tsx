"use client";  // Isso é um componente do lado do cliente

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ClientComponent({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Define a duração da animação
      once: true, // Adiciona esta linha para que as animações ocorram apenas uma vez
    });
  }, []);

  return <>{children}</>;
}
