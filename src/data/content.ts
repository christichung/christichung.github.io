// All site content lives here. Edit this file to update the portfolio.
// Files referenced with a leading "/" are served from the `public/` folder.

// Google Analytics 4 Measurement ID (looks like "G-XXXXXXXXXX").
// Leave empty to turn analytics off.
export const googleAnalyticsId = "G-QD7T6GZX3B";

export const profile = {
  name: "Christina Chung",
  title: "Software Engineer & Artist",
  location: "Toronto, ON",
  email: "cachungchristina@gmail.com",
  resume: "/docs/Christina_Chung_Resume.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/chrchung/",
    github: "https://github.com/christichung",
    scholar: "https://scholar.google.ca/citations?user=ZtiBJRkAAAAJ&hl=en",
    youtube: "https://www.youtube.com/playlist?list=PLMpPTPIRpkQLuqKPpuqeRCOTbOkPoe0Tu",
  },
  about: [
    "Hi! I'm a software engineer based in Toronto with four years of experience at companies like Square, Kepler Communications, and TouchBistro.",
    "I graduated from the University of Toronto with a degree in Computer Science. After several years in the industry, I took some time to pursue my interest in visual arts through full-time study at Humber Polytechnic.",
    "I'm now looking to return to software engineering, bringing both my technical experience and creative perspective to my work.",
  ],
};

export const education = [
  {
    school: "Humber Polytechnic",
    degree: "Visual and Digital Arts · 95% average",
    period: "2024 – 2026",
  },
  {
    school: "University of Toronto (St. George)",
    degree: "Honours Bachelor of Science, Specialist in Computer Science · 4.0/4.0 cGPA",
    period: "2013 – 2020",
  },
];

export const skills: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Python", "TypeScript", "JavaScript", "C", "HTML/CSS", "PHP"] },
  { label: "Frameworks", items: ["React", "Node.js", "Express.js", "Vue.js", "Laravel", "jQuery"] },
  {
    label: "Systems & data",
    items: ["Docker", "Kubernetes", "Ansible", "PostgreSQL", "MongoDB", "Knex.js", "Git"],
  },
  { label: "Testing", items: ["Cypress", "Jest", "pytest", "unittest"] },
];

export interface Job {
  company: string;
  role: string;
  location: string;
  period: string;
  points: string[];
}

export const experience: Job[] = [
  {
    company: "Square",
    role: "Software Engineer (E-Commerce)",
    location: "Toronto, ON",
    period: "Apr 2023 – Aug 2024",
    points: [
      "Led implementation of a tax compliance feature supporting new Japanese invoicing regulations, addressing a critical churn risk affecting 85% of Japanese online sellers.",
      "Developed REST API endpoints integrating Square's order management platform with Weebly's legacy transactional email system, supporting cancellation and refund notifications.",
      "Contributed to engineering design documents and REST API specifications for the email migration, including endpoint naming, request payload design, and integration with existing email workflows.",
    ],
  },
  {
    company: "Kepler Communications",
    role: "Software Developer",
    location: "Toronto, ON",
    period: "Jan 2021 – Apr 2023",
    points: [
      "Reduced processing time by 97% by building Python automation services for satellite–ground station communications.",
      "Automated testing and deployment of worker processes using Docker, Kubernetes, and Ansible.",
      "Mentored a junior software developer and introduced a buddy system to support onboarding of new engineers.",
      "Co-chaired the Women's ERG.",
    ],
  },
  {
    company: "TouchBistro",
    role: "Junior Full Stack Developer",
    location: "Toronto, ON",
    period: "May 2020 – Jan 2021",
    points: [
      "Built a reusable JWT-based authorization library in TypeScript, Node.js, and Express.js, adopted as a core component across TouchBistro APIs.",
    ],
  },
  {
    company: "University of Toronto — Dynamic Graphics Project Lab",
    role: "Human-Computer Interaction Researcher",
    location: "Toronto, ON",
    period: "Jan 2017 – Apr 2020",
    points: [
      "Contributed to two peer-reviewed publications at leading venues through research in virtual reality and user experience.",
    ],
  },
  {
    company: "University of Toronto",
    role: "Help Centre Director & Teaching Assistant",
    location: "Toronto, ON",
    period: "Sep 2014 – Apr 2020",
    points: [
      "Coordinated computer science help-centre teaching assistants; led tutorials, supported students, and graded coursework.",
    ],
  },
];

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  summary: string;
  url?: string;
  pdf?: string;
}

