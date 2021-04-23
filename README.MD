# Inversão de dependencias e Injeção de dependencias


Facilmente confundidos, Inversão e Injeção de dependencias estão ligados diretamente o **"D"** do **SOLID(DIP — Dependency Inversion Principle)**.

Importante: Inversão de Dependência não é igual a Injeção de Dependência, fique ciente disso! A **Inversão de Dependência é um princípio (Conceito)** e a **Injeção de Dependência é um padrão de projeto (Design Pattern)**.

O design pattern da injeção de dependencias é utilizado para implementar o conceito de Inversão de Dependências.


> ## Vantagens

  * Facilita o reaproveitamento de código.
  * Torna o reaproveitamento mais seguro.
  * Facilita a manutenção do código.
  * Viabiliza e facilita testes **unitários**.
  * Trocar providers e bibliotecas externas deixa de ser um problema.
  * Código fica mais claro para devs recem chegados ao time.
  * Melhor **escalabilidade** do código.

> ## Desvantagens

  * Código mais **verboso**.
  * Pode não fazer sentido sem a utilização de outros principios e padrões de projeto(**factory**, **strategy**, separação de camadas de infra, interfaces).

> # Exemplo arquitetura com alto acoplamento
<img src="https://i.ibb.co/zRb6wvT/acoplamento.jpg" alt="Alto acoplamento"/>

> # Exemplo arquitetura com baixo acoplamento
<img src="https://i.ibb.co/1J2DMyL/baixo-acoplamento.jpg" alt="Baixo acoplamento"/>

# [Fluxograma](https://whimsical.com/inversao-de-dependencias-BeCwsiLss8XvEhEYeKmJbz)