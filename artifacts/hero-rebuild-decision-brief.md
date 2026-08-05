# Hero final — auditoria, Creative Decision Brief e Motion Intent Spec

Data: 2026-08-04

## Auditoria inicial

- **Composição:** o Hero atual divide a cena entre uma mensagem forte e um artefato abstrato maior, mas o lado visual é formado por planos sobrepostos que simulam uma interface. A massa visual comunica software genérico antes de comunicar formação e transformação humana.
- **Ritmo e alinhamento:** a coluna de texto é clara, porém começa diretamente no `h1`, sem o eyebrow solicitado. A passagem do texto para o artefato é abrupta e a composição direita avança sobre o eixo central, comprimindo o respiro da promessa.
- **Grid e espaço negativo:** a divisão assimétrica é útil, mas o visual ocupa o vazio com polígonos, canais e rótulos técnicos. O espaço deixa de organizar a leitura e passa a explicar uma metáfora.
- **Tipografia e narrativa:** headline, descrição e CTAs têm boa clareza. O conceito atual, porém, converte “conhecimento → prática → produto → carreira” em código, compilação e output — uma narrativa de software, não de transformação humana.
- **Profundidade e peso visual:** múltiplos planos, recortes, sombras e sinais luminosos criam profundidade, mas também uma estética de wireframe/mockup incompatível com o pedido.
- **Assets:** o Hero não usa prova visual oficial. `Captura de tela 2026-08-04 175157.png` é a única captura real de produto adequada; `rodolfo.jpg` fornece presença humana com apenas 61 KB. `devclub.png` foi rejeitado porque reúne mockups de dispositivos; `hero-funto.png`, porque é um símbolo abstrato.
- **Motion:** há movimento de entrada em várias camadas, varredura luminosa e respostas separadas aos CTAs. O fallback reduzido existe, mas a multiplicidade compete com a mensagem e o token de luz do ponteiro excede o limite de 12 px do playbook.
- **Continuidade:** a linha estrutural que chega à seção de Autoridade é válida, mas sua origem atual está ligada ao artefato técnico. A nova cena deve preservar luz/eixo, agora como continuidade editorial entre produto e credibilidade.
- **Responsividade:** a correção local `min-w-0` e a liberação de `whitespace-nowrap` abaixo de `sm` devem ser preservadas. O artefato atual reduz, mas não se recompõe como uma cena própria no mobile.

## Creative Decision Brief

### Contexto

- **Tarefa:** reconstrução completa do Hero institucional.
- **Seção e ato narrativo:** Hero, abertura do Ato 1 — Descoberta.
- **Usuário e intenção provável:** pessoa avaliando se o DevClub oferece um caminho confiável entre aprender e construir carreira.
- **Restrições:** somente assets locais; React, CSS e Motion existentes; sem Canvas, WebGL, vídeo, Lottie ou nova dependência; um único `h1`; AA, teclado e reduced motion.

### Problema

- **Pergunta:** como o DevClub transforma conhecimento em experiência capaz de gerar carreira?
- **Fricção atual:** a metáfora visual parece software fictício e exige interpretação antes de provar produto ou pessoas.
- **Consequência:** identidade genérica de SaaS/IA e perda de confiança institucional.

### Direção

- **Mensagem central:** transforme aprendizado em carreira real por meio de formação, prática e comunidade.
- **Emoção:** confiança, clareza e ambição possível.
- **Ideia dominante:** prova em cena — o produto real sustentado por uma presença humana real.
- **Ponto focal:** headline.
- **Ordem de leitura:** headline → screenshot oficial → Rodolfo → CTA → prova curta.
- **Composição:** coluna esquerda limpa; cena editorial assimétrica à direita, com screenshot dominante, retrato integrado e uma estrutura mínima de linhas/luz.
- **Espaço negativo:** isolar a promessa e separar texto de prova visual.
- **Prova:** screenshot oficial da plataforma e fotografia oficial do fundador.
- **CTA:** “Explorar jornada” leva a `#jornada-aprendizado`; “Ver a plataforma” leva a `#plataforma`.

### Alternativas

| Alternativa | Benefício | Risco | Decisão |
|---|---|---|---|
| A — Prova em cena | Produto e pessoa reais; autoral; coerente com transformação humana | Exige recorte e luz precisos para não virar colagem | Escolhida |
| B — Campanha de ecossistema com dispositivos | Volume de produto imediato | Reintroduz mockup, retângulos e estética promocional | Rejeitada |

### Referências consultadas em 2026-08-04

