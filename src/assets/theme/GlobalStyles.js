import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.text};
        font-family: Poppins;
        transition: all 0.50s linear;
        margin: 0;
    }
`;