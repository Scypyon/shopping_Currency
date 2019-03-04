import React from "react";
import Exchange from "./compontents/Exchange";
import "./App.css";

const Header = () => {
  return (
    <>
      <h1>Witamy w kalkulatorze !</h1>
    </>
  );
};

class App extends React.Component {
  state = {
    amount: "",
    product: "oil"
  };

  static defaultProps = {
    money: [
      {
        id: 1,
        name: "euro",
        ratio: 4.2,
        title: "Wartość w euro: "
      },
      {
        id: 2,
        name: "dolar",
        ratio: 3.7,
        title: "Wartość w dolarach: "
      },
      {
        id: 3,
        name: "pound",
        ratio: 4.8,
        title: "Wartość w funtach: "
      },
      {
        id: 4,
        name: "złotych",
        ratio: 1,
        title: "Wartość w złotych: "
      }
    ],

    cost: {
      oil: 5.25,
      oranges: 3.74,
      prad: 1.20
    }
  };

  handleAmount = e => {
    this.setState({
      amount: e.target.value
    });
  };

  handleProducts = e => {
    this.setState({
      product: e.target.value,
      amount: ""
    });
  };

  insertSnippes = select => {
    if (select === "oil") return <em>Liters</em>;
    else if (select === "oranges") return <em>Kilograms</em>;
    else if (select === "prad") return <em>Ampery</em>;
    else return null;
  };

  handlePrice = select => {
    return this.props.cost[select];
  };

  render() {
    const price = this.handlePrice(this.state.product);
    return (
      <div className='chooseProduct'>
        <Header />
        <label >
          Wybierz produkt:
          <select className='option' value={this.state.product} onChange={this.handleProducts}>
            <option value="oranges">Pomarańcze</option>
            <option value="oil">Benzyna</option>
            <option value="prad">Prąd</option>
          </select>
        </label>
        <br />
        <input className='option' onChange={this.handleAmount} type="number" />
        {this.insertSnippes(this.state.product)}
        <br />
        <label />
        {this.props.money.map(task => (
          <Exchange tab={task} cash={this.state.amount} price={price} />
        ))}
      </div>
    );
  }
}

export default App;
