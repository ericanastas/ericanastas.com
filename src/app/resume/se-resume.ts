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
          url: "/projects?skill=typescript",
        },
        {
          name: "JavaScript",
          url: "/projects?skill=javascript",
        },
        {
          name: "HTML & CSS",
          url: "/projects?skill=html-and-css",
        },
        { name: "C#", url: "/projects?skill=csharp" },
        { name: "SQL", url: "/projects?skill=sql" },
      ],
    },
    {
      name: "Frontend",
      skills: [
        { name: "React", url: "/projects?skill=react" },
        {
          name: "NextJS",
          url: "/projects?skill=nextjs",
        },
        {
          name: "Angular",
          url: "/projects?skill=angular",
        },
        { name: "NgRx", url: "/projects?skill=ngrx" },
        {
          name: "Bootstrap",
          url: "/projects?skill=bootstrap",
        },
        {
          name: "Material Design",
          url: "/projects?skill=material-design",
        },
        { name: "MUI", url: "/projects?skill=mui" },
        {
          name: "Tailwind",
          url: "/projects?skill=tailwind",
        },
        { name: "WPF", url: "/projects?skill=wpf" },
      ],
    },
    {
      name: "Backend",
      skills: [
        {
          name: "NodeJS",
          url: "/projects?skill=nodejs",
        },
        { name: "REST", url: "/projects?skill=rest" },
        {
          name: "Open API",
          url: "/projects?skill=open-api",
        },
        {
          name: "PostgreSQL",
          url: "/projects?skill=postgresql",
        },
        {
          name: "Elasticsearch",
          url: "/projects?skill=elasticsearch",
        },
        {
          name: "MS SQL",
          url: "/projects?skill=ms-sql",
        },
        { name: "AWS", url: "/projects?skill=aws" },
        {
          name: "Docker",
          url: "/projects?skill=docker",
        },
        {
          name: "Unit Testing",
          url: "/projects?skill=unit-testing",
        },
        { name: "CI/CD", url: "/projects?skill=cicd" },
      ],
    },
  ],
  workExperience: [
    {
      name: "Skidmore, Owings & Merrill",
      location: "San Francisco, CA",
      url: "/projects?group=som",
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
                "Developed full stack applications using Angular and React and NodeJs, Express and PostgreSQL..... ",
            },
            {
              description:
                "Designed and implemented Rest API with Open API, Express, Jest unit tests",
            },
            {
              description:
                "deployed applications to AWS using Docker containers on EC2",
            },
            {
              description: "<placeholder???>",
            },
            {
              description: "<placeholder???>",
            },
            {
              description:
                "Developed a suite of tools to assist in the firms' adoption of Google using Typescript on Google Apps Script",
              url: "/projects?skill=google-apps-script&skill=google-api",
            },
            {
              description:
                "Developed a CI/CD workflow for deploying Google Apps Script projects automatically using Github Actions.",
              url: "/projects/som/deploy-google-app-script-action",
            },
            // {
            //   description:
            //     "Assisted new senior engineers developing the firm-wide data warehouse API understand the business requirements, appropriate API structure, and database schemas",
            //   url: "/projects/som/som-data-warehouse",
            // },

            {
              description: "<one line about datawarehouse",
            },

            {
              description:
                "<one line about technologiy iniative, focus on tools",
            },

            // {
            //   description:
            //     "Served as a key member of the team upgrading the firm to modern collaboration tools such as knowledge management platforms, project management tools, and transitioning to Google Workplace. Worked with stakeholders to understand their needs, provided training, and developed migration utilities using third-party APIs",
            //   url: "/projects?skill=jive&skill=lumapps&skill=google-api",
            // },
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
                "Developed over 50 custom tools using C# on the .NET APIs of Revit, Rhino, and other AEC software",
              url: "/projects?skill=navisworks-api&skill=revit-api&skill=rhino-api&skill=grasshopper-api",
            },
            {
              description:
                "Mentored colleagues without prior coding experience to develop tools with both visual programming and add-in APIs",
            },
            {
              description:
                "Implemented a system to package, version, catalog, and distribute Revit add-ins using C#.NET and WPF",
              url: "/projects/som/revit-add-in-library",
            },
            {
              description:
                "Developed a system for tracking a visualizing Revit usage across the firm using C#, Elasticsearch, and Kibana ",
              url: "/projects/som/activity-log-elk",
            },

            {
              description:
                "Supported a new R&D subsidiary systematize their proposal review process into an automated forms based workflow",
              url: "/projects/som/som-ri",
            },
          ],
        },
      ],
    },
    {
      name: "M. A. Mortenson Company",
      location: "Seattle, WA",
      url: "/projects?group=mortenson",
      positions: [
        {
          name: "Design Coordinator",
          timeSpan: {
            start: "2005-07",
            end: "2008-02",
          },
          achievements: [
            // {
            //   description:
            //     "Served as a primary technical expert in a company wide group championing the use of technology and 3D modeling",
            // },
            {
              description:
                "Produced and maintained 3D BIM models from 2D documentation, ensuring alignment with the latest design iterations",
              url: "/projects?group=mortenson&skill=3d-modeling",
            },

            // {
            //   description:
            //     "Collaborated with architects to resolve design issues found during 3D modeling prior to causing problems in the field",
            // },

            {
              description:
                "Assisted project teams leverage models on-site for MEP coordination, site logistics, layout, and proactive problem-solving",
              url: "/projects?group=mortenson&skill=3d-coordination&skill=4d-simulation&skill=bim-in-field&skill=integrated-work-plans&skill=site-logistics",
            },
          ],
        },
      ],
    },
  ],
  projects: [
    {
      name: "Sustainability Data Hub",
      url: "/projects/som/sustainability-data-hub",
      timeSpan: {
        start: "2023-08",
        end: "2024-02",
      },
      achievements: [
        { description: "achievement 1" },
        { description: "achievement 2" },
        { description: "achievement 3" },
      ],
      description:
        "Application used to track goals and metrics related to the energy use and carbon footprint of SOM projects. Provides a platform for teams to enter data about their project and produces aggregate views of this information for management. Developed the front end using Angular, NgRx, and Material Design, working closely with other engineers on the design of the backend REST API.",
    },
    {
      name: "Material Data Hub",
      url: "/projects/som/material-data-hub",
      timeSpan: {
        start: "2022-07",
        end: "2023-12",
      },
      achievements: [
        { description: "achievement 1" },
        { description: "achievement 2" },
        { description: "achievement 3" },
      ],
      description:
        "An in-house catalog of architectural materials that serves as a central hub for SOM designers researching products. Developed the frontend interface using React and Material Design (Mui).",
    },
    {
      name: "Collaboration Resource Manager",
      url: "/projects/som/collaboration-resource-manager",
      timeSpan: {
        start: "2020-01",
        end: "2023-09",
      },
      achievements: [
        { description: "achievement 1" },
        { description: "achievement 2" },
        { description: "achievement 3" },
      ],
      description:
        "A general-purpose system that automates the setup and maintenance of resources on external SaaS platforms. Implemented as a REST API built on Node.js, Express, and PostgreSQL. Applied layers of abstraction and extensibility to ensure the tool's versatility across various business contexts and resource types.",
    },
  ],
  education: [
    {
      name: "University of Washington",
      url: "https://www.washington.edu",
      degree: "BS",
      field: "Civil Engineering",
      location: "Seattle, WA",
      completed: "2005-06",
    },
  ],
};
