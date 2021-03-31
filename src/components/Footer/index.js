import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { SectionContainer, Row } from './components';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(footerRef.current, {
            autoAlpha: 0,
            x: 25,
        }, {
            duration: 0.8,
            autoAlpha: 1,
            x: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top+125 bottom",
                toggleActions: 'play none none reverse',
            }   
        });
    }, [])

    return (
        <SectionContainer ref={footerRef}>
            <Row>
                © Copyright 2021 Kevin Charles
            </Row>
        </SectionContainer>
    )
}

export default Footer
