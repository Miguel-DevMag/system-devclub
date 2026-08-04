# Regras do Concurso e da Entrega

## Objetivo

Transformar as restrições do concurso e os riscos observados no repositório em gates operacionais para design, motion, implementação e review.

## Escopo autorizado

- Construir e refinar somente a página institucional do DevClub.
- Preservar a stack atual e a publicação estática.
- Evitar backend, autenticação, roteamento ou infraestrutura sem necessidade aprovada.
- Não criar novas seções apenas para preencher espaço.
- Não trocar arquitetura inteira quando uma evolução localizada resolver.

## Regras criativas

- Não aceitar template reconhecível, composição genérica ou estética “site de IA”.
- Não copiar layout, texto, asset ou animação de referência.
- Registrar o princípio aprendido e a adaptação feita para cada referência usada.
- Não escolher componentes apenas por beleza isolada.
- Não confundir “premium” com glow, blur, glass, gradiente ou partículas em excesso.
- Garantir uma ideia dominante por seção.
- Justificar exceções ao sistema visual.

## Regras de experiência

- Expor headline, proposta e ação essencial sem exigir scroll, hover ou animação.
- Não prender o usuário em introdução, scroll hijacking ou sequência obrigatória.
- Não ocultar conteúdo essencial enquanto assets carregam.
- Manter âncoras, teclado, foco e leitura funcional.
- Tratar 320 px, mobile comum, tablet e desktop como estados reais.
- Evitar que uma seção de suporte roube atenção de um grande momento.

## Regras de motion

- Usar `motion/react` como importação padrão.
- Respeitar `prefers-reduced-motion` em toda animação não essencial.
- Permitir estado final legível e funcional quando JavaScript ou motion falhar.
- Evitar bounce, elasticidade infantil, scale exagerado e fades repetitivos.
- Restringir loops contínuos a elementos raros, discretos e justificáveis.
- Não animar propriedades de layout quando transform e opacity resolverem.
- Medir qualidade por função, continuidade, legibilidade e custo, não por quantidade.

## Regras de código

- Preservar TypeScript estrito e imports pelo alias `@/`.
- Manter conteúdo repetível em `data/` e contratos em `types/`.
- Separar uma seção quando composição, comportamento e conteúdo deixarem de ser compreensíveis juntos.
- Não criar abstração sem pelo menos um segundo uso provável ou ganho claro de legibilidade.
- Remover ou justificar dependências, componentes e experiências não usados.
- Evitar valores de motion e aparência duplicados quando existir token semântico.
- Manter comentários para intenção não óbvia; não comentar o que o código já diz.

## Regras de assets e conteúdo

- Não entregar caminhos de imagem quebrados.
- Definir dimensões e comportamento responsivo dos assets relevantes.
- Otimizar imagens de grande impacto e evitar carregar frames completos para simular vídeo.
- Evitar fonte remota quando a alternativa local já existir e cumprir a direção.
- Usar texto alternativo significativo para imagens informativas e vazio para decoração.
- Tratar dados fictícios como protótipo, nunca como comprovação pública.
- Verificar autorização e origem de logos, fotos, depoimentos e marcas.

## Regras de performance

- Evitar CLS e reservar espaço para mídia.
- Carregar o necessário para o primeiro viewport; postergar o restante.
- Não manter listeners globais, observers ou loops sem cleanup.
- Evitar múltiplas camadas grandes com blur e filtros concorrentes.
- Buscar 60 fps em motion relevante e degradar com elegância.
- Medir antes de alegar Lighthouse, LCP, CLS ou FPS.

## Regras de acessibilidade

- Usar semântica HTML compatível com a função real.
- Garantir navegação por teclado, foco visível e ordem previsível.
- Preservar contraste e legibilidade sobre fundos animados.
- Garantir área de toque adequada.
- Não depender apenas de cor, posição, hover ou movimento para comunicar.
- Não usar `role="img"` em composições complexas quando texto equivalente próximo já explicar melhor.

## Evidência mínima antes da aprovação

- Lint executado.
- TypeScript ou build executado.
- Estado do Git inspecionado para preservar mudanças do usuário.
- Assets referenciados verificados.
- Desktop e mobile inspecionados visualmente quando houver mudança de UI.
- Fluxo por teclado verificado quando houver interação.
- Reduced motion verificado quando houver motion.
- Limitações e verificações não realizadas declaradas explicitamente.

## Proibições absolutas

- Declarar pronto porque o build passou.
- Inventar resultado de teste, métrica ou inspeção.
- Aprovar asset quebrado, CTA inacessível ou conteúdo essencial oculto.
- Substituir trabalho local do usuário sem autorização.
- Introduzir dependência pesada para um efeito que CSS ou Motion já resolva.
- Usar referência como desculpa para copiar.
