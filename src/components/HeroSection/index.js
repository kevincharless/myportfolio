import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 625, friction: 125 } }));

    const abstractRef = useRef(null);

    const TitleAbstract3Ref = useRef(null);
    const TitleAbstract1Ref = useRef(null);
    const TitleAbstract2Ref = useRef(null);

    const sectionTrigger1 = useRef(null);
    const sectionTrigger2 = useRef(null);
    const sectionTrigger3 = useRef(null);


    useEffect(() => {
        sectionTrigger3.current = 
            gsap.to(TitleAbstract3Ref.current, {
                duration: 2,
                keyframes: [{scale: (1, 1)}, {delay: 0.1, scaleX: 1.2, scaleY:0.8}, {delay: 0.3, scaleX: 0.8, scaleY: 1.2, y: -24}, {delay: 0.5, scaleX: 1, scaleY: 0.9, y:0}, {delay: 0.6, scaleX: 1, scaleY: 1}, {delay: 0.7, scaleX: 1.05, scaleY: 0.95}, {delay: 0.8, scaleX: 1, scaleY: 1}],
                paused: true,
            })
        sectionTrigger1.current = 
            gsap.to(TitleAbstract1Ref.current, {
                duration: 3,
                keyframes: [{delay: 2, scale: (1, 1)}, {delay: 0.1, scaleX: 1.2, scaleY:0.8}, {delay: 0.3, scaleX: 0.8, scaleY: 1.2, y: -24}, {delay: 0.5, scaleX: 1, scaleY: 0.9, y:0}, {delay: 0.6, scaleX: 1, scaleY: 1}, {delay: 0.7, scaleX: 1.05, scaleY: 0.95}, {delay: 0.8, scaleX: 1, scaleY: 1}],
                paused: true,
            })

        sectionTrigger2.current =
            gsap.to(TitleAbstract2Ref.current, {
                duration: 4,
                keyframes: [{delay: 4, scale: (1, 1)}, {delay: 0.1, scaleX: 1.2, scaleY:0.8}, {delay: 0.3, scaleX: 0.8, scaleY: 1.2, y: -24}, {delay: 0.5, scaleX: 1, scaleY: 0.9, y:0}, {delay: 0.6, scaleX: 1, scaleY: 1}, {delay: 0.7, scaleX: 1.05, scaleY: 0.95}, {delay: 0.8, scaleX: 1, scaleY: 1}],
                paused: true,
            })

    }, [])

    const onMouseEnterHandler = () => {
        sectionTrigger3.current.play(0);
        sectionTrigger1.current.play(0);
        sectionTrigger2.current.play(0);
    };

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: abstractRef.current,
                start: "top center+=125",
                end: "center top-=25",
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
        tl.to(abstractRef.current, {
            rotation: 360,
        })
    }, [])

    return (
        <SectionContainer>
            <HeroAbstract src={HeroAbstractImage} />
            <Row container>
                <Col item xs={12} sm={7}>
                    <Content>
                        <TitleAbstract onMouseEnter={onMouseEnterHandler}>
                            <TitleAbstract3 ref={TitleAbstract3Ref} src={TitleAbstractImage3} />
                            <TitleAbstract1 ref={TitleAbstract1Ref} src={TitleAbstractImage1} />
                            <TitleAbstract2 ref={TitleAbstract2Ref} src={TitleAbstractImage2} />
                        </TitleAbstract>
                        <Title>Hi,</Title>
                        <Title>I’m Kevin Charles</Title>
                        <Description>Full Stack Web Developer</Description>
                        <DescriptionAbstract src={DescriptionAbstractImage} />
                    </Content>
                </Col>
                <Col item xs={12} sm={5}>
                    <ImageContainer onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                        <animated.div className="card1" style={{ transform: props.xy.interpolate(trans1) }} />
                        <animated.div className="card2" style={{ transform: props.xy.interpolate(trans2) }} />
                        <animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} />
                        <animated.div className="card4" style={{ transform: props.xy.interpolate(trans4) }} />
                    </ImageContainer>
                    <ImageAbstractBackground src={ImageAbstract} />
                </Col>
            </Row>
            <ScrollDown>scroll down</ScrollDown>
            <ScrollDownAbstract src={ScrollDownAbstractImage} />
            <HeroAbstract2 ref={abstractRef} src={HeroAbstract2Image} />
        </SectionContainer>
    )
}

export default HeroSection
