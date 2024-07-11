import {
  Resume,
  ContactInfo,
  Education,
  Project,
  Company,
  Introduction,
  SkillGroup,
  Position,
  TimeSpan,
} from "@/interfaces/resume";

import "./resume-component.css";
import { parseISO, format } from "date-fns";

interface Props {
  resume: Resume;
}

export function ResumeComponent({ resume }: Props) {
  return (
    <article className="resume">
      {Header(resume.contactInfo)}
      {IntroductionSection(resume.introduction)}
      {SkillsSection(resume.skills)}
      {WorkExperienceSection(resume.workExperience)}
      {ProjectsSection(resume.projects)}
      {EducationsSection(resume.education)}
    </article>
  );
}

function Header(contactInfo: ContactInfo) {
  return (
    <header className="header-section">
      <h1>{contactInfo.name}</h1>
      <ul>
        <li>{contactInfo.location}</li>
        <li>
          <a href={`tel:${contactInfo.phoneNumber}`}>
            {contactInfo.phoneNumber}
          </a>
        </li>
        <li>
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href={contactInfo.urls.website}>
            {cleanURL(contactInfo.urls.website)}
          </a>
        </li>
        <li>
          <a href={contactInfo.urls.linkedin}>
            {cleanURL(contactInfo.urls.linkedin)}
          </a>
        </li>
        <li>
          <a href={contactInfo.urls.github}>
            {cleanURL(contactInfo.urls.github)}
          </a>
        </li>
      </ul>
    </header>
  );
}

function cleanURL(url: string) {
  const pattern = /^https?:\/\/(www\.)?(.*)/;
  const replace = "$2";
  return url.replace(pattern, replace);
}

function IntroductionSection(introduction?: Introduction) {
  return introduction ? (
    <section className="introduction-section">
      <h2>{introduction?.title}</h2>
      <p>{introduction?.summary}</p>
    </section>
  ) : null;
}

function EducationsSection(educations: Education[]) {
  return (
    <section className="education-section">
      <h2>Education</h2>
      {educations.map((e, i) => (
        <div className="education" key={i}>
          <h4>
            <div className="education-name">
              {e.url ? <a href={e.url}>{e.name}</a> : e.name}
            </div>
            <div className="education-location">{e.location}</div>
          </h4>

          <div>
            <div className="education-degree">
              {`${e.degree} in ${e.field} `}
            </div>
            <div className="education-completed">
              <time dateTime={e.completed}>{FormatIsoDate(e.completed)}</time>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

function ProjectsSection(projects: Project[]) {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <h4>
            <div className="project-name">
              {project.url ? (
                <a href={project.url}>{project.name}</a>
              ) : (
                project.name
              )}
            </div>
            <div className="project-dates">
              {TimeSpanLabel(project.timeSpan)}
            </div>
          </h4>

          <p className="project-description">{project.description}</p>
        </div>
      ))}
    </section>
  );
}

function WorkExperienceSection(companies: Company[]) {
  return (
    <section className="work-experience-section">
      <h2>Work Experience</h2>
      {companies.map((company, index) => CompanySection(company, index))}
    </section>
  );
}

function CompanySection(company: Company, index: number) {
  return (
    <div className="company" key={index}>
      <h2>
        <div className="company-name">
          {company.url ? (
            <a href={company.url}>{company.name}</a>
          ) : (
            company.name
          )}
        </div>
        <div className="company-location">{company.location}</div>
      </h2>

      {company.positions.map((position, i) => PositionSection(position, i))}
    </div>
  );
}

function PositionSection(position: Position, index: number) {
  return (
    <div className="position" key={index}>
      <h4>
        <div className="position-name">{position.name}</div>
        <div className="position-type">{position.positionType}</div>
        <div className="position-dates">{TimeSpanLabel(position.timeSpan)}</div>
      </h4>

      <ul className="achievements">
        {position.achievements.map((achievement, aIndex) => (
          <li className="achievement" key={aIndex}>
            {achievement.url ? (
              <a href={achievement.url}>{achievement.description}</a>
            ) : (
              achievement.description
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillsSection(skillGroups: SkillGroup[]) {
  return (
    <section className="skills-section">
      <h2>Skills</h2>

      {skillGroups.map((sg, sgi) => (
        <div className="skill-group" key={sgi}>
          <div className="skill-group-label">{sg.name}</div>
          <ul>
            {sg.skills.map((sk, ski) => (
              <li className="skill" key={ski}>
                {sk.url ? <a href={sk.url}>{sk.name}</a> : sk.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

function DateLabel(isoDate: string) {
  return <time dateTime={isoDate}>{FormatIsoDate(isoDate)}</time>;
}

function TimeSpanLabel(timeSpan: TimeSpan) {
  return (
    <>
      {DateLabel(timeSpan.start)}
      {" - "}
      {timeSpan.end ? DateLabel(timeSpan.end) : "Current"}
    </>
  );
}

function FormatIsoDate(isoDate: string) {
  const yearPattern = /^[0-9]{4}$/;
  const monthPattern = /^[0-9]{4}-[0-9]{2}$/;
  const dayPattern = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

  let formatStr: string;

  if (isoDate.match(yearPattern)) formatStr = "yyyy";
  else if (isoDate.match(monthPattern)) formatStr = "LLL yyyy";
  else if (isoDate.match(dayPattern)) formatStr = "LLL d, yyyy";
  else
    throw Error(
      `Invalid ISO date: ${isoDate}. Must be YYYY, YYYY-MM, or YYYY-MM-DD`
    );

  const date = parseISO(isoDate);
  const formattedDate = format(date, formatStr);
  return formattedDate;
}
