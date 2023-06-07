import './Home.css';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const Home = () => {
    const particlesOptions: any = {

        background: {
            color: {
                value: "#10121A",
            },
            position: "relative"
        },
        fpsLimit: 120,
        fullScreen: {
            enable: false,
            zIndex: 0
        },
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 2,
                },
                repulse: {
                    distance: 20,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#a4acc41c",
            },
            links: {
                color: "#a4acc41c",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: false,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 3,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 20,
            },
            opacity: {
                value: 0.3,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 4 },
            },
        },
        detectRetina: true,
    }
    const particlesInit = useCallback(async (engine: any) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: any) => {

    }, []);
    return <div className="position-relative h-100 w-100">

        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesOptions}
        />

        <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1
        }} className="d-flex justify-content-center align-items-center flex-column h-100 w-100 px-3">
            <h1 className="text-white text-center">Hi, I am <span style={{ color: "#037fff" }}>Joseph Cobbinah</span></h1>
            <div className="tagline mb-4">I'm a skilled Software Engineer with a track record of delivering high-quality and scalable software solutions while working collaboratively with cross-functional teams accros the globe. If you're looking for a dedicated and experienced Software Engineer for your next Project, let's connect</div>
            <div className="d-flex flex-wrap justify-content-center text-white">
                <div className="p-3 icon-wrapper me-3 mt-1">
                    <i style={{ fontSize: 25 }} className="fa fa-facebook" aria-hidden="true"></i>
                </div>
                <div className="p-3 icon-wrapper me-3 mt-1">
                    <i style={{ fontSize: 25 }} className="fa fa-instagram" aria-hidden="true"></i>
                </div>
                <div className="p-3 icon-wrapper me-3 mt-1">
                    <i style={{ fontSize: 25 }} className="fa fa-linkedin" aria-hidden="true"></i>
                </div>
                <div className="p-3 icon-wrapper me-3 mt-1">
                    <i style={{ fontSize: 25 }} className="fa fa-github" aria-hidden="true"></i>
                </div>

            </div>
        </div>


    </div >

}


export default Home;