function ResumeExperience(props) {
    return (
        <div>
            <h4>{props.title}</h4>
            <p>{props.org}</p>
            <p>{props.date}</p>
            <ul>
                {props.details.map(detail => {
                    return <li>{detail}</li>;
                })}
            </ul>
        </div>
    )
}

export default ResumeExperience;