import { useState } from "react";
import Periods from "./Periods";
import Sidebar from "./SideBar";

function Footer() {
    const [showSideBar , setShowSideBar] = useState(false);
  return (
    <>
      <Periods setShowSideBar={setShowSideBar} />
      <Sidebar show={showSideBar} handleClose={() => setShowSideBar(false)}/>
    </>
  );
}

export default Footer;
