import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import "../Style/MainPart4.css";
import rightArrow from "../Images/right-arrow.png";
import grid3 from "../Images/grid3.png";
const MainPart4 = () => {
  return (
    <div>
      <Box className="main">
        <div class="jsx-3565395671 heading-base__inner">
          <h2 class="jsx-3565395671 heading-base__title">
            <span className="p_tag">
              Give customers the support <br />
              they need, before they need it
            </span>
          </h2>
          <br />
          <br />
          <div class="jsx-3565395671 heading-base__subhead">
            <span class="jsx-4250707789 text text--size-subhead-lg text--brand-mvp">
              <div class="rich-text" data-testid="rich-text">
                <p
                  className="p_tag_main"
                  style={{
                    fontSize: "23px",
                    fontWeight: "700",
                    lineHeight: "1.65",
                    display: "block",
                  }}
                >
                  Onboard, educate, and notify your customers with in-context,
                  automated <br /> messages—cutting support volume and keeping
                  customers happy.
                </p>
              </div>
            </span>
          </div>
        </div>
        <br />
        <br />
        <br />
        <Box display={"flex"} width={"30%"} margin={"auto"}>
          <h3
            style={{
              color: "blue",
              textAlign: "center",
              fontWeight: "700",
              fontSize: "21px",
            }}
          >
            Learn more about proactive support{" "}
          </h3>
          <br />

          <Image src={rightArrow} width={"20px"} marginLeft={"20px"} />
        </Box>
      </Box>
      <br />
      <br />
      <Box width={"90%"} margin={"auto"}>
        <Image
          margin={"auto"}
          width={"90%"}
          src={
            "https://images.ctfassets.net/xny2w179f4ki/65ktvTJmr4rlCXvY7dIlVB/9a054fa5bec40063973f52ba1bf9e100/mvp_hero_vertical_media.png?w=1240&fit=thumb&fm=webp"
          }
        />
      </Box>{" "}
      <br />
      <br />
      <Box width={"95%"} margin={"auto"}>
        <Image src={grid3} />
      </Box>
      <br />
    
    </div>
  );
};

export default MainPart4;
