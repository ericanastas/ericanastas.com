import { Resume } from "@/interfaces/resume";

export const SE_RESUME: Resume = {
  contactInfo: {
    name: "Eric Anastas",
    title: "Software Engineer",
    email: "aireq303@gmail.com",
    location: "San Francisco, CA",
    phoneNumber: "657-464-3742",
    urls: {
      website: "https://ericanastas.com",
      linkedin: "https://www.linkedin.com/in/ericanastas",
      github: "https://github.com/ericanastas",
    },
  },
  skills: [
    {
      name: "Code",
      skills: [
        {
          name: "TypeScript",
          url: "https://ericanastas.com/projects?skill=typescript",
        },
        {
          name: "JavaScript",
          url: "https://ericanastas.com/projects?skill=javascript",
        },
        {
          name: "HTML & CSS",
          url: "https://ericanastas.com/projects?skill=html-and-css",
        },
        { name: "C#", url: "https://ericanastas.com/projects?skill=csharp" },
        { name: "SQL", url: "https://ericanastas.com/projects?skill=sql" },
      ],
    },
    {
      name: "Frontend",
      skills: [
        { name: "React", url: "https://ericanastas.com/projects?skill=react" },
        {
          name: "NextJS",
          url: "https://ericanastas.com/projects?skill=nextjs",
        },
        {
          name: "Angular",
          url: "https://ericanastas.com/projects?skill=angular",
        },
        { name: "NgRx", url: "https://ericanastas.com/projects?skill=ngrx" },
        { name: "RxJS", url: "https://ericanastas.com/projects?skill=rxjs" },
        {
          name: "Bootstrap",
          url: "https://ericanastas.com/projects?skill=bootstrap",
        },
        {
          name: "Material Design",
          url: "https://ericanastas.com/projects?skill=material-design",
        },
        { name: "MUI", url: "https://ericanastas.com/projects?skill=mui" },
        {
          name: "Tailwind",
          url: "https://ericanastas.com/projects?skill=tailwind",
        },
        { name: "WPF", url: "https://ericanastas.com/projects?skill=wpf" },
      ],
    },
    {
      name: "Backend",
      skills: [
        {
          name: "NodeJS",
          url: "https://ericanastas.com/projects?skill=nodejs",
        },
        { name: "REST", url: "https://ericanastas.com/projects?skill=rest" },
        {
          name: "Open API",
          url: "https://ericanastas.com/projects?skill=open-api",
        },
        {
          name: "PostgreSQL",
          url: "https://ericanastas.com/projects?skill=postgresql",
        },
        {
          name: "Elasticsearch",
          url: "https://ericanastas.com/projects?skill=elasticsearch",
        },
        {
          name: "MS SQL",
          url: "https://ericanastas.com/projects?skill=ms-sql",
        },
        { name: "AWS", url: "https://ericanastas.com/projects?skill=aws" },
        {
          name: "Google Apps Script",
          url: "https://ericanastas.com/projects?skill=google-apps-script",
        },
        {
          name: "Unit Testing",
          url: "https://ericanastas.com/projects?skill=unit-testing",
        },
        { name: "CI/CD", url: "https://ericanastas.com/projects?skill=cicd" },
      ],
    },
    {
      name: "APIs",
      skills: [
        {
          name: "Revit API",
          url: "https://ericanastas.com/projects?skill=revit-api",
        },
        {
          name: "Rhino API",
          url: "https://ericanastas.com/projects?skill=rhino-api",
        },
        {
          name: "Grasshopper API",
          url: "https://ericanastas.com/projects?skill=grasshopper-api",
        },
        {
          name: "NavisWorks API",
          url: "https://ericanastas.com/projects?skill=navisworks-api",
        },
        {
          name: "Google API",
          url: "https://ericanastas.com/projects?skill=google-api",
        },
      ],
    },
  ],
  workExperience: [
    {
      name: "Skidmore, Owings & Merrill",
      location: "San Francisco, CA",
      url: "https://ericanastas.com/projects?group=som",
      positions: [
        {
          name: "Software Engineer",
          timeSpan: {
            start: "2021-05",
            end: "2024-03",
          },
          achievements: [
            {
              description:
                "Designed and developed frontend and full-stack applications on top of a firm-wide data warehouse API using React, Angular, and Material Design.",
            },
            {
              description:
                "Built a general-purpose application to set up and audit resources on external SaaS collaboration platforms using Typescript, Node.js, and Express.",
            },
            {
              description:
                "Developed a suite of utilities used to assist in the firms' adoption of Google Workplace using Typescript and Bootstrap on Google Apps Script.",
            },
            {
              description:
                "Assisted new senior engineers developing the firm-wide data warehouse API understand the business requirements, appropriate API structure, and data schemas.",
            },
            {
              description:
                "Mentored colleagues, with no prior programming experience, develop tools with both visual programming and add-in APIs following established software engineering principles and patterns.",
            },
          ],
        },
        {
          name: "Digital Design Specialist",
          timeSpan: {
            start: "2008-02",
            end: "2021-05",
          },
          achievements: [
            {
              description:
                "Designed and developed over 40 custom tools using the .NET APIs of Revit, Rhino, Grasshopper, and Navisworks. This includes tools for generating 3D geometry, automating repetitive tasks, validating models, and design analysis.",
            },
            {
              description:
                "Designed and implemented a Revit Add-In Library system with C#.NET to package, version, catalog, distribute, and update Revit add-ins across the firm.",
            },
            {
              description:
                "Designed and implemented a system for tracking Revit usage across the firm built with C#.Net, Elasticsearch, and Kibana. These dashboards are used to identify and diagnose problems, and visualize usage metrics.",
            },
            {
              description:
                "Assisted architects in early concept design by creating Rhino Grasshopper definitions to solve complex 3D geometry problems and perform analysis of designs.",
            },
            {
              description:
                "Served as a key member of the team upgrading the firm to modern collaboration tools such as knowledge management platforms, and transitioning from local network drives to Google Drives. Worked with stakeholders to understand their needs, provided training, and developed utilities using third-party APIs.",
            },
            {
              description:
                "Supported a Research & Innovation subsidiary of the firm to systematize their research proposal review workflow by integrating it into a system of automated forms.",
            },
            {
              description:
                "Oversaw the adoption of BIM in the firm since 2008. Provided direct project support, training, and played a key role in the firm-wide groups responsible for developing and documenting the firm's standards and best practices.",
            },
          ],
        },
      ],
    },
    {
      name: "M. A. Mortenson Company",
      location: "Seattle, WA",
      url: "https://ericanastas.com/projects?group=mortenson",
      positions: [
        {
          name: "Design Coordinator",
          timeSpan: {
            start: "2005-07",
            end: "2008-02",
          },
          achievements: [
            {
              description:
                "Served as a primary technical expert on the Integrated Delivery Advancement Team (IDAT), playing a vital part in six out of nine R&D committees, including chairing the standards committee.",
            },
            {
              description:
                "Produced and maintained up-to-date 3D structural and architectural Revit models from 2D design documents, ensuring alignment with the latest design iterations and RFIs. ",
            },

            {
              description:
                "Collaborated with architecture teams to address design issues found during the model creation process before causing problems in the field.",
            },

            {
              description:
                "Led regular 3D building system coordination meetings with subcontractors using Navisworks.",
            },
            {
              description:
                "Assisted project teams leverage 3D models on-site for planning, site logistics, and proactive problem-solving.",
            },
            {
              description:
                "Produced 2D integrated work plans directly from the coordinated 3D models for use by staff in the field during construction.",
            },
          ],
        },
      ],
    },
  ],
  projects: [
    {
      name: "Sustainability Data Hub",
      url: "https://ericanastas.com/projects/som/sustainability-data-hub",
      timeSpan: {
        start: "2023-08",
        end: "2024-02",
      },
      description:
        "The Sustainability Data Hub is used to track goals and metrics related to the energy use and carbon footprint of projects across SOM. It provides a platform for teams to enter data about their project and produces aggregate views of this information for management. I developed the front end using Angular, NgRx, and Material Design, working closely with other engineers on the design of the backend REST API.",
    },
    {
      name: "Material Data Hub",
      url: "https://ericanastas.com/projects/som/material-data-hub",
      timeSpan: {
        start: "2022-07",
        end: "2023-12",
      },
      description:
        "Material Data Hub is an in-house catalog of architectural materials that serves as a central hub for SOM designers researching potential products. I developed the frontend interface using React and Material Design (Mui).",
    },
    {
      name: "Collaboration Resource Manager",
      url: "https://ericanastas.com/projects/som/collaboration-resource-manager",
      timeSpan: {
        start: "2020-01",
        end: "2023-09",
      },
      description:
        "This application is a general-purpose system to automate the setup and maintenance of SaaS collaboration resources, such as Google Drives and Groups. Initially built using TypeScript on Google Apps Script, I later ported this to a REST API built on Node.js, Express, and PostgreSQL. I implemented layers of abstraction to ensure the tool's versatility across various business contexts and resource types.",
    },
  ],
  education: [
    {
      name: "University of Washington",
      degree: "BS",
      field: "Civil Engineering",
      location: "Seattle, WA",
      completed: "2005-06",
    },
  ],
};
