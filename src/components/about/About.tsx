import HeadingBar from '../heading-bar/HeadingBar';
import AboutImageTwo from '../../assets/images/about-image-2.jpg';

const About = () => {
    return <div style={{ marginTop: 90 }} className="container">
        <div className="px-4">
            <div className="position-relative">
                <h1 style={{ textTransform: "uppercase", fontSize: "6rem", zIndex: -1, position: "absolute", top: 58, color: "#0d334b", width: 510 }} >About Me</h1>
                <h1 style={{ textTransform: "uppercase", fontSize: "2.5rem" }} className={"text-white "}>About Me</h1>
            </div>
            <HeadingBar />
            <div className="row mt-5">
                <div className="col-lg-5 ">
                    <img className={"w-100"} style={{ height: 600, objectFit: "cover" }} src={AboutImageTwo} alt="Nice picture of Joseph Cobbinah" />
                </div>
                <div className="col-lg-7">
                    <h2 className="text-white mt-5">I am <span style={{ color: "#14b8ee" }}>Joseph Cobbinah</span></h2>
                    <div className="mt-4" style={{ color: "#9fc1d7", fontSize: 18 }}>
                        <div>I'm a skilled Software Engineer with a computer science degree from the University of Ghana. I specialize in ReactJS, NodeJS, Docker, MySQL, MongoDB, Git, and PHP. I have a track record of delivering high-quality and scalable software solutions, working collaboratively with cross-functional teams. If you're looking for a dedicated and experienced Software Engineer to take your business to the next level, I'm your guy!</div>
                        <div className="d-flex mt-4"><div style={{ width: 120 }}>(Full Name)</div><div>=&gt; Joseph Ofori Cobbinah</div></div>
                        <div className="d-flex mt-2"><div style={{ width: 120 }}>(Age)</div><div></div>=&gt; 31yrs</div>
                        <div className="d-flex mt-2"><div style={{ width: 120 }}>(Nationality)</div><div>=&gt; Ghanaian 🇬🇭</div></div>
                        <div className="d-flex mt-2"><div style={{ width: 120 }}>(Languages)</div><div>=&gt; English</div></div>
                        <div className="d-flex mt-2"><div style={{ width: 120 }}>(Address)</div><div>=&gt; Sakumono, Greater Accra, Ghana</div></div>
                        <div className="d-flex mt-2"><div style={{ width: 120 }}>(Hobby)</div><div>=&gt; Playing guitar 🎸</div></div>
                    </div>

                </div>
            </div>


            <div className="position-relative mt-5">
                <h1 style={{ textTransform: "uppercase", fontSize: "6rem", zIndex: -1, position: "absolute", top: 58, color: "#0d334b", width: 510 }} >Services</h1>
                <h1 style={{ textTransform: "uppercase", fontSize: "2.5rem" }} className={"text-white "}>Services</h1>
            </div>
            <HeadingBar />

            <div className="row my-5">
                <div className="col-lg-4 mt-4">
                    <div style={{ background: "#0a1c2b", border: "1px solid #335469", borderTop: "5px solid #335469" }} className="p-4 h-100">
                        <i style={{ color: "#14b8ee" }} className='fa fa-paint-brush fa-2x'></i>
                        <h4 className="text-white mt-4">Web Design</h4>
                        <div className="mt-3" style={{ width: 40, height: 2, background: "#2E354E" }}></div>
                        <div className="mt-3" style={{ color: "#9fc1d7", fontSize: 18 }}>
                            Transform your online presence with a personalized web design that showcases your unique style. Stand out, captivate your audience, and make a lasting impact. Elevate your online presence today!
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-4">
                    <div style={{ background: "#0a1c2b", border: "1px solid #335469", borderTop: "5px solid #335469" }} className="p-4 h-100">
                        <i style={{ color: "#14b8ee" }} className='fa fa-code fa-2x'></i>
                        <h4 className="text-white mt-4">Web Development</h4>
                        <div className="mt-3" style={{ width: 40, height: 2, background: "#2E354E" }}></div>
                        <div className="mt-3" style={{ color: "#9fc1d7", fontSize: 18 }}>
                            Make your mark online with personalized website development. I'll bring your vision to life with a custom website that stands out. Elevate your online presence and captivate your audience. Let's build your digital success story today!
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-4">
                    <div style={{ background: "#0a1c2b", border: "1px solid #335469", borderTop: "5px solid #335469" }} className="p-4 h-100">
                        <i style={{ color: "#14b8ee" }} className='fa fa-android fa-2x'></i>
                        <h4 className="text-white mt-4">Android Development</h4>
                        <div className="mt-3" style={{ width: 40, height: 2, background: "#2E354E" }}></div>
                        <div className="mt-3" style={{ color: "#9fc1d7", fontSize: 18 }}>
                            Transform your app idea into reality with an experienced and professional Android Application Developer. Get a customized and user-friendly mobile application that engages users and drives results. Let's build something amazing together. Contact me today!
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-4">
                    <div style={{ background: "#0a1c2b", border: "1px solid #335469", borderTop: "5px solid #335469" }} className="p-4 h-100">
                        <i style={{ color: "#14b8ee" }} className='fa fa-globe fa-2x'></i>
                        <h4 className="text-white mt-4">Web Hosting</h4>
                        <div className="mt-3" style={{ width: 40, height: 2, background: "#2E354E" }}></div>
                        <div className="mt-3" style={{ color: "#9fc1d7", fontSize: 18 }}>
                            Experience top-notch web hosting and administration services with a dedicated expert. Enjoy lightning-fast load times, robust security, and unbeatable uptime. Let me handle the technical details while you focus on your core business. Say goodbye to headaches and elevate your online performance. Unlock your website's true potential today!
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div >
}

export default About;