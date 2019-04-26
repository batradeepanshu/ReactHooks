import React from "react";
import "./index.css";

export class Component2 extends React.Component {
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
      <div className="statefull_wrap2">
        Form Component
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
