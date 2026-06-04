import resume from "../../app/Resume";

// Resume page of the app.
function Resume() {
    return(
        <div id="resume" className="page">
            <h1>{resume.name}</h1>
            <hr />
            {/* Education Section */}
            <div>
                <h2>Education</h2>
                <div class="section-subheader">
                    <h3>{resume.education.school}</h3>
                    <h3>{resume.education.start_year} - {resume.education.end_year}</h3>
                </div>
                <div class="section-subheader">
                    <p>{resume.education.degree}</p>
                    <p>GPA: {resume.education.gpa}</p>
                </div>
            </div>
            {/* Relevant Courses Section */}
            <div>
                <h3>Relevant Courses</h3>
                {/* TODO: Not working... */}
                <p>{resume.education.relevant_courses.forEach(course => {
                    return <>{course},</>;
                })}</p>
            </div>
        </div>
    )
}

export default Resume;