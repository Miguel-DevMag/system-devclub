# Padrões de Interação

## Hover

- Confirmar interatividade por contraste, borda, deslocamento mínimo ou ícone.
- Limitar a uma transformação principal.
- Não mover cards tanto que o cursor perca referência.
- Não revelar informação indispensável apenas no hover.

## Foco

- Manter foco visível acima de atmosfera e backgrounds.
- Não substituir ring por glow ambíguo.
- Fazer foco tão informativo quanto hover.
- Preservar ordem e evitar deslocar o alvo focado.

## Press

- Responder rapidamente com 1–2 px ou contraste.
- Não atrasar navegação para concluir animação.
- Evitar scale perceptível em alvos de toque.

## Accordion e disclosure

- Preservar relação entre trigger e conteúdo.
- Animar altura somente com primitivo robusto.
- Mudar ícone em sincronia.
- Em reduced motion, atualizar imediatamente.

## Pointer e cursor

- Usar interação por ponteiro apenas como camada adicional.
- Limitar parallax a poucos pixels e usar spring amortecida.
- Recentrar ao sair e tratar resize.
- Não criar cursor customizado para links ou botões comuns.

## Touch

- Oferecer feedback por press e estado, não hover simulado.
- Evitar gestos não descobríveis.
- Não conflitar com scroll vertical.

## Indicadores vivos

Usar ping, pulso e status “online” somente para estado verdadeiro ou demonstração claramente rotulada. Não piscar continuamente apenas para chamar atenção.
