import React from "react";
import Test from "./test/Test";

const App = () => {
  return (
    <>
      <h2>HOC</h2>

      <Test data={{ name: "Alex", age: 20 }} />
      <Test data={{ name: "Alexasddsa", age: 20 }} testData='ghjkdasdassd' />
    </>
  );
};

export default App;
