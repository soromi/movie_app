import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    * {
        box-sizing:border-box;
    }
    html, body {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color:rgba(20, 20, 20, 1);
    }
    body {
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:12px;
        color:white;
        padding:50px 20px 50px 20px; 
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    button {
        border: none;
        margin: 0;
        padding: 0;
        width: auto;
        overflow: visible;
        background: transparent;
        color: inherit;
        text-align: inherit;
        outline: none;
        cursor: pointer;
        &::-moz-focus-inner {
            border: 0;
            padding: 0;
        }
    }
`;

export default globalStyles;
