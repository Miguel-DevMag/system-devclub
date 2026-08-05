# DevClub Review — Hero final

Data: 2026-08-04

## Veredito

- **Estado:** aprovado para entrega competitiva.
- **Resultado ponderado:** **9,8 / 10**.
- **Cap aplicado:** nenhum.
- **Gate alcançado:** Gate 4 — Qualidade competitiva.
- **Gate 5:** não declarado; autorização/origem do asset e conteúdo factual da página completa não foram auditados para publicação.

## Escopo e evidências

- Reconstrução integral do Hero, incluindo narrativa, composição, asset, conteúdo, motion, acessibilidade e responsividade.
- Arquivos principais: `HeroSection.tsx`, `HeroContent.tsx`, `HeroEditorialVisual.tsx`, `HeroAtmosphere.tsx`, `DepthLayer.tsx`, `motion-tokens.ts` e `hero.ts`.
- Creative Decision Brief e Motion Intent Spec registrados em `artifacts/hero-rebuild-decision-brief.md`.
- Build: `npm run build` — aprovado.
- Lint: `npm run lint` — aprovado.
- `git diff --check` — aprovado.
- Semântica: exatamente um `h1` na árvore de componentes.
- Destinos: `#jornada-aprendizado` e `#plataforma` existem.
- Assets: somente `rodolfo-2.png` no Hero; caminho presente, 1.040.606 bytes; dimensões declaradas 1920×2880; nenhum URL remoto.
- Visual: build estático inspecionado em 1440×900 e 768×1024.
- Mobile CDP: viewport 320×800, `documentScrollWidth=320`, `bodyScrollWidth=320`, `h1Right=304`, três linhas.
- Teclado CDP: skip link → logo → menu → CTA primário → CTA secundário; ambos os CTAs com `:focus-visible=true`.
- Reduced motion CDP: media query ativa; estado final estático; sem parallax/entrada sequenciada.
- A automação do navegador integrado não iniciou por erro de ACL do ambiente; as evidências foram produzidas no Chrome local com build estático e protocolo CDP.

## Fail conditions

- **P0:** nenhum.
- **P1:** nenhum.
- **P2:** nenhum aberto na área entregue.
- **P3:** o PNG do Rodolfo tem 1,04 MB; uma derivação otimizada, aprovada visualmente, pode reduzir transferência futura.

## Pontuação

| Dimensão | Nota | Evidência principal |
|---|---:|---|
| Direção de arte e identidade | 9,9 | Cena reconhecível como DevClub por método, fundador, paleta e linguagem editorial; sem dashboard/IA genérica. |
| UI e composição | 9,8 | Headline dominante, assimetria controlada, espaço negativo e fotografia dissolvida na atmosfera. |
| UX e arquitetura da informação | 9,8 | Promessa, descrição, ações e prova compreensíveis sem gesto ou motion. |
| Narrativa | 10,0 | Conhecimento → prática → produto → carreira aparece como mecanismo visual e conecta o Hero à jornada. |
| Conversão | 9,7 | CTA primário inequívoco, secundário contextual e destinos válidos; sem urgência manipulativa. |
| Motion | 9,8 | Um movimento dominante, tokens semânticos, amplitude ≤10 px, sem loop e fallback reduzido. |
| Acessibilidade | 9,8 | Um h1, alt significativo, ordem de Tab previsível, foco visível e reduced motion verificado. |
| Responsividade | 9,8 | Desktop, tablet e 320 px inspecionados; mobile sem overflow e com conteúdo antes do visual. |
| Performance | 9,3 | Um único raster acima da dobra, espaço reservado e sem loops/canvas; PNG ainda pesa 1,04 MB. |
| Código e arquitetura | 9,8 | Responsabilidades separadas, dados centralizados, tokens reutilizados, sem dependência ou referência órfã. |

Resultado: `9,9×0,12 + 9,8×0,10 + 9,8×0,12 + 10,0×0,10 + 9,7×0,08 + 9,8×0,10 + 9,8×0,10 + 9,8×0,08 + 9,3×0,10 + 9,8×0,10 = 9,774`, exibido como **9,8**.

## Síntese crítica

- **Problemas resolvidos:** wireframe e UI fictícia removidos; narrativa técnica substituída por transformação humana; asset rejeitado removido; mobile sem overflow; motion reduzido a função.
- **Oportunidade:** gerar, com aprovação visual, uma versão otimizada do retrato para reduzir bytes sem perder o enquadramento.
- **Risco residual:** origem/licença do asset é assumida a partir do repositório e do pedido; não foi verificada externamente.
- **Inconsistências:** nenhuma material no Hero final.
- **O que faria diferente:** com mais tempo, mediria LCP/CLS em dispositivo intermediário e compararia uma derivação WebP/AVIF do retrato.

## Próximo gate

Para Gate 5 — Pronto para publicação:

1. Confirmar autorização/origem do retrato.
2. Medir Lighthouse/LCP/CLS em build de produção.
3. Avaliar uma derivação otimizada do PNG com comparação visual.
4. Auditar conteúdo factual e metadados da página completa.
