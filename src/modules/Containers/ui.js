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
    alert();
    return (
      <>
        <App.Provider
          value={{
            state: this.state,
            Ui: this
          }}
        >
          {this.props.children}
        </App.Provider>
        <Drawer />
      </>
    );
  }
}

export default Ui;

const Drawer = props => (
  <section
    id="Drawer"
    className="drawer fixed right-0 w-50 bottom-0 vh-100 z-999 bg-red"
    style={{ width: "500px", height: "100vh" }}
  >
    <section id="DrawerInner" className=" flex h-100 w-100 pa4 " />
  </section>
);
