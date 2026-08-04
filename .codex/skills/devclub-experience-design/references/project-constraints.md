# Restrições do Projeto

## Estado estrutural

- SPA estática sem roteamento.
- Seções sequenciais montadas em `src/App.tsx`.
- Conteúdo parcialmente separado em `src/data`.
- Primitivos de layout em `components/layout`.
- Catálogo de UI maior que o conjunto efetivamente usado.
- Motion distribuído por seções e `src/experience`.

## Problemas a não reproduzir

- Seções monolíticas misturando dados, arte, motion e lógica.
- Valores visuais e de motion duplicados localmente.
- Conteúdo essencial revelado somente após gesto.
- Assets pesados usados como sequência de frames.
- Referências de imagens inexistentes.
- Experiências globais criadas mas não integradas.
- Componentes genéricos mantidos sem uso ou adaptação.

## Restrições técnicas

- Usar React, TypeScript, Tailwind e Motion existentes.
- Não usar Canvas, WebGL ou Three.js.
- Preferir CSS e SVG simples para arte vetorial e atmosfera.
- Evitar dependência nova para efeito isolado.
- Preservar acessibilidade dos primitivos Base UI.
- Não alterar trabalho local não relacionado.

## Decisões antes de criar componente

- Determinar se o conteúdo pertence a `data/`.
- Determinar se o componente terá segundo uso ou isolará complexidade real.
- Definir responsabilidade e nome semântico.
- Decidir onde o motion deve viver.
- Identificar comportamento de fallback.

## Dívida conhecida relevante

- Assets declarados em dados podem não existir.
- Tokens atuais não garantem uso consistente.
- Algumas dependências estão instaladas sem uso aparente.
- A direção do Hero está em trabalho local não commitado.
- Build visual não possui suíte de testes automatizada.

Tratar esta lista como contexto, não como autorização para refatoração fora da tarefa.
