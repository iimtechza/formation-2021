import React from "react";

class Socket extends React.Component {
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
      <App.Provider
        value={{
          state: this.state,
          Socket: this
        }}
      >
        {this.props.children}
      </App.Provider>
    );
  }
}

export default Socket;
