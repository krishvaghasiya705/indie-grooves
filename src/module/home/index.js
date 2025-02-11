import React from "react";
import Herobanner from "../../components/Homepagecomponents/Herobanner";

import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>INDIE-GROOVES - Home</title>
      </Helmet>

      <Herobanner />
    </>
  );
}
