import { useEffect, useState } from 'react';
import About from './components/About';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Section, { Card, Preview } from './components/Section';
import SocialNav from './components/SocialNav';

function HomePage() {
    useEffect(() => {
        const resetSocials = () => {
            const heroCoordsX =
                document.getElementById('heroButtonPos').offsetLeft;
            const heroCoordsY =
                document.getElementById('heroButtonPos').offsetTop + 10;
            console.log(heroCoordsX, heroCoordsY);
            document.getElementById('socialGithub').style.top =
                heroCoordsY + 'px';
            document.getElementById('socialGithub').style.left =
                heroCoordsX + 'px';
            document.getElementById('socialMail').style.top =
                heroCoordsY + 'px';
            document.getElementById('socialMail').style.left =
                heroCoordsX + 60 + 'px';
            document.getElementById('socialLinkedIn').style.top =
                heroCoordsY + 'px';
            document.getElementById('socialLinkedIn').style.left =
                heroCoordsX + 130 + 'px';
            document.getElementById('socialGithub').style.filter = 'scale(1)';

            document.getElementById('socialMail').style.filter = 'scale(1)';

            document.getElementById('socialLinkedIn').style.filter = 'scale(1)';
            // setSocialPos('default')
        };

        const moveSocials = () => {
            document.getElementById('socialGithub').style.top = '90vh';
            document.getElementById('socialGithub').style.left = '20px';
            document.getElementById('socialMail').style.top = '85vh';
            document.getElementById('socialMail').style.left = '20px';
            document.getElementById('socialLinkedIn').style.top = '80vh';
            document.getElementById('socialLinkedIn').style.left = '20px';

            document.getElementById('socialGithub').style.filter = 'scale(0.5)';

            document.getElementById('socialMail').style.filter = 'scale(0.5)';

            document.getElementById('socialLinkedIn').style.filter =
                'scale(0.5)';

            // setSocialPos('moved')
        };

        const scrollEffects = () => {
            if (window.pageYOffset === 0) resetSocials();
            if (window.pageYOffset > 0) moveSocials();
        };

        resetSocials();

        window.addEventListener('scroll', () => {
            scrollEffects();
        });

        window.addEventListener('resize', scrollEffects);
    }, []);
    return (
        <>
            <Nav />
            <SocialNav />
            <Hero />
            <Section title="featured" title2="projects">
                <Card
                    title="Project Title"
                    icons={['nodejs', 'express', 'react', 'firebase']}
                >
                    Nulla deserunt labore qui aliqua officia. Est cupidatat et
                    enim exercitation ad ipsum commodo aute occaecat ad
                    exercitation fugiat ut. Ullamco et aliquip id excepteur
                    reprehenderit deserunt amet in. Nisi culpa laboris irure et
                    nulla in dolor exercitation amet qui minim tempor sunt
                    dolore. Nulla est ex tempor in ipsum officia consectetur
                    eiusmod.
                </Card>
                <Preview></Preview>
                <Preview></Preview>
                <Card
                    title="Project Title"
                    icons={['nodejs', 'express', 'react', 'firebase']}
                >
                    Nulla deserunt labore qui aliqua officia. Est cupidatat et
                    enim exercitation ad ipsum commodo aute occaecat ad
                    exercitation fugiat ut. Ullamco et aliquip id excepteur
                    reprehenderit deserunt amet in. Nisi culpa laboris irure et
                    nulla in dolor exercitation amet qui minim tempor sunt
                    dolore. Nulla est ex tempor in ipsum officia consectetur
                    eiusmod.
                </Card>
            </Section>
            <About />
        </>
    );
}

export default HomePage;
