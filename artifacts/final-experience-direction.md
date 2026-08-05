# DevClub — Final Experience Direction

Data da auditoria: 04/08/2026

## 1. Escopo e evidências

- Escopo: Header, Hero, Authority, Overview, Learning Journey, Platform, Community, People, Recognition, FAQ, CTA e Footer já montados em `src/App.tsx`.
- Evidências inspecionadas: código ativo, dados ativos, design tokens, motion tokens, CSS global, documentos de visão, regras do concurso, playbooks das três skills, screenshots desktop/mobile existentes, estado do Git, build e lint de linha de base.
- Linha de base: Git limpo; build e lint aprovados; JS 465,15 kB (144,27 kB gzip); CSS 262,03 kB (40,44 kB gzip).
- Limitação: o briefing cita uma gravação integral, mas o arquivo não está presente nos anexos nem no repositório. O navegador integrado também falhou antes de abrir a página por uma restrição interna do ambiente. Nenhuma conclusão abaixo atribui evidência a esse vídeo.

## 2. Auditoria inicial consolidada

### Produto e direção criativa

- O Hero comunica a promessa e demonstra transformação com um artefato próprio; é o momento mais resolvido da página.
- Authority funciona como pausa, porém usa a mesma linguagem de linhas e metadados das cenas seguintes.
- Overview, Journey e Platform têm boa intenção individual, mas repetem painel técnico, trilhos, microtexto e headlines de grande escala.
- Community e People recuperam humanidade, mas chegam depois de um percurso sticky longo demais.
- Recognition, FAQ e CTA formam um terceiro ato coerente, porém ainda repetem entry labels, linhas de saída e H2s monumentais.

### UX e ritmo

- A soma aproximada das alturas desktop baseadas em scroll é excessiva: Platform 300svh, Journey 340svh, Community 275svh e People 178svh.
- Três experiências sticky consecutivas criam fadiga, atrasam a progressão e produzem grandes vazios perceptivos entre capítulos.
- O Header mantém sete destinos e um CTA em desktop, competindo com o conteúdo e reforçando a sensação de dashboard.
- O padrão `eyebrow + headline + parágrafo + diagrama + linha de saída` torna a próxima cena previsível.
- Em mobile, a ordem de conteúdo é preservada, mas várias headlines continuam com escala de grande momento e a página permanece muito longa.

### Motion e interação

- Os movimentos relevantes têm fallbacks de reduced motion e, em geral, usam transform/opacity.
- A linguagem temporal repete reveal vertical em praticamente todos os headers.
- Authority e Hero mantêm loops ambientes que continuam consumindo atenção depois de cumprirem a função.
- Journey, Platform, Community e People respondem ao scroll com mecanismos diferentes, mas juntos parecem uma única sequência de scrub prolongada.
- Foco e teclado estão presentes no Header, menu mobile, CTA e Accordion. A Plataforma responde a foco, pointer e clique.

### Código, conteúdo e performance

- Existem dois sistemas de tokens de motion (`designTokens.motion` e `motionTokens`) e valores locais duplicados.
- `src/index.css` concentra mais de quatro mil linhas e mistura estilos ativos e legados.
- O CSS importa Inter remotamente enquanto Geist local já está instalado.
- Os dados ativos evitam métricas, empresas, depoimentos e empregabilidade inventados; o disclosure de interface demonstrativa está correto.
- Os CTAs atuais apontam apenas para âncoras internas. Destinos verificados: formações (`https://devclub.com.br/formacoes/`), área do aluno (`https://aulas.devclub.com.br/`) e matrícula/atendimento (`https://go.rodolfomori.com.br/comercial`). O link oficial de MBA retornou erro e o WhatsApp do rodapé oficial usa número placeholder; não devem ser publicados como destinos confirmados.

## 3. Problemas priorizados

1. P1 de publicação: a ação final não conduz a um destino externo de matrícula ou atendimento, apesar de prometer próximo passo.
2. P2: excesso de sticky/altura artificial e pausa vazia entre capítulos.
3. P2: repetição de headlines gigantes, labels técnicos, linhas e diagramas.
4. P2: múltiplos movimentos dominantes e loops além da função inicial.
5. P2: Header denso e CTA com intenção duplicada ao conteúdo.
6. P2: import remoto de fonte e CSS/JS acima do necessário para uma página institucional.
7. P3: dois vocabulários de motion e microvalores locais reduzem consistência.

