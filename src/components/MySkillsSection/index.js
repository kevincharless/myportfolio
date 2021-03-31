import { useState, useEffect, useRef } from 'react';
import { SectionContainer, Row, Col, Content, Title, ProgressBarGroup, ProgressBar, ProgressBarTitle, Bar, Fill, FillPercent, SubTitle, Description, DescriptionTitle, Colon, DescriptionContent, ProgrammingLanguages, ProgrammingLogo, ProgrammingLogoLG, XAbstractYellow, DiamondAbstractRed, CircleAbstractBlue1, PlusAbstractRed, CircleAbstractBlue2, TriangleAbstractBlue, ArrowTopAbstractYellow } from './components';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSpring } from 'react-spring';
import useMeasure from './useMeasure';

import html5 from '../../assets/images/ProgrammingLanguageLogo/html5_logo.svg';
import css3 from '../../assets/images/ProgrammingLanguageLogo/css3_logo.svg';
import javascript from '../../assets/images/ProgrammingLanguageLogo/js_logo.svg';
import react from '../../assets/images/ProgrammingLanguageLogo/React_logo.png';
import expressJS from '../../assets/images/ProgrammingLanguageLogo/express_logo.svg';
import nodeJS from '../../assets/images/ProgrammingLanguageLogo/nodejs_logo.svg';
import mongoDB from '../../assets/images/ProgrammingLanguageLogo/mongodb_logo.svg';
import expressJSDarkMode from '../../assets/images/ProgrammingLanguageLogo/express_logo(darkmode).svg';
import nodeJSDarkMode from '../../assets/images/ProgrammingLanguageLogo/nodejs_logo(darkmode).svg';
import mongoDBDarkMode from '../../assets/images/ProgrammingLanguageLogo/mongodb_logo(darkmode).svg';

import XAbstractYellowImage from '../../assets/images/abstract/XAbstractYellow.svg';
import DiamondAbstractRedImage from '../../assets/images/abstract/DiamondAbstractRed.svg';
import CircleAbstractBlueImage from '../../assets/images/abstract/CircleAbstractBlue.svg';
import PlusAbstractRedImage from '../../assets/images/abstract/PlusAbstractRed.svg';
import TriangleAbstractBlueImage from '../../assets/images/abstract/TriangleAbstractBlue.svg';
import ArrowTopAbstractYellowImage from '../../assets/images/abstract/ArrowTopAbstractYellow.svg';

gsap.registerPlugin(ScrollTrigger);

