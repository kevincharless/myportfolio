import { createGlobalStyle} from "styled-components";
import Abstract1 from '../images/HeroImage/abstract1.svg';
import Abstract2 from '../images/HeroImage/abstract2.svg';
import Background from '../images/HeroImage/background.svg';
import TwibonHmps from '../images/HeroImage/twibonhmps.png';

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.text};
        font-family: Poppins;
        transition: all 0.50s linear;
        margin: 0;
        overflow-x: hidden;
    }

    .card1,
    .card2,
    .card3,
    .card4 {
        position: absolute;
        border-radius: 5px;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        will-change: transform;
    }

    .card1 {
        width: 251px;
        height: 251px;
        background-image: url(${Background});
    }

    .card2 {
        width: 125px;
        height: 125px;
        background-image: url(${Abstract2});
        position: relative;
        margin-top: 21em;
        left: 12%;
    }

    .card3 {
        width: 10px;
        height: 10px;
        background-image: url(${Abstract1});
        position: relative;
        margin-top: 15em;
        left: 30%;
    }

    .card4 {
        width: 25ch;
        height: 25ch;
        background-image: url(${TwibonHmps});
        border-radius: 30em;
    }

`;