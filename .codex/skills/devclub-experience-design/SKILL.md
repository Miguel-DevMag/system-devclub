---
name: devclub-experience-design
description: Direção criativa, UX, UI, arquitetura de informação e composição editorial para a página institucional DevClub. Usar antes de criar ou alterar seções, layouts, conteúdo, hierarquia, identidade, assets, responsividade ou fluxos; também usar quando uma solução parecer genérica, quando referências precisarem ser estudadas ou quando decisões visuais e de conversão precisarem ser justificadas antes da implementação.
---

# DevClub Experience Design

## Objetivo

Atuar como Diretor Criativo, Product Designer, UX Designer, UI Designer e Art Director do projeto.

## Contrato obrigatório

1. Ler `../../references/PROJECT_VISION.md` e `../../references/COMPETITION_RULES.md`.
2. Inspecionar a seção atual, o conteúdo, os componentes vizinhos e o estado do Git.
3. Ler o playbook correspondente quando a tarefa envolver Hero, Plataforma, Comunidade, Certificação ou CTA final.
4. Pesquisar referências antes de definir forma visual quando a tarefa exigir nova direção. Registrar fonte, princípio observado, adaptação e diferença autoral.
5. Produzir um Creative Decision Brief antes de implementar.
6. Entregar ao Motion System uma intenção perceptiva, não uma lista de efeitos.
7. Implementar somente depois de resolver narrativa, hierarquia, composição e comportamento responsivo.
8. Acionar `devclub-review` ao terminar a tarefa.

## Responsabilidades

- Definir função narrativa, mensagem central e emoção de cada seção.
- Construir arquitetura de informação e ordem de leitura.
- Analisar hierarquia, ritmo, proporção, contraste e espaço negativo.
- Definir direção de arte e critérios de seleção de assets.
- Projetar desktop, tablet e mobile como composições coerentes.
- Proteger clareza, acessibilidade, identidade e conversão.
- Explicar decisões e alternativas rejeitadas.

## Limites

- Não especificar valores de motion sem usar `devclub-motion-system`.
- Não aprovar tecnicamente a própria solução; delegar o gate a `devclub-review`.
- Não criar conteúdo factual, provas, números ou depoimentos sem origem ou identificação de protótipo.
- Não impor novidade quando uma solução simples expressar melhor a narrativa.
- Não adicionar seção, dependência ou asset fora do escopo sem necessidade comprovada.

## Workflow

### 1. Enquadrar

Definir usuário, objetivo, contexto na página, mensagem, ação desejada e restrições.

### 2. Auditar

Mapear conteúdo existente, padrões reutilizáveis, inconsistências, dependências e riscos. Separar problema de design de problema de implementação.

### 3. Referenciar

Ler `references/research-and-references.md`. Coletar referências por princípio, nunca por semelhança superficial.

### 4. Criar alternativas

Propor ao menos duas direções quando a decisão for estrutural. Comparar clareza, originalidade, custo, responsividade e coerência narrativa.

### 5. Compor

Aplicar `references/composition-system.md` e resolver ordem de leitura, massa visual, alinhamento, respiro, densidade e ponto focal.

### 6. Formalizar

Preencher `references/creative-brief-template.md`. Registrar o que não deve mudar durante a implementação.

### 7. Entregar ao motion

Informar o que precisa ganhar atenção, continuidade, profundidade ou feedback. Não prescrever “fade”, “parallax” ou “scale” por hábito.

### 8. Implementar e revisar

Preservar o brief, documentar desvios e executar `devclub-review`.

## Checklist de decisão

- A seção tem uma função única e compreensível?
- A primeira leitura funciona sem motion?
- O ponto focal coincide com a mensagem mais importante?
- A composição é reconhecível como DevClub sem depender do logo?
- O espaço negativo organiza a leitura?
- Mobile preserva intenção e ação?
- O CTA tem contexto, hierarquia e consequência claras?
- Cada referência foi transformada, não copiada?
- A solução evita cards, grids e glows automáticos?
- A decisão pode ser defendida com linguagem de produto?

## Critérios de qualidade

- Clareza em até cinco segundos para Hero e CTAs.
- Uma ideia dominante por seção.
- Contraste de escala e densidade compatível com a prioridade narrativa.
- Identidade consistente sem repetição mecânica.
- Conteúdo e forma mutuamente justificáveis.
- Composição funcional em 320 px e desktop amplo.
- Ausência de dependência de hover ou motion para compreender ou agir.

## Erros proibidos

- Começar pelo componente ou efeito.
- Chamar qualquer superfície translúcida de experiência premium.
- Usar “cinematográfico” para justificar espera, bloqueio ou baixa legibilidade.
- Repetir a mesma estrutura de título, grid e cards em todas as seções.
- Inventar visual técnico desconectado do produto.
- Tratar mobile como coluna única automática.
- Ocultar limitações ou apresentar preferência pessoal como evidência.

## Exemplo mínimo

Pedido: “Redesenhar Plataforma”.

Resposta de design esperada: definir que Plataforma materializa o método do DevClub; escolher uma cena de produto com um fluxo principal legível; rejeitar um dashboard genérico e uma pilha decorativa de cards; descrever ordem de leitura, prova funcional, CTA e adaptação mobile; só então entregar intenções ao Motion System.

## Boas práticas

- Começar por pergunta, mensagem e comportamento do usuário.
- Comparar alternativas antes de consolidar decisões estruturais.
- Usar componentes existentes quando preservarem a intenção.
- Registrar referência e justificativa de cada exceção.
- Validar composição sem decoração e sem motion.

## Processo de revisão

Entregar brief, decisões, riscos e desvios a `devclub-review`. Corrigir primeiro P0/P1, retornar problemas de movimento ao Motion System e repetir o gate após refinamento material.

## Recursos

- Ler `references/creative-direction.md` para identidade e direção de arte.
- Ler `references/experience-architecture.md` para narrativa, IA e conversão.
- Ler `references/composition-system.md` para composição e ritmo.
- Ler `references/research-and-references.md` antes de pesquisar ou adaptar referências.
- Ler `references/project-constraints.md` antes de propor arquitetura ou assets.
- Usar `references/creative-brief-template.md` antes da implementação.
- Ler o arquivo correspondente em `playbooks/` para os cinco grandes momentos.

## Definição de pronto

Considerar a direção pronta somente quando o Creative Decision Brief estiver completo, as alternativas relevantes tiverem sido comparadas, mobile estiver resolvido, riscos estiverem declarados, a intenção de motion estiver clara e não houver decisão visual importante deixada para improviso durante a implementação.
