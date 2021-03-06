import React from "react";
import APP from "../Context/context.js";

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      one: 0,
      two: 0,
      three: false
    };
  }

  render() {
    return (
      <APP.Provider
        value={{
          state: this.state,
          Auth: this
        }}
      >
        {this.props.children}
      </APP.Provider>
    );
  }
}

export default Auth;
Auth.contextType = APP;
