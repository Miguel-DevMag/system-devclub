# DevClub Page

Landing page institucional do DevClub, pronta para publicação estática na Vercel.

## Stack

React 19, TypeScript, Vite 8, Tailwind CSS 4, Motion e Lucide.

## Decisões técnicas

- Site estático: `npm run build` gera `dist`, definido explicitamente em `vercel.json`.
- Node 24 é declarado em `package.json` para manter o ambiente de build da Vercel previsível.
- Navegação é feita por âncoras, sem necessidade de rotas ou regras de rewrite.

## Motion

As transições e entradas usam `motion/react`, com animações ativadas conforme cada seção entra na viewport.

## Organização

- `src/components`: layout, seções, componentes compartilhados e UI.
- `src/data` e `src/constants`: conteúdo e configurações isolados da apresentação.
- `src/hooks`, `src/types` e `src/experience`: comportamento reutilizável, tipos e elementos visuais.

## Comandos

```bash
npm run build
npm run preview
```
