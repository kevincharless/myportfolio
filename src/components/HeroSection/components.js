import styled from 'styled-components';
import { Container, Grid } from '@material-ui/core';

export const SectionContainer = styled(Container)`    
    display: flex;
    align-items: center;
    justify-content: center;

`

export const Row = styled(Grid)`
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Col = styled(Grid)`
    display: flex;
    justify-content: center;
`

export const Content = styled.div`
    width: 455px;
`

export const HeroAbstract = styled.img`
    position: absolute;
`
export const HeroAbstract2 = styled.img`
    position: absolute;
    top: 78%;
    left: 90%;
`

export const TitleAbstract = styled.img`
    position: relative;
    left: 80%;
`

export const DescriptionAbstract = styled.img`
    position: relative;
    left: 93%;
`

export const Title = styled.h1`
    font-size: 48px;
    font-weight: 600;

    margin: 0;
    margin: -24px 0;
`

export const Description = styled.p`
    font-size: 24px;

    margin: -20px 0;
`
