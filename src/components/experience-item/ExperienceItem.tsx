const ExperienceItem = ({ duration, jobTitle, companyName, description }: { duration: string, jobTitle: string, companyName: string, description: string }) => {
    return <div className="d-flex mt-3" style={{ fontSize: 18 }}>
        <div style={{ width: 15, height: 15, minWidth: 15, border: "2px solid #a4acc4", borderRadius: "50%", background: "#10121A", marginTop: 5 }} className="d-block"></div>
        <div className="d-flex flex-wrap">
            <div style={{ color: "#a4acc4", minWidth: 200 }} className="ps-4">{duration}</div>
            <div className="ps-4">
                <div className="fw-bold" style={{ color: "#037fff", fontSize: 25 }} >{jobTitle}</div>
                <div className="text-white">{companyName}</div>
                <div style={{ color: "#a4acc4", maxWidth: 700 }}>{description}</div>
            </div>
        </div>
    </div>
}

export default ExperienceItem