import ExperienceItem from '../experience-item/ExperienceItem'
import HeadingBar from '../heading-bar/HeadingBar'
import "./Experience.css"

const Experience = () => {
    return <div style={{ marginTop: 90 }} className="container">
        <div className="px-4">
            <div className="position-relative mt-5">
                <h1 style={{ textTransform: "uppercase", fontSize: "6rem", zIndex: -1, position: "absolute", top: 58, color: "#0d334b", width: 510 }} >Experience</h1>
                <h1 style={{ textTransform: "uppercase", fontSize: "2.5rem" }} className={"text-white "}>Experience</h1>
            </div>
            <HeadingBar />
            <div className="position-relative mb-5"  >
                <div className="position-absolute" style={{ left: 6, width: 2, height: "100%", background: "#7ba6c1", top: 0, zIndex: -1 }}></div>
                <div style={{ zIndex: 1, marginTop: 100 }} className="py-3">
                    <ExperienceItem duration={'Jan 2022 - Present'} jobTitle={'BTS Officer'} companyName={'Enterprise Group'} description={'My responsibilities include application development, application support, DevSecOps, engaging and assisting third-party vendors, et cetera. Some of the languages and tools I\'ve used at this role are PHP, Laminas, Laravel, Reactjs, Docker, Git, MySql, MSSQL Server '} />
                    <ExperienceItem duration={'Jan 2020 - Present'} jobTitle={'Chief Executive Officer'} companyName={'Petamindz'} description={'My responsibilities include engaging prospective clients, requirements gathering, application development, application support, et cetera. Some of the languages and tools I\'ve used at this role are Reactjs, Angular 2+, PHP, Nodejs, MongoDB, Flutter, Native Android (Kotlin), Docker, Git.'} />
                    <ExperienceItem duration={'Dec 2021 - Jan 2020'} jobTitle={'Software Engineer'} companyName={'Omni Strategies'} description={'My responsibilities were building and maintaining applications. Some of the languages and tools used at this role include React Native, Git, Docker'} />
                    <ExperienceItem duration={'Jul 2020 - Nov 2020'} jobTitle={'Frontend Web Developer'} companyName={'Ampersand Technologies Ltd'} description={'This was a contract role that required me to support the Angular Team meet a really tight deadline which we did. I mainly worked with Angular 8 and Ngrx for state management at this role.'} />
                    <ExperienceItem duration={'Aug 2019 - Nov 2019'} jobTitle={'Lead Software Engineer'} companyName={'Makedu Consult'} description={'I was responsible for leading a team comprised of Software Engineers, a Product Manager, and a UI/UX Engineer to work on critical projects for huge international Corporate Bodies and NGOs. I also had to write code whiles doing all this.  Some of the languages and tools I\'ve used at this role are Angular 8, Nodejs, Laravel, MySQL, Wordpress'} />
                    <ExperienceItem duration={'Jun 2018 - May 2019'} jobTitle={'Android Developer'} companyName={'Data and Management Systems Limited'} description={'I was responsible for building and maintaining all Android Applications for the business.  I mainly used Android(Java), Git'} />
                    <ExperienceItem duration={'Jul 2017 - Jun 2018'} jobTitle={'Android Developer'} companyName={'Liberty Group'} description={'I was responsible for building and maintaining all Android Applications for the business. I application I am particular proud about is the Mobile Agent Banking Android App which empowered bank tellers to carry out most of their opperations on the move. I mainly used Android(Java), Git'} />
                    <ExperienceItem duration={'Sep 2016 - Aug 2017'} jobTitle={'Teaching Assistant'} companyName={'Department of Computer Science, University of Ghana'} description={'I organized tutorial sections for Computer Science Courses and Mentored numerous final year students on becoming better Software Engineers'} />
                </div>

            </div>

        </div>

    </div >
}

export default Experience