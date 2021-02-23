import React from "react";
import "../style.css";
import "../tachyons.css";
import Companies_ from "../data/companies.json";

import Image from "../modules/Ui/Image/image";
// import Companies from './Companies.js'
// import New_Company from './new_company.js'

class Companies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log("Companies_ ", Companies_);
    // alert();
    const { context, self } = this.props;

    return (
      <section id="" className="relative db bg-near-white h-100 flex-">
        <div className=" flex flex-column ph5 mw7 left ">
          <h1 className=" f6 ttu tracked fw7 black sans-serif pt5 pb0 ">
            Companies
          </h1>
          <p className=" pt0 mt3 f5 fw5 black sans-serif ">Your Companies</p>
        </div>

        <List data={Companies_} />

        <div className=" flex flex-column ph5 left pt3 flex-auto mw5 w-100 pb5">
          <button
            onClick={() => {
              self.setState({ active: 0 });
            }}
            className=" f5 fw6 sans-serif pv2 flex left w-100 h-100 items-center justify-center bg-white green bn bw1 b--black-70 br2 ttc pointer dim shadow-1 hover-shadow-2 "
          >
            Next
          </button>
        </div>
      </section>
    );
  }
}

export default Companies;
// Companies.contextType = app;

const List = ({ data }) => (
  <>
    <section
      id="List-01"
      className=" flex flex-row-ns flex-column col-3-ns col-1 mw8 left "
    >
      {data.length > 0 ? (
        data.map((item, index) => (
          <>
            <section id="" className=" flex flex-column w-100 ">
              
              <Image url={item.image} />

              <div className=" flex flex-column f5 fw6 black ">
                {item.title}
              </div>
              <div className=" flex flex-column f5 fw6 black ">
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
