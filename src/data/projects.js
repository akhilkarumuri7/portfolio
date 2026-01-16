import pickemsPreview from "../assets/pickems_preview.png";
import flappyPreview from "../assets/flappy_bird_preview.png";
import sqlPreview from "../assets/sql_preview.png";
import regressionPreview from "../assets/qb_pred_prev.png";
import bandwagonPreview from "../assets/bandwagon_preview.png";
import tspPreview from "../assets/nn_cost_vs_n.png";

import { desc, source } from "framer-motion/client";


export const PROJECTS = [
  {
    title: "Playoff Pick'ems",
    description:
      "A web application for NFL playoff predictions where users compete against friends by picking props and betting outcomes.",
    tech: ["React", "JavaScript", "Flask", "Python", "PostgreSQL"],
    image: pickemsPreview,
    websiteUrl: "https://playoff-pickem-frontend-q31n.onrender.com/",
    sourceUrl: "https://github.com/Playoff-PickEm-Project",
  },
 {
    title: "TSP Optimization Suite",
    description:
        "Implemented and compared multiple Traveling Salesman Problem solvers (greedy, local search, evolutionary, and A* w/ MST heuristic), analyzing runtime vs solution quality across different graph sizes and hyperparameters.",
    tech: ["Python", "NumPy", "SciPy", "Matplotlib", "A* Search"],
    image: tspPreview,
    sourceUrl: "https://github.com/akhilkarumuri7/tsp-optimization",
    writeupUrl: "https://github.com/akhilkarumuri7/tsp-optimization/blob/main/report/REPORT.pdf",
  },
 {
    title: "Bandwagon Application",
    description:
        "Built a Node.js + Express web app where users submit a team-switch request via a dynamic form, store submissions in MongoDB, and display live NFL team data fetched from TheSportsDB API.",
    tech: ["Node.js", "Express", "MongoDB", "JavaScript", "HTML", "CSS"],
    image: bandwagonPreview,
    websiteUrl: "https://bandwagon-application.onrender.com/Application.html",
    sourceUrl: "https://github.com/akhilkarumuri7/bandwagon-application",
    demoUrl: "https://www.youtube.com/watch?v=iUfCo3GN5GQ",
  },
 {
    title: "Predicting NFL QB Fantasy Performance",
    description: 
        "Built a regression pipeline to predict QB fantasy points per game (2012-2024) using volume/efficiency/experience features; compared Linear vs Lasso for interpretability and feature selection.",
    tech: ["Python", "scikit-learn", "pandas", "NumPy", "Matplotlib", "SciPy", "statsmodels", "Jupyter"],
    image: regressionPreview,
    writeupUrl: "https://devp2303.github.io/"
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
];
