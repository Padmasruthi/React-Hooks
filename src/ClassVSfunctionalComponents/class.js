import { Component } from "react";
// import FunctionalComponent from "./functional";

class Classbasedcomp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: 0,
      second: 100,
    };
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  //   ipdi function la kuduthu pannalam. apdi pandra apa ipdi normal ah kudutha work agathu. constructor la irunthu bind pannanum apa thaan work aganum.
  handleClick1() {
    this.setState({ first: this.state.first + 1 });
  }

  handleClick2() {
    this.setState({ second: this.state.second + 1 });
  }

  //this is one of the life cycle method, like useEffect hook ah oru empty array la run pandra mathiri.
  componentDidMount() {
    console.log("Data received!");
  }

  // ithuvum life cycle method la onnuthaan. ithu vanthu useEffect hook la array la oru dependency vaipom la athumathiri class component la intha method ah use panipanga.
  componentDidUpdate(prevProps, prevState) {
    if (prevState.first !== this.state.first) {
      console.log("First value changed");
    }
  }

  render() {
    return (
      <div>
        {/* <FunctionalComponent /> */}
        <h3>This is Class based component.</h3>
        <h1>First: {this.state.first}</h1>
        <h1>Second: {this.state.second}</h1>

        {/* 
            this is inline update method.
                <button onClick={() => this.setState({first: this.state.first + 1})}>Add First</button> */}

        {/* ithu vanthu function la kuduthu pandrathu */}
        <button onClick={this.handleClick1}>Add First </button>
        <button onClick={this.handleClick2}>Add Second </button>
      </div>
    );
  }
}
export default Classbasedcomp;
