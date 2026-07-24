// Mentores e professores da página 

import type { Mentor } from "@/types/mentor"; 

export const mentors: Mentor[] = [ 
    { id: "1", name: "Rodolfo Mori", role: "Fundador e mentor", expertise: "Carreira, visão de produto e formação", bio: "Responsável pela direção do ecossistema e pela visão de crescimento dos alunos.", avatar: "/avatars/rodolfo-mori.jpg", company: "DevClub", }, 
    { id: "2", name: "Fernanda Alves", role: "Mentora de Front End", expertise: "Interfaces, UX e performance", bio: "Ajuda alunos a construir interfaces claras, responsivas e profissionais.", avatar: "/avatars/fernanda-alves.jpg", company: "DevClub", }, 
    { id: "3", name: "Henrique Martins", role: "Mentor de Back End", expertise: "APIs, arquitetura e boas práticas", bio: "Focado em estrutura, lógica de negócio e qualidade técnica.", avatar: "/avatars/henrique-martins.jpg", company: "DevClub", }, 
    { id: "4", name: "Juliana Rocha", role: "Mentora de IA e automações", expertise: "Fluxos inteligentes e produtividade", bio: "Mostra como usar IA para acelerar a rotina e os projetos.", avatar: "/avatars/juliana-rocha.jpg", company: "DevClub", }, 
];