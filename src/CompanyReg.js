import React from "react";
import "./assets/css/style.css";
import "./assets/css/tachyons.css";

import Companies from "./pages/companies.js";
import New_Company from "./pages/new_company.js";

import Wrappers from "./modules/Containers/";
import app from "./modules/Context/context.js";
import { Nav, Image } from "apeq-ui";

const { Auth, Data, Ui, Controls, Audio } = Wrappers;

// import { images, companies } from "./data/index.js";
import data from "./data/index.js";

// const { companies, images } = data;

class CompanyRegistration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
      slides: []
    };
  }

  render() {
    console.log("Data : ", data);

    const { images, companies } = data;

    const { active } = this.state;

    return (
      (images && (
        <>
          <Wrapper>
            <Sidebar_Right self={this} context={this.context} />

            <>
              <section
                id=""
                className=" sans-serif w-50 relative db bg-near-white h-100 flex-"
              >
                <div className=" flex flex-column ph5 mw7 center ">
                  <h1 className=" f6 ttu tracked fw7 green sans-serif pt5 pb0 ">
                    Start
                  </h1>
                  <p className=" pt0 mt0 f6 fw5 black-40 sans-serif ">
                    Register a new company or foundation.
                  </p>
                </div>
                <div className=" flex flex-column ph5 left pt3 flex-auto mw5 w-100 pb5">
                  <button
                    onClick={() => {
                      this.setState({
                        active: active <= images.length ? active + 1 : 0
                      });
                    }}
                    className="  f5 fw6 sans-serif pv2 flex left h-100 items-center justify-center bg-white green bn bw1 b--black-70 br2 ttc pointer dim shadow-1 hover-shadow-2 mr3 ph3    "
                  >
                    Next {active}
                  </button>
                </div>
              </section>

              {this.state.active === 0 ? (
                <New_Company self={this} context={this.context} />
              ) : (
                <Companies self={this} context={this.context} />
              )}
            </>
          </Wrapper>
        </>
      )) || <></>
    );
  }
}

export default CompanyRegistration;

CompanyRegistration.contextType = app;

const Wrapper = props => props.children;

const Sidebar_Right = props => (
  <>
    <div
      className=" bg-center bg-cover h-100 w-50 fixed right z-999"
      id="Sidebar-Right "
      style={{
        background:
          'url("' + slide_state({ images, state: props.self.state }) + '")'
      }}
    />
  </>
);

const slide_state = ({ images, state }) => {
  let index = 0;

  let restart = state.active > images.length;

  // let active = state.active <= images.length ? state.active : Math.round( state.active / images.length )

  let index_ = restart ? index : state.active;
  //  let index_ = restart ? index : ( Math.round( state.active / images.length ) )

  return images[index_];
};

//  const X = () => {
//    <div className=" flex ph5 " >
//           <img
//             className=" flex h4 br3 w-100 bg-cover bg-center mw7 center "
//             style={{
//               background:
//                 "url('https://images.pexels.com/photos/4992770/pexels-photo-4992770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"
//             }}
//           />

//           </div>
//  }
