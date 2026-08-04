# Timing e Easing

## Curvas oficiais

| Token | Curva | Uso |
|---|---|---|
| `ease-out-premium` | `[0.16, 1, 0.3, 1]` | entradas e reveals com chegada suave |
| `ease-out-compact` | `[0.22, 1, 0.36, 1]` | controles e deslocamentos curtos |
| `ease-in-out-flow` | `[0.65, 0, 0.35, 1]` | transição entre estados equivalentes |
| `linear` | `linear` | progresso contínuo real; raramente decoração |

Não introduzir curva nova sem documentar função ausente.

## Durações

| Classe | Faixa | Uso |
|---|---:|---|
| Instantâneo | 0.08–0.14 s | press, indicador e resposta mínima |
| Responsivo | 0.16–0.24 s | hover, foco, ícone e controle |
| Estrutural curto | 0.28–0.42 s | accordion, menu e troca de estado |
| Expressivo | 0.45–0.65 s | headline, grupo e entrada de cena |
| Cinematográfico | 0.7–1.1 s | um momento prioritário |
| Ambiente | 6–20 s | respiração ou deriva excepcional |

## Distância

- Microfeedback: 1–4 px.
- Entrada de texto: 8–24 px.
- Entrada de bloco: 16–40 px.
- Mudança de cena: definir pela composição e evitar travessias longas.
- Scale: manter normalmente entre 0.98 e 1.02; justificar fora dessa faixa.

## Stagger

- Conteúdo relacionado: 40–80 ms.
- Palavras de headline: evitar por padrão.
- Listas: no máximo seis itens com stagger perceptível.
- Não combinar delay global longo com stagger longo.

## Springs

Usar somente para interação física ou arraste. Preferir resposta amortecida sem overshoot. Não usar spring em conteúdo editorial apenas para parecer orgânico.

## Reduced motion

- Remover deslocamento, rotação, scale e parallax não essenciais.
- Manter mudança instantânea ou crossfade curto quando necessário para contexto.
- Remover delays e sequências.
- Congelar loops em estado visual neutro.
