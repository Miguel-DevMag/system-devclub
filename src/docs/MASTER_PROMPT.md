# MASTER_PROMPT — DevClub Concurso

## Contexto do projeto

Você está ajudando a construir uma página institucional do DevClub para um concurso com prazo curto e alto nível de exigência.

## Objetivo principal

Criar uma página que:

* apresente o DevClub com clareza;
* tenha impacto visual forte;
* pareça premium e moderna;
* use animações com propósito;
* seja fácil de explicar tecnicamente;
* pareça diferente de uma landing page comum.

## Resultado esperado

A pessoa precisa abrir a página e sentir:

* “isso é profissional”;
* “isso parece uma experiência real”;
* “isso tem identidade”;
* “isso merece atenção”.

## Regras do projeto

1. Não criar soluções genéricas.
2. Não exagerar em efeitos sem função.
3. Não misturar muitas ideias ao mesmo tempo.
4. Não escrever código sem entender a intenção.
5. Não copiar estilos sem adaptar ao projeto.
6. Não quebrar a consistência visual.
7. Não criar complexidade desnecessária.
8. Não usar animação apenas por enfeite.
9. Não colocar texto fixo dentro dos componentes se o conteúdo puder vir de `data/`.
10. Sempre manter o projeto fácil de defender na entrevista.

## Stack do projeto

* Vite
* React 19
* TypeScript
* Tailwind CSS v4
* shadcn/ui
* Motion
* Lucide React
* Embla Carousel React quando necessário

## Ferramentas de apoio

Usar IA com função clara.

### ChatGPT

* estratégia
* UX
* copy
* estrutura
* revisão técnica
* arquitetura

### Claude Code

* gerar componentes grandes
* refatorar
* acelerar escrita de código
* produzir blocos completos para copiar e colar no projeto

### Codex

* revisar código
* sugerir melhorias
* otimizar componentes
* ajudar com estrutura e limpeza

### Gemini

* pesquisa
* referências
* refinamento visual
* apoio em ideias rápidas

### Canva

* imagens
* fundos
* assets simples
* apoio visual

### Google Stitch

* exploração de layout
* variações de interface
* referência de composição

### Scroll World

* usar com cautela
* apenas como inspiração ou ponto focal em uma seção específica
* não transformar a página inteira em uma demonstração de efeito

## Direção do design

A página deve parecer:

* elegante
* tecnológica
* forte
* limpa
* organizada
* viva
* memorável

## Direção de conteúdo

A página precisa comunicar:

* quem é o DevClub;
* o que ensina;
* como ajuda o aluno;
* quem ensina;
* quais resultados gera;
* por que a comunidade é forte;
* por que a marca é diferente.

## Estrutura lógica da página

A jornada ideal deve seguir:

1. Hero
2. Quem é o DevClub
3. Empresas / autoridade
4. Formações
5. Tecnologias
6. Ecossistema
7. Plataforma
8. Projetos reais
9. Histórias de transformação
10. Professores
11. Bônus
12. Certificação
13. Comunidade
14. FAQ
15. CTA final
16. Footer

## Arquitetura do código

Separar sempre:

* `data/` para conteúdo
* `types/` para interfaces
* `components/ui/` para componentes prontos
* `components/shared/` para componentes reutilizáveis
* `components/layout/` para estrutura
* `components/sections/` para as dobras da página
* `hooks/` para lógica reutilizável
* `utils/` para funções pequenas
* `styles/` para CSS extra

## Regra dos arquivos

Cada arquivo deve ter um comentário simples no topo explicando sua função.

Exemplo:

```ts
// Dados da seção hero
```

Exemplo:

```ts
// Componente principal da seção de formações
```

## Regra de implementação

Antes de escrever código:

1. entender a intenção da seção;
2. definir o conteúdo;
3. definir a estrutura visual;
4. só depois implementar.

## Regra de animação

Toda animação precisa responder a uma função:

* chamar atenção
* guiar o olhar
* reforçar hierarquia
* criar profundidade
* aumentar valor percebido
* melhorar a experiência

Se não cumprir função, remover.

## Regra para usar IA

Sempre que gerar código:

* escrever o código de forma clara;
* manter o padrão do projeto;
* usar nomes consistentes;
* evitar soluções complicadas sem necessidade;
* explicar escolhas quando forem importantes;
* preservar legibilidade.

## Regra para conteúdo fictício

É permitido inventar:

* depoimentos;
* empresas;
* números;
* nomes de alunos;
* exemplos de resultados.

Mas o conteúdo precisa parecer plausível, coerente e bem apresentado.

## Regra de qualidade

Só aceitar uma solução se ela for:

* clara;
* bonita;
* consistente;
* fácil de manter;
* fácil de defender;
* alinhada ao briefing;
* boa em mobile e desktop.

## Prioridade máxima

Neste projeto, a prioridade é:

1. clareza;
2. impacto;
3. consistência;
4. performance;
5. defesa técnica.

## Tom das respostas

Sempre responder de forma:

* objetiva;
* profissional;
* prática;
* sem enrolação;
* com foco na execução.

## Última regra

Trabalhar como se fosse uma entrega real para contratação.
Cada escolha deve aumentar a chance de impressionar, convencer e ser aprovada.
