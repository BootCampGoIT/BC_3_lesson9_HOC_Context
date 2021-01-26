import axios from "axios";
import React, { useState, Component } from "react";

const hoc = (Test) => {
  return (props) => {
    const [state, setState] = useState("HEllo from hoc");
    return <Test {...props} something={state} />;
  };
};

// const hoc = (Test) => {
//   return class Hoc1 extends Component {
//     state = { data: "HEllo from hoc" };
//     render() {
//       return <Test {...this.props.data} something={this.state.data} />;
//     }
//   };
// };
export default hoc;

// export default hoc;

// const withHigherOrderComponent = (Test) => {
//   return (props) => {
//     const [state, setState] = useState("");
//     return (
//       <>
//         <Test {...props} something='This prop is from HOC' />
//       </>
//     );
//   };
// };

// export default withHigherOrderComponent;

// const withHigherOrderComponent = Test => {
//   return class WithHigherOrderComponent extends Component {
//     render() {
//       return (
//           <Test {...this.props} something="This prop is from HOC" />
//       );
//     }
//   };
// };

// export default withHigherOrderComponent;

// import React, { Component } from "react";
// const withHigherOrderComponent = (WrappedComponent) => {
//   return class WithHigherOrderComponent extends Component {
//     state = { isOpen: false };

//     onHandleClick = () => this.setState((prev) => ({ isOpen: !prev.isOpen }));

//     render() {
//       const { isOpen } = this.state;
//       return (
//         <>
//           {!isOpen && <button onClick={this.onHandleClick}>Open</button>}
//           {isOpen && (
//             <WrappedComponent
//               {...this.props} onHandleClick={this.onHandleClick}
//               extraProp='This prop is from HOC'
//             />
//           )}
//         </>
//       );
//     }
//   };
// };

// export default withHigherOrderComponent;
