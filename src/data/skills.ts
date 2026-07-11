export type SkillGroup = {
  id: string;
  title: string;
  icon: string;
  accent: "cyan" | "violet" | "primary";
  subgroups: { name: string; skills: string[] }[];
};

export const skills: SkillGroup[] = [
  {
    id: "programming",
    title: "Programming Fundamentals",
    icon: "Code2",
    accent: "primary",
    subgroups: [{ name: "Languages", skills: ["Python", "SQL", "Java"] }],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    icon: "BrainCircuit",
    accent: "violet",
    subgroups: [
      { name: "Machine Learning", skills: ["Supervised Learning", "Unsupervised Learning", "Feature Engineering", "Model Evaluation"] },
      { name: "Deep Learning", skills: ["Neural Networks", "CNNs", "Transfer Learning", "TensorFlow", "Keras"] },
      { name: "Specializations", skills: ["Computer Vision", "Generative AI Fundamentals", "NLP Basics"] },
    ],
  },
  {
    id: "data",
    title: "Data & Analytics",
    icon: "BarChart3",
    accent: "primary",
    subgroups: [
      { name: "Data Processing", skills: ["NumPy", "Pandas", "Data Cleaning", "EDA"] },
      { name: "Visualization & BI", skills: ["Matplotlib", "Tableau", "Streamlit"] },
    ],
  },
  {
    id: "frameworks",
    title: "AI Frameworks & Libraries",
    icon: "Boxes",
    accent: "violet",
    subgroups: [
      { name: "Core", skills: ["TensorFlow", "Scikit-learn", "OpenCV", "Mediapipe", "NumPy", "Pandas", "Matplotlib"] },
    ],
  },
  {
    id: "db",
    title: "Databases & Storage",
    icon: "Database",
    accent: "primary",
    subgroups: [{ name: "Systems", skills: ["MySQL", "SQL Querying", "Schema Design"] }],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    icon: "Cloud",
    accent: "violet",
    subgroups: [
      { name: "Dev Environment", skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab"] },
      { name: "Delivery", skills: ["Streamlit", "Tableau"] },
    ],
  },
  {
    id: "strengths",
    title: "Professional Skills",
    icon: "Sparkles",
    accent: "primary",
    subgroups: [{ name: "Mindset", skills: ["Problem Solving", "Critical Thinking", "Team Collaboration", "Adaptability", "Time Management"] }],
  },
  {
    id: "comm",
    title: "Communication & Growth",
    icon: "MessagesSquare",
    accent: "violet",
    subgroups: [{ name: "Skills", skills: ["Communication", "Presentation", "Technical Writing", "Learning Mindset", "Documentation"] }],
  },
];
