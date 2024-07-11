import { Resume } from "@/interfaces/resume";

export const EA_RESUME: Resume = {
  contactInfo: {
    name: "Eric Anastas",
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
      name: "Skill Group 1",
      skills: [
        { name: "Skill 1", url: "/skill/skill1" },
        { name: "Skill 2", url: "/skill/skill2" },
        { name: "Skill 3", url: "/skill/skill3" },
      ],
    },
    {
      name: "Skill Group 2",
      skills: [
        { name: "Skill 4", url: "/skill/skill4" },
        { name: "Skill 5", url: "/skill/skill5" },
        { name: "Skill 6", url: "/skill/skill6" },
      ],
    },
  ],
  workExperience: [
    {
      name: "Skidmore, Owings & Merrill",
      location: "San Francisco, CA",
      url: "https://www.som.com/",
      positions: [
        {
          name: "Software Engineer",
          timeSpan: {
            start: "2021-05",
            end: "2023-03",
          },
          positionType: "Full-time",
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
      url: "https://www.mortenson.com/",
      positions: [],
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
