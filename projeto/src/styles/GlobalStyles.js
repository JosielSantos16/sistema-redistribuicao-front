import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700;9..144,900&family=Manrope:wght@400;500;600;700;800&display=swap');

    :root {
        --cor-navy: #001858;
        --cor-navy-escuro: #000E33;
        --cor-laranja: #FF6600;
        --cor-fundo: #F5FAFF;
        --cor-texto: #3D4356;
        --cor-texto-suave: #718096;
        --fonte-display: 'Fraunces', Georgia, serif;
        --fonte-corpo: 'Manrope', 'Segoe UI', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: var(--fonte-corpo);
    }
`;
export default GlobalStyle;