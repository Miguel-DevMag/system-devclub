// Tipo dos professores e mentores

export interface Mentor {
  id: string;
  name: string;
  role: string;
  expertise: string;
  bio: string;
  avatar: string;
  company?: string;
}