import { createGlobalStyle } from "styled-components";

import DistantGalaxyWoff from "./Distant-Galaxy.woff";
import DistantGalaxyWoff2 from "./Distant-Galaxy.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: "Distant Galaxy";
        src: local("Distant Galaxy"), local("DistantGalaxy"), url(${DistantGalaxyWoff2}) format("woff2"), url(${DistantGalaxyWoff}) format("woff");
        font-weight: 300;
        font-style: normal;
    }
`