## 4. Creative Decision Brief

### Contexto

- Usuário: pessoa considerando uma formação e recrutador avaliando maturidade de design engineering.
- Intenção: entender a proposta, visualizar como o aprendizado evolui, perceber acompanhamento e chegar a um próximo passo real.
- Restrições: nenhuma nova seção, biblioteca, mídia, canvas, WebGL ou prova não verificada.

### Direção

- Mensagem central: aprender, construir e evoluir fazem parte do mesmo percurso.
- Emoção: curiosidade no Hero, clareza na descoberta, confiança na demonstração, pertencimento no humano e decisão calma no encerramento.
- Ideia dominante: uma corrente de energia se transforma de conhecimento em produto, conexão humana, impacto e decisão.
- Ponto focal global: um único protagonista por viewport; o restante sustenta contexto.
- Espaço negativo: pausa intencional apenas antes de grandes momentos, nunca como espera artificial.
- CTA: ação final externa para matrícula/atendimento; área do aluno como utilidade institucional; âncoras internas apenas para exploração.

### Alternativas

| Alternativa | Benefício | Risco | Decisão |
|---|---|---|---|
| A — Montagem contínua | Preserva cenas aprovadas, reduz repetição e cria contraste por ritmo, luz e densidade | Exige disciplina para remover elementos queridos | Escolhida |
| B — Reconstrução cinematográfica radical | Máxima novidade visual | Alto risco de regressão, prazo, performance e descaracterização | Rejeitada |

### Referências por princípio

| Fonte | Princípio aprendido | Adaptação DevClub | O que não copiar |
|---|---|---|---|
| Apple Developer — Product Page e Design Principles | Comunicar valor central nos primeiros momentos; delight nasce de intenção, agência e detalhe | Hero estático completo e uma emoção definida por ato | Estética de produto Apple ou sequências bloqueantes |
| Linear Method | Clareza, propósito, momentum saudável e recusa de busy work | Remover metadado/linha sem função e encurtar scroll scrub | Visual monocromático ou navegação Linear |
| Vercel — Design Engineering | Polimento inclui performance, input inclusivo, preferências e acessibilidade | Tratar touch, teclado, reduced motion e peso como parte da direção | Grid Vercel, componentes ou branding |
| Stripe — Web Presence | Storytelling público precisa integrar conteúdo, marca, produto e engenharia | Aproximar mecanismo e benefício e tornar conversão verificável | Gradientes e composições reconhecíveis da Stripe |
| Framer — Motion e reduced motion | Movimento guia narrativa, mas transform/layout devem ceder à preferência do usuário | Uma função por movimento, sem parallax em mobile/reduced motion | Presets de reveal e animação como decoração |

### Arquitetura visual final

1. Hero — abertura expansiva: promessa + artefato de construção, sem espera.
2. Authority — silêncio e horizonte: sinal de mercado curto, sem virar dashboard.
3. Overview — mapa sistêmico: a única cena em que rede/diagrama é protagonista.
4. Journey — construção: progressão editorial mais curta, com capítulos legíveis.
5. Platform — capacidade: demonstração de produto e estados escolhidos pelo usuário.
6. Community — presença: ambiente humano, com menos câmera e mais significado.
7. People — autoria: composição editorial, não mais um sistema técnico.
8. Recognition — consequência: palavra-impacto e percurso compacto.
9. FAQ — reflexão: documento calmo, denso e funcional.
10. CTA — convite: concentração de luz e uma decisão externa dominante.
11. Footer — instituição: utilidades oficiais e fechamento sem novo clímax.

### Responsividade

- Mobile: conteúdo antes da arte, menos atmosfera, nenhum sticky longo, toque mínimo de 44 px e headlines limitadas por função narrativa.
- Tablet: composições recompostas em vez de desktop quebrado; Headers deixam de exigir três colunas.
- Desktop: stickies apenas onde comparação ou progressão justificarem permanência e com altura reduzida.
- Inegociável: promessa, disclosure demonstrativo, mecanismo da plataforma, papel da comunidade, limites de resultado, FAQ e CTA real.

### Guardrails

