import { SectionContainer, Col, Row, Content, HeroAbstract, HeroAbstract2, TitleAbstract, DescriptionAbstract, Title,  Description } from './components';
import TitleAbstractImage from '../../assets/images/abstract/TitleAbstract.svg';
import DescriptionAbstractImage from '../../assets/images/abstract/DescriptionAbstract.svg';
import HeroAbstractImage from '../../assets/images/abstract/HeroAbstract.svg';
import HeroAbstract2Image from '../../assets/images/abstract/HeroAbstract2.svg';


const HeroSection = () => {
    return (
        <SectionContainer>
            <HeroAbstract src={HeroAbstractImage} />
            <Row container>
                <Col item xs={12} sm={7}>
                    <Content>
                        <TitleAbstract src={TitleAbstractImage} />
                        <Title>Hi,</Title>
                        <Title>I’m Kevin Charles</Title>
                        <Description>Full Stack Web Developer</Description>
                        <DescriptionAbstract src={DescriptionAbstractImage} />
                    </Content>
                </Col>
                <Col item xs={12} sm={5}>test</Col>
            </Row>
            <HeroAbstract2 src={HeroAbstract2Image} />
        </SectionContainer>
    )
}

export default HeroSection
