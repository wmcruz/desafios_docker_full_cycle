# Desafios do módulo de Docker - Full Cycle
### code.education

[![Author](https://img.shields.io/badge/author-wmcruz-AD1256?style=flat-square)](https://github.com/wmcruz)
[![Languages](https://img.shields.io/github/languages/count/wmcruz/desafios_docker_full_cycle?color=%23AD1256&style=flat-square)](#)
![GitHub stars](https://img.shields.io/github/stars/wmcruz/desafios_docker_full_cycle?style=flat-square)
![GitHub forks](https://img.shields.io/github/forks/wmcruz/desafios_docker_full_cycle?style=flat-square)


## > Desafio 1 - Desafio Go
### 📘 Descrição
<i>Esse desafio é muito empolgante principalmente se você nunca trabalhou com a linguagem Go!
Você terá que publicar uma imagem no docker hub. Quando executarmos:

docker run <seu-user>/codeeducation

Temos que ter o seguinte resultado: Code.education Rocks!

Se você perceber, essa imagem apenas realiza um print da mensagem como resultado final, logo, vale a pena dar uma conferida no próprio site da Go Lang para aprender como fazer um "olá mundo".

Lembrando que a Go Lang possui imagens oficiais prontas, vale a pena consultar o Docker Hub.

3) A imagem de nosso projeto Go precisa ter menos de 2MB =)

Dica: No vídeo de introdução sobre o Docker quando falamos sobre o sistema de arquivos em camadas, apresento uma imagem "raiz", talvez seja uma boa utilizá-la.

  Divirta-se</i>


### 💻 Comandos
Para o desafio Go, basta rodar o comando abaixo.

```
docker run wmcruz/docker_desafio1_go
```

## > Desafio 2 - Nginx com Node.js
### 📘 Descrição
<i>Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

  Suba tudo em um repositório e faça a entrega.</i>

### 💻 Comandos
  Para o desafio Nginx com Node.js, basta rodar na para raiz desse projeto o comando abaixo:
  ```
  docker-compose up -d --build
  ```
  
  Obs.: para a segunda vez, não precisa do parametro <i>--build</i>
