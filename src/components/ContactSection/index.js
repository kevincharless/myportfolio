import { useRef, useState, useEffect } from 'react';
import { X } from 'react-feather';
import { useTransition } from 'react-spring';
import { SectionContainer, Col, Row, Content, Title,  Description, TextArea, SubmitButton, MyContact, SocialMedia, SocialMediaIcon, SocialMediaId, NotifContainer, Message, NotifCloseButton, NotifContent, Life, ContentText, SocialMediaLink, BigDiamondAbstractBlue, BigBoxAbstractRed,DNAAbstractBlue, DNAAbstractRed, DNAAbstractYellow } from './components';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import emailjs from 'emailjs-com';

import BigDiamondAbstractBlueImage from '../../assets/images/abstract/BigDiamondAbstractBlue.svg';
import BigBoxAbstractRedImage from '../../assets/images/abstract/BigBoxAbstractRed.svg';
import DNAAbstractBlueImage from '../../assets/images/abstract/DNAAbstractBlue.svg';
import DNAAbstractRedImage from '../../assets/images/abstract/DNAAbstractRed.svg';
import DNAAbstractYellowImage from '../../assets/images/abstract/DNAAbstractYellow.svg';

gsap.registerPlugin(ScrollTrigger);
let id = 0

const ContactSection = ({theme}) => {
    const ref = useRef(null);
    const contactRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const contactFormRef = useRef(null);
    const socialMediaRef = useRef(null);
    const abstract1 = useRef(null);
    const abstract2 = useRef(null);
    const abstract3 = useRef(null);
    const abstract4 = useRef(null);
    const abstract5 = useRef(null);

    const mySocialMedia = [
        {
            icon: EmailIcon,
            id: 'kevincharlesid@gmail.com',
        }, {
            icon: FacebookIcon,
            id: '@kevin.charlesii',
            link: 'https://www.facebook.com/kevin.charlesii',
        }, {
            icon: GitHubIcon,
            id: '@kevincharless',
            link: 'https://github.com/kevincharless',
        }, {
            icon: InstagramIcon,
            id: '@vinxing_',
            link: 'https://www.instagram.com/vinxing_/',
        }
    ]

    const Input = theme = withStyles({
        root: {
            backgroundColor: theme.colors.secondary,
            width: '100%',
            padding: '0.5em',
            borderRadius: '0.3em',
            "& .MuiInput-root": {
                color: theme.colors.secondarytext,
                fontFamily: 'poppins'
            },
            "& .MuiInputLabel-root": {
                padding: '0.5em',
                color: theme.colors.secondarytext,
                fontFamily: 'poppins'
            },
            "& label.Mui-focused": {
                padding: '0.5em',
                color: theme.colors.secondarytext,
                fontFamily: 'poppins'
            },
            "& .MuiInput-underline:before": {
                borderBottomColor: theme.colors.secondarytext
            },
            "& .MuiInput-underline:after": {
                borderBottomColor: theme.colors.secondarytext
            },
        }
    })(TextField);

    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('contact_service', 'contact_form', e.target, 'user_gzuJWapPKUEQKtOqrjYTQ')
            .then((result) => {
                console.log(result.text);
                document.getElementById("contactForm").reset();
                ref.current();
            }, (error) => {
                console.log(error.text);
            });
    }

    function MessageHub({ config = { tension: 125, friction: 20, precision: 0.1 }, timeout = 3000, children }) {
        const [refMap] = useState(() => new WeakMap())
        const [cancelMap] = useState(() => new WeakMap())
        const [items, setItems] = useState([])
        const transitions = useTransition(items, item => item.key, {
            from: { opacity: 0, height: 0, life: '100%' },
            enter: item => async next => await next({ opacity: 1, height: refMap.get(item).offsetHeight }),
            leave: item => async (next, cancel) => {
                cancelMap.set(item, cancel)
                await next({ life: '0%' })
                await next({ opacity: 0 })
                await next({ height: 0 })
            },
            onRest: item => setItems(state => state.filter(i => i.key !== item.key)),
            config: (item, state) => (state === 'leave' ? [{ duration: timeout }, config, config] : config),
        })
    
        useEffect(() => void children(msg => setItems(state => [...state, { key: id++, msg }])), [children])
        return (
            <NotifContainer>
            {transitions.map(({ key, item, props: { life, ...style } }) => (
                <Message key={key} style={style}>
                    <NotifContent ref={ref => ref && refMap.set(item, ref)}>
                        <Life style={{ right: life }} />
                        <ContentText>Thank you for your submition, I will reply as soon as posible.</ContentText>
                        <NotifCloseButton
                            onClick={e => {
                                e.stopPropagation()
                                cancelMap.has(item) && cancelMap.get(item)()
                            }}>
                            <X size={18} />
                        </NotifCloseButton>
                    </NotifContent>
                </Message>
            ))}
            </NotifContainer>
        )
    }

    useEffect(() => {
        gsap.fromTo(titleRef.current, {
            autoAlpha: 0,
        }, {
            duration: 0.8,
            autoAlpha: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: contactRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });
        gsap.fromTo(descriptionRef.current, {
            autoAlpha: 0,
        }, {
            delay: 0.5,
            duration: 0.8,
            autoAlpha: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: contactRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });
        gsap.fromTo(contactFormRef.current, {
            autoAlpha: 0,
            x: -25,
        }, {
            delay: 1,
            duration: 0.5,
            autoAlpha: 1,
            x: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: contactRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });
        gsap.fromTo(socialMediaRef.current, {
            autoAlpha: 0,
            x: -25,
        }, {
            delay: 1.5,
            duration: 0.5,
            autoAlpha: 1,
            x: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: contactRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });

        gsap.fromTo(abstract1.current, {
            autoAlpha: 0,
            x: -25,
        }, {
            delay: 2,
            duration: 0.5,
            autoAlpha: 1,
            x: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: contactRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });
        gsap.fromTo(abstract2.current, {
            autoAlpha: 0,
            x: 25,
        }, {
            delay: 2,
            duration: 0.5,
            autoAlpha: 1,
            x: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: contactRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });
        gsap.fromTo(abstract3.current, {
            autoAlpha: 0,
            y: 25,
        }, {
            delay: 2.5,
            duration: 0.5,
            autoAlpha: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: contactRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });
        gsap.fromTo(abstract4.current, {
            autoAlpha: 0,
            y: -25,
        }, {
            delay: 2.8,
            duration: 0.5,
            autoAlpha: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: contactRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });
        gsap.fromTo(abstract5.current, {
            autoAlpha: 0,
            y: 25,
        }, {
            delay: 3,
            duration: 0.5,
            autoAlpha: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: contactRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });
    }, [])

    return (
        <SectionContainer>
            <Row container>
                <Col item xs={12} md={6}>
                    <Content ref={contactRef}>
                        <Title ref={titleRef}>Contact me</Title>
                        <Description ref={descriptionRef}>I’m interested in job opportunities. However, if you have any suggestion, request or question, please don’t hesitate to use the form.</Description>
                        <form id="contactForm" noValidate autoComplete="off" onSubmit={sendEmail}>
                            <Row container ref={contactFormRef} >
                                <input type="hidden" name="contact_number" />
                                <Col item xs={12}>
                                    <Input label="Name" name="user_name" />
                                </Col>
                                <Col item xs={12} style={{ padding: '1em 0'}}>
                                    <Input label="Email" name="user_email" />
                                </Col>
                                <Col item xs={12} style={{ padding: '0.5em 0' }}>
                                    <TextArea aria-label="Message" rowsMin={3} placeholder="Message" name="message" />
                                </Col>
                                <Col item xs={12} style={{ padding: '0.5em 0', display: 'flex', justifyContent: 'flex-end' }}>
                                    <SubmitButton type="submit" value="Send">Send Message</SubmitButton>
                                </Col>
                            </Row>
                        </form>
                    </Content>
                </Col>
                <Col item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                    <MyContact ref={socialMediaRef}>
                        {mySocialMedia.map((socialmedia, i) => (
                            <SocialMedia key={i}>
                                <SocialMediaIcon>
                                    <SocialMediaLink href={socialmedia.link} target="_blank"><socialmedia.icon style={{ fontSize: '1.3em' }} /></SocialMediaLink>
                                </SocialMediaIcon>
                                <SocialMediaId>{socialmedia.id}</SocialMediaId>
                            </SocialMedia>
                        ))}
                    </MyContact>
                </Col>
            </Row>

            <MessageHub children={add => (ref.current = add)} />

            <BigDiamondAbstractBlue ref={abstract2} src={BigDiamondAbstractBlueImage} />
            <BigBoxAbstractRed ref={abstract1} src={BigBoxAbstractRedImage} />
            <DNAAbstractBlue ref={abstract4} src={DNAAbstractBlueImage} />
            <DNAAbstractRed ref={abstract3} src={DNAAbstractRedImage} />
            <DNAAbstractYellow ref={abstract5} src={DNAAbstractYellowImage} />
        </SectionContainer>
    )
}

export default ContactSection
