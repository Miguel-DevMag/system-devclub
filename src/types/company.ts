// Tipo das empresas exibidas na seção de autoridade

export interface Company {
  id: string;
  name: string;
  logo: string;
  sector?: string;
}