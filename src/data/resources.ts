export type Resource = {
  title: string;
  description: string;
  url: string;
  category: string;
  icon: string;
};

export const resources: Resource[] = [
  // AI / ML
  { title: "Andrew Ng — ML Specialization", description: "The foundational course series for modern ML practitioners.", url: "https://www.deeplearning.ai/courses/machine-learning-specialization/", category: "AI/ML", icon: "GraduationCap" },
  { title: "Scikit-learn Reference", description: "The canonical library for classical machine learning workflows.", url: "https://scikit-learn.org/stable/", category: "AI/ML", icon: "BookOpen" },

  // Deep Learning
  { title: "Deep Learning Specialization", description: "Five-course deep dive into neural networks, CNNs and sequence models.", url: "https://www.deeplearning.ai/", category: "Deep Learning", icon: "Sparkles" },
  { title: "PyTorch Tutorials", description: "Hands-on PyTorch tutorials across vision, NLP and beyond.", url: "https://pytorch.org/tutorials/", category: "Deep Learning", icon: "Flame" },
  { title: "TensorFlow Tutorials", description: "Official TensorFlow tutorials from beginner to production.", url: "https://www.tensorflow.org/tutorials", category: "Deep Learning", icon: "Flame" },

  // Computer Vision
  { title: "OpenCV Documentation", description: "The reference for classical and modern computer vision.", url: "https://docs.opencv.org/", category: "Computer Vision", icon: "Eye" },
  { title: "Mediapipe", description: "Google's cross-platform pipeline for live perception (pose, hands, face).", url: "https://developers.google.com/mediapipe", category: "Computer Vision", icon: "ScanFace" },

  // Data Science
  { title: "Pandas Documentation", description: "The de-facto data manipulation library for Python.", url: "https://pandas.pydata.org/docs/", category: "Data Science", icon: "Table" },
  { title: "Kaggle Learn", description: "Bite-sized, applied data science micro-courses.", url: "https://www.kaggle.com/learn", category: "Data Science", icon: "GraduationCap" },

  // Generative AI
  { title: "Hugging Face Course", description: "Free course on transformers, diffusion and modern GenAI.", url: "https://huggingface.co/learn", category: "Generative AI", icon: "Sparkles" },
  { title: "OpenAI Cookbook", description: "Production-ready patterns for building with LLMs.", url: "https://cookbook.openai.com/", category: "Generative AI", icon: "Wand2" },
  { title: "LangChain Docs", description: "Compose LLM apps, agents and retrieval pipelines.", url: "https://python.langchain.com/", category: "Generative AI", icon: "Link2" },

  // MLOps
  { title: "MLflow", description: "Open-source platform for the ML lifecycle — tracking, registry, deploy.", url: "https://mlflow.org/", category: "MLOps", icon: "GitMerge" },

  // Research
  { title: "Papers With Code", description: "Research papers paired with reproducible code and benchmarks.", url: "https://paperswithcode.com/", category: "Research", icon: "FileSearch" },

  // Engineering Tools
  { title: "Streamlit", description: "Turn Python scripts into shareable ML web apps in minutes.", url: "https://streamlit.io/", category: "Engineering Tools", icon: "LayoutTemplate" },
];

