import React from "react";

export default class App extends React.Component {
  state = {
    dados: [
      {
        nome: "Pedro",
        idade: 20
      },
      {
        nome: "Anitta",
        idade: 33
      },
      {
        nome: "Lexa",
        idade: 28
      },
      {
        nome: "Luiza",
        idade: 26
      },
      {
        nome: "Daniel",
        idade: 33
      },
      {
        nome: "Thiago",
        idade: 25
      }
    ]
  };

  render() {
    return (
      <>
        {this.state.dados.map((item) => (
          <h3>
            Olá, eu sou {item.nome} e tenho {item.idade}{" "}
          </h3>
        ))}
      </>
    );
  }
}

//Crie um component de class

//Crie um array de objetos no STATE com pelo menos 6 objetos

//Faça um map do seu state e exiba os dados na tela
