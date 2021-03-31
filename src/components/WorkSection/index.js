import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionContainer, Row, Col, ModalCol, Content, Title, WorkCard, CardTitle, CardDescription, CardButton, CardBackground, CardModal, ModalCloseButton, CloseButton, ModalContent, ModalTitle, ModalSubTitle, ModalDescription, ModalSubDescription, GroupLists, List, GaleryImage, ImageText, ZoomCloseButton, ZoomBackground, BlockAbstractRed1, BlockAbstractRed2, TriangleAbstractBlue, BoxAbstractRed, DiamondBorderAbstractYellow, DNAAbstractBlue, DNAAbstractYellow, RingAbstractBlue, BoxAbstractYellow, TriangleAbstractRed } from './components';

import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import kcsocmedImage from '../../assets/images/kcsocmed/kcsocmed.png';
import kcsocmedLoginFormImage from '../../assets/images/kcsocmed/loginForm.png';
import kcsocmedRegisterFormImage from '../../assets/images/kcsocmed/registerForm.png';
import kcsocmedProfilePageImage from '../../assets/images/kcsocmed/profilePage.png';
import kcsocmedFindOthersImage from '../../assets/images/kcsocmed/findOthers.png';
import kcsocmedFollowOthersImage from '../../assets/images/kcsocmed/followOthers.png';
import kcsocmedCommentOthersImage from '../../assets/images/kcsocmed/commentOthers.png';


import nowifibImage from '../../assets/images/nowifib/nowifib.png';
import nowifibLoginFormImage from '../../assets/images/nowifib/loginForm.png';
import nowifibRegisterFormImage from '../../assets/images/nowifib/registerForm.png';
import nowifibDashboardImage from '../../assets/images/nowifib/dashboard.png';
import nowifibFavoriteNotesImage from '../../assets/images/nowifib/favoriteNotes.png';
import nowifibNoteDetailImage from '../../assets/images/nowifib/noteDetail.png';
import nowifibEditNoteImage from '../../assets/images/nowifib/nowifib.png';

import kcdexImage from '../../assets/images/kcdex/kcdex.png';
import kcdexPokemonDetailImage from '../../assets/images/kcdex/pokemonDetail.png';
import kcdexPokemonBaseStatsImage from '../../assets/images/kcdex/pokemonBaseStats.png';
import kcdexPokemonEvolutionChartsImage from '../../assets/images/kcdex/pokemonEvolutionCharts.png';
import kcdexPokemonMovesImage from '../../assets/images/kcdex/pokemonMoves.png';
import kcdexSearchPokemonImage from '../../assets/images/kcdex/searchPokemon.png';
import kcdexTypeChartsImage from '../../assets/images/kcdex/typeCharts.png';


import BlockAbstractRedImage from '../../assets/images/abstract/BlockAbstractRed.svg';
import BoxAbstractRedImage from '../../assets/images/abstract/BoxAbstractRed.svg';
import BoxAbstractYellowImage from '../../assets/images/abstract/BoxAbstractYellow.svg';
import DiamondBorderAbstractYellowImage from '../../assets/images/abstract/DiamondBorderAbstractYellow.svg';
import DNAAbstractBlueImage from '../../assets/images/abstract/DNAAbstractBlue.svg';
import DNAAbstractYellowImage from '../../assets/images/abstract/DNAAbstractYellow.svg';
import RingAbstractBlueImage from '../../assets/images/abstract/RingAbstractBlue.svg';
import TriangleAbstractBlueImage from '../../assets/images/abstract/TriangleAbstractBlue.svg';
import TriangleAbstractRedImage from '../../assets/images/abstract/TriangleAbstractRed.svg';


