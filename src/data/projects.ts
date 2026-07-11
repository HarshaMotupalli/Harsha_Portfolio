export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  highlights: string[];
  caseStudy: {
    overview: string;
    problem: string;
    architecture: string;
    workflow: string[];
    challenges: string[];
    results: string[];
    futureScope: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "brain-tumor-classification",
    title: "Brain Tumor Classification",
    category: "Medical Imaging · Deep Learning",
    description:
      "Streamlit web app that classifies brain tumor MRI scans using a deep learning model — built to support early, automated medical diagnosis.",
    stack: ["Python", "TensorFlow", "Keras", "Streamlit", "OpenCV"],
    github: "https://github.com/HarshaMotupalli",
    highlights: ["MRI image classification", "Streamlit clinical UI", "Automated early-diagnosis support"],
    caseStudy: {
      overview:
        "An end-to-end medical imaging app that ingests brain MRI scans and predicts tumor categories with a trained CNN, packaged as a clean Streamlit interface.",
      problem:
        "Manual review of MRI scans is slow and dependent on specialist availability — early-stage screening needs an automated, repeatable second opinion.",
      architecture:
        "Curated medical imaging dataset → image preprocessing pipeline → CNN classifier (TensorFlow/Keras) → Streamlit inference dashboard.",
      workflow: [
        "Upload MRI scan",
        "Pre-process & normalize",
        "Run CNN inference",
        "Render predicted class with confidence",
        "Surface explainability cues",
      ],
      challenges: [
        "Class imbalance across tumor types",
        "Generalization across scanner vendors",
        "Building a clinical-grade UX in Streamlit",
      ],
      results: [
        "Accurate multi-class predictions",
        "Single-click upload-to-result flow",
        "Foundation for an assistive diagnostic tool",
      ],
      futureScope: [
        "Grad-CAM explainability overlays",
        "Multi-modality (CT + MRI) support",
        "Hospital-grade DICOM ingestion",
      ],
    },
  },
  {
    slug: "train-with-ai",
    title: "Train With AI — Voice-Enabled Personal Trainer",
    category: "Computer Vision · Voice AI",
    description:
      "AI-driven, voice-enabled personal trainer that gives real-time feedback on exercise form using pose estimation and audio cues — built with a 6-member team.",
    stack: ["Python", "Mediapipe", "OpenCV", "Voice AI", "TensorFlow"],
    github: "https://github.com/HarshaMotupalli",
    highlights: ["Real-time pose feedback", "Voice coaching", "Accessible fitness for everyone"],
    caseStudy: {
      overview:
        "A real-time AI fitness coach that watches your form, calls out corrections through voice, and makes personal training accessible to people who can't afford a human trainer.",
      problem:
        "Personal training is expensive and inaccessible — without supervision, beginners build bad habits and risk injury.",
      architecture:
        "Webcam stream → Mediapipe pose estimation → rule-based form evaluator → voice synthesis layer → live visual overlays.",
      workflow: [
        "Detect user pose in real time",
        "Score joint angles vs reference form",
        "Trigger voice + visual correction",
        "Track reps and tempo",
      ],
      challenges: [
        "Stable pose tracking under varied lighting",
        "Latency-budget for real-time voice feedback",
        "Designing a non-overwhelming coaching tone",
      ],
      results: [
        "Real-time form correction loop",
        "Accessible, hardware-light deployment",
        "Successful 6-member collaborative delivery",
      ],
      futureScope: [
        "Personalized routine generator",
        "On-device mobile inference",
        "Progress analytics dashboard",
      ],
    },
  },
  {
    slug: "ai-exam-proctoring",
    title: "AI-Based Online Exam Proctoring System",
    category: "Computer Vision · Behavioral AI",
    description:
      "AI proctoring system that monitors student behavior in real time and uses a temporal verification approach to reduce false cheating alerts and protect exam integrity.",
    stack: ["Python", "OpenCV", "TensorFlow", "Mediapipe"],
    github: "https://github.com/HarshaMotupalli",
    highlights: ["Temporal verification logic", "False-positive reduction", "Exam integrity at scale"],
    caseStudy: {
      overview:
        "An online exam proctor that watches student behavior continuously and only flags incidents that persist over a temporal window — drastically reducing noisy alerts.",
      problem:
        "Existing proctoring tools fire constant false alarms over normal motion, eroding trust for both students and examiners.",
      architecture:
        "Webcam stream → face & gaze detection → behavioral signal aggregator → temporal verification window → alerting & evidence capture.",
      workflow: [
        "Calibrate baseline at exam start",
        "Continuously detect attention signals",
        "Aggregate signals over a temporal window",
        "Raise verified alerts with clip evidence",
      ],
      challenges: [
        "Defining a 'normal' behavior baseline",
        "Tuning the temporal window for sensitivity vs noise",
        "Privacy-respecting evidence handling",
      ],
      results: [
        "Sharp reduction in false-positive alerts",
        "Verifiable, time-windowed incident reports",
        "Ready for institutional pilot deployments",
      ],
      futureScope: [
        "Multi-camera + screen-share fusion",
        "On-device inference for privacy",
        "Examiner review console",
      ],
    },
  },
  {
    slug: "movie-recommender",
    title: "Movie Recommendation System",
    category: "Machine Learning · Recommenders",
    description:
      "Python-based movie recommender built during the IIDT Blackbucks Generative AI internship — delivers personalized titles using feature similarity.",
    stack: ["Python", "Pandas", "Scikit-learn", "NumPy"],
    github: "https://github.com/HarshaMotupalli",
    highlights: ["Feature-similarity engine", "Personalized rankings", "Built during GenAI internship"],
    caseStudy: {
      overview:
        "A content-based movie recommender that learns from feature representations of titles and surfaces similar picks tuned to a user's seed preferences.",
      problem:
        "Generic catalogs overwhelm users — they need a fast, personalized first-screen of relevant titles.",
      architecture:
        "Movie metadata corpus → feature engineering (genre, cast, keywords) → vectorization → cosine similarity ranker.",
      workflow: [
        "Ingest movie metadata",
        "Engineer combined feature vector",
        "Compute pairwise similarity",
        "Return top-N personalized recommendations",
      ],
      challenges: [
        "Cold-start with limited interaction signal",
        "Handling sparse metadata",
        "Tuning similarity weights across features",
      ],
      results: [
        "Coherent recommendations from a single seed title",
        "Lightweight, deploy-anywhere Python service",
        "Internship deliverable shipped on time",
      ],
      futureScope: [
        "Hybrid collaborative + content model",
        "LLM-summarized 'why this pick' rationales",
        "Streaming-platform integration",
      ],
    },
  },
  {
    slug: "lane-detection",
    title: "Lane Detection using Deep Learning",
    category: "Computer Vision · Autonomous Systems",
    description:
      "Deep learning pipeline that detects road lanes from dashcam video — a foundational module for driver-assistance and autonomous navigation systems.",
    stack: ["Python", "TensorFlow", "OpenCV", "NumPy"],
    github: "https://github.com/HarshaMotupalli",
    highlights: ["Frame-by-frame lane segmentation", "Robust to lighting variations", "ADAS-ready building block"],
    caseStudy: {
      overview:
        "A deep learning-based lane detection pipeline that processes dashcam video and overlays lane boundaries in real time — a core perception block for ADAS.",
      problem:
        "Classical edge-based lane detection fails on shadows, faded markings and night driving — the system needs a learned, robust perception layer.",
      architecture:
        "Video frames → preprocessing → CNN lane segmentation → post-processing & smoothing → overlay renderer.",
      workflow: [
        "Capture dashcam frames",
        "Preprocess (resize, normalize, ROI)",
        "Run CNN segmentation",
        "Smooth predictions over time",
        "Render lane overlay",
      ],
      challenges: [
        "Generalizing across lighting and weather",
        "Maintaining temporal stability between frames",
        "Real-time inference budget",
      ],
      results: [
        "Stable lane overlays on diverse footage",
        "Resilience to faded and partially occluded markings",
        "Reusable perception module for ADAS prototypes",
      ],
      futureScope: [
        "Curve-aware lane parameterization",
        "Fusion with vehicle detection",
        "Edge deployment on embedded GPUs",
      ],
    },
  },
];
