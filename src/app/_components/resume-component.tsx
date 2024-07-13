import {
  Resume,
  ContactInfo,
  Education,
  Project,
  Company,
  SkillGroup,
  Position,
  TimeSpan,
} from "@/interfaces/resume";

import "./resume-component.scss";
import { parseISO, format } from "date-fns";
import { Inter, Roboto, Roboto_Condensed, Inter_Tight } from "next/font/google";
import IconEnvelopeFill from "./icons/IconEnvelopeFill";
import IconTelephoneFill from "./icons/IconTelephoneFill";
import IconLocationDot from "./icons/IconLocationDot";
import IconGlobe2 from "./icons/IconGlobe2";
import IconLinkedin from "./icons/IconLinkedin";
import IconGithub from "./icons/IconGithub";
import BreakpointIndicator from "./breakpoint-indicator";

interface Props {
  resume: Resume;
}
const font = Inter_Tight({ subsets: ["latin"] });

export function ResumeComponent({ resume }: Props) {
  return (
    <article className={`resume ${font.className}`}>
      {Header(resume.contactInfo)}
      {SkillsSection(resume.skills)}
      {WorkExperienceSection(resume.workExperience)}
      {ProjectsSection(resume.projects)}
      {EducationsSection(resume.education)}
    </article>
  );
}

function Header(contactInfo: ContactInfo) {
  return (
    <header>
      <div className="header-title">
        <h1>{contactInfo.name}</h1>
        <h2>{contactInfo.title}</h2>
      </div>

      <div className="header-details">
        <div className="header-details-col">
          <div className="header-detail-item">
            <IconLocationDot />
            {contactInfo.location}
          </div>
          <div className="header-detail-item">
            <IconTelephoneFill />
            <a href={`tel:${contactInfo.phoneNumber}`}>
              {contactInfo.phoneNumber}
            </a>
          </div>
          <div className="header-detail-item">
            <IconEnvelopeFill />
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </div>
        </div>
        <div className="header-details-col">
          <div className="header-detail-item">
            <IconGlobe2 />
            <a href={contactInfo.urls.website}>
              {cleanURL(contactInfo.urls.website)}
            </a>
          </div>
          <div className="header-detail-item">
            <IconLinkedin />
            <a href={contactInfo.urls.linkedin}>
              {cleanURL(contactInfo.urls.linkedin)}
            </a>
          </div>
          <div className="header-detail-item">
            <IconGithub />
            <a href={contactInfo.urls.github}>
              {cleanURL(contactInfo.urls.github)}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function cleanURL(url: string) {
  const pattern = /^https?:\/\/(www\.)?(.*)/;
  const replace = "$2";
  return url.replace(pattern, replace);
}

function EducationsSection(educations: Education[]) {
  return (
    <section className="education-section">
      <h2>Education</h2>
      {educations.map((e, i) => (
        <div className="education" key={i}>
          <h3>
            <div className="education-name">
              {e.url ? <a href={e.url}>{e.name}</a> : e.name}
            </div>
            <div className="education-location">{e.location}</div>
          </h3>

          <h4>
            <div className="education-degree">
              {`${e.degree} in ${e.field}`}
            </div>
            <div>
              <time dateTime={e.completed}>{FormatIsoDate(e.completed)}</time>
            </div>
          </h4>
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
      <h3>
        <div className="company-name flex flex-col">
            <a href={company.url}>{company.name}</a>
        </div>
        <div className="company-location">{company.location}</div>
      </h3>

      {company.positions.map((position, i) => PositionSection(position, i))}
    </div>
  );
}

function PositionSection(position: Position, index: number) {
  return (
    <div className="position" key={index}>
      <h4>
        <div className="position-name">{position.name}</div>
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
          <div className="skill-group-label">{`${sg.name}:`}&nbsp;</div>

          {sg.skills.map((sk, ski) => {
            return (
              <div className="skill" key={ski}>
                {sk.url ? <a href={sk.url}>{sk.name}</a> : <> {sk.name}</>}
                {ski < sg.skills.length - 1 ? <>,&nbsp;</> : null}
              </div>
            );
          })}
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
