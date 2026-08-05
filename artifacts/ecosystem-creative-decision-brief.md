# Creative Decision Brief — Ecossistema

## Contexto

- Tarefa: reconstruir completamente a seção Ecossistema.
- Seção e ato narrativo: primeira resposta ao Hero, no início do ato de imersão.
- Usuário e intenção provável: entender se existe uma estrutura real para transformar estudo em carreira.
- Estado atual: parede de logos e métricas, sem relação espacial clara e com alegações sem fonte.
- Restrições: React, Motion, SVG e CSS; somente assets locais; sem cards, dashboard, Canvas, WebGL, vídeos, dependências ou números inventados.

## Problema

- Pergunta: “O que trabalha junto para eu não precisar construir uma carreira sozinho?”
- Fricção: elementos distribuídos comunicam catálogo e associação de marcas, não ecossistema.
- Consequência: a página perde a oportunidade de explicar o mecanismo DevClub antes de apresentar a plataforma.

## Direção

- Mensagem central: sua carreira não se constrói sozinha.
- Emoção: amparo com precisão; um sistema humano e tecnológico que já tem direção.
- Ideia dominante: **Campo de continuidade** — DevClub como núcleo que conecta pessoas, repertório, prática, plataforma e contexto profissional.
- Ponto focal: núcleo DevClub, com o logotipo real e a frase “formação conectada”.
- Ordem de leitura: afirmação editorial → núcleo → relações → nota de transparência → ponte para a plataforma.
- Composição: mapa assimétrico com oito relações; o topo reúne repertório técnico, a esquerda reúne pessoas, a base converte aprendizado em execução e a direita aponta para o mercado.
- Espaço negativo: separa famílias, mantém o núcleo legível e impede a sensação de painel.
- Prova/mecanismo: verbos em cada conexão explicam o papel de professores, comunidade, tecnologias, IA, infraestrutura, prática, plataforma e referências do mercado.
- CTA: não há CTA comercial; a saída textual prepara a Plataforma como lugar onde a rede ganha rotina.

## Alternativas

| Alternativa | Benefício | Risco | Decisão |
|---|---|---|---|
| A — Órbita radial | Centro evidente e impacto rápido | Órbitas sugerem decoração ou dependência equivalente entre tudo | Rejeitada |
| B — Campo de continuidade assimétrico | Relações ganham direção e significado; permite composição mobile própria | Exige precisão de posicionamento e adaptação responsiva | Escolhida |
| C — Parede editorial de marcas | Implementação simples e grande repertório visual | Repete o problema atual e sugere parcerias | Rejeitada |

## Referências consultadas em 2026-08-04

| Fonte | Princípio | Adaptação DevClub | O que não copiar |
|---|---|---|---|
| Apple Continuity — https://www.apple.com/br/macos/continuity/ | Partes autônomas ficam mais valiosas quando a continuidade entre elas é demonstrada | Cada nó explica o que entrega ao percurso, e não apenas sua existência | Copy, cenas de dispositivos e layout de capítulos |
| Linear — https://linear.app/homepage | Um sistema complexo pode ser explicado por relações e verbos operacionais claros | Conexões recebem verbos como orienta, organiza e contextualiza | Interfaces, numeração de figuras e estética de produto Linear |
| Notion — https://www.notion.com/product/notion | Componentes diferentes ganham sentido como workspace conectado | A plataforma é apresentada como uma parte do campo, não como o ecossistema inteiro | Grade de casos de uso e blocos de produto |
| Framer — https://www.framer.com/solutions/ui-ux-design/ | Interação, layout e breakpoints precisam existir no mesmo raciocínio | Mobile reconstrói o mapa como sequência editorial tocável | Canvas, UI do editor e linguagem de marketing |
| Stripe Sessions — https://stripe.com/sessions/2025 | Hierarquia de palco e ritmo editorial criam importância sem excesso de superfícies | Poucas massas, tipografia curta e linhas com função | Identidade, paleta, palco e qualquer composição do evento |

## Responsividade

- Mobile: núcleo no início e uma linha de continuidade vertical com oito relações alternadas; logos e retratos aparecem como evidência discreta dentro de cada relação.
- Tablet: mesma narrativa vertical em duas margens amplas, com densidade intermediária.
- Desktop: mapa de 16:10 com topologia espacial e grande área negativa ao redor do núcleo.
- Reduzível: quantidade de logos por relação e labels auxiliares de eixo.
- Inegociável: mensagem, núcleo, oito relações, verbos, professores e nota de transparência sobre marcas.

## Intenção de motion

- Atenção: orientar pela mensagem e então revelar o núcleo.
- Continuidade: linhas partem do núcleo e constroem as relações.
- Feedback: hover, foco e toque destacam uma relação e seu caminho sem esconder conteúdo.
- Profundidade: deslocamento local de até 3 px apenas no campo visual desktop.
- Quando não animar: leitura, copy, logos, fotos e estado mobile após a entrada.

## Riscos e validação

- Criativo: parecer diagrama corporativo; mitigar com tipografia editorial, assimetria e ausência de caixas repetidas.
- Conteúdo: marcas sugerirem parceria; mitigar com nota explícita e rótulo “referências do setor”.
- Técnico: posicionamento absoluto colidir em viewports intermediárias; usar composição mobile dedicada antes de 900 px.
- Hipótese: o visitante compreende “rede coordenada” antes de ler a descrição longa.
- Evidência: inspeção visual desktop/mobile e leitura das relações sem motion.

## Guardrails

- Preservar: núcleo único, topologia semântica, pessoas discretas, clareza estática e passagem para a plataforma.
- Evitar: números, Stanford, parcerias, dezenas de logos, cards de vidro, grid visível, loops e partículas.
- Nova aprovação: alterar ordem global das seções, adicionar CTA, dependência ou asset externo.
