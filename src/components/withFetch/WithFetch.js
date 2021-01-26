import React, { Component } from "react";

const withFetch = (
  url = "containerhttps://jsonplaceholder.typicode.com/todos",
) => (WrappedComponent) => {
  return class WithFetch extends Component {
    state = {
      data: [],
      loading: false,
      error: null,
    };

    componentDidMount() {
      this.setState({ loading: true });

      fetch(url)
        .then((res) => res.json())
        .then((data) => this.setState({ data }))
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };
};

export default withFetch;





// function getData(dasasdsdad) {
//   return function (a) {
//     console.log(a);
//     return function () {
//       return function (b) {
//         console.log(b);
//         console.log("Hello");
//       };
//     };
//   };
// }

// getData()(5)()(10);
