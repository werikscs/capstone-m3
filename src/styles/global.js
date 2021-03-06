import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: 0;
    border: 0;
    list-style: none;
}

:root{
    --color-background: #fff;
    --color-footer: #32373C;
    --input-background-color-primary: #FF8E15;
    --input-background-color-secondary: #FFC64A;
    --input-background-color-tertiary: #fff;
    --color-first: #FF8E15;
    --color-second: #FFEBC5;
    --color-second-50: #fff9ed;
    --color-third: #FF6853;
    --color-fourth: #ffffff;
    --color-fifth: #C4C4C4;
    --color-six: #257CFF;
    --color-seven: #FFF9F2;
    --color-icons: #FFA115;
    --color-icon-male: #3a0ca3 ;
    --color-icon-female: #b5179e;
    --color-title: #333437;
    --color-title-50: rgba(51, 52, 55, 0.5);
    --color-text: #606060;
    --color-bg-homept1: #e0e0e0;
    --color-toast-error: #e74c3c;
    --color-toast-success: #07bc0c;

    --color-error-form: #6b1700;

    --max-width: 1440px;
    --min-width: 360px;

    --toastify-color-light: #fff9f2;
    --toastify-color-error: #FF6853;
}

html{
    overflow: unset;
}


body, input, button, textarea{
    font-family: 'Hind', sans-serif;
    font-size: 1rem;
    color: var(--color-text)
}

h1, h2, h3, h4, h5, h6{
    font-family: 'Baloo Chettan 2', cursive;
    font-weight: 700;
    color: var(--color-title)
}

button{
    cursor: pointer;
}

button:hover{
    filter: brightness(90%);
}

.Toastify__toast-container{
    position: fixed;
    top: 116px;
    z-index: 20;
}

`;
