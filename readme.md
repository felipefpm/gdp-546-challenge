![](https://lh3.googleusercontent.com/-SjJCP2AntwI/XoYRxI-hBjI/AAAAAAAABA4/bFi0th7AKGgQFVIOB8L-GiWSZriYhI6MgCK8BGAsYHg/s0/2020-04-02.png)

# Instituto Atlântico Estagiário Challenge

Olá! esse é um simples desadio para a vaga #GDP-546 no Instituto Atlântico.

## Validação de string

Dado uma string que contém somente caracteres '(', ')', '{', '}', '[' e ']',
é necessário saber se é uma string válida.

Uma string será válida se:

- Abertura de parenteses, chaves, colchetes são fechadas pelo mesmo tipo de caracter.
- Abertura e fechadura são realizadas na ordem correta.
- Uma string vázia também é considerada válida.

Exemplo 1:

```
Entrada: "()"
Saída: true
```
Exemplo 2:

```
Entrada: "()[]{}"
Saída: true
```
Exemplo 3:

```
Entrada: "(]"
Saída: false
```
Exemplo 4:

```
Entrada: "([)]"
Saída: false
```
Exemplo 5:

```
Entrada: "{[]}"
Saída: true
```