- Preservar a ordem e o conteúdo factual ativo.
- Remover antes de adicionar.
- Não criar cards, métricas, grids ou linhas extras.
- Não esconder conteúdo essencial em motion.
- Não publicar URL de MBA ou WhatsApp que não esteja operacionalmente verificada.

## 5. Motion Intent Global

- Função: continuidade e hierarquia; feedback apenas em controles.
- Linguagem: o movimento dominante nasce da direção do percurso, termina rápido e entrega estado estável.
- Budget: no máximo um movimento dominante por viewport e um sinal ambiente discreto.
- Desktop: reduzir scrub total; manter Journey e Platform como progressões curtas, simplificar Community e remover sticky de People.
- Mobile/touch: composições estáticas sequenciais, sem pointer light ou parallax.
- Reduced motion: estado final imediato; sem deslocamento, scale, path drawing, loops ou stagger.
- Sem JavaScript: conteúdo e ações permanecem legíveis na ordem do DOM.

## 6. Motion Intent Specs

| Cena | Função | Gatilho e término | Propriedades/tokens | Reduced motion | Remover se |
|---|---|---|---|---|---|
| Hero | Orientar e materializar transformação | Entrada; termina em até 1,1 s | transform/opacity; expressivo/cinematográfico raro | Estado final imediato | atrasar CTA ou manter loop dominante |
| Authority | Continuidade | Entrada na viewport; uma passagem do sinal | transform; expressivo | sinais estáticos | parecer ticker decorativo |
| Overview | Explicar relação | scroll local curto; termina no mapa completo | path/opacity; flow | diagrama completo | esconder pilares |
| Journey | Progressão | scroll curto por etapa; interrupção livre | transform; estrutural curto | lista completa | acumular estados no scroll rápido |
| Platform | Causalidade de produto | escolha/foco/scroll local; estado selecionado persiste | translateX; estrutural curto | troca instantânea | autoplay competir com leitura |
| Community | Profundidade e presença | scroll local curto; câmera assenta ao fim | transform limitado | mundo estático | movimento simular atividade real |
| People | Transferência de autoria para capacidade | reveal único; termina em composição estável | opacity/translate curto | estado final | apagar a pessoa para destacar resultado |
| Recognition | Consequência | entrada única; linha completa o percurso | scaleX/opacity | percurso completo | brilho virar ornamento |
| FAQ | Feedback | ação do usuário | altura do primitivo; estrutural curto | atualização imediata | resposta depender de animação |
| CTA | Decisão | entrada única + hover/foco/press | contraste/1 px; responsivo | contraste somente | movimento atrasar navegação |

## 7. Critérios de validação

- 320 px, 390 px, tablet, 1440 px e desktop baixo.
- Scroll rápido, âncoras, Page Down e retorno ao topo.
- Teclado: skip link, Header, menu mobile, Plataforma, FAQ, CTA e Footer.
- Touch: menus, estágios e CTAs sem hover indispensável.
- Reduced motion: nenhum deslocamento, parallax, path drawing ou loop.
- Build, lint, assets, links oficiais e ausência de overflow horizontal.
- Review final sem P0/P1 e sem três P2 relacionados abertos.

## 8. Implementação final por área

- Header: navegação desktop concentrada em cinco destinos e acesso oficial do aluno; itens secundários permanecem no menu mobile.
- Hero: composição preservada como abertura; correção de `min-width` e quebra controlada impede o título de ampliar a grade no mobile.
- Authority: ticker infinito removido; os sinais fazem uma única entrada e assentam.
- Overview: mantém o mapa como diagrama protagonista, com percurso desktop reduzido de 176 para 132 svh.
- Journey: percurso reduzido de 340 para 240 svh e entrada lateral própria.
- Platform: percurso reduzido de 300 para 220 svh; Header entra por opacidade, sem repetir a gramática das cenas vizinhas.
- Community: percurso reduzido de 275 para 190 svh, preservando profundidade com menor permanência obrigatória.
- People: sticky e scrub de opacidade removidos; a cena passa a ser uma composição editorial estável.
- Recognition: entrada lateral curta e consequência visual preservada.
- FAQ: headline e respiros recalibrados para leitura, sem competir com o clímax.
- CTA: ação dominante aponta para o canal oficial de matrícula em nova aba.
- Footer: utilidades oficiais de formações e área do aluno; densidade de links reduzida.

