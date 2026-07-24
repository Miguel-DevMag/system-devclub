// Projetos fictícios para a seção de trabalhos reais 

import type { Project } from "@/types/project"; 

export const projects: Project[] = [ 
    { id: "1", title: "Pulse Dashboard", description: "Dashboard financeiro com métricas em tempo real e experiência premium.", stack: ["React", "TypeScript", "Tailwind", "Motion"], image: "/images/project-pulse-dashboard.jpg", }, 
    { id: "2", title: "Orbit Academy", description: "Plataforma educacional com trilhas, aulas e progresso visual.", stack: ["React", "Vite", "shadcn/ui", "API"], image: "/images/project-orbit-academy.jpg", }, 
    { id: "3", title: "Nexa Flow", description: "Sistema de automações para processos internos de uma startup fictícia.", stack: ["Node.js", "N8N", "TypeScript"], image: "/images/project-nexa-flow.jpg", }, 
    { id: "4", title: "Atlas Commerce", description: "Interface de e-commerce com foco em conversão e performance.", stack: ["React", "Framer Motion", "Tailwind"], image: "/images/project-atlas-commerce.jpg", }, 
];