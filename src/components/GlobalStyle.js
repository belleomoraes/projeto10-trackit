import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&display=swap');

*{
    box-sizing: border-box ;
}

body {
    background-color: #F2F2F2;
}

.root {
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
}

`


export default GlobalStyle;