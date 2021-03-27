import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSpring, animated } from 'react-spring';

import { SectionContainer, Col, Row, Content, HeroAbstract, HeroAbstract2, TitleAbstract, TitleAbstract1, TitleAbstract2, TitleAbstract3, DescriptionAbstract, Title,  Description, ImageContainer, ImageAbstractBackground, ScrollDownContainer, ScrollDown, ScrollDownAbstract } from './components';
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

    const abstract1Ref = useRef(null);
    const abstract2Ref = useRef(null);

    const contentRef = useRef(null);
    const imageRef = useRef(null);
    const imageBackgroundRef = useRef(null);

    const scrollDownRef = useRef(null);

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
        gsap.from(contentRef.current, {opacity: 0, x: -50, duration: 1, delay: 1});
        gsap.from(imageRef.current, {opacity: 0, y: 50, duration: 1, delay: 2});
        gsap.from(imageBackgroundRef.current, {opacity: 0, duration: 1, delay: 3});
    }, [])

    const onMouseEnterHandler = () => {
        sectionTrigger3.current.play(0);
        sectionTrigger1.current.play(0);
        sectionTrigger2.current.play(0);
    };

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: abstract2Ref.current,
                start: "top center+=125",
                end: "center top",
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
        gsap.from(abstract1Ref.current, {y: -200, duration: 1, delay: 3.5});
        gsap.from(abstract2Ref.current, {x: 200, duration: 1, delay: 3.5});
        tl.to(abstract2Ref.current, {
            rotation: 360,
        })

        gsap.from(scrollDownRef.current, {opacity: 0, y: 50, duration: 1.5, delay: 4.5});
    }, [])

    return (
        <SectionContainer>
            <HeroAbstract ref={abstract1Ref} src={HeroAbstractImage} />
            <Row container>
                <Col item xs={12} md={6}>
                    <Content ref={contentRef}>
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
                <Col item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                    <ImageContainer ref={imageRef} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                        <animated.div className="card1" style={{ transform: props.xy.interpolate(trans1) }} />
                        <animated.div className="card2" style={{ transform: props.xy.interpolate(trans2) }} />
                        <animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} />
                        <animated.div className="card4" style={{ transform: props.xy.interpolate(trans4) }} />
                    </ImageContainer>
                    <ImageAbstractBackground ref={imageBackgroundRef} src={ImageAbstract} />
                </Col>
            </Row>
            <ScrollDownContainer ref={scrollDownRef}>
                <ScrollDown>scroll down</ScrollDown>
                <ScrollDownAbstract src={ScrollDownAbstractImage} />
            </ScrollDownContainer>
            <HeroAbstract2 ref={abstract2Ref} src={HeroAbstract2Image} />
        </SectionContainer>
    )
}

export default HeroSection
