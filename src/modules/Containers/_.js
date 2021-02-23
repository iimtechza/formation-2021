import React from "react";
import APP from "../Context/context.js";
import Wrappers from "./index";

class MainWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Wrappers", Wrappers);

    const { Audio, Auth, Ui, Controls, Data, Socket } = Wrappers;

    console.log("MainWrapper children : ", this.props.children);

    return this.props.children;
  }
}

export default MainWrapper;
MainWrapper.contextType = APP;
// <Auth>
//   <Data>
//     <Socket>
//       <Controls>
//         <Ui>
//           <Audio>{this.props.children}</Audio>
//         </Ui>
//       </Controls>
//     </Socket>
//   </Data>
// </Auth>;
