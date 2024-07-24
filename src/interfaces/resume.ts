export interface Resume {
  contactInfo: ContactInfo;
  skills: SkillGroup[];
  workExperience: Company[];
  projects: Project[];
  education: Education[];
}

export interface ContactInfo {
  name: string;
  title?: string;
  email: string;
  location: string;
  phoneNumber: string;
  urls: { website: string; linkedin: string; github: string };
}

export interface Date {
  year: number;
  month: number;
  day?: number;
}

export interface TimeSpan {
  /***Start date as ISO 8601 value (e.g YYYY-MM-DD or YYYY-MM-DD)*/
  start: string;

  /***End date as ISO 8601 value (e.g YYYY-MM-DD or YYYY-MM-DD)*/
  end?: string;
}

export interface Company {
  name: string;
  url: string;
  location: string;
  positions: Position[];
}

export interface Position {
  name: string;
  timeSpan: TimeSpan;
  achievements: Achievement[];
}

export interface Achievement {
  description: string;
  url?: string;
}

export interface Education {
  name: string;
  url?: string;
  location: string;
  degree: string;
  field: string;
  completed: string;
}

export interface Project {
  name: string;
  url: string;
  timeSpan: TimeSpan;
  description: string;
  achievements: Achievement[];
}

export interface Skill {
  name: string;
  url?: string;
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
}
