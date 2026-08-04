# Sistema de Pontuação

## Pesos

| Dimensão | Peso |
|---|---:|
| Direção de arte e identidade | 12% |
| UI e composição | 10% |
| UX e arquitetura da informação | 12% |
| Narrativa | 10% |
| Conversão | 8% |
| Motion | 10% |
| Acessibilidade | 10% |
| Responsividade | 8% |
| Performance | 10% |
| Código e arquitetura | 10% |

## Cálculo

Multiplicar cada nota de 0 a 10 pelo peso e somar. Exibir uma casa decimal. Aplicar caps de `FAIL_CONDITIONS.md` depois do cálculo.

## Evidência

Para cada nota, registrar ao menos uma força e uma fragilidade observáveis. Não pontuar dimensão fora do escopo como 10. Usar “N/V” quando não verificada e explicar impacto no veredito.

## Nota e gate

- 9,0–10: candidato a entrega excepcional, ainda sujeito aos gates.
- 8,5–8,9: pronto se não houver P0/P1 e os gates forem satisfeitos.
- 7,5–8,4: aprovado com ressalvas; refinamento recomendado.
- 6,0–7,4: não pronto para competição.
- Abaixo de 6,0: reprovado.

## Regras anticompensação

- Acessibilidade abaixo de 7 limita resultado final a 7,4.
- Responsividade abaixo de 7 limita resultado final a 7,4.
- UX ou narrativa abaixo de 7 limita resultado final a 7,9.
- Performance abaixo de 6,5 limita resultado final a 7,4.
- Qualquer P0/P1 aplica os caps de `FAIL_CONDITIONS.md`.

## Precisão

Não usar 9,2 versus 9,3 sem evidência que sustente essa precisão. Notas são instrumento de decisão e comparação, não aparência de objetividade.