// Peer-reviewed papers, from Google Scholar / Semantic Scholar.
export const publications: Publication[] = [
  {
    title: "Concurrent Think-Aloud Verbalizations and Usability Problems",
    authors: "Mingming Fan, Jing-Lan Lin, Christina Chung, Khai N. Truong",
    venue: "ACM Transactions on Computer-Human Interaction (TOCHI)",
    year: "2019",
    summary:
      "How the content of think-aloud verbalizations relates to the usability problems users run into, to help practitioners find problems more efficiently.",
    url: "https://doi.org/10.1145/3325281",
  },
  {
    title: "Thor's Hammer: An Ungrounded Force Feedback Device Utilizing Propeller-Induced Propulsive Force",
    authors: "Seongkook Heo, Christina Chung, Geehyuk Lee, Daniel Wigdor",
    venue: "ACM CHI Conference on Human Factors in Computing Systems (CHI '18)",
    year: "2018",
    summary:
      "A handheld device that uses propellers to produce strong force feedback in mid-air, without being anchored to the ground.",
    url: "https://doi.org/10.1145/3173574.3174099",
  },
  {
    title: "The Impact of Visual Load on Performance in a Human-computation Game",
    authors: "Christina Chung, Amit Kadan, Yueti Yang, Asako Matsuoka, Julia Rubin, Marsha Chechik",
    venue: "International Conference on the Foundations of Digital Games (FDG '17)",
    year: "2017",
    summary:
      "Comparing game layouts that show players different amounts of visual information — more information helped, challenging common assumptions about cognitive load.",
    url: "https://doi.org/10.1145/3102071.3106358",
    pdf: "/docs/a51-chung.pdf",
  },
  {
    title: "Serious Games for NP-hard Problems: Challenges and Insights",
    authors: "Christina Chung, Asako Matsuoka, Yueti Yang, Julia Rubin, Marsha Chechik",
    venue: "Workshop on Games and Software Engineering (GAS@ICSE '16)",
    year: "2016",
    summary:
      "Designing a game with a purpose to solve the NP-hard n-way merging problem: challenges, solutions, and preliminary results.",
    url: "https://doi.org/10.1145/2896958.2896963",
    pdf: "/docs/matchmakers.pdf",
  },
];

export interface Award {
  title: string;
  year: string;
  url?: string;
  // Not shown on the site; kept here for reference.
  amount?: string;
}

export const awards: Award[] = [
  {
    title: "Top 10 prospect graduating from a Canadian computer science or engineering university — The Logic",
    year: "2019",
    url: "https://thelogic.co/intelligence/top-prospects-leading-innovators-from-the-class-of-2019/",
  },
  { title: "University of Toronto Gordon Cressy Leadership Award", year: "2019" },
  { title: "Daniel Berlin Scholarship in Computer Science, University of Toronto", year: "2018", amount: "$1,700 CAD" },
  { title: "Tom Hull Scholarship in Computer Science, University of Toronto", year: "2018", amount: "$1,100 CAD" },
  { title: "Solar Panel Experiential Fund, University of Toronto", year: "2018", amount: "$300 CAD" },
  { title: "NSERC Undergraduate Research Award", year: "2015, 2017", amount: "$6,000 CAD × 2" },
  { title: "Ken Sevcik Bursary in Computer Science, University of Toronto", year: "2017", amount: "$656 CAD" },
  { title: "Student Scholarship, Foundations of Digital Games Conference", year: "2017", amount: "$350 USD" },
  { title: "Betty Jean Boultbee Bursary, University of Toronto", year: "2017", amount: "$4,600 CAD" },
  { title: "CRA-E Outstanding Undergraduate Researcher Honorable Mention", year: "2016" },
  { title: "University of Toronto Scholar", year: "2016", amount: "$1,000 CAD" },
  { title: "ACM SIGSOFT Travel Award", year: "2016", amount: "$1,000 USD" },
  { title: "Trinity College Meeting Travel Award, University of Toronto", year: "2016", amount: "$300 CAD" },
  { title: "Provost's Travel Award, University of Toronto", year: "2016", amount: "$300 CAD" },
  { title: "Mossie Waddington Kirkwood Scholarship, University of Toronto", year: "2016", amount: "$1,000 CAD" },
  { title: "Trenwith Computer Science Award, University of Toronto", year: "2015", amount: "$1,080 CAD" },
  { title: "David Squires Scholarship", year: "2015", amount: "$750 CAD" },
  { title: "Sodexo Award, University of Toronto", year: "2015", amount: "$500 CAD" },
  { title: "Chancellor's Scholarship, University of Toronto", year: "2014", amount: "$500 CAD" },
  { title: "Outstanding Achievement in CSC148, University of Toronto", year: "2014" },
  { title: "President's Entrance Scholarship, University of Toronto", year: "2013", amount: "$2,000 CAD" },
];