| Fonte | Princípio observado | Adaptação DevClub | O que não copiar |
|---|---|---|---|
| https://www.devclub.com.br/ | Proposta direta, jornada e presença do fundador próximas | Preservar promessa e usar Rodolfo como origem humana, com menos prova numérica | Copy, contadores, grids e layout existente |
| https://lp.devclub.com.br/mba | Autoridade construída por pessoas e credenciais visíveis | Usar presença humana real sem transformar o Hero em campanha de MBA | Urgência, densidade comercial e estética de oferta |
| https://www.apple.com/br/mac/ | Um protagonista visual, escala e espaço negativo | Tratar o screenshot como único artefato dominante | Enquadramento de hardware, copy e transições |
| https://linear.app/homepage | Precisão tipográfica e demonstração de produto | Manter estrutura disciplinada e detalhe técnico apenas onde informa | Dashboard, componentes e narrativa de IA |
| https://vercel.com/home | Alto contraste, hierarquia curta e linhas estruturais | Usar linhas como alinhamento editorial, não como malha tecnológica | Grid, símbolos e composição reconhecível da marca |

### Responsividade

- **Mobile:** conteúdo, CTAs e prova primeiro; visual depois; retrato menor e integrado à borda inferior do screenshot; interação por ponteiro removida.
- **Tablet:** empilhamento editorial com screenshot amplo e retrato sobreposto sem invadir texto.
- **Desktop:** grid assimétrico, headline dominante e cena visual deslocada para a direita.
- **Redutível:** microlegendas e algumas linhas decorativas.
- **Inegociável:** headline, descrição, dois CTAs, prova, screenshot e presença do Rodolfo.

### Guardrails

- Preservar a correção local de overflow em `HeroContent.tsx`.
- Não criar painel, card ou moldura de navegador ao redor do screenshot.
- Não animar texto essencial nem depender de hover.
- Qualquer mudança de narrativa ou novo asset exige retorno ao brief.

## Motion Intent Spec

### Contexto e função

- **Componente:** Hero editorial.
- **Funções:** orientação, hierarquia, profundidade e feedback.
- **Elemento prioritário:** grupo visual de produto; texto essencial está disponível no primeiro frame.

### Estados e sequência

1. Conteúdo textual já está legível e acionável.
2. A cena visual resolve um deslocamento curto de entrada, chegando ao estado final em até 650 ms.
3. Screenshot e retrato respondem ao ponteiro com profundidade total inferior a 12 px; a luz acompanha com amplitude limitada.
4. Hover/foco dos CTAs reforça o elemento relacionado por contraste e microdeslocamento, sem revelar informação.

### Parâmetros

- **Propriedades:** `transform` e `opacity`; luz muda somente por transform/opacity.
- **Duração:** responsivo 200 ms; expressivo 550 ms.
- **Easing:** `ease-out-compact` e `ease-out-premium` dos tokens existentes.
- **Stagger:** nenhum stagger textual; retrato sucede o screenshot por 80 ms.
- **Amplitude:** camadas entre 3 e 8 px; luz em até 10 px.

### Adaptação e fallback

- **Mobile/touch:** estado estático; sem resposta de ponteiro.
- **Teclado:** o foco dos CTAs produz feedback equivalente ao hover.
- **Reduced motion:** estado final imediato, sem parallax, deslocamento ou sequência.
- **Sem JavaScript:** conteúdo e imagens continuam presentes no layout.

### Performance e remoção

- Sem loop, timer, observer, canvas ou animação de layout.
- O único listener é `pointermove` local já encapsulado por `ExperienceSurface`.
- Remover a profundidade se ela competir com leitura, produzir jank ou parecer tilt de card.
- Estado estático equivalente: mesma composição, luz e hierarquia finais.


## Decisão substituta após feedback visual

O usuário rejeitou e removeu a captura inicialmente selecionada. Essa decisão substitui todas as menções anteriores a screenshot como protagonista.

- **Referência adicional:** captura fornecida pelo usuário de uma página institucional do MBA DevClub. Princípios absorvidos: headline de grande presença, coluna esquerda disciplinada, CTA inequívoco e uma única cena visual. Não copiar: badge de oferta, checklist comercial, órbita de IA, marcas de ferramentas ou layout.
- **Novo asset:** `src/assets/images/rodolfo-2.png`, retrato oficial de corpo inteiro do Rodolfo Mori.
- **Nova ideia dominante:** o método “Conhecimento → Prática → Produto → Carreira” torna-se a prova visual; o fundador oferece presença humana e autoridade.
- **Composição:** retrato dissolvido por máscara na atmosfera, progressão editorial sem cards e estrutura mínima de linhas.
- **Hierarquia:** headline → método → Rodolfo → CTA.
- **Motion:** uma entrada expressiva curta do retrato, linha de progresso sem loop, feedback dos CTAs por 2–3 px e parallax local abaixo de 10 px.
- **Responsividade:** conteúdo e ações primeiro; no mobile, método e retrato formam uma cena vertical depois da prova institucional.
- **Performance:** um único asset raster no Hero, dimensões reservadas e carregamento prioritário; peso do PNG no build: 1,04 MB, sem alegação de LCP não medido.