## 9. UX, acessibilidade, responsividade e performance

- A informação essencial continua presente no DOM e não depende de animação.
- Links externos usam nova aba com `rel="noreferrer"`; estados de foco e o skip link existentes foram preservados.
- Touch e reduced motion continuam cobertos pela arquitetura existente; pointer light permanece desativado nesses contextos.
- Não foram adicionados seção, card, grid, dependência, vídeo, canvas ou WebGL.
- O loop ativo de Authority e o scroll scrub de People foram removidos; os maiores percursos sticky ativos foram encurtados.
- Google Fonts remoto foi substituído pelo Geist Variable latino local com `font-display: swap`.
- Build final: CSS 262,23 kB (40,54 kB gzip), JavaScript 464,77 kB (144,23 kB gzip), fonte 29,40 kB.

## 10. Validação executada

- `npm run build`: aprovado.
- `npm run lint`: aprovado.
- `git diff --check`: aprovado.
- Desktop: Hero recapturado depois da implementação e aprovado visualmente.
- Mobile: uma captura fresca identificou overflow horizontal no Hero; a causa (`white-space: nowrap` ampliando o min-content da grid) foi corrigida com `min-w-0` e nowrap apenas a partir de `sm`.
- Evidência pendente: o navegador headless local deixou de responder antes da recaptura mobile pós-correção e da passagem visual contínua por todas as cenas.
- As duas capturas intermediárias inválidas geradas durante o teste foram descartadas; nenhuma fonte ou mídia do projeto foi removida.

## 11. Review final

| Dimensão | Nota | Evidência principal |
|---|---:|---|
| Direção de arte e identidade | 9,0 | gramática visual preservada e contraste entre atos ampliado |
| UI e composição | 8,5 | Header/FAQ/ritmo refinados; falta passagem visual integral pós-mudança |
| UX e arquitetura da informação | 9,0 | navegação e conversão mais diretas, sem mudar a ordem narrativa |
| Narrativa | 9,0 | arco contínuo e funções de cena distintas |
| Conversão | 8,8 | links oficiais verificados e CTA dominante real |
| Motion | 9,0 | loop e scrub excessivos removidos; linguagem por cena diferenciada |
| Acessibilidade | 8,5 | conteúdo independente de motion e reduced motion preservido; teste real de teclado pendente |
| Responsividade | 8,0 | correção P1 aplicada; recaptura mobile pós-fix pendente |
| Performance | 8,7 | fonte local otimizada e build medido; sem Lighthouse/FPS/CLS nesta sessão |
| Código e arquitetura | 8,8 | fonte única de links oficiais e diff menor que a base; legado inativo ainda pesa |

**Nota final ponderada: 8,8/10. Veredito: aprovado com ressalvas de evidência; Gate 3 concluído e Gate 4 visual ainda pendente.**

Não há P0 ou P1 conhecido aberto no código entregue. A nota 9,8 não seria defensável sem a passagem mobile pós-correção, a auditoria visual contínua e as medições reais de performance. A indisponibilidade do vídeo citado no pedido também impede comparar ritmo e continuidade contra essa referência.

### Riscos e débito técnico

- P2: recapturar 320/390 px, tablet, 1440 px e desktop baixo depois da correção do Hero.
- P2: executar navegação completa por teclado, touch e reduced motion em navegador real.
- P2: medir Lighthouse, FPS, CLS e long tasks nas cenas de scroll.
- P2: componentes e CSS legados não montados continuam no bundle e merecem auditoria de import graph separada.
- A rota oficial de MBA respondeu com erro e o WhatsApp direto exposto no rodapé oficial parecia placeholder; ambos foram deliberadamente excluídos.

## 12. Recomendações para uma v2

1. Remover componentes, estilos e dependências legados somente após auditoria completa do grafo de imports.
2. Modularizar o CSS por cena ativa e criar orçamento automatizado de bundle.
3. Adicionar teste visual automatizado e matriz keyboard/touch/reduced-motion, se novas ferramentas forem permitidas.
4. Instrumentar eventos do CTA oficial sem alterar a promessa editorial.
5. Incorporar assets humanos/produto reais apenas com origem e autorização verificadas.