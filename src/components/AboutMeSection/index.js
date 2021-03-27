import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import EasePack from "gsap/EasePack";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionContainer, Row, Col, Content, Title, SubTitle, Description, AboutImageContainer, AboutImage, ImageRingAbstract, ImageCrossArrowAbstract, DotAbstractYellow, XAbstractRed, XAbstractYellow, TriangleShadowAbstractBlue, CircleAbstractRed, CircleAbstractBlue, BoxAbstractRed } from './components';

import ImageCrossArrowAbstractImage from '../../assets/images/abstract/ImageCrossArrowAbstract.svg';
import ImageRingAbstractImage from '../../assets/images/abstract/ImageRingAbstract.svg';
import DotAbstractYellowImage from '../../assets/images/abstract/DotAbstractYellow.svg';
import XAbstractRedImage from '../../assets/images/abstract/XAbstractRed.svg';
import XAbstractYellowImage from '../../assets/images/abstract/XAbstractYellow.svg';
import TriangleShadowAbstractBlueImage from '../../assets/images/abstract/TriangleShadowAbstractBlue.svg';
import CircleAbstractRedImage from '../../assets/images/abstract/CircleAbstractRed.svg';
import CircleAbstractBlueImage from '../../assets/images/abstract/CircleAbstractBlue.svg';
import BoxAbstractRedImage from '../../assets/images/abstract/BoxAbstractRed.svg';

import AboutMeImage from '../../assets/images/HeroImage/twibonhmps.png';


gsap.registerPlugin(ScrollTrigger, EasePack);

const AboutMeSection = () => {
    const aboutRef = useRef(null);
    const imageRef = useRef(null);
    const imageAbstract1Ref = useRef(null);
    const imageAbstract2Ref = useRef(null);
    const abstractRef1 = useRef(null);
    const abstractRef2 = useRef(null);
    const abstractRef3 = useRef(null);
    const abstractRef4 = useRef(null);
    const abstractRef5 = useRef(null);
    const abstractRef6 = useRef(null);
    const abstractRef7 = useRef(null);

    useEffect(() => {
        gsap.fromTo(aboutRef.current, {
            autoAlpha: 0,
        }, {
            duration: 1,
            autoAlpha: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });

        gsap.fromTo(imageRef.current, {
            autoAlpha: 0,
        }, {
            delay: 1,
            duration: 1,
            autoAlpha: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });

        gsap.fromTo(imageAbstract1Ref.current, {
            x: -20,
            y: 20,
            autoAlpha: 0,
        }, {
            delay: 2.3,
            duration: 0.5,
            autoAlpha: 1,
            x: 0,
            y: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });

        gsap.fromTo(imageAbstract2Ref.current, {
            autoAlpha: 0,
            rotate: 5,
        }, {
            delay: 2.8,
            duration: 0.5,
            autoAlpha: 1,
            rotate: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });

        gsap.fromTo(abstractRef1.current, {
            autoAlpha: 0,
            x: -5
        }, {
            delay: 3.5,
            duration: 0.5,
            autoAlpha: 1,
            x: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });
        gsap.fromTo(abstractRef2.current, {
            autoAlpha: 0,
            y: 5
        }, {
            delay: 5,
            duration: 0.5,
            autoAlpha: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });
        gsap.fromTo(abstractRef3.current, {
            autoAlpha: 0,
            y: 5
        }, {
            delay: 5,
            duration: 0.5,
            autoAlpha: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });
        gsap.fromTo(abstractRef4.current, {
            autoAlpha: 0,
            y: 5
        }, {
            delay: 5.5,
            duration: 0.5,
            autoAlpha: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });
        gsap.fromTo(abstractRef5.current, {
            autoAlpha: 0,
            y: 5
        }, {
            delay: 4,
            duration: 0.5,
            autoAlpha: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });
        gsap.fromTo(abstractRef6.current, {
            autoAlpha: 0,
            y: 5
        }, {
            delay: 4,
            duration: 0.5,
            autoAlpha: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });
        gsap.fromTo(abstractRef7.current, {
            autoAlpha: 0,
            y: 5
        }, {
            delay: 4.5,
            duration: 0.5,
            autoAlpha: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });

        gsap.fromTo(abstractRef2.current, 8, {x: -20}, {x:20, rotation:"360", ease: 'linear', repeat:-1, yoyo: 'true'});
        gsap.fromTo(abstractRef3.current, 8, {x: 20}, {x:-20, rotation:"360", ease: 'linear', repeat:-1, yoyo: 'true'});
        gsap.fromTo(abstractRef4.current, 8, {y: 20}, {y:-20, rotation:"360", ease: 'linear', repeat:-1, yoyo: 'true'});
        gsap.fromTo(abstractRef5.current, 3, {y: 15}, {y:-15, ease: 'linear', repeat:-1, yoyo: 'true'});
        gsap.fromTo(abstractRef6.current, 3, {y: 15}, {y:-15, ease: 'linear', repeat:-1, yoyo: 'true'});
        gsap.fromTo(abstractRef7.current, 6, {x: -25, y: 25}, {x:25, y:-25, rotation:"360", ease: 'linear', repeat:-1, yoyo: 'true'});

    }, [])

    return (
        <SectionContainer>
            <Row container>
                <Col item xs={12} md={6}>
                    <Content ref={aboutRef}>
                        <Title>More About Me</Title>
                        <SubTitle>I’m a Full Stack Developer from Riau Islands, Indonesia.</SubTitle>
                        <Description>I enjoy to solve a problem and turning my ideas into my projects. I like to learn new things and keep up with the times.</Description>
                    </Content>
                </Col>
                <Col item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                    <AboutImageContainer>
                        <AboutImage ref={imageRef} src={AboutMeImage} />
                        <ImageRingAbstract ref={imageAbstract1Ref} src={ImageRingAbstractImage} />
                        <ImageCrossArrowAbstract ref={imageAbstract2Ref} src={ImageCrossArrowAbstractImage} />
                    </AboutImageContainer>
                </Col>
            </Row>
            <DotAbstractYellow ref={abstractRef1} src={DotAbstractYellowImage} />
            <XAbstractRed ref={abstractRef2} src={XAbstractRedImage} />
            <XAbstractYellow ref={abstractRef3} src={XAbstractYellowImage} />
            <TriangleShadowAbstractBlue ref={abstractRef4} src={TriangleShadowAbstractBlueImage} />
            <CircleAbstractRed ref={abstractRef5} src={CircleAbstractRedImage} />
            <CircleAbstractBlue ref={abstractRef6} src={CircleAbstractBlueImage} />
            <BoxAbstractRed ref={abstractRef7} src={BoxAbstractRedImage} />
        </SectionContainer>
    )
}

export default AboutMeSection
