export const SKILL_GROUP_NAMES = [
  //Software Engineering
  "Code",
  "Front End",
  "Back End",
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
  //Front End
  React: "Front End",
  Angular: "Front End",
  Bootstrap: "Front End",
  Handlebars: "Front End",
  Tailwind: "Front End",
  "UX Design": "Front End",
  "Material Design": "Front End",
  MUI: "Front End",
  RxJS: "Front End",
  NextJS: "Front End",
  NgRx: "Front End",
  WPF: "Front End",
  WinForms: "Front End",

  //Back End
  "Open API": "Back End",
  REST: "Back End",
  NodeJS: "Back End",
  Docker: "Back End",
  "Google Apps Script": "Back End",
  SQS: "Back End",
  AWS: "Back End",
  EC2: "Back End",
  SNS: "Back End",
  PostgreSQL: "Back End",
  Mongo: "Back End",
  Elasticsearch: "Back End",
  "MS SQL": "Back End",
  "MS Access": "Back End",
  RDS: "Back End",
  "CI/CD": "Back End",
  "Unit Testing": "Back End",
  "Github Actions": "Back End",
  Logging: "Back End",
  NuGet: "Back End",
  Vercel: "Back End",

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
  Microcontrollers: "Hobbies",
};