gsap.registerPlugin(ScrollTrigger);

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const WorkSection = ({open, setOpen, isZoom, setIsZoom}) => {
    const classes = useStyles();

    const workRef = useRef(null);
    const workContentRef = useRef(null);
    const abstractRef1 = useRef(null);
    const abstractRef2 = useRef(null);
    const abstractRef3 = useRef(null);
    const abstractRef4 = useRef(null);
    const abstractRef5 = useRef(null);

    const cardContents = [
        {  
            image: kcsocmedImage,
            title:"Kcsocmed",
            description:"Social Media app that made with MERN Stack. In this app, user can make a post, comment, like, follow, find other people, edit his profile, and so on. User also can register using Google Registration.",
            technologies: ['Javascript', 'React JS (axios, redux, styled-components, moment, react-file-base64, react-router-dom, reactstrap)', 'Node JS + Express JS (jsonwebtoken)', 'MongoDB', 'Google Auth API '],
            galery: [
                { 
                    title: 'Login Form',
                    image: kcsocmedLoginFormImage
                }, { 
                    title: 'Register Form',
                    image: kcsocmedRegisterFormImage
                }, { 
                    title: 'Profile Page',
                    image: kcsocmedProfilePageImage
                }, { 
                    title: 'Find Others',
                    image: kcsocmedFindOthersImage
                }, { 
                    title: 'Follow Others',
                    image: kcsocmedFollowOthersImage
                }, { 
                    title: 'Comment and Like Post',
                    image: kcsocmedCommentOthersImage
                }],
            link: 'https://kcsocmed.netlify.app/',
        }, {
            image: nowifibImage,
            title: "Nowifib",
            description: "Todoapp With Firebase that made by me. It’s really hard please help me by subscribe and follow my social media.",
            technologies: ['Javascript', 'React JS (redux, redux-firestore, moment, reactstrap)', 'Bootstrap', 'Firebase'],
            galery: [
                { 
                    title: 'Landing Page',
                    image: nowifibImage
                }, { 
                    title: 'Login Form',
                    image: nowifibLoginFormImage
                }, { 
                    title: 'Register Page',
                    image: nowifibRegisterFormImage
                }, { 
                    title: 'Dashboard',
                    image: nowifibDashboardImage
                }, { 
                    title: 'Favorite Notes Page',
                    image: nowifibFavoriteNotesImage
                }, { 
                    title: 'Note Detail',
                    image: nowifibNoteDetailImage
                }, { 
                    title: 'Edit Note',
                    image: nowifibEditNoteImage
                }
            ],
            link: 'https://todolist-with-firebase-a8910.web.app/',
        }, {
            image: kcdexImage,
            title: "Kcdex",
            description: "Online Pokedex with complete information of pokemons. User can find many information about the newest pokemons. This app will update as soon as the api server update their api.",
            technologies: ['Javascript', 'React JS (axios, redux, react-router-dom, reactstrap)', 'pokeapi.co'],
            galery: [
                { 
                    title: 'Landing Page',
                    image: kcdexImage
                }, { 
                    title: 'Pokemon Detail',
                    image: kcdexPokemonDetailImage
                }, { 
                    title: 'Pokemon Base Stats',
                    image: kcdexPokemonBaseStatsImage
                }, { 
                    title: 'Pokemon Evolution Charts',
                    image: kcdexPokemonEvolutionChartsImage
                }, { 
                    title: 'Pokemon Moves',
                    image: kcdexPokemonMovesImage
                }, { 
                    title: 'Search Pokemon',
                    image: kcdexSearchPokemonImage
                }, { 
                    title: 'Type Charts',
                    image: kcdexTypeChartsImage
                }
            ],
            link: 'https://kcdex.netlify.app/pokemon/',
        }
    ]

    useEffect(() => {
        gsap.fromTo(workRef.current, {
            autoAlpha: 0,
            x: -25
        }, {
            duration: 1,
            autoAlpha: 1,
            x: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: workRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });
        gsap.fromTo(workContentRef.current, {
            autoAlpha: 0,
            y: -25
        }, {
            duration: 1,
            autoAlpha: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: workRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });
        gsap.fromTo(abstractRef1.current, {
            autoAlpha: 0,
            y: 25
        }, {
            delay: 1.2,
            duration: 1,
            autoAlpha: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: workRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });
        gsap.fromTo(abstractRef2.current, {
            autoAlpha: 0,
            y: -25
        }, {
            delay: 1.2,
            duration: 1,
            autoAlpha: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: workRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });
        gsap.fromTo(abstractRef3.current, {
            autoAlpha: 0,
            y: 25
        }, {
            delay: 1.6,
            duration: 1,
            autoAlpha: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: workRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });
        gsap.fromTo(abstractRef4.current, {
            autoAlpha: 0,
            y: 25
        }, {
            delay: 1.8,
            duration: 1,
            autoAlpha: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: workRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });
        gsap.fromTo(abstractRef5.current, {
            autoAlpha: 0,
            y: 25
        }, {
            delay: 2.2,
            duration: 1,
            autoAlpha: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: workRef.current,
                start: "top center",
                toggleActions: 'play none none reverse',
            }   
        });

        gsap.fromTo(abstractRef3.current, 8, {x: -25, y: 25}, {x:0, y: 0, rotation:"360", ease: 'linear', repeat:-1, yoyo: 'true'});
        gsap.fromTo(abstractRef4.current, 8, {x: -25, y: 25}, {x:0, y: 0, rotation:"360", ease: 'linear', repeat:-1, yoyo: 'true'});
        gsap.fromTo(abstractRef5.current, 8, {x: 50}, {x:0, rotation:"360", ease: 'linear', repeat:-1, yoyo: 'true'});

    }, [])

    return (
        <SectionContainer>
            <Row container style={{ justifyContent: 'flex-start' }}>
                <Col item xs={12} md={6}>
                    <Content ref={workContentRef}>
                        <Title>Work</Title>
                    </Content>
                </Col>
            </Row>
        
            <Row container ref={workRef}>
                {cardContents.map((card) => (
                    <Col item xs={12} md={6} lg={4} key={card.title}>
                        <WorkCard className={classes.root}>
                            <CardActionArea onClick={() => setOpen(open === card.title ? '' : card.title)}>
                                <CardMedia
                                    className={classes.media}
                                    image={card.image}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <CardTitle>
                                        {card.title}
                                    </CardTitle>
                                    <CardDescription>
                                        {card.description}
                                    </CardDescription>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <CardButton size="small" href={card.link} target="_blank">
                                    See project
                                </CardButton>
                            </CardActions>
                        </WorkCard>
                        <CardBackground></CardBackground>
                        
                    </Col>
                ))}
            </Row>
            {cardContents.map((card) => (
                <CardModal key={card.title} style={{ display: open === card.title ? 'block' : 'none' }}>
                    <ZoomCloseButton style={{ display: isZoom === '' && 'none' }}>
                        <CloseButton onClick={() => setIsZoom('')} />
                    </ZoomCloseButton>
                    <ZoomBackground style={{ display: isZoom === '' && 'none' }} onClick={() => setIsZoom('')} />
                    <ModalCloseButton>
                        <CloseButton onClick={() => setOpen('')} />
                    </ModalCloseButton>
                    <ModalContent>
                        <Row container style={{  alignItems: 'flex-start' }}>
                            <ModalCol item xs={12} lg={6}>
                                <ModalTitle> 
                                    {card.title}
                                </ModalTitle>
                                <ModalDescription>
                                    {card.description}
                                </ModalDescription>
                            </ModalCol>
                            <ModalCol item xs={12} md={6}>
                                <ModalSubTitle>
                                    Technologies :
                                </ModalSubTitle>
                                <ModalDescription>
                                    <GroupLists>
                                        {card.technologies?.map(tech => (
                                            <List key={tech}>{tech}</List>
                                        ))}
                                    </GroupLists>
                                </ModalDescription>
                            </ModalCol>
                        </Row>
                        <Row container>
                            <ModalCol item xs={12} style={{ paddingTop: '1em' }}>
                                <ModalDescription>Application preview</ModalDescription>
                                <ModalSubDescription>* click image to zoom</ModalSubDescription>
                            </ModalCol>
                            <Row container style={{ justifyContent: 'flex-start' }}>
                                {card.galery.map((galeryImage, i) => (
                                    <ModalCol iszoom={isZoom} item xs={12} sm={6} md={4} lg={3} key={i} style={{ padding: '0.3em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <GaleryImage src={galeryImage.image} alt="no preview" 
                                        style={{  
                                            position: isZoom === galeryImage.image && 'absolute', 
                                            width: isZoom === galeryImage.image && '100%', 
                                            height: isZoom === galeryImage.image && 'auto', 
                                            top: isZoom === galeryImage.image && '0%', 
                                            left: isZoom === galeryImage.image && '0%', 
                                            cursor: isZoom === galeryImage.image && 'default' }} />
                                        <ImageText onClick={() => setIsZoom(galeryImage.image)} style={{ display: isZoom !== '' && 'none' }}>
                                            {galeryImage.title}
                                        </ImageText>
                                    </ModalCol>
                                ))}
                            </Row>
                        </Row>
                    </ModalContent>
                    <DNAAbstractBlue src={DNAAbstractBlueImage} />
                    <DNAAbstractYellow src={DNAAbstractYellowImage} />
                    <RingAbstractBlue src={RingAbstractBlueImage} />
                    <BoxAbstractYellow src={BoxAbstractYellowImage} />
                    <TriangleAbstractRed src={TriangleAbstractRedImage} />
                </CardModal>
            ))}

            <BlockAbstractRed1 ref={abstractRef1} src={BlockAbstractRedImage} />
            <BlockAbstractRed2 ref={abstractRef2} src={BlockAbstractRedImage} />
            <TriangleAbstractBlue ref={abstractRef3} src={TriangleAbstractBlueImage} />
            <BoxAbstractRed ref={abstractRef4} src={BoxAbstractRedImage} />
            <DiamondBorderAbstractYellow ref={abstractRef5} src={DiamondBorderAbstractYellowImage} />
        </SectionContainer>
    )
}

export default WorkSection