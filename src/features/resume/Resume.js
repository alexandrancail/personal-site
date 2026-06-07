import resume from "../../app/Resume";
import ResumeExperience from "./WorkExperience";

// Resume page of the app.
function Resume() {
    function createListString(list) {
        let listString = "";

        for (let i = 0; i < list.length; i++) {
            if (i === list.length - 1) {
                listString += `and ${list[i]}.`;
            } else {
                listString += `${list[i]}, `;
            }
        }
        
        return listString;
    }

    return(
        <div id="resume" className="page">
            <h1>{resume.name}</h1>
            <p>
                {/* TODO: Not working... is the path wrong? */}
                <img src="../../resources/linkedin-app-white-icon.webp"/>
                <a href={resume.linkedin_link}>Find me on Linkedin.</a>
            </p>
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
                <p>{createListString(resume.education.relevant_courses)}</p>
            </div>
            <hr />
            {/* Skills Section */}
            <div>
                <h3>Skills</h3>
                <p>{createListString(resume.skills)}</p>
            </div>
            <hr />
            {/* Work Experience Section */}
            <div>
                <h3>Work Experience</h3>
                {resume.work_experience.map(xp => {
                    return <ResumeExperience 
                                title={xp.job_title} 
                                org={xp.company}
                                date={`${xp.start_date} - ${xp.end_date}`}
                                details={xp.responsibilities}/>
                })}
            </div>
            <hr />
            {/* Trainings Section */}
            <div>
                <h3>Trainings</h3>
                {resume.relevant_trainings.map(xp => {
                    return <ResumeExperience
                                title={xp.training_name}
                                org={xp.host}
                                date={xp.date}
                                details={xp.details}/>
                })}
            </div>
        </div>
    )
}

export default Resume;