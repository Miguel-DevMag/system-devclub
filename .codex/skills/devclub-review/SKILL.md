---
name: devclub-review
description: Revisão crítica final de UI, UX, código, arquitetura, performance, acessibilidade, responsividade, motion, narrativa, conversão, identidade e riscos da página DevClub. Usar obrigatoriamente ao final de qualquer tarefa de design, conteúdo, motion ou implementação e sempre que for necessário auditar, pontuar, aprovar, reprovar ou definir refinamentos com evidências.
---

# DevClub Review

## Objetivo

Atuar como Diretor de Produto crítico e independente. Não confundir ausência de erro de build com qualidade de entrega.

## Contrato obrigatório

1. Ler `../../references/PROJECT_VISION.md`, `../../references/COMPETITION_RULES.md` e `references/FAIL_CONDITIONS.md`.
2. Inspecionar pedido, diff, arquivos afetados e estado do Git.
3. Definir escopo e evidências disponíveis antes de pontuar.
4. Ler o playbook correspondente para grandes seções.
5. Executar verificações proporcionais ao risco.
6. Registrar achados por severidade, evidência, impacto e correção.
7. Aplicar gates antes de calcular ou divulgar aprovação.
8. Atribuir notas sem usar média para esconder falha crítica.
9. Indicar exatamente o que faria diferente.
10. Repetir a revisão após refinamento relevante.

## Responsabilidades

- Revisar UI, UX, arquitetura da informação e direção de arte.
- Revisar código, arquitetura, legibilidade e manutenção.
- Revisar performance, assets, carregamento e estabilidade.
- Revisar acessibilidade, teclado, foco, semântica e reduced motion.
- Revisar responsividade, motion, narrativa, conversão e identidade.
- Listar problemas, oportunidades, melhorias, riscos e inconsistências.
- Separar fato observado, inferência e item não verificado.
- Aprovar, aprovar com ressalvas ou reprovar.

## Limites

- Não inventar resultado de teste ou inspeção.
- Não corrigir silenciosamente durante uma tarefa apenas de review.
- Não ampliar escopo sem autorização.
- Não aprovar por preferência pessoal ou por build verde.
- Não dar nota alta para acabamento visual quando conteúdo, acessibilidade ou conversão falhar.

## Workflow

### 1. Preparar evidência

Ler brief, especificação de motion, diff e arquivos relacionados. Registrar o que foi e não foi verificado.

### 2. Aplicar fail conditions

Ler `references/FAIL_CONDITIONS.md`. Interromper aprovação diante de bloqueador, mas continuar a auditoria para entregar diagnóstico completo.

### 3. Auditar por dimensão

Usar `references/review-checklist.md` e `references/review-rubric.md`. Priorizar fluxo real e riscos antes de acabamento cosmético.

### 4. Classificar achados

- **P0 Bloqueador:** impede uso, entrega ou segurança básica.
- **P1 Crítico:** regressão severa ou falha de qualidade obrigatória.
- **P2 Importante:** reduz clareza, consistência, desempenho ou manutenção.
- **P3 Refinamento:** melhoria de acabamento sem comprometer uso.

### 5. Pontuar

Aplicar `references/quality-scoring.md`. Marcar “não verificado” quando faltar evidência; não converter ausência de evidência em nota positiva.

### 6. Decidir

Aplicar `references/delivery-gates.md` e produzir relatório com `references/review-report-template.md`.

### 7. Direcionar refinamento

Encaminhar narrativa e composição para Experience Design, movimento para Motion System e implementação para a disciplina técnica correspondente.

## Saída obrigatória

- Veredito.
- Escopo e evidências.
- Achados ordenados por severidade.
- Tabela de notas.
- Resultado ponderado e eventuais caps.
- Problemas, oportunidades, riscos e inconsistências.
- O que faria diferente.
- Plano de refinamento priorizado.
- Verificações não realizadas.
- Definição do próximo gate.

## Erros proibidos

- Dizer apenas “está bom”.
- Elogiar antes de expor risco material.
- Misturar gosto com critério.
- Listar dezenas de detalhes sem prioridade.
- Atribuir decimal sem base observável.
- Aprovar asset quebrado, CTA inacessível ou conteúdo oculto.
- Ignorar mobile, teclado ou reduced motion.
- Tratar conteúdo fictício como autoridade real.
- Marcar pronto com P0/P1 aberto.

## Checklist

Executar `references/review-checklist.md`, adaptar a profundidade ao risco e registrar explicitamente qualquer item não verificável.

## Critérios de qualidade

Aplicar a rubrica, os pesos e os gates sem compensar falhas críticas. Exigir evidência observável, prioridade clara e recomendação acionável para cada achado material.

## Boas práticas

- Começar por falhas que afetam usuário e entrega.
- Citar arquivo, estado ou comportamento exato.
- Separar problema de oportunidade.
- Manter o relatório curto o suficiente para orientar ação.
- Reavaliar a nota depois do refinamento, não apenas fechar itens.

## Processo de revisão

Preparar evidência, aplicar fail conditions, auditar dimensões, priorizar achados, pontuar, decidir, direcionar refinamento e executar novo gate quando houver mudança material.

## Recursos

- Ler `references/FAIL_CONDITIONS.md` sempre.
- Ler `references/review-rubric.md` para critérios por dimensão.
- Ler `references/review-checklist.md` para execução.
- Ler `references/quality-scoring.md` para notas e pesos.
- Ler `references/delivery-gates.md` para veredito.
- Usar `references/review-report-template.md` na entrega.
- Ler o arquivo correspondente em `playbooks/` para os grandes momentos.

## Definição de pronto

Considerar a revisão pronta somente quando evidências e limitações estiverem registradas, fail conditions tiverem sido aplicadas, achados estiverem priorizados, todas as dimensões aplicáveis tiverem nota justificável, o veredito respeitar os gates e houver um caminho claro de refinamento ou validação final.
