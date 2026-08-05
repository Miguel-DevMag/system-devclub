# Motion Intent Spec — Ecossistema

## Contexto

- Seção: `EcosystemWall`.
- Brief: Campo de continuidade.
- Função: orientação, continuidade espacial e feedback de exploração.
- Elemento prioritário: núcleo DevClub e suas conexões.

## Estados

- Inicial: copy legível; núcleo presente com contraste reduzido; conexões ainda não traçadas.
- Final: todas as relações legíveis, estáveis e conectadas.
- Gatilho: seção entra na viewport uma única vez.
- Término: último conjunto de nós alcança estado final em menos de 1,1 s.
- Interrupção: scroll rápido alcança o estado final sem fila; pointer leave retorna ao estado neutro.

## Parâmetros

- Propriedades: `opacity`, `transform` e `pathLength`.
- Duração: responsivo `0.2 s`, expressivo `0.55 s`, cinematográfico `1.05 s` apenas para o traçado completo.
- Easing: `emphasized` para construção; `standard` para feedback.
- Delay: máximo `0.18 s` entre orientação e campo.
- Stagger: dois grupos de quatro nós, não oito delays individuais.
- Distância: texto 10 px; nós 6 px; profundidade por ponteiro até 3 px.
- Origem: conexões partem visualmente do núcleo.

## Sequência

1. A orientação editorial ganha contraste e posição final.
2. O núcleo confirma a origem e as oito linhas crescem para fora.
3. Nós aparecem em dois grupos espaciais e permanecem estáveis.

## Interação

- Hover/foco: caminho, nó e verbo relacionados ganham contraste em `0.2 s`; o nó desloca no máximo 2 px.
- Toque: primeiro toque fixa o destaque; outro nó transfere o estado.
- Saída: pointer leave retorna o campo ao estado geral.

## Adaptação

- Mobile: sem parallax; a linha vertical cresce uma vez e as relações entram como conjunto.
- Touch: botões têm área mínima de 44 px e não dependem de hover.
- Teclado: foco visível e mesmo destaque do hover.
- Reduced motion: sem deslocamento, parallax, scale, stagger ou desenho progressivo; estado final imediato.
- Sem JavaScript: conteúdo permanece no fluxo mobile e o mapa desktop continua legível por CSS/SVG estático.

## Performance

- Risco: filtros e múltiplos transforms concorrentes.
- Decisão: nenhuma animação de blur; um único transform de profundidade no campo; sombras estáticas pequenas.
- Loops: zero.
- Fora da viewport: nenhuma animação contínua a pausar.
- Cleanup: eventos React locais; nenhuma inscrição global.
- Evidência: build, lint, inspeção visual, interação por teclado e emulação de reduced motion.

## Remoção

- Remover profundidade se houver instabilidade ou custo perceptível.
- Estado equivalente: todas as conexões e relações visíveis com contraste neutro.
