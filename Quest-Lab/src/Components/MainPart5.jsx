import React from "react";
import { Box, Image, Flex } from "@chakra-ui/react";
import "../Style/MainPart5.css";
import grid5 from "../Images/grid5.png";
const MainPart5 = () => {
  return (
    <div>
      <Box className="main5">
        <div
          style={{
            top: "-6.25rem",
            bottom: "-6.25rem",
          }}
        >
          <br />
          <br />
          <br />
          <span
            className="div5"
            style={{
              fontSize: "1.5rem",
              letterSpacing: "0.25rem",
              fontWeight: "700",
            }}
          >
            Platform
          </span>
          <br />
          <br />
          <h2 class="jsx-3565395671 heading-base__title">
            <span
              style={{
                fontSize: "76px",
                lineHeight: "100%",
              }}
            >
              A single, powerful, easy-to-use <br />
              platform
            </span>
            <br />
            <p
              className="main5span"
              style={{
                color: "#d3d5d8",
                fontSize: "24px",
                lineHeight: "150%",
              }}
            >
              Get all your automation, conversations, tickets, customer data,
              and <br /> reporting working together seamlessly. Maximize team
              performance by <br />
              connecting all your other tools to our platform.
            </p>
          </h2>
        </div>
        <br />
        <br />
        <Image width={"90%"} margin={"auto"} src={grid5} />
        <br />
        <br />
        <Box  className='footer_part_up'>
          <Box display={"flex"} justifyContent={"space-around"}>
            <Image
              src={
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMi4zMTU0IiByPSIxMSIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTggMTIuODg2OUwxMC4yODU3IDE2LjMxNTRMMTYuMzgxIDguMzE1NDMiIHN0cm9rZT0iIzA0MTUyNyIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
              }
            />
            <p
              style={{
                lineHeight: "1.5",
                letterSpacing: ".5px",
              }}
            >
              Maximize team performance with actionable insights
            </p>
          </Box>
          <Box display={"flex"} justifyContent={"space-around"}>
            {" "}
            <Image src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMi4zMTU0IiByPSIxMSIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTggMTIuODg2OUwxMC4yODU3IDE2LjMxNTRMMTYuMzgxIDguMzE1NDMiIHN0cm9rZT0iIzA0MTUyNyIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" />
            <p
              style={{
                lineHeight: "1.5",
                letterSpacing: ".5px",
              }}
            >
              Maximize team performance with actionable insights
            </p>
          </Box>
          <Box display={"flex"} justifyContent={"space-around"}>
            <Image src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMi4zMTU0IiByPSIxMSIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTggMTIuODg2OUwxMC4yODU3IDE2LjMxNTRMMTYuMzgxIDguMzE1NDMiIHN0cm9rZT0iIzA0MTUyNyIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" />
            <p
              style={{
                lineHeight: "1.5",
                letterSpacing: ".5px",
              }}
            >
              Maximize team performance with actionable insights
            </p>
          </Box>
        </Box>
        <Box width={'80%'} margin={'auto'}>
          <section
            data-testid="shape-section"
            class="jsx-1516004678 shape-section shape-section--upward shape-section--inline-with-content mvp-background-color-slate"
          >
            <svg
              class="shape-section__shape"
              width="1440"
              height="84"
              viewBox="0 0 1440 84"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 83C454.33-24.774 928.696-27.898 1384.99 71.96L1440 83v2H0Z"
                fill="#ffffff"
              ></path>
            </svg>
          </section>
        </Box>
      </Box>
    </div>
  );
};

export default MainPart5;
