import { useSpring, animated } from 'react-spring';

import { SectionContainer, Col, Row, Content, HeroAbstract, HeroAbstract2, TitleAbstract, TitleAbstract1, TitleAbstract2, TitleAbstract3, DescriptionAbstract, Title,  Description, ImageContainer, ImageAbstractBackground, ScrollDown, ScrollDownAbstract } from './components';
import TitleAbstractImage1 from '../../assets/images/abstract/TitleAbstract1.svg';
import TitleAbstractImage2 from '../../assets/images/abstract/TitleAbstract2.svg';
import TitleAbstractImage3 from '../../assets/images/abstract/TitleAbstract3.svg';
import DescriptionAbstractImage from '../../assets/images/abstract/DescriptionAbstract.svg';
import HeroAbstractImage from '../../assets/images/abstract/HeroAbstract.svg';
import HeroAbstract2Image from '../../assets/images/abstract/HeroAbstract2.svg';
import ImageAbstract from '../../assets/images/HeroImage/abstract3.svg';
import ScrollDownAbstractImage from '../../assets/images/abstract/HeroAbstract3.svg';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 7}px,${y / 7}px,0)`

const HeroSection = () => {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 625, friction: 125 } }))

    return (
        <SectionContainer>
            <HeroAbstract src={HeroAbstractImage} />
            <Row container>
                <Col item xs={12} sm={7}>
                    <Content>
                        <TitleAbstract>
                            <TitleAbstract3 src={TitleAbstractImage3} />
                            <TitleAbstract1 src={TitleAbstractImage1} />
                            <TitleAbstract2 src={TitleAbstractImage2} />
                        </TitleAbstract>
                        <Title>Hi,</Title>
                        <Title>I’m Kevin Charles</Title>
                        <Description>Full Stack Web Developer</Description>
                        <DescriptionAbstract src={DescriptionAbstractImage} />
                    </Content>
                </Col>
                <Col item xs={12} sm={5}>
                    <ImageContainer onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                        <animated.div class="card1" style={{ transform: props.xy.interpolate(trans1) }} />
                        <animated.div class="card2" style={{ transform: props.xy.interpolate(trans2) }} />
                        <animated.div class="card3" style={{ transform: props.xy.interpolate(trans3) }} />
                        <animated.div class="card4" style={{ transform: props.xy.interpolate(trans4) }} />
                    </ImageContainer>
                    <ImageAbstractBackground src={ImageAbstract} />
                </Col>
            </Row>
            <ScrollDown>scroll down</ScrollDown>
            <ScrollDownAbstract src={ScrollDownAbstractImage} />
            <HeroAbstract2 src={HeroAbstract2Image} />
        </SectionContainer>
    )
}

export default HeroSection