const MySkillsSection = ({theme}) => {
    const [open, toggle] = useState(false);
    const [bind] = useMeasure();
    const htmlCount = useSpring({ width: open ? 65 : 0});
    const cssCount = useSpring({ width: open ? 75 : 0});
    const javaScriptCount = useSpring({ width: open ? 80 : 0});
    const expressJSCount = useSpring({ width: open ? 50 : 0});

    const htmlProgress = useSpring({ width: open ? 320*65/100 : 0 });
    const cssProgress = useSpring({ width: open ? 320*75/100 : 0 });
    const javaScriptProgress = useSpring({ width: open ? 320*80/100 : 0 });
    const expressJSProgress = useSpring({ width: open ? 320*50/100 : 0 });
    
    const logoExpressJS = theme.themeName === 'dark' ? expressJSDarkMode : expressJS;
    const logoNodeJS = theme.themeName === 'dark' ? nodeJSDarkMode : nodeJS;
    const logoMongoDB = theme.themeName === 'dark' ? mongoDBDarkMode : mongoDB;

    const mySkillRef = useRef(null);
    const progressBarRef = useRef(null);
    const skillRef = useRef(null);
    const barRef = useRef(null);

    const htmlRef = useRef(null);
    const cssRef = useRef(null);
    const jsRef = useRef(null);
    const reactRef = useRef(null);
    const expressRef = useRef(null);
    const nodeRef = useRef(null);
    const mongoRef = useRef(null);

    const abstractRef1= useRef(null);
    const abstractRef2= useRef(null);
    const abstractRef3= useRef(null);
    const abstractRef4= useRef(null);
    const abstractRef5= useRef(null);
    const abstractRef6= useRef(null);
    const abstractRef7= useRef(null);

    const Descriptions = [
        {
            title: 'Languages',
            content: 'HTML, CSS, Javascript, Python.'
        }, {
            title: 'Frameworks & Libraries',
            content: 'React, Express, Bootstrap, MaterialUI.'
        }, {
            title: 'Tools',
            content: 'MongoDB, Node.JS, Git, Figma, Photoshop, Illustrator, MS Office.'
        }
    ]
    const Languages = ['Indonesia (Native Language)', 'English (Second Language)'];

    useEffect(() => {
        gsap.fromTo(mySkillRef.current, {
            autoAlpha: 0,
        }, {
            duration: 0.8,
            autoAlpha: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: mySkillRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });

        gsap.fromTo(progressBarRef.current, {
            autoAlpha: 0,
        }, {
            duration: 0.6,
            autoAlpha: 1,
            ease: 'none',
            onUpdate: () => toggle(false),
            onComplete: () => toggle(true),
            scrollTrigger: {
                trigger: mySkillRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });

        gsap.fromTo(skillRef.current, {
            autoAlpha: 0,
        }, {
            delay: 1.5,
            duration: 0.4,
            autoAlpha: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: mySkillRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });

        gsap.fromTo(barRef.current, {
            autoAlpha: 0,
            y: 25,
        }, {
            delay: 2,
            duration: 0.4,
            autoAlpha: 1,
            y:0,
            ease: 'none',
            scrollTrigger: {
                trigger: mySkillRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });

        gsap.fromTo(htmlRef.current, { autoAlpha: 0, x: 5 }, { delay: 2.2, duration: 0.4, autoAlpha: 1, x: 0, ease: 'none', scrollTrigger: { trigger: mySkillRef.current, start: "top center", toggleActions: 'play none none reverse', } });
        gsap.fromTo(cssRef.current, { autoAlpha: 0, x: 5 }, { delay: 2.4, duration: 0.4, autoAlpha: 1, x: 0, ease: 'none', scrollTrigger: { trigger: mySkillRef.current, start: "top center", toggleActions: 'play none none reverse', } });
        gsap.fromTo(jsRef.current, { autoAlpha: 0, x: 5 }, { delay: 2.6, duration: 0.4, autoAlpha: 1, x: 0, ease: 'none', scrollTrigger: { trigger: mySkillRef.current, start: "top center", toggleActions: 'play none none reverse', } });
        gsap.fromTo(reactRef.current, { autoAlpha: 0, x: 5 }, { delay: 2.8, duration: 0.4, autoAlpha: 1, x: 0, ease: 'none', scrollTrigger: { trigger: mySkillRef.current, start: "top center", toggleActions: 'play none none reverse', } });
        gsap.fromTo(expressRef.current, { autoAlpha: 0, x: 5 }, { delay: 3, duration: 0.4, autoAlpha: 1, x: 0, ease: 'none', scrollTrigger: { trigger: mySkillRef.current, start: "top center", toggleActions: 'play none none reverse', } });
        gsap.fromTo(nodeRef.current, { autoAlpha: 0, x: 5 }, { delay: 3.2, duration: 0.4, autoAlpha: 1, x: 0, ease: 'none', scrollTrigger: { trigger: mySkillRef.current, start: "top center", toggleActions: 'play none none reverse', } });
        gsap.fromTo(mongoRef.current, { autoAlpha: 0, x: 5 }, { delay: 3.4, duration: 0.4, autoAlpha: 1, x: 0, ease: 'none', scrollTrigger: { trigger: mySkillRef.current, start: "top center", toggleActions: 'play none none reverse', } });
        
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
                trigger: mySkillRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });
        gsap.fromTo(abstractRef2.current, {
            autoAlpha: 0,
            y: 5
        }, {
            delay: 3.8,
            duration: 0.5,
            autoAlpha: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: mySkillRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });
        gsap.fromTo(abstractRef3.current, {
            autoAlpha: 0,
            y: 5
        }, {
            delay: 3.8,
            duration: 0.5,
            autoAlpha: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: mySkillRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });
        gsap.fromTo(abstractRef4.current, {
            autoAlpha: 0,
            y: 5
        }, {
            delay: 4,
            duration: 0.5,
            autoAlpha: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: mySkillRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });
        gsap.fromTo(abstractRef5.current, {
            autoAlpha: 0,
            y: 5
        }, {
            delay: 4.3,
            duration: 0.5,
            autoAlpha: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: mySkillRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });
        gsap.fromTo(abstractRef6.current, {
            autoAlpha: 0,
        }, {
            delay: 4.3,
            duration: 0.5,
            autoAlpha: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: mySkillRef.current,
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
                trigger: mySkillRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });

        gsap.fromTo(abstractRef1.current, 8, {x: -20}, {x:20, rotation:"360", ease: 'linear', repeat:-1, yoyo: 'true'});
        gsap.fromTo(abstractRef2.current, 8, {x: 20}, {x:-20, rotation:"360", ease: 'linear', repeat:-1, yoyo: 'true'});
        gsap.fromTo(abstractRef3.current, 5, {y: 20}, {y:-20, ease: 'linear', repeat:-1, yoyo: 'true'});
        gsap.fromTo(abstractRef4.current, 8, {y: 15}, {y:-15, rotation:"360", ease: 'linear', repeat:-1, yoyo: 'true'});
        gsap.fromTo(abstractRef5.current, 5, {y: 15}, {y:-15, ease: 'linear', repeat:-1, yoyo: 'true'});
        gsap.fromTo(abstractRef6.current, 10, {x: -20, y: 20}, {x:20, y: -20, rotation:"360", ease: 'linear', repeat:-1, yoyo: 'true'});

        gsap.fromTo(abstractRef7.current, 2, {y: 0}, {y:-15, ease: 'linear', repeat:-1, yoyo: 'true'});

    }, [])
    
    return (
        <SectionContainer>
            <Row container>
                <Col item xs={12} md={6}>
                    <Content>
                        <Title ref={mySkillRef}>My Skills</Title>
                        <ProgressBarGroup ref={progressBarRef}>
                            <ProgressBar>
                                <ProgressBarTitle>HTML</ProgressBarTitle>
                                <Bar {...bind}>
                                    <Fill style={htmlProgress}>
                                        {htmlCount.width.interpolate(x => x.toFixed(0))}
                                    </Fill>
                                    <FillPercent style={htmlProgress}>%</FillPercent>
                                </Bar>
                            </ProgressBar>
                            <ProgressBar>
                                <ProgressBarTitle>CSS</ProgressBarTitle>
                                <Bar {...bind}>
                                    <Fill style={cssProgress}>{cssCount.width.interpolate(x => x.toFixed(0))}</Fill>
                                    <FillPercent style={cssProgress}>%</FillPercent>
                                </Bar>
                            </ProgressBar>
                            <ProgressBar>
                                <ProgressBarTitle>JAVASCRIPT</ProgressBarTitle>
                                <Bar {...bind}>
                                    <Fill style={javaScriptProgress}>{javaScriptCount.width.interpolate(x => x.toFixed(0))}</Fill>
                                    <FillPercent style={javaScriptProgress}>%</FillPercent>
                                </Bar>
                            </ProgressBar>
                            <ProgressBar>
                                <ProgressBarTitle>EXPRESS.JS</ProgressBarTitle>
                                <Bar {...bind}>
                                    <Fill style={expressJSProgress}>{expressJSCount.width.interpolate(x => x.toFixed(0))}</Fill>
                                    <FillPercent style={expressJSProgress}>%</FillPercent>
                                </Bar>
                            </ProgressBar>
                        </ProgressBarGroup>  
                    </Content>
                </Col>
                <Col item xs={12} md={6}>
                    <Content ref={skillRef}>
                        <SubTitle>Computer Science</SubTitle>
                        {Descriptions.map(description => (
                            <Description key={description.title}>
                                <DescriptionTitle>{description.title}</DescriptionTitle>
                                <Colon>:</Colon>
                                <DescriptionContent>{description.content}</DescriptionContent>
                            </Description>
                        
                        ))}
                        <SubTitle>Spoken</SubTitle>
                        {Languages.map((Language, i) => (
                            <Description key={i}>
                                <DescriptionContent>{Language}</DescriptionContent>
                            </Description>
                        
                        ))}
                    </Content>
                </Col>
                <ProgrammingLanguages ref={barRef} container>
                    <Col ref={htmlRef} item xs={3} md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                        <ProgrammingLogo src={html5} />
                    </Col>
                    <Col ref={cssRef} item xs={3} md={2} style={{ display: 'flex', justifyContent: 'center' }}>
                        <ProgrammingLogo src={css3} />
                    </Col>
                    <Col ref={jsRef} item xs={3} md={1} style={{ display: 'flex', justifyContent: 'center' }}>
                        <ProgrammingLogo src={javascript} />
                    </Col>
                    <Col ref={reactRef} item xs={3} md={2} style={{ display: 'flex', justifyContent: 'center' }}>
                        <ProgrammingLogoLG src={react} />
                    </Col>
                    <Col ref={expressRef} item xs={4} md={2} style={{ display: 'flex', justifyContent: 'center' }}>
                        <ProgrammingLogoLG src={logoExpressJS} />
                    </Col>
                    <Col ref={nodeRef} item xs={4} md={2} style={{ display: 'flex', justifyContent: 'center' }}>
                        <ProgrammingLogoLG src={logoNodeJS} />
                    </Col>
                    <Col ref={mongoRef} item xs={4} md={2} style={{ display: 'flex', justifyContent: 'center' }}>
                        <ProgrammingLogoLG src={logoMongoDB} />
                    </Col>
                </ProgrammingLanguages>
            </Row>
            <XAbstractYellow ref={abstractRef1} src={XAbstractYellowImage} />
            <DiamondAbstractRed ref={abstractRef2} src={DiamondAbstractRedImage} />
            <CircleAbstractBlue1 ref={abstractRef3} src={CircleAbstractBlueImage} />
            <PlusAbstractRed ref={abstractRef4} src={PlusAbstractRedImage} />
            <CircleAbstractBlue2 ref={abstractRef5} src={CircleAbstractBlueImage} />
            <TriangleAbstractBlue ref={abstractRef6} src={TriangleAbstractBlueImage} />
            <ArrowTopAbstractYellow ref={abstractRef7} src={ArrowTopAbstractYellowImage} />

        </SectionContainer>
    )
}

export default MySkillsSection