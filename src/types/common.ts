// Tipos base compartilhados pelo projeto

export type Id = string;

export type Maybe<T> = T | null | undefined;

export interface BaseItem {
  id: Id;
  title: string;
  description?: string;
}