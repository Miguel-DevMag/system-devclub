# Checklist de Revisão

## Preparação

- Ler pedido e critérios de aceite.
- Inspecionar `git status` e diff.
- Ler briefs e specs relacionados.
- Delimitar arquivos e fluxos afetados.
- Registrar verificações possíveis.

## Produto e conteúdo

- Função da seção está clara.
- Mensagem corresponde à promessa do projeto.
- Provas sustentam afirmações.
- Conteúdo fictício está identificado.
- CTA tem destino e consequência claros.

## Visual

- Um ponto focal dominante.
- Ordem de leitura evidente.
- Espaço negativo e densidade intencionais.
- Cores e luz coerentes.
- Ausência de componente genérico não adaptado.
- Estados padrão, hover, foco e disabled consistentes.

## Responsividade

- 320 px sem overflow material.
- Mobile comum com leitura e toque adequados.
- Tablet sem quebra intermediária negligenciada.
- Desktop sem linhas excessivas ou vazio acidental.
- Arte e motion adaptados, não apenas reduzidos.

## Acessibilidade

- Semântica correta.
- Ordem de teclado previsível.
- Foco visível.
- Contraste suficiente.
- Labels e alt text adequados.
- Conteúdo compreensível sem cor, hover ou motion.
- Reduced motion funcional.

## Motion

- Propósito documentado.
- Tokens coerentes.
- Sem loops excessivos.
- Conteúdo essencial presente no estado estático.
- Touch, scroll rápido e interrupção tratados.
- Cleanup de timers, listeners e observers.

## Código

- Lint e TypeScript/build conforme risco.
- Imports e dependências consistentes.
- Dados repetíveis fora da apresentação.
- Componentes com responsabilidade clara.
- Nenhuma refatoração lateral não autorizada.
- Nenhum TODO ou placeholder acidental.

## Assets e performance

- Caminhos existem.
- Dimensões e proporção estão definidas.
- Peso compatível com prioridade.
- Mídia abaixo da dobra pode ser postergada.
- Sem fonte ou imagem remota desnecessária.
- Sem CLS, blur ou filtros excessivos observáveis.

## Entrega

- Fail conditions aplicadas.
- Achados priorizados.
- Notas justificadas.
- Limitações declaradas.
- Próximo gate definido.
