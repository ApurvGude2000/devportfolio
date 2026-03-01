export const siteConfig = {
  name: "Apurv Gude",
  title: "Data Scientist",
  description: "Portfolio website of Apurv Gude",
  accentColor: "#DD6B20",
  social: {
    email: "agude@uw.edu",
    linkedin: "https://www.linkedin.com/in/apurv-gude/",
    github: "https://github.com/ApurvGude2000",
  },
  aboutMe: "I am an MS in Data Science student at the University of Washington, Seattle (GPA: 3.96). I have over 3 years of professional experience as a Data Scientist at Publicis Sapient, building scalable ML pipelines, causal inference systems, and GenAI solutions across marketing analytics, customer modeling, and recommendation systems in the big data ecosystem.\n \nActively seeking a Summer 2026 internship in Data Science or Machine Learning!",
  skills: ["Python", "R", "SQL", "PySpark", "Deep Learning", "Customer Modelling", "Causal Inference", "PyTorch", "Recommendation Systems", "Time Series", "Databricks", "LangChain", "LangGraph", "GenAI", "RAG", "Git", "Docker", "GCP", "Kubernetes", "Kafka", "A/B Testing", "Power BI"],
  projects: [
    {
      name: "Wearable AI Networking Assistant",
      description:
        "Built at TreeHacks (Stanford 2026): a networking wearable with on-device Edge AI (Whisper, Llama-1B) for secure transcription, leveraging the Claude Agentic SDK, Knowledge Graphs, and Perplexity Sonar to generate real-time context and conversation insights",
      link: "https://github.com/ApurvGude2000/Aperta",
      skills: ["Edge AI", "Agentic AI", "Claude SDK", "Knowledge Graphs"],
    },
    {
      name: "Automated Accessibility Auditor",
      description:
        "Built at UW Datathon 2026: a Chrome extension that audits websites for accessibility concerns using a custom XGBoost model (85% accuracy) for severity prediction, integrating LLMs to translate technical WCAG codes into plain-language fixes for developers",
      link: "https://github.com/ApurvGude2000/TheGoldDiggers",
      skills: ["XGBoost", "LLM", "Chrome Extension", "WCAG"],
    },
    {
      name: "Agentic AI Teaching Assistant",
      description:
        "Deployed an Agentic LLM-based assistant using LangGraph and VertexAI to support under-resourced school teachers with curriculum-aligned lesson planning, multilingual content generation across 15 languages, and visual aids — built for Google's Agentic AI Hackathon 2025",
      link: "https://github.com/ApurvGude2000/Sahayak_Agentic_AI",
      skills: ["LangGraph", "VertexAI", "Agentic AI", "GCP"],
    },
    {
      name: "Personalized Chatbot with qLoRA",
      description:
        "An exploration into model personalization — fine-tuned a Qwen-7B LLM on personal WhatsApp chat data using Apple's MLX framework and qLoRA to benchmark conversational performance of a personalized model against the base model",
      link: "https://github.com/ApurvGude2000/FineTuning_Chatbot_LoRA",
      skills: ["LLM Fine-tuning", "MLX", "LoRA", "Qwen"],
    },
    {
      name: "Context-Aware Image Cropper",
      description:
        "An intelligent API that uses Google's OwlV2 zero-shot object detection model to understand text prompts and automatically crop images to the ideal subject and aspect ratio — no bounding boxes needed",
      link: "https://github.com/ApurvGude2000/Context_Aware_Image_Cropper",
      skills: ["OwlV2", "Zero-shot Detection", "FastAPI", "Docker"],
    },
    {
      name: "Telecom Churn Reasons Detection",
      description:
        "Don't just predict churn — understand it. A Streamlit dashboard combining classification models and SHAP interpretability with a RAG-powered LLM to deliver not just churn scores, but clear, personalized retention strategies for call center teams",
      link: "https://github.com/ApurvGude2000/Telecom_Churn_Reasons_Detection",
      skills: ["Machine Learning", "SHAP", "RAG", "Llama Index"],
    },
    {
      name: "Joint Image Deblurring and Super Resolution",
      description:
        "A deep gated fusion CNN trained to simultaneously perform image deblurring and super-resolution — restoring clarity and high-frequency detail to low-quality, motion-blurred images in a single forward pass",
      link: "https://github.com/ApurvGude2000/Joint_Image_Deblurring",
      skills: ["Deep Learning", "CNN", "OpenCV", "TensorFlow"],
    },
    {
      name: "Optimized Scientific Search Engine",
      description:
        "Faster discovery, smarter results. A custom search engine leveraging Lexical Semantic Analysis, POS-based stopword removal, and title-weight augmentation built with Python NLTK — boosting search accuracy by 20% while cutting runtime by 40%",
      link: "https://github.com/ApurvGude2000/Search-Engine-Scientific-Research-Database-",
      skills: ["NLP", "LSA", "Search Indexing", "NLTK"],
    },
  ],
  experience: [
    {
      company: "Publicis Sapient",
      title: "Senior Associate Data Scientist",
      dateRange: "July 2022 – August 2025",
      bullets: [
        "Developed a scalable multi-stage CLV prediction pipeline in Azure Databricks for 3-year revenue forecasting, processing 1M+ customers quarterly via a joint multi-task neural network with Gamma-Gamma and Pareto/NBD model outputs, reducing MAE by 67% (R² = 0.82)",
        "Built a Bayesian causal inference pipeline using synthetic control methods and propensity score matching to quantify user-level campaign impact, replacing Z-score baselines and increasing marketing attribution accuracy by $14.2M",
        "Developed a Monthly Behaviour Trend Segmentation Engine for a logistics company to classify 30M+ customers using deep learning encoder-decoder networks on shipping time series data, achieving >95% accuracy and enabling retention strategies contributing to $375M in revenue",
        "Led cross-study analysis of 90K+ customer survey responses across shipping providers using Canonical Correlation Analysis, regression, and time series correlation, identifying 8 key CX drivers across journey touchpoints to inform strategic decisions",
        "Streamlined a Neo4j Graph-Based Real-Time Recommendation system across grocery, fashion, travel, and footwear e-commerce using Cypher queries, ALS collaborative filtering, and FP-growth Market Basket Analysis, reducing loading time by 60%",
        "Trained customer segmentation models using Random Forests on 12-month transactional data (200+ variables), producing combined percentile scores to identify the top 10% churners/growers and guide campaign strategy across regions",
        "Designed shipping propensity models (Air & Export) using XGBoost and Random Forest to target the top 15% high-intent segment, driving international product adoption and generating $10M in revenue uplift",
        "Designed a PowerPoint-to-Markdown parser using PyMuPDF and Vision LLMs to extract and caption images, retain table structures, and convert enterprise presentations into structured markdown for scalable multi-document RAG pipelines, achieving >90% Q&A accuracy",
        "Automated Graph Database creation, real-time data streaming, and updates using Google Tag Manager, Kafka, and Kubernetes — reducing a 12-step manual workflow to 1-click functionality",
        "Automated marketing content generation by fine-tuning Flux and Stable Diffusion via Dreambooth, producing brand-consistent posters and mascots from text prompts and cutting design turnaround from 3 days to under 2 minutes",
      ],
    },
    {
      company: "Publicis Sapient",
      title: "Data Science and Analytics Intern",
      dateRange: "May 2021 – August 2021",
      bullets: [
        "Implemented an end-to-end scalable platform for multi-target multivariate time series forecasting using ARIMA and DeepVAR models, orchestrating the full pipeline from user input to visualization with 94% accuracy, incorporating hierarchical clustering, exogenous market variables, and cannibalization estimation",
      ],
    },
    {
      company: "Ninestacks Gaming LLP",
      title: "Business Analyst Intern",
      dateRange: "November 2020 – March 2021",
      bullets: [
        "Collaborated with product and engineering teams to design a data-driven personalized 10-day onboarding program that measurably boosted user retention rates",
        "Refined the user cheating detection algorithm, reducing false positives by 90% with minimal system performance impact",
        "Built an XGBoost-based VIP classifier to identify high-value users from the first 2 weeks of activity post-registration",
      ],
    },
  ],
  education: [
    {
      school: "University of Washington, Seattle",
      degree: "Master of Science in Data Science",
      dateRange: "September 2025 – March 2027",
      achievements: [
        "GPA: 3.96 / 4.0",
        "Relevant Coursework: Statistical Machine Learning, Deep Learning, Scalable Systems, Software Design, Causal Inference, Data Visualization",
      ],
    },
    {
      school: "Indian Institute of Technology, Madras",
      degree: "Bachelor of Technology in Mechanical Engineering with Minor in AI & Machine Learning",
      dateRange: "2018 – 2022",
      achievements: [
        "GPA: 3.87 / 4.0 — Graduated with Distinction",
        "Relevant Coursework: Computer Vision, Natural Language Processing, Pattern Recognition & Machine Learning, Mathematical Foundations of Data Science, Probability & Linear Algebra",
      ],
    },
  ],
};