import HeadingBar from '../heading-bar/HeadingBar'
import LaropaKiokiImage from '../../assets/images/laropakioki.png'
import AnnuityPrimeImage from '../../assets/images/annuityprime.png'
import OneStopMalImage from '../../assets/images/onestopmall.png'
import AMIImage from '../../assets/images/ami.png'
import NewHeightsSchoolImage from '../../assets/images/nhs.png'

const Portfolio = () => {
    return <div style={{ marginTop: 90 }} className="container mb-5">
        <div className="px-4">
            <div className="position-relative mt-5">
                <h1 style={{ textTransform: "uppercase", fontSize: "6rem", zIndex: -1, position: "absolute", top: 58, color: "#0d334b", width: 510 }} >Portfolio</h1>
                <h1 style={{ textTransform: "uppercase", fontSize: "2.5rem" }} className={"text-white "}>Portfolio</h1>
            </div>
            <HeadingBar />

            <div style={{ marginTop: 100 }}>
                <div className="row g-4">
                    <div className="col-lg-6 col-md-12">
                        <img className="w-100 " style={{ objectFit: 'cover', objectPosition: 'top' }} src={AnnuityPrimeImage} alt="laropakioki" />
                        {/* <h4 className="text-white mt-2">A website for generating Annuity quotes with Enterprise Life</h4> */}
                        <h5 className="text-white mt-2">Annuity Calculator For Enterprise Life</h5>
                        <div style={{ color: "#9fc1d7", fontSize: 18 }} >React app I built for Enterprise Life customers to generate quotes for their Annuity Prime Product. Annuity is basically a product that guarantees a monthly salary after pension based on an initial lumpsum paid.</div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <img className="w-100 " style={{ objectFit: 'cover', objectPosition: 'top' }} src={OneStopMalImage} alt="laropakioki" />
                        {/* <h4 className="text-white mt-2">A website for generating Annuity quotes with Enterprise Life</h4> */}
                        <h5 className="text-white mt-2">1StopMal</h5>
                        <div style={{ color: "#9fc1d7", fontSize: 18 }} >A fully-fledged ecommerce android app with over 500+ downloads on playstore. Features include a Browse/Filter product, Cart Manangement, Paystack Payment Integration and more. was built with Kotlin.</div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <img className="w-100 " style={{ objectFit: 'cover', objectPosition: 'top' }} src={LaropaKiokiImage} alt="laropakioki" />
                        <h5 className="text-white mt-3">Laropakioki Fashion Website</h5>
                        <div style={{ color: "#9fc1d7", fontSize: 18 }} >A Fashion website with categories of fashionble clothes to choose from. Built in React.</div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <img className="w-100 " style={{ objectFit: 'cover', objectPosition: 'top' }} src={AMIImage} alt="ami image" />
                        <h5 className="text-white mt-3">AMI Cleaning Services Website</h5>
                        <div style={{ color: "#9fc1d7", fontSize: 18 }} >A website for a cleaning company where visitors can contact them for their services and also start a purchasing process for any of their products. Built with Wordpress.</div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <img className="w-100 " style={{ objectFit: 'cover', objectPosition: 'top' }} src={NewHeightsSchoolImage} alt="New Heights School image" />
                        <h5 className="text-white mt-3">New Heights School Website</h5>
                        <div style={{ color: "#9fc1d7", fontSize: 18 }} >I think this is one of the first projects I built. It is website for New Heights School which showcases their The facilities they have as well as some beautiful pictures. Built with vanilla HTML, Javascript and CSS with Google Maps integration</div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <img className="w-100 " style={{ objectFit: 'cover', objectPosition: 'top' }} src={EligibleChecksImage} alt="Eligible Checks" />
                        <h5 className="text-white mt-3">Eligible Background Checks</h5>
                        <div style={{ color: "#9fc1d7", fontSize: 18 }} >An application for requesting for background checks to be done on prospective employees. Possible Checks Include Drivers' License Check, Social Media Check, Criminal Checks, Educational Background Check, et cetera</div>
                    </div>

                </div>
            </div>
        </div>
    </div>
}

export default Portfolio