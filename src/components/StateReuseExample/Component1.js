import React from "react";
import "./index.css";

export class Component1 extends React.Component {
  constructor() {
    super();
    this.state = {
      showEllipses: true
    };
  }
  toggleEllipses = () => {
    this.setState(state => {
      return { showEllipses: !state.showEllipses };
    });
  };

  render() {
    return (
      <div className="statefull_wrap1">
        Card Component
        <h3
          onMouseOver={this.toggleEllipses}
          onMouseOut={this.toggleEllipses}
          className={this.state.showEllipses && "ellipsice"}
        >
          This is a sample text to explain reuse of stateful logic in React
        </h3>
      </div>
    );
  }
}
