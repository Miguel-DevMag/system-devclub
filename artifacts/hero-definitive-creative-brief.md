# Hero definitivo — auditoria, Creative Decision Brief e Motion Intent Spec

Data: 2026-08-04

## Auditoria brutal do Hero anterior

### Narrativa e posicionamento

1. A cena comunica uma promessa de carreira, mas não demonstra o ecossistema que a torna plausível. A fotografia do fundador funciona como presença, porém produto, tecnologias e mercado não coexistem.
2. A assinatura ainda depende da fórmula `eyebrow + headline + descrição + dois botões + visual à direita`. Mesmo bem acabada, ela continua reconhecível como landing page.
3. “Transforme seu aprendizado em carreira real” é clara, mas intercambiável com qualquer escola de tecnologia. Falta uma afirmação curta que abra curiosidade e uma prova visual específica do DevClub.
4. O selo MEC no primeiro viewport muda o tom de institucional para campanha de curso e apresenta uma autoridade factual que não está verificada no escopo desta entrega.

### Composição e direção de arte

5. A divisão entre texto e fotografia permanece legível como duas colunas. As camadas não constroem uma relação editorial entre pessoa, produto, tecnologia e mercado.
6. O watermark ocupa espaço, mas não acrescenta mecanismo. Sem o logo, a composição perde grande parte de sua assinatura.
7. Rodolfo é dissolvido por gradientes, mas continua sendo uma foto colocada no lado direito. Ele não atravessa, protege ou revela o produto.
8. O espaço negativo isola bem a headline, porém a metade direita não demonstra escala empresarial; mostra um indivíduo diante de atmosfera tecnológica.
9. A linha que chega a Authority é geometricamente contínua, mas semanticamente órfã: nasce de decoração, não do percurso produto → mercado.
10. A paleta volta ao quase preto integral, com luz concentrada em glows. Isso reduz volume e aproxima a cena da estética de produto SaaS/IA.

### Produto, tecnologia e mercado

11. A plataforma não aparece no Hero atual.
12. As tecnologias não participam da composição; quando ausentes, a promessa de formação perde materialidade.
13. O mercado também não aparece. Authority começa com áreas de atuação, mas o Hero não prepara esse significado.
14. O repositório não contém captura oficial da plataforma em `src/assets/images/`. Existe uma screenshot local da experiência de produto em `artifacts/product-learning-tour/platform-1440x725.png`; ela pode ser usada somente como “recorte da experiência de aprendizagem”, sem alegar captura oficial.
15. Os SVGs de mercado disponíveis são marcas de tecnologia. Devem ser decorativos e rotulados como “mercado”, nunca chamados de clientes, parceiros ou prova social.

### Motion, interação e performance

16. A cena anterior anima fotografia, watermark, linhas e paths como entradas separadas. O pedido atual exige uma cena viva, não elementos entrando.
17. `rodolfo-2.png` pesa 1,04 MB; somado aos watermarks de aproximadamente 1 MB, o primeiro viewport acumula custo sem benefício proporcional.
18. O path drawing editorial adiciona espera visual e desaparece como significado após o primeiro segundo.
19. Hover e foco dos CTAs são equivalentes, mas os demais elementos da cena não respondem como um sistema único.
20. Mobile empilha conteúdo e retrato, preservando conteúdo, mas não oferece uma direção própria para produto, tecnologia e mercado.

## Creative Decision Brief

### Contexto

- **Tarefa:** esquecer o protótipo e construir o Hero institucional definitivo.
- **Seção e ato narrativo:** abertura do Ato 1 — Descoberta.
- **Usuário:** pessoa avaliando se o DevClub é uma empresa/ecossistema capaz de oferecer direção profissional, não apenas aulas.
- **Intenção provável:** entender o que muda, perceber substância e decidir continuar navegando.
- **Restrições:** React, CSS, Motion, SVG e assets locais; sem Canvas, WebGL, Three, Lottie ou GSAP; conteúdo essencial no primeiro frame; 320 px; teclado, touch e reduced motion.

### Problema

- **Pergunta:** por que o DevClub é maior que um curso e como essa estrutura aproxima pessoas do mercado?
- **Fricção atual:** o Hero mostra promessa e fundador, mas não mostra o sistema.
- **Consequência:** percepção de landing page bem acabada, não de empresa com produto, método e presença de mercado.

### Direção — “Aprender é só o começo”

