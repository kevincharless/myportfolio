import { SectionContainer, Row, Col, Content, Title, SubTitle, Description } from './components';

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
                    
                </Col>
            </Row>
        </SectionContainer>
    )
}

export default AboutMeSection
