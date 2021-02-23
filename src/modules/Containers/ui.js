import React from "react";

class Ui extends React.Component {
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
          state: this.state
        }}
      >
        {this.props.children}
      </App.Provider>
    );
  }
}

export default Ui;
