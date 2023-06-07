const ExperienceItem = ({ duration, jobTitle, companyName, description }: { duration: string, jobTitle: string, companyName: string, description: string }) => {
    return <div className="d-flex mt-3" style={{ fontSize: 18 }}>
        <div style={{ width: 15, height: 15, minWidth: 15, border: "2px solid #7ba6c1", borderRadius: "50%", background: "#052C43", marginTop: 5 }} className="d-block"></div>
        <div className="d-flex flex-wrap">
            <div style={{ color: "#7ba6c1", minWidth: 200 }} className="ps-4">{duration}</div>
            <div className="ps-4">
                <div className="fw-bold" style={{ color: "#14b8ee", fontSize: 25 }} >{jobTitle}</div>
                <div className="text-white">{companyName}</div>
                <div style={{ color: "#7ba6c1", maxWidth: 700 }}>{description}</div>
            </div>
        </div>
    </div>
}

export default ExperienceItem