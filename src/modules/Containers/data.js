import React from "react";
import APP from "../Context/context.js";

class Data extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      one: 0,
      two: 0,
      three: false
    };
  }

  render() {
    console.og("APP : ", APP);

    return (
      <APP.Provider
        value={{
          state: this.state,
          Data: this
        }}
      >
        <>{this.props.children}</>
      </APP.Provider>
    );
  }
}

export default Data;
