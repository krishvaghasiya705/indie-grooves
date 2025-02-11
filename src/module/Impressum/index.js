import React from "react";
import Impressumsection from "../../components/Impressumcomponent";
import { Helmet } from "react-helmet";

function Impressum() {
  return (
    <>

      <Helmet>
        <title>INDIE-GROOVES - Impressum</title>
      </Helmet>


      <Impressumsection />
    </>
  );
}

export default Impressum;
