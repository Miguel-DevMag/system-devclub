# Fail Conditions

## Regra

Aplicar estas condições antes da pontuação. Quando uma condição ocorrer, registrar evidência, impacto e responsável. Continuar a auditoria, mas não emitir aprovação plena.

## Bloqueadores P0

- Aplicação não inicializa ou build de entrega falha.
- Conteúdo principal, navegação ou CTA essencial fica inacessível.
- Erro impede uso por teclado ou aprisiona foco.
- Asset essencial ausente quebra compreensão ou credibilidade.
- Alteração destrói trabalho local do usuário fora do escopo.
- Informação sensível, credencial ou risco de segurança é exposto.

Veredito obrigatório: **reprovado**. Nota final limitada a 4,9.

## Críticos P1

- Headline, proposta ou CTA do Hero depende de gesto ou animação para aparecer.
- Contraste ou semântica inviabiliza conteúdo importante.
- Motion relevante ignora reduced motion.
- Layout falha em mobile comum ou causa overflow horizontal material.
- Links, âncoras ou destinos principais estão quebrados.
- Prova fictícia é apresentada como fato real.
- Jank, CLS ou asset excessivo compromete experiência prioritária.
- Solução viola restrição explícita do concurso ou do usuário.
- Introdução, sticky ou scroll hijacking impede progressão natural.

Veredito máximo: **aprovado com ressalvas** apenas se a falha não estiver na área alterada e houver plano imediato; caso contrário, **reprovado**. Nota final limitada a 6,9.

## Importantes P2 que acumulam reprovação

Reprovar quando três ou mais P2 relacionados permanecerem na área entregue, por exemplo:

- hierarquia confusa;
- composição genérica;
- ausência de comportamento tablet/mobile pensado;
- valores de motion arbitrários e duplicados;
- componente monolítico sem justificativa;
- caminhos de assets secundários quebrados;
- loops excessivos;
- conteúdo importante hardcoded fora do padrão;
- falta de foco visível consistente;
- dependência ou componente novo sem uso real.

## Condições de integridade da revisão

Não aprovar quando:

- build, lint ou inspeção alegados não foram executados;
- nota foi atribuída a dimensão não observada sem marcar limitação;
- revisão visual era necessária, mas nenhuma viewport foi inspecionada;
- motion foi alterado, mas reduced motion não foi verificado;
- interação foi alterada, mas teclado/touch não foram considerados.

## Condições específicas de conteúdo

- Número, empresa, depoimento, certificado ou parceria sem origem deve ser tratado como protótipo.
- Copy com promessa absoluta ou reconhecimento não comprovado exige correção antes da publicação.
- Texto de concurso ou bastidor não pode superar a proposta ao visitante.

## Saída ao falhar

Informar:

1. Condição acionada.
2. Evidência exata.
3. Impacto no usuário ou entrega.
4. Cap aplicado à nota.
5. Correção mínima para reabrir o gate.
6. Skill ou disciplina responsável.
