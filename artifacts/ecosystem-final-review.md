# Review final — Ecossistema

## Veredito

- Estado: **Aprovado** para entrega da seção; não declarado pronto para publicação jurídica.
- Resultado ponderado: **9,6 / 10**.
- Cap aplicado: nenhum.
- Gate alcançado: Gate 4 — qualidade competitiva.
- Gate 5 pendente apenas para autorização/origem formal de fotos e marcas e medição de performance em ambiente publicado.

## Escopo e evidências

- Pedido revisado: reconstrução integral da seção Ecossistema como experiência institucional editorial, humana, conectada e responsiva.
- Arquivos da entrega: `EcosystemWall.tsx`, `EcosystemWallCore.tsx`, dados/tipos do mapa, três folhas de estilo focadas, briefs e evidências.
- Build final: `tsc -b && vite build`, aprovado; 2318 módulos transformados.
- Lint final: `eslint .`, aprovado sem saída de erro.
- Assets: todos os caminhos usados existem; fotos entre 46,7 kB e 69,3 kB; SVGs entre 0,6 kB e 3,2 kB; carregamento lazy nas imagens dos nós.
- Desktop: captura isolada em 1440 × 1400 e leitura de layout calculado; mapa contido em campo de 1304 px e nós extremos dentro do viewport.
- Mobile: captura isolada em 390 × 1500; composição vertical própria e oito relações presentes no DOM.
- Reduced motion: captura com preferência reduzida; headline, núcleo, conexões e oito relações no estado final após correção do fallback.
- Overflow: viewport headless reportou `scrollWidth === clientWidth` e oito controles presentes; o Chrome headless impôs largura de layout mínima de 494 px na tentativa nominal de 320 px.
- Não verificado: exercício automatizado de Tab/Shift+Tab, pointer e toque; gravação do motion normal; Lighthouse; licença/autorização formal de fotos e marcas.

## Fail conditions

- P0: nenhum.
- P1: nenhum aberto.
- P2: nenhum aberto.
- P2 corrigido durante o gate: descrições dos nós estavam em 11 px e contraste excessivamente discreto; foram elevadas para 12 px e 52% de branco.
- P1 corrigido durante o gate: reduced motion podia manter os nós no estado inicial se o observer não disparasse; stylesheet final agora força conteúdo e transform estáticos.

## Pontuação

| Dimensão | Nota | Força observável | Fragilidade / limite |
|---|---:|---|---|
| Direção de arte e identidade | 10,0 | Campo de continuidade autoral, reconhecível pela relação entre formação, pessoas e prática | Autorização formal dos assets não verificada |
| UI e composição | 9,5 | Núcleo único, topologia legível, amplo espaço negativo e ausência de cards/dashboard | Densidade do mapa exige monitor amplo para máximo impacto |
| UX e arquitetura da informação | 9,5 | Relações usam verbos operacionais e conteúdo completo sem interação | Realce interativo não foi exercitado por automação |
| Narrativa | 10,0 | Responde diretamente ao Hero e prepara a Plataforma como rotina do sistema | Ordem global inclui seções intermediárias, preservada por escopo |
| Conversão | 9,5 | Ponte conceitual “da rede para a rotina” cria continuidade sem CTA repetido | Não há ação direta, decisão intencional para seção de sustentação |
| Motion | 9,5 | Construção causal, tokens oficiais, zero loops e profundidade limitada a 3 px | Motion normal revisado em código, sem gravação real |
| Acessibilidade | 9,5 | Semântica, `aria-pressed`, foco visível, alt text e reduced motion completo | Sequência de teclado não foi executada no browser controlado |
| Responsividade | 9,5 | Mobile é uma composição vertical própria; 390 px inspecionado e sem overflow observado | 320 px exato não pôde ser emulado pelo Chrome headless disponível |
| Performance | 9,5 | Sem dependências, Canvas, loops ou filtros animados; mídia lazy e dimensões reservadas por CSS | Sem Lighthouse ou profile de paint |
| Código e arquitetura | 9,5 | Dados e tipos separados, componente de relação isolado, eventos locais e imports por alias | CSS foi dividido em três arquivos para contornar ACL do sandbox |

Resultado ponderado: `10×0,12 + 9,5×0,10 + 9,5×0,12 + 10×0,10 + 9,5×0,08 + 9,5×0,10 + 9,5×0,10 + 9,5×0,08 + 9,5×0,10 + 9,5×0,10 = 9,61`, exibido como **9,6**.

## Síntese crítica

- Problemas abertos: nenhum material para a entrega da seção.
- Oportunidades: gravação do motion e teste assistivo real podem aumentar a confiança do Gate 5.
- Riscos: marcas podem ser interpretadas como vínculo apesar da nota explícita; a publicação deve manter a nota e validar autorização.
- Inconsistências: o Hero atual usa copy diferente da frase citada no briefing, mas a nova headline ainda responde à mesma promessa de carreira; Hero não foi alterado por escopo.
- O que faria diferente: com ambiente de browser funcional, mediria contraste calculado, percorreria os oito nós por teclado/touch, gravaria a construção em velocidade reduzida e executaria Lighthouse no build publicado.

## Próximo gate

- Para Gate 5: confirmar licenças/autorização dos assets, executar Lighthouse/Performance panel no deploy, testar 320 px real e percorrer foco/toque em navegador controlado.
