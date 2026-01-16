import pickemsPreview from "../assets/pickems_preview.png";
import flappyPreview from "../assets/flappy_bird_preview.png";
import sqlPreview from "../assets/sql_preview.png";


export const PROJECTS = [
  {
    title: "Playoff Pick'ems",
    description:
      "A web application for NFL playoff predictions where users compete against friends by picking props and betting outcomes.",
    tech: ["React", "JavaScript", "Flask", "Python", "PostgreSQL"],
    image: pickemsPreview,
    websiteUrl: "https://playoff-pickem-frontend-q31n.onrender.com/a",
    sourceUrl: "https://github.com/Playoff-PickEm-Project",
  },
  {
    title: "Flappy Bird",
    description:
      "A Flappy Bird clone built in pure Java for CMSC132, featuring a real-time game loop, polygon-based collision detection, and dynamic obstacle generation.",
    tech: ["Java"],
    image: flappyPreview,
    sourceUrl: "https://github.com/akhilkarumuri7/project4-flappybird",
    demoUrl: "https://www.youtube.com/watch?v=FixwEll1Nyc&feature=youtu.be",
    writeupUrl: "https://github.com/akhilkarumuri7/project4-flappybird/blob/master/FlappyBird_Project_Report.pdf",
  },
  {
    title: "NFL Stats Database",
    description:
      "Built a relational NFL 2023 database from real player/team datasets to support fantasy football analysis using joins, aggregation, and subqueries.",
    tech: ["SQL", "PostgreSQL"],
    image: sqlPreview,
    sourceUrl: "https://github.com/akhilkarumuri7/nfl-stats-database",
    writeupUrl: "https://github.com/akhilkarumuri7/nfl-stats-database/blob/main/team_02_nfl_report.pdf",
  },
];
