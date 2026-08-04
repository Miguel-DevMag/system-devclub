# Performance e Acessibilidade de Motion

## Propriedades

Preferir `transform` e `opacity`. Tratar blur, filter, box-shadow grande, clip-path e máscaras animadas como operações de maior risco.

## Loops

Antes de aceitar um loop, responder:

- O que ele comunica após o primeiro ciclo?
- Pode pausar fora da viewport?
- Pode ser estático em mobile?
- Quantas áreas já se movem ao mesmo tempo?
- O custo é compatível com sua prioridade?

## Eventos e lifecycle

- Usar listeners passivos quando aplicável.
- Fazer cleanup de listener, timer, observer e animation frame.
- Evitar listener global por componente repetido.
- Não medir layout em todo pointermove sem necessidade.
- Respeitar mudança dinâmica de preferência de motion quando possível.

## Reduced motion

Verificar com o sistema operacional. Garantir ausência de parallax, rotação, deriva, stagger e autoanimação desnecessária. Preservar orientação por estado, contraste e posição.

## Acessibilidade cognitiva

- Evitar movimento periférico durante leitura longa.
- Não usar flashes ou mudanças rápidas de luminosidade.
- Manter conteúdo estável após entrada.
- Não atrelar compreensão a sequência temporal.

## Evidências

Usar conforme o risco: Performance panel, rendering tools, Lighthouse, inspeção de layout shift, viewport menos favorável, gravação lenta para easing e verificação manual de reduced motion. Declarar “não medido” quando a ferramenta não tiver sido executada.
