# Scroll e Transições

## Scroll como leitura

Tratar scroll como controle de progressão do usuário, não como timeline a ser sequestrada.

## Reveals

- Usar `once: true` para conteúdo editorial quando repetição não informar nada.
- Escolher margem de viewport considerando quando o usuário precisa orientar-se.
- Não ocultar grandes blocos inteiros por longos períodos.
- Garantir estado final quando observer não estiver disponível.
- Evitar um observer e variants exclusivos para cada elemento pequeno.

## Sticky

Usar sticky quando a permanência permitir comparar, explorar ou acompanhar progresso. Não usar apenas para aumentar exposição. Definir comportamento quando a viewport for baixa.

## Parallax

- Aplicar apenas a camadas decorativas ou espaciais.
- Limitar amplitude.
- Desativar em reduced motion e reduzir em mobile.
- Não aplicar a texto, CTA ou elemento de foco.

## Transição entre seções

Escolher uma continuidade dominante: luz, forma, eixo, cor, densidade, elemento compartilhado ou ideia narrativa. Não adicionar componente de transição independente se gradiente, espaço e composição já resolverem.

## Page transitions

O projeto atual é uma página única. Não criar transição de rota sem mudança arquitetural aprovada. Para âncoras, preservar navegação nativa e reduced motion.

## Scroll rápido

Testar saltos por âncora, Page Down, barra de rolagem e touch. Não acumular sequências atrasadas nem manter estado intermediário incorreto.
