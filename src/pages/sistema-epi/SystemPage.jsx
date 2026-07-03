import { useEffect } from 'react';
import HeroSystem from './HeroSystem';
import Problems from './Problems';
import Features from './Features';
import Dashboard from './Dashboard';
import Mobile from './Mobile';
import Benefits from './Benefits';
import FAQ from './FAQ';
import CTA from './CTA';

const SystemPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <HeroSystem />
            <Problems />
            <Features />
            <Dashboard />
            <Mobile />
            <Benefits />
            <FAQ />
            <CTA />
        </>
    );
};

export default SystemPage;