- **Mensagem central:** no DevClub, conhecimento ganha prática, produto, comunidade e direção para o mercado.
- **Emoção:** escala, confiança e pertencimento possível.
- **Ideia dominante:** um ecossistema inteiro condensado em uma cena editorial contínua.
- **Ponto focal:** headline “Aprender é só o começo.”
- **Ordem de leitura:** headline → Rodolfo atravessando o produto → percurso tecnológico → mercado → CTA → continuidade em Authority.
- **Composição:** texto ocupa o eixo esquerdo sem card; o produto cruza o centro em perspectiva editorial; Rodolfo emerge por cima e por dentro do recorte; tecnologias funcionam como marcos do percurso; o rail de mercado toca a linha vertical que continua em Authority.
- **Espaço negativo:** grande pausa ao redor da headline e entre CTA e rail de mercado; o vazio dá escala institucional.
- **Prova/mecanismo:** recorte real do produto local, fotografia oficial, tecnologias ensinadas e horizonte de mercado. Nenhum número ou parceria inventada.
- **CTA:** “Conhecer o DevClub” leva a `#devclub-por-inteiro`; “Ver a plataforma” leva a `#plataforma`.

### Alternativas

| Alternativa | Benefício | Risco | Decisão |
|---|---|---|---|
| A — Ecossistema em uma cena | Une pessoa, produto, tecnologia e mercado em uma relação única; prepara Authority | Exige recortes precisos para não virar colagem | Escolhida |
| B — Manifesto tipográfico com retrato monumental | Clareza e presença humana muito altas | Produto e mercado permaneceriam ausentes; continuaria parecendo campanha pessoal | Rejeitada |
| C — Produto monumental sem moldura | Demonstra substância rapidamente | Reintroduz dashboard/SaaS e reduz pertencimento humano | Rejeitada |

### Referências consultadas em 2026-08-04

| Fonte | Princípio transferível | Adaptação DevClub | O que não copiar |
|---|---|---|---|
| https://developer.apple.com/videos/play/wwdc2026/250/ | Cada elemento precisa merecer a atenção; hierarquia evidente | Remover selo, badges e efeitos que não constroem o ecossistema | Linguagem Apple, hardware, escalas e transições proprietárias |
| https://linear.app/homepage | Produto mostrado em recortes que explicam uma capacidade, com baixa concorrência visual | Mostrar apenas o trecho da experiência que materializa percurso e prática | Dashboard, grid, copy e estética AI-first |
| https://vercel.com/ | Uma proposição curta sustenta um sistema amplo; relações são organizadas por linhas e contraste | Fazer a linha representar a passagem concreta produto → mercado → Authority | Grid, triângulo, preto-e-branco e composição reconhecível da marca |
| https://stripe.com/sessions/2026 | Evento institucional reúne pessoas, produto e contexto de mercado em uma mesma narrativa | Tratar Rodolfo, plataforma e mercado como partes equivalentes do ecossistema | Paleta, ilustração, palco e linguagem da Stripe |
| https://devclub.com.br/ | A promessa de carreira e o acesso às formações já são reconhecíveis na marca | Preservar transformação e dois próximos passos reais, com menos urgência e prova numérica | Hero, métricas, código decorativo e estrutura comercial atual |

### Hierarquia visual

1. Headline.
2. Relação Rodolfo + produto.
3. Descrição e CTA primário.
4. Percurso tecnológico.
5. Mercado e CTA secundário.
6. Metadados editoriais e atmosfera.

### Mapa de profundidade

| Plano | Conteúdo | Função | Resposta |
|---|---|---|---|
| P0 | atmosfera azul-petróleo, violeta e neblina | volume espacial | respiração de luz, sem deslocamento de conteúdo |
| P1 | linhas estruturais e watermark vetorial/CSS | continuidade | deslocamento de até 2 px |
| P2 | recorte da plataforma | produto | deslocamento de até 4 px e microtilt amortecido |
| P3 | Rodolfo | presença humana | deslocamento de até 6 px, recorte integrado |
| P4 | tecnologias e rail de mercado | conexão | deslocamento de até 3 px como grupo |
| P5 | headline e CTAs | decisão | estáticos; apenas feedback direto |

### Responsividade

- **Desktop:** composição assimétrica e sobreposta; produto cruza o eixo central; fundador e rail de mercado compartilham a saída da cena.
- **Tablet:** headline em largura ampla; cena abaixo, ainda sobreposta, com produto horizontal e Rodolfo ancorado à direita; tecnologias reduzem de cinco para quatro marcos visíveis.
- **Mobile:** mensagem e CTAs primeiro; produto vira uma janela editorial horizontal; Rodolfo emerge pela borda inferior; tecnologias tornam-se uma trilha curta sobre o produto; mercado vira rodapé de cena. Nada essencial é oculto.
- **Redutível:** dois marcos tecnológicos periféricos, microlegendas e watermark.
- **Inegociável:** headline, descrição, CTAs, produto, Rodolfo, pelo menos três tecnologias, significado de mercado e ponte para Authority.