export interface ServiceRole {
  role: string;
  org: string;
  period: string;
}

export const service: ServiceRole[] = [
  { role: "Founder & President", org: "Humber Visual and Digital Arts Club", period: "2025 – 2026" },
  { role: "Founder & President", org: "TURCS (Toronto Undergraduate Research in Computer Science)", period: "Apr 2017 – May 2019" },
  { role: "Co-President", org: "Women in Computer Science, University of Toronto", period: "Apr 2017 – May 2019" },
  { role: "External Reviewer", org: "FSE (Foundations of Software Engineering)", period: "2017" },
  { role: "External Reviewer", org: "CHI (Conference on Human Factors in Computing Systems)", period: "2017" },
  { role: "Admissions Profile Evaluator", org: "Trinity College, University of Toronto", period: "2017" },
  { role: "Program Committee", org: "Canadian Undergraduate Computer Science Conference", period: "Nov 2016 – Jul 2017" },
  { role: "Vice-President", org: "University of Toronto Web Development Club", period: "Sep 2016 – Sep 2017" },
  { role: "Vice-President of Operations", org: "Women in Computer Science, University of Toronto", period: "Jan 2017 – Apr 2017" },
  { role: "Social Media Executive", org: "Healthy Minds UofT", period: "Nov 2016 – Apr 2017" },
];

export interface Artwork {
  title: string;
  medium: string;
  size?: string;
  year: string;
  // Image files live in public/art/. Width and height are the image's pixel size,
  // so the gallery can reserve space before the image loads.
  image: string;
  width: number;
  height: number;
}

export const artwork: Artwork[] = [
  { title: "Oranges", medium: "Digital", year: "2026", image: "/art/oranges.webp", width: 1600, height: 2000 },
  { title: "Still Life", medium: "Digital", year: "2026", image: "/art/still-life.webp", width: 1999, height: 2000 },
  { title: "Still Life", medium: "Digital", year: "2026", image: "/art/still-life-teapot.webp", width: 1600, height: 2000 },
  { title: "Still Life", medium: "Digital", year: "2026", image: "/art/still-life-drapery.webp", width: 1600, height: 2000 },
  { title: "Sculpture", medium: "Digital", year: "2026", image: "/art/sculpture.webp", width: 1600, height: 2000 },
  {
    title: "Monster",
    medium: "Acrylic paint on canvas",
    size: "18 × 24 in",
    year: "2025",
    image: "/art/monster.webp",
    width: 1492,
    height: 2000,
  },
  {
    title: "Hot and Cold",
    medium: "Acrylic paint on canvas",
    size: "18 × 24 in",
    year: "2025",
    image: "/art/hot-and-cold.jpg",
    width: 768,
    height: 1024,
  },
  {
    title: "Smushroom",
    medium: "Acrylic paint on canvas",
    size: "20 × 20 in",
    year: "2025",
    image: "/art/smushroom.webp",
    width: 2000,
    height: 2000,
  },
  {
    title: "Sunny Day",
    medium: "Acrylic paint on canvas",
    size: "18 × 24 in",
    year: "2024",
    image: "/art/sunny-day.jpg",
    width: 1566,
    height: 2000,
  },
];

export interface Exhibition {
  title: string;
  host?: string;
  year: string;
}

export const exhibitions: Exhibition[] = [
  { title: "Why Do You Create?", host: "Visual Arts Mississauga", year: "2026" },
  { title: "Alder for the Heart", host: "New Vistas", year: "2025" },
  { title: "Emerge Exhibition", host: "Federation of Art Canada", year: "2025" },
  { title: "Art of Joy Exhibition", year: "2025" },
  { title: "Breaking Ground Exhibition", host: "Next Generation Arts", year: "2025" },
  { title: "All the Small Things", host: "Northern Contemporary Gallery", year: "2025" },
  { title: "Renewal Exhibition", host: "Melt Studio Gallery", year: "2025" },
  { title: "FRESH Exhibition", host: "Next Generation Arts", year: "2024" },
];
