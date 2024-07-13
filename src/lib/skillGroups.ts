export const SKILL_GROUP_NAMES = [
  //Software Engineering
  "Code",
  "Frontend",
  "Backend",
  "APIs",

  "3D Modeling",
  "Data Visualization",
  "Software",
  "IT",

  "AEC",
  "Hobbies",
] as const;

export type SkillGroupName = (typeof SKILL_GROUP_NAMES)[number];

export const SKILL_GROUPS: { [key: string]: SkillGroupName } = {
  //Frontend
  React: "Frontend",
  Angular: "Frontend",
  Bootstrap: "Frontend",
  Handlebars: "Frontend",
  Tailwind: "Frontend",
  "UX Design": "Frontend",
  "Material Design": "Frontend",
  MUI: "Frontend",
  RxJS: "Frontend",
  NextJS: "Frontend",
  NgRx: "Frontend",
  WPF: "Frontend",
  WinForms: "Frontend",

  //Backend
  "Open API": "Backend",
  REST: "Backend",
  NodeJS: "Backend",
  Docker: "Backend",
  "Google Apps Script": "Backend",
  SQS: "Backend",
  AWS: "Backend",
  EC2: "Backend",
  SNS: "Backend",
  PostgreSQL: "Backend",
  Mongo: "Backend",
  Elasticsearch: "Backend",
  "MS SQL": "Backend",
  "MS Access": "Backend",
  RDS: "Backend",
  "CI/CD": "Backend",
  "Unit Testing": "Backend",
  "Github Actions": "Backend",
  Logging: "Backend",
  NuGet: "Backend",
  Vercel: "Backend",

  //AEC
  "3D Coordination": "AEC",
  Navisworks: "AEC",
  "BIM in Field": "AEC",
  Revit: "AEC",
  Clarity: "AEC",
  "4D Simulation": "AEC",
  "Design Analysis": "AEC",
  "Revit Server": "AEC",
  "Revit Support": "AEC",
  Revizto: "AEC",
  "Site Logistics": "AEC",
  SAP: "AEC",
  "Master Planning": "AEC",
  Prefabrication: "AEC",
  "CSI SAFE": "AEC",
  "Integrated Work Plans": "AEC",
  Ecotect: "AEC",
  AutoCad: "AEC",
  "Business Development": "AEC",

  //APIs
  "NavisWorks API": "APIs",
  "Revit API": "APIs",
  "Grasshopper API": "APIs",
  "Rhino API": "APIs",
  "Google API": "APIs",
  "Photoshop Scripting": "APIs",
  Puppeteer: "APIs",
  jQuery: "APIs",
  VSIX: "APIs",

  //3D Modeling
  Grasshopper: "3D Modeling",
  Rhino: "3D Modeling",
  "3D Modeling": "3D Modeling",
  RhinoScript: "3D Modeling",
  Sketchup: "3D Modeling",
  "Fusion 360": "3D Modeling",
  Galapagos: "3D Modeling",
  "3D Visualization": "3D Modeling",
  "Augmented Reality": "3D Modeling",
  Kangaroo: "3D Modeling",
  "Unity 3D": "3D Modeling",

  //Data Visualization
  Graphviz: "Data Visualization",
  Tableau: "Data Visualization",
  Kibana: "Data Visualization",
  Visualization: "Data Visualization",

  //Software
  Excel: "Software",
  Jive: "Software",
  "GW Apps": "Software",
  LumApps: "Software",
  "Google Earth": "Software",
  FTP: "Software",
  "Visual Studio": "Software",

  //IT
  Intranets: "IT",
  SCCM: "IT",
  Training: "IT",

  //Programming Languages
  "C#": "Code",
  SQL: "Code",
  TypeScript: "Code",
  JavaScript: "Code",
  PowerShell: "Code",
  "HTML & CSS": "Code",
  XLST: "Code",
  XML: "Code",
  SCSS: "Code",
  Python: "Code",

  //Hobbies
  "Burning Man": "Hobbies",
  "3D Printing": "Hobbies",
  DJing: "Hobbies",
  LEDs: "Hobbies",
  Arduino: "Hobbies",
  Electronics: "Hobbies",
};
