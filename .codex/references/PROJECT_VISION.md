# Visão do Projeto DevClub

## Sumário

- [Propósito](#propósito)
- [Promessa central](#promessa-central)
- [Percepção desejada](#percepção-desejada)
- [Princípios inegociáveis](#princípios-inegociáveis)
- [Narrativa em três atos](#narrativa-em-três-atos)
- [Hierarquia de momentos](#hierarquia-de-momentos)
- [Linguagem visual](#linguagem-visual)
- [Voz e conteúdo](#voz-e-conteúdo)
- [Arquitetura técnica vigente](#arquitetura-técnica-vigente)
- [Critério de sucesso](#critério-de-sucesso)
- [Fontes internas relacionadas](#fontes-internas-relacionadas)

## Propósito

Construir uma página institucional autoral que apresente o DevClub como um ecossistema de transformação profissional, não como um catálogo de cursos. A experiência deve unir clareza comercial, direção de arte, narrativa, interação e excelência técnica suficiente para uma entrega de concurso e para defesa em entrevista.

## Promessa central

Transformar aprendizado em carreira real por meio de formação estruturada, prática, comunidade, mentoria e proximidade com o mercado.

## Percepção desejada

Fazer a pessoa perceber, nesta ordem:

1. O DevClub tem identidade e cuidado real.
2. Existe um caminho compreensível entre começar e evoluir.
3. O ecossistema é vivo, útil e confiável.
4. A proposta oferece valor além de aulas gravadas.
5. Vale a pena explorar e dar o próximo passo.

## Princípios inegociáveis

- Priorizar entendimento antes de espetáculo.
- Criar impacto por composição, narrativa e precisão, não por volume de efeitos.
- Tratar espaço negativo, tipografia e ritmo como elementos ativos.
- Fazer cada grande seção cumprir uma função distinta na jornada.
- Reservar protagonismo máximo para Hero, Plataforma, Comunidade e CTA final.
- Tornar Certificação um marco de conquista, não um card dourado decorativo.
- Usar motion para revelar relações, estados, direção e profundidade.
- Preservar conteúdo e ações essenciais sem depender de animação.
- Projetar mobile como composição própria, não como desktop comprimido.
- Manter todas as decisões explicáveis e sustentáveis tecnicamente.

## Narrativa em três atos

### Ato 1 — Descoberta

Apresentar a promessa, definir a linguagem e construir credibilidade.

- Hero
- Quem é o DevClub
- Autoridade e empresas
- Formações

### Ato 2 — Imersão

Demonstrar como o sistema funciona e fazer o ecossistema parecer vivo.

- Tecnologias
- Ecossistema
- Plataforma
- Projetos
- Comunidade

### Ato 3 — Transformação

Provar valor, humanizar, reduzir risco e conduzir à ação.

- Depoimentos
- Mentores
- Bônus
- Certificação
- FAQ
- CTA final
- Footer

## Hierarquia de momentos

### Nível A — momentos memoráveis

- Hero: abrir o universo e comunicar a proposta imediatamente.
- Plataforma: materializar o produto e o método.
- Comunidade: demonstrar presença, colaboração e pertencimento.
- CTA final: concentrar confiança e decisão.

### Nível B — marcos de valor

- Formações
- Projetos
- Mentores
- Certificação

### Nível C — sustentação

- About
- Autoridade
- Tecnologias
- Ecossistema
- Depoimentos
- Bônus
- FAQ
- Footer

Seções de nível C devem sustentar ritmo e clareza; não competir por atenção com o nível A.

## Linguagem visual

- Escura, editorial e tecnológica.
- Ciano e violeta como energia e profundidade, não como preenchimento automático.
- Verde para estados positivos e presença; dourado apenas para conquista especial.
- Tipografia forte, curta e com contraste de escala.
- Superfícies e bordas discretas; glass somente quando expressar camada ou contexto.
- Atmosfera controlada por poucas fontes de luz coerentes.
- Elementos técnicos usados quando explicam o produto, não para simular complexidade.

## Voz e conteúdo

- Escrever em português brasileiro claro, confiante e direto.
- Evitar superlativos vazios, jargão corporativo e frases intercambiáveis.
- Demonstrar transformação com mecanismos e evidências, não apenas promessas.
- Identificar conteúdo fictício ou ilustrativo durante desenvolvimento e revisão.
- Não apresentar números, empresas ou depoimentos inventados como prova real em entrega pública.

## Arquitetura técnica vigente

- React 19, TypeScript, Vite 8 e Tailwind CSS 4.
- Motion por `motion/react`.
- Base UI/shadcn para primitivos acessíveis.
- Conteúdo em `src/data`, contratos em `src/types` e configuração em `src/config` ou `src/constants`.
- Seções em `src/components/sections`.
- Componentes reutilizáveis em `src/components/shared` e `src/components/layout`.
- Atmosfera e transições compartilhadas em `src/experience` somente quando realmente reutilizadas.
- Não introduzir Canvas, WebGL ou Three.js.

## Critério de sucesso

Considerar a página bem-sucedida quando ela for simultaneamente:

- compreensível em poucos segundos;
- distintiva sem depender de novidade gratuita;
- coerente de ponta a ponta;
- responsiva e acessível;
- fluida em dispositivos plausíveis;
- convincente como experiência institucional;
- fácil de manter e defender tecnicamente.

## Fontes internas relacionadas

Consultar também:

- `src/docs/MASTER_PROMPT.md`
- `src/docs/DevClub_Experience_Blueprint.md`
- `src/docs/DEVCLUB_EXECUTION_MAP.md`
- `src/docs/DESIGN_SYSTEM.md`
- `.codex/references/COMPETITION_RULES.md`

Se houver conflito, aplicar nesta ordem: pedido atual do usuário, regras do ambiente, `COMPETITION_RULES.md`, este documento, documentos legados em `src/docs`.
