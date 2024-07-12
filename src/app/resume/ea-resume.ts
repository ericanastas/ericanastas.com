import { Resume } from "@/interfaces/resume";

export const EA_RESUME: Resume = {
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
        { name: "TypeScript", url: "/projects?skill=typescript" },
        { name: "JavaScript", url: "/projects?skill=javascript" },
        { name: "HTML & CSS", url: "/projects?skill=html-and-css" },
        { name: "C#", url: "/projects?skill=csharp" },
        { name: "SQL", url: "/projects?skill=sql" },
      ],
    },
    {
      name: "Frontend",
      skills: [
        { name: "React", url: "/projects?skill=react" },
        { name: "NextJS", url: "/projects?skill=nextjs" },
        { name: "Angular", url: "/projects?skill=angular" },
        { name: "NgRx", url: "/projects?skill=ngrx" },
        { name: "RxJS", url: "/projects?skill=rxjs" },
        { name: "Bootstrap", url: "/projects?skill=bootstrap" },
        { name: "Material Design", url: "/projects?skill=material-design" },
        { name: "MUI", url: "/projects?skill=mui" },
        { name: "Tailwind", url: "/projects?skill=tailwind" },
        { name: "WPF", url: "/projects?skill=wpf" },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "NodeJS", url: "/projects?skill=nodejs" },
        { name: "REST", url: "/projects?skill=rest" },
        { name: "Open API", url: "/projects?skill=open-api" },
        { name: "PostgreSQL", url: "/projects?skill=postgresql" },
        { name: "Elasticsearch", url: "/projects?skill=elasticsearch" },
        { name: "MS SQL", url: "/projects?skill=ms-sql" },
        { name: "AWS", url: "/projects?skill=aws" },
        { name: "Unit Testing", url: "/projects?skill=unit-testing" },
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
              description: "Achievement 1 Description",
              url: "https://www.google.com",
            },
            {
              description: "Achievement 2 Description",
              url: "https://www.google.com",
            },
            {
              description: "Achievement 2 Description",
              url: "https://www.google.com",
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
              description: "Achievement 1 Description",
              url: "https://www.google.com",
            },
            {
              description: "Achievement 2 Description",
              url: "https://www.google.com",
            },
            {
              description: "Achievement 2 Description",
              url: "https://www.google.com",
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
            {
              description: "Achievement 1 Description",
              url: "https://www.google.com",
            },
            {
              description: "Achievement 2 Description",
              url: "https://www.google.com",
            },
            {
              description: "Achievement 2 Description",
              url: "https://www.google.com",
            },
          ],
        },
      ],
    },
  ],
  projects: [
    {
      name: "Project Name",
      url: "/projects",
      timeSpan: {
        start: "1999-01",
        end: "1999-04",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla sed leo quis ultricies. Donec laoreet sed est id sagittis. Sed sed commodo sapien, auctor consectetur nisi. Praesent viverra massa ex. In lorem quam, vulputate quis sollicitudin sed, venenatis vel orci. Suspendisse diam ipsum, pharetra in volutpat quis, ornare vitae lectus. Etiam leo felis, dignissim non imperdiet vel, vehicula non nunc. Nulla bibendum blandit vehicula. Mauris vitae dui cursus, luctus lorem non, imperdiet odio. ",
    },
    {
      name: "Project Name",
      url: "/projects",
      timeSpan: {
        start: "1999-01",
        end: "1999-04",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla sed leo quis ultricies. Donec laoreet sed est id sagittis. Sed sed commodo sapien, auctor consectetur nisi. Praesent viverra massa ex. In lorem quam, vulputate quis sollicitudin sed, venenatis vel orci. Suspendisse diam ipsum, pharetra in volutpat quis, ornare vitae lectus. Etiam leo felis, dignissim non imperdiet vel, vehicula non nunc. Nulla bibendum blandit vehicula. Mauris vitae dui cursus, luctus lorem non, imperdiet odio. ",
    },
    {
      name: "Project Name",
      url: "/projects",
      timeSpan: {
        start: "1999-01",
        end: "1999-04",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla sed leo quis ultricies. Donec laoreet sed est id sagittis. Sed sed commodo sapien, auctor consectetur nisi. Praesent viverra massa ex. In lorem quam, vulputate quis sollicitudin sed, venenatis vel orci. Suspendisse diam ipsum, pharetra in volutpat quis, ornare vitae lectus. Etiam leo felis, dignissim non imperdiet vel, vehicula non nunc. Nulla bibendum blandit vehicula. Mauris vitae dui cursus, luctus lorem non, imperdiet odio. ",
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
