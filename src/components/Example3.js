import React, { useState } from "react";

export const Example3 = () => {
  const nameArr = useState("");
  const firstName = nameArr[0];
  const setFirstName = nameArr[1];
  // const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const changeFirstName = e => {
    setFirstName(e.target.value);
  };
  const changeLastName = e => {
    setLastName(e.target.value);
  };
  return (
    <div>
      <h1>With Hooks</h1>
      <div>
        <input
          type="text"
          value={firstName}
          onChange={changeFirstName}
          placeholder="FirsName"
        />
      </div>
      <h3>FirstName: {firstName}</h3>
      <div>
        <input
          type="text"
          value={lastName}
          onChange={changeLastName}
          placeholder="LastName"
        />
        <h3>LastName: {lastName}</h3>
      </div>
    </div>
  );
};

// export class Example3 extends React.Component {
//   constructor() {
//     super();
//     this.state = { firstName: "", lastName: "" };
//   }
//   changeFirstName = e => {
//     this.setState({ firstName: e.target.value });
//   };
//   changeLastName = e => {
//     this.setState({ lastName: e.target.value });
//   };
//   render() {
//     return (
//       <div>
//         <h1>Without Hooks using Class</h1>
//         <div>
//           <input
//             type="text"
//             value={this.state.firstName}
//             onChange={this.changeFirstName}
//             placeholder="FirsName"
//           />
//         </div>
//         <h3>FirstName: {this.state.firstName}</h3>
//         <div>
//           <input
//             type="text"
//             value={this.state.lastName}
//             onChange={this.changeLastName}
//             placeholder="LastName"
//           />
//           <h3>LastName: {this.state.lastName}</h3>
//         </div>
//       </div>
//     );
//   }
// }
