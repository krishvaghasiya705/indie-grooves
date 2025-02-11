import React from "react";
import "./theappearlsection.scss";

import Collaborationsimage1 from "../../../assets/image/collaborationsimage1.webp";
import Collaborationsimage2 from "../../../assets/image/collaborationsimage2.webp";

function Theappearlsection() {
  return (
    <div className="the-appearl-section-main">
      <div className="container-main">
        <div className="the-appearl-section">
          <div>
            <h1>THE APPAREL</h1>
            <div>
              <p>
                In the future, we will also produce shirts and hoodies, and for
                each INDIE-GROOVES edition, a matching collection will be
                released. These clothing items will be in an oversized fit, made
                from high-quality, durable fabric, with a strong emphasis on
                quality. They are not just ordinary clothes; wearing them
                supports the message of INDIE-GROOVES: "Equal as Humans,
                Despite Differences." Each collection will be limited in
                quantity to create a sense of rarity and collectibility.
              </p>
              <p>
                Furthermore, the designs for each edition will be individually
                crafted to align with the specific country where INDIE-GROOVES
                has been active. This means there will be country-specific
                collections. Additionally, a portion of the proceeds from the
                sale of these products will be donated back to the respective
                country of the collection to provide direct support on-site.
              </p>
            </div>
          </div>
        </div>

        <div className="collaborations-flx-main">
          <div className="collaborations-flx-items1 collaborations-flx-items1-sc">
            <div className="collab-title">
              <h2>COLLABORATIONS</h2>
            </div>
            <div className="collaborations-image-div">
              <img src={Collaborationsimage1} alt="Collaborationsimage1" rel="preload"/>
              <p>INDIE-GROOVES X YOUNG BAFANA</p>
            </div>
            <p>
              Our journey with INDIE-GROOVES has been enriched by valuable
              partnerships with organizations that share our vision for positive
              change.
            </p>
            <p>
              Young Bafana, a non-profit organization dedicated to the holistic
              development of underprivileged youth in South Africa, was our
              inaugural partner. Through our first INDIE-GROOVES exhibition,
              we raised funds to support their programs, reinforcing our
              commitment to making a meaningful impact by selling our prints at
              the gallery.
            </p>
          </div>
          <div className="collaborations-flx-items1 collaborations-flx-items1-th">
            <div className="collab-title">
              <h2>COLLABORATIONS</h2>
            </div>
            <div className="collaborations-image-div collaborations-image-div-sc">
              <img src={Collaborationsimage2} alt="Collaborationsimage2" rel="preload"/>
              <p>INDIE-GROOVES X CANON</p>
            </div>
            <p>
              Canon Germany, a renowned photography and imaging solutions
              provider, collaborated with us by sponsoring our debut exhibition.
              Their support extended to sponsoring the printing of the 34 images
              featured in the exhibition, showcasing their commitment to our
              vision and the power of storytelling through photography.
            </p>
            <p>
              These collaborations have allowed us to expand our reach and
              amplify the message of INDIE-GROOVES. We are continuously
              seeking new partnerships to further our mission of promoting
              equality, human rights, and positive change worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Theappearlsection;
