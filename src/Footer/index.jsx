import { useState } from "react";
import DataSwithcer from "./DataSwitcher";
import Periods from "./Periods";
import Sidebar from "./SideBar";

function Footer(props) {
    const [showSideBar , setShowSideBar] = useState(false);
  return (
    <>
      <DataSwithcer {...props}/>
      <Periods setShowSideBar={setShowSideBar} {...props}/>
      <Sidebar show={showSideBar} handleClose={() => setShowSideBar(false)}/>
    </>
  );
}

export default Footer;
