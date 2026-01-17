import hiiLogo from "../assets/hii.jpg"
import softramsLogo from "../assets/softrams.png"
import aplLogo from "../assets/apl.jpeg"

export const EXPERIENCE = [
  {
    role: "Software Engineering Intern",
    company: "Mission Technologies (HII)",
    location: "Hanover, MD • On-site",
    start: "Jun 2025",
    end: "Aug 2025",
    logoSrc: hiiLogo,
    bullets: [
      "Developed a C++ scripting tool to automate playback workflows across a geospatial visualization platform.",
      "Implemented 10 core commands (view re-centering, object selection, zooming, playback control, etc.), with extensibility for future functionality.",
      "Leveraged the platform's messaging architecture to reduce manual operator steps and improve usability.",
      "Gained Agile experience by participating in Scrum ceremonies and managing tasks through JIRA, learning the full software development lifecycle.",
    ],
    tech: ["C++", "React", "TypeScript"],
  },
  {
    role: "Software Developer Intern",
    company: "Softrams",
    location: "Remote",
    start: "Jun 2023",
    end: "Aug 2023",
    logoSrc: softramsLogo,
    bullets: [
      "Contributed to the development of a job referral website as part of the JobRing team using Angular and Storybook.",
      "Designed and implemented a secure login page with Angular and AWS, improving authentication reliability and laying the foundation for user account management.",
      "Built modular UI components that streamlined development and ensured platform-wide consistency.",
      "Collaborated in an Agile environment with senior developers, gaining hands-on experience in sprint cycles and delivering production-ready features.",
    ],
    tech: ["Angular", "JavaScript"],
  },
  {
    role: "ASPIRE Computer Science Intern",
    company: "Johns Hopkins Applied Physics Laboratory",
    location: "Laurel, MD • Hybrid",
    start: "Jul 2022",
    end: "Aug 2022",
    logoSrc: aplLogo,
    bullets: [
      "Created a Python + OCR program to digitize 2,500+ handwritten REDD part entries, reducing search time from hours to seconds and providing a reliable backup of critical records.",
      "Improved recognition accuracy and formatting by transitioning from regex-only parsing to Google Cloud Vision and Butler API.",
      "Integrated RegEx and textdistance modules to minimize human error and ensure reliable Excel conversion.",
      "Preserved institutional knowledge by making part numbers easily searchable and accessible to researchers.",
    ],
    tech: ["Python", "Google Cloud Vision"],
  },
]
