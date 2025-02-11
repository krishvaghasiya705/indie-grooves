import React from "react";
import Datenschutzsection from "../../components/Datenschutzcomponent";
import { Helmet } from "react-helmet";

function Datenschutz() {
  return (
    <>

      <Helmet>
        <title>INDIE-GROOVES - Datenschutz</title>
      </Helmet>


      <Datenschutzsection />
    </>
  );
}

export default Datenschutz;