### Guardrails de implementação

- Preservar um único `h1`, foco visível, 48 px de alvo e destinos de âncora reais.
- Não criar moldura de browser, laptop ou dashboard em torno da screenshot.
- Identificar a imagem como recorte demonstrativo da experiência, não captura oficial.
- Não chamar logos de clientes, parceiros ou patrocinadores.
- Não depender de hover, pointer ou motion para compreensão.
- Não usar o selo MEC nem alegações numéricas no Hero.
- Qualquer novo fato, parceria ou screenshot oficial exige fonte/aprovação.

## Motion Intent Spec

### Contexto e função

- **Seção:** Hero definitivo e ponte para Authority.
- **Funções:** profundidade, continuidade e feedback; nunca revelação obrigatória.
- **Elemento prioritário:** relação estática entre headline, pessoa e produto.

### Estados

- **Inicial:** estado final completo já renderizado; nenhum conteúdo começa oculto.
- **Ambiente:** uma única luz muda lentamente de densidade para a cena “respirar”.
- **Pointer:** luz, produto, retrato e detalhes respondem em amplitudes diferentes.
- **Intent primário:** CTA “Conhecer o DevClub” energiza o percurso até mercado.
- **Intent secundário:** CTA “Ver a plataforma” aumenta contraste do recorte de produto.
- **Término:** pointer recenter ao sair; feedback termina em 200 ms; ambiente continua apenas enquanto o Hero está no viewport.

### Parâmetros

- **Propriedades:** transform e opacity; sem animação de layout, blur, clip-path ou box-shadow.
- **Microfeedback:** 120–200 ms, `ease-out-compact`, 1–3 px.
- **Profundidade:** spring amortecida já existente; amplitudes de 2–6 px, total abaixo de 12 px.
- **Ambiente:** 14 s, `ease-in-out-flow`, uma camada, opacidade 0,72–0,9.
- **Stagger:** nenhum.
- **Loops simultâneos:** um.

### Motion Intent Map

| Elemento | Função | Gatilho | Comportamento | Reduced motion |
|---|---|---|---|---|
| luz atmosférica | atmosfera | viewport | respiração lenta de opacidade | congelada em estado neutro |
| recorte de produto | profundidade/foco | pointer e CTA secundário | até 4 px; contraste por opacidade | estático |
| Rodolfo | profundidade humana | pointer | até 6 px, sem scale | estático |
| percurso tecnológico | continuidade | pointer e CTA primário | até 3 px como grupo | estático |
| CTA primário | feedback | hover/foco/press | -1 px no hover, +1 px no press, seta +3 px | cor/foco apenas |
| CTA secundário | feedback | hover/foco/press | contraste e seta +2 px | cor/foco apenas |
| ponte para Authority | continuidade | scroll natural | permanece geometricamente contínua; sem desenho | estática |

### Mapa de microinterações

- **Hover:** um único deslocamento e mudança de contraste por CTA.
- **Focus-visible:** ring sólido de 2 px, offset de 3 px, mesmo intent visual do hover.
- **Press:** deslocamento de 1 px sem scale perceptível.
- **Pointer:** somente mouse preciso; bounds medidos uma vez por entrada e cleanup no leave/cancel.
- **Keyboard:** foco dos CTAs atualiza o intent sem mover o alvo.
- **Touch:** feedback de press; cena estática, sem hover simulado.

### Performance e remoção

- Sem timer manual, Canvas, WebGL, GSAP, Lottie ou dependência nova.
- Um listener local de pointer já encapsulado por `ExperienceSurface`.
- Imagens com dimensões reservadas; foto e screenshot carregadas com prioridade por estarem acima da dobra.
- Remover a respiração se a inspeção mostrar competição com a headline ou custo de paint material.
- Estado equivalente sem JS/motion: toda a composição final permanece legível e acionável.

## Desvio controlado de continuidade

- Durante a implementa??o, a aplica??o passou a montar EcosystemWall imediatamente ap?s o Hero no lugar de AuthoritySection.
- A decis?o foi preservar o trabalho concorrente e conectar o rail do Hero ao sucessor real, que cumpre a mesma fun??o sem?ntica de ecossistema, mercado e autoridade.
- A ponte ? est?tica, coincide geometricamente entre as duas se??es e n?o depende de scroll drawing.
- AuthoritySection foi mantida sem sobrescrever as altera??es existentes.
- Esta adapta??o n?o muda o conceito criativo; apenas aponta a continuidade para a arquitetura efetivamente montada.
