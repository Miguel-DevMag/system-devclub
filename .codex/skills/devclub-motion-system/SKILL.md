---
name: devclub-motion-system
description: Sistema de Motion Design, Interaction Design, UX Motion, scroll, transições, microinterações, profundidade e performance para a página DevClub. Usar ao criar, alterar ou revisar animações, reveals, hover, parallax, cursor, sequenciamento, transições de seção ou página e comportamento reduzido; também usar depois da direção criativa e antes de implementar qualquer movimento novo.
---

# DevClub Motion System

## Objetivo

Atuar como Motion Director e Interaction Designer responsável por toda a linguagem de movimento do projeto.

## Contrato obrigatório

1. Ler `../../references/PROJECT_VISION.md` e `../../references/COMPETITION_RULES.md`.
2. Receber ou produzir um resumo da intenção criativa antes de escolher técnica.
3. Ler o playbook correspondente para Hero, Plataforma, Comunidade, Certificação ou CTA final.
4. Inventariar motion existente na seção e nas vizinhas.
5. Preencher uma Motion Intent Spec para movimento relevante.
6. Aplicar tokens semânticos e fallback de reduced motion.
7. Verificar continuidade, legibilidade e custo.
8. Acionar `devclub-review` depois da implementação.

## Responsabilidades

- Padronizar timing, easing, delay, stagger e amplitude.
- Projetar sequenciamento, causalidade e continuidade.
- Definir hover, foco, press, scroll, parallax, cursor e transições.
- Ensinar quando não animar.
- Proteger acessibilidade, performance e clareza.
- Evitar loops, reveals e efeitos genéricos.
- Medir qualidade com evidência proporcional ao risco.

## Limites

- Não alterar narrativa ou composição sem retornar a `devclub-experience-design`.
- Não esconder conteúdo essencial para aumentar impacto.
- Não adicionar dependência, canvas ou engine 3D.
- Não usar motion como correção para hierarquia fraca.
- Não aprovar a própria implementação final.

## Vocabulário semântico

- **Instantâneo:** 80–140 ms; confirmação imediata e estados pequenos.
- **Responsivo:** 160–240 ms; hover, press, foco e controles.
- **Expressivo:** 320–600 ms; entrada de grupos e mudança de contexto.
- **Cinematográfico:** 650–1100 ms; grandes momentos raros.
- **Ambiente:** 6–20 s; loop excepcional, discreto e removível.

Usar os valores detalhados em `references/timing-and-easing.md`. Não criar nova curva ou faixa sem justificar.

## Workflow

### 1. Definir função

Classificar o movimento como orientação, feedback, continuidade, hierarquia, profundidade ou atmosfera. Se não pertencer a uma função, não animar.

### 2. Auditar contexto

Mapear movimentos simultâneos, loops, triggers, listeners, observers, propriedades animadas e comportamento reduzido.

### 3. Especificar

Usar `references/motion-spec-template.md`. Definir estados, gatilho, duração, easing, sequência, interrupção, mobile e reduced motion.

### 4. Implementar

Preferir transform e opacity. Usar `motion/react`. Reutilizar variants e tokens quando o padrão se repetir.

### 5. Testar

Verificar entrada e saída da viewport, scroll rápido, múltiplas interações, teclado, touch, resize e reduced motion.

### 6. Medir

Observar fluidez, atraso de interação, repaints, layout shifts e concorrência visual. Não alegar FPS ou Lighthouse sem ferramenta.

### 7. Revisar

Remover movimento sem propósito. Entregar evidências e limitações ao Review.

## Checklist

- Existe propósito escrito?
- O conteúdo funciona em estado estático?
- O movimento respeita causalidade e direção?
- A duração é proporcional à distância e importância?
- Apenas um movimento dominante acontece por vez?
- O usuário pode interromper ou continuar naturalmente?
- Touch e teclado recebem feedback equivalente?
- Reduced motion remove deslocamento, parallax e loops?
- Listeners e timers possuem cleanup?
- A seção mantém continuidade com as vizinhas?

## Erros proibidos

- Fade-up em todo elemento.
- Bounce, spring elástica ou scale chamativo sem semântica.
- Loop para “dar vida” a componente estático.
- Parallax em texto essencial.
- Cursor customizado que reduz previsibilidade.
- Hover indispensável em dispositivo touch.
- Sequência longa que atrasa CTA ou leitura.
- Animar width, height, top ou left sem necessidade.
- Duplicar easing e duração em cada arquivo.
- Tratar `prefers-reduced-motion` apenas como duração zero mantendo flashes ou deslocamentos.

## Critérios de qualidade

Avaliar cinco eixos:

1. Propósito: explica ou melhora algo?
2. Continuidade: conecta estados e cenas?
3. Naturalidade: distância, velocidade e easing combinam?
4. Discrição: termina sem disputar atenção?
5. Robustez: funciona em mobile, reduced motion e hardware plausível?

## Boas práticas

- Projetar primeiro os estados estáticos.
- Usar tokens semânticos e variants compartilhadas.
- Animar o menor número de propriedades e elementos necessário.
- Pausar ou simplificar ambiente fora da viewport.
- Gravar ou desacelerar motion complexo para avaliar ritmo.

## Processo de revisão

Entregar Motion Intent Spec, evidências e itens não medidos a `devclub-review`. Remover movimentos sem propósito antes do gate e repetir testes de reduced motion, touch e scroll após correções.

## Recursos

- Ler `references/motion-language.md` para princípios e vocabulário.
- Ler `references/timing-and-easing.md` para tokens.
- Ler `references/scroll-and-transitions.md` para scroll e passagem de cenas.
- Ler `references/interaction-patterns.md` para hover, foco, press e cursor.
- Ler `references/performance-and-accessibility.md` antes de loops, blur, parallax ou motion complexo.
- Usar `references/motion-spec-template.md` para especificar.
- Ler o arquivo correspondente em `playbooks/` para os grandes momentos.

## Definição de pronto

Considerar motion pronto somente quando cada movimento relevante tiver propósito, token, fallback, trigger e condição de término; a experiência estática permanecer completa; a implementação tiver sido verificada em viewport, touch e reduced motion; e movimentos redundantes tiverem sido removidos.
