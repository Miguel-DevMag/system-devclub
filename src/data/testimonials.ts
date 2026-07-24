// Depoimentos fictícios da comunidade 

import type { Testimonial } from "@/types/testimonial"; 

export const testimonials: Testimonial[] = [ 
    { id: "1", name: "Marina Costa", role: "Front-End Developer", location: "Recife/PE", quote: "Entrei sem base e consegui entender o caminho com muito mais clareza. O suporte mudou tudo.", avatar: "/avatars/marina-costa.jpg", result: "Conseguiu a primeira vaga em produto digital.", }, 
    { id: "2", name: "Rafael Lima", role: "Full Stack Student", location: "São Paulo/SP", quote: "A organização das trilhas e o acompanhamento semanal fizeram diferença na minha consistência.", avatar: "/avatars/rafael-lima.jpg", result: "Montou portfólio e passou em processo seletivo.", }, 
    { id: "3", name: "Juliana Souza", role: "Data Analyst", location: "Belo Horizonte/MG", quote: "Foi a primeira vez que senti que estava estudando com direção de verdade, não só consumindo conteúdo.", avatar: "/avatars/juliana-souza.jpg", result: "Migrando para área de dados com segurança.", }, 
];