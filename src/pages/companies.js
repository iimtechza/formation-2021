import React from "react";

import { images, companies } from "../data";
import data from "../data";

import Image from "../modules/Ui/Image/image";
// import Companies from './Companies.js'
// import New_Company from './new_company.js'

class Companies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // console.log("Companies_ ", Companies_);
    // alert();
    const { context, self } = this.props;
    console.log("Companies ", data);
    console.log("Context : ", context);
    const { images, companies } = data;
    return (
      <section
        id=""
        className=" sans-serif w-50 relative db bg-white h-100 flex-"
      >
        <div className=" flex flex-column ph5 mw7 left mb3 ">
          <h1 className=" f6 ttu tracked fw7 green sans-serif pt4 pb0 ">
            Companies
          </h1>
          <p className=" pt0 mt0 f6 fw5 black-40 sans-serif ">Your Companies</p>
        </div>

        <List items={companies} context={context} self={self} />

        <div className=" w-100 flex flex-column ph5 left pt3 flex-auto w-100 pb5 mt4 pt3 bt b--black-05">
          <button
            onClick={() => {
              self.setState({ active: 0 });
            }}
            className="mw4 f5 fw6 sans-serif pv2 flex left w-100 h-100 items-center justify-center bg-white green bn bw1 b--black-70 br2 ttc pointer dim shadow-1 hover-shadow-2 "
          >
            Reset
          </button>
        </div>
      </section>
    );
  }
}

export default Companies;
// Companies.contextType = app;

const List = ({ items, context, self }) => (
  <>
    <section
      id="List-01"
      className=" flex flex-row-ns flex-column col-3-ns col-3 mw8 left ph5 "
    >
      {items && items.length > 0 ? (
        items.map((item, index) => (
          <>
            <section
              onClick={item => {
                console.log("Context : ", context);
                console.log("Self : ", self);
                self.setState({ nudge: !self.state.nudge });
                // context.Ui.self.setState({ nudge: true });
              }}
              id=""
              className="col flex flex-column w-100 "
            >
              <Image type={"banner"} size={"small"} url={item.image} />

              <div className=" sans-serif flex flex-column f5 fw6 black mt3">
                {item.title}
              </div>
              <div className="  sans-serif flex flex-column f6 fw3 black mt2 ">
                {item.description}
              </div>
            </section>
          </>
        ))
      ) : (
        <>{"No data ..."}</>
      )}
    </section>
  </>
);
