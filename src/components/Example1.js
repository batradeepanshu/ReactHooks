import React, { Component, useState } from "react";

export class Example1 extends Component {
  constructor() {
    super();
    this.state = {
      count: 1
    };
  }
  increment = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    return (
      <div className="hooksVsClass--without vert-hor-center-align">
        <h1>Without Hooks using Classes</h1>
        <h1 className="hooksVsClass--without__count">{this.state.count}</h1>
        <input
          type="button"
          color="primary"
          value="Increment"
          onClick={this.increment}
        />
      </div>
    );
  }
}

// export const Example1 = () => {
//   const state = useState(1);
//   const count = state[0];
//   const setCount = state[1];
//   const increment = () => {
//     setCount(count + 1);
//   };
//   // const [count,setCount]=useState(1);
//   return (
//     <div className="hooksVsClass--with vert-hor-center-align">
//       <h1>With Hooks</h1>
//       <h1 className="hooksVsClass--with__count">Count:{count}</h1>
//       <input type="button" value="increment" onClick={increment} />
//     </div>
//   );
// };
