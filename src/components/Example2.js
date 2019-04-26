import React, { Component, useState, useEffect } from "react";

// export function Example2() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   });

//   return (
//     <div className="hooksVsClass--with vert-hor-center-align">
//       <h1>You clicked {count} times</h1>
//       <input
//         typr="Button"
//         value="Click Me"
//         onClick={() => setCount(count + 1)}
//       />
//     </div>
//   );
// }

export class Example2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div className="hooksVsClass--without vert-hor-center-align">
        <h1>You clicked {this.state.count} times</h1>
        <input
          value="Click me "
          type="button"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        />
      </div>
    );
  }
}
