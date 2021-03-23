import { SectionContainer, Row, Col, Content, Title, SubTitle, Description, AboutImage, ImageRingAbstract, ImageCrossArrowAbstract, DotAbstractYellow, XAbstractRed, XAbstractYellow, TriangleShadowAbstractBlue, CircleAbstractRed, CircleAbstractBlue, BoxAbstractRed } from './components';

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

const AboutMeSection = () => {

    return (
        <SectionContainer>
            <Row container>
                <Col item xs={12} sm={7}>
                    <Content>
                        <Title>More About Me</Title>
                        <SubTitle>I’m a Full Stack Developer from Riau Islands, Indonesia.</SubTitle>
                        <Description>I enjoy to solve a problem and turning my ideas into my projects. I like to learn new things and keep up with the times.</Description>
                    </Content>
                </Col>
                <Col item xs={12} sm={5}>
                    <AboutImage src={AboutMeImage} />
                    <ImageRingAbstract src={ImageRingAbstractImage} />
                    <ImageCrossArrowAbstract src={ImageCrossArrowAbstractImage} />
                </Col>
            </Row>
            <DotAbstractYellow src={DotAbstractYellowImage} />
            <XAbstractRed src={XAbstractRedImage} />
            <XAbstractYellow src={XAbstractYellowImage} />
            <TriangleShadowAbstractBlue src={TriangleShadowAbstractBlueImage} />
            <CircleAbstractRed src={CircleAbstractRedImage} />
            <CircleAbstractBlue src={CircleAbstractBlueImage} />
            <BoxAbstractRed src={BoxAbstractRedImage} />
        </SectionContainer>
    )
}

export default AboutMeSection
