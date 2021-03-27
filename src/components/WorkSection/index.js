import { SectionContainer, Row, Col, Content, Title, WorkCard, CardTitle, CardDescription, CardButton, CardBackground } from './components';

import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import kcsocmedImage from '../../assets/images/kcsocmed.png';
import nowifibImage from '../../assets/images/nowifib.png';
import kcdexImage from '../../assets/images/kcdex.png';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const WorkSection = () => {
    const classes = useStyles();

    const cardContents = [
        {
            image: kcsocmedImage,
            title:"Kcsocmed",
            description:"social media that made by me. It’s really hard please help me by subscribe and follow my social media."
        }, {
            image: nowifibImage,
            title: "Nowifib",
            description: "Todoapp With Firebase that made by me. It’s really hard please help me by subscribe and follow my social media."
        }, {
            image: kcdexImage,
            title: "Kcdex",
            description: "Pokedex that made by me. It’s really hard please help me by subscribe and follow my social media."
        }
    ]

    return (
        <SectionContainer>
            <Row container style={{ justifyContent: 'flex-start' }}>
                <Col item xs={12} md={6}>
                    <Content>
                        <Title>Work</Title>
                    </Content>
                </Col>
            </Row>
        
            <Row container>
                {cardContents.map((card) => (
                    <Col item xs={12} md={6} lg={4} key={card.title}>
                        <WorkCard className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={card.image}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                <CardTitle gutterBottom variant="h5" component="h2">
                                    {card.title}
                                </CardTitle>
                                <CardDescription variant="body2" color="textSecondary" component="p">
                                    {card.description}
                                </CardDescription>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <CardButton size="small">
                                    See project
                                </CardButton>
                            </CardActions>
                        </WorkCard>
                        {/* <CardBackground></CardBackground> */}
                    </Col>
                ))}
            </Row>
        </SectionContainer>
    )
}

export default WorkSection