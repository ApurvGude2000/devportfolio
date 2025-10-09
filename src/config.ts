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
  aboutMe: "I am MS in Data Science student at the University of Washington, Seattle. I have over 3 years of professional experience as a Data Scientist in various topics like Marketing analytics, Customer modeling, Recommendation systems specifically in the big data ecosystem. I have extensive experience in using python, r and sql to extract, process and analyze large data, building scalable ML and Deep Learning solutions for generating business insights. \n \nActively seeking a Summer 2026 internship in Data Science or Machine Learning!",
  skills: ["Python", "R", "SQL", "PySpark", "Deep Learning", "Customer Modelling", "Causal Inference", "Tensorflow", "Recommendation Systems","Time Series", "Databricks", "Langchain", "GenAI", "Git", "Docker", "GCP", "Kubernetes", "Kafka", "MATLAB", "A/B Testing"],
  projects: [
    {
      name: "Agentic AI Teaching Assistant",
      description:
        "An intelligent agent built with LangGraph and VertexAI that provides curriculum-aligned lesson plans, multilingual content, and visual aids to support under-resourced teachers",
      link: "https://github.com/ApurvGude2000/Sahayak_Agentic_AI",
      skills: ["Agentic Architectur", "LangGraph", "GCP"],
    },
    {
      name: "Personalized Chatbot with qLoRA",
      description:
        "An exploration into model personalization, fine-tuning a Qwen-7B LLM on personal WhatsApp data with qLoRA and Apple's MLX to benchmark its conversational performance against the base model",
      link: "https://github.com/ApurvGude2000/FineTuning_Chatbot_LoRA",
      skills: ["LLM Fine-tuning", "MLX", "Langchain", "LoRA"],
    },
    {
      name: "Context-Aware Image Cropper",
      description:
        "Perfect focus, every time. An intelligent API using Google's OwlV2 zero-shot model to understand text commands and automatically crop images to the ideal context and aspect ratio",
      link: "https://github.com/ApurvGude2000/Context_Aware_Image_Cropper",
      skills: ["Huggingface Models", "FastAPI", "Docker"],
    },
    {
      name: "Telecom Churn Reasons Detection",
      description:
        "Don't just predict churn; understand it. A Streamlit dashboard combining predictive models with a RAG-powered LLM and SHAP values to deliver not just numbers, but clear, actionable retention strategies",
      link: "https://github.com/ApurvGude2000/Telecom_Churn_Reasons_Detection",
      skills: ["Machine Learning", "SHAP", "Llama Index"],
    },
    {
      name: "Joint Image Deblurring and Super Resolution",
      description:
        "A deep gated fusion CNN trained to perform simultaneous image deblurring and super-resolution, restoring clarity and detail to low-quality, motion-blurred images",
      link: "https://github.com/ApurvGude2000/Joint_Image_Deblurring",
      skills: ["OpenCV", "Deep Learning", "Tensorflow"],
    },
    {
      name: "Optimized Scientific Search Engine",
      description:
        "Faster discovery, smarter results. A custom search engine leveraging Lexical Semantic Analysis and advanced NLP to boost search accuracy by 20% while cutting runtime by 40%",
      link: "https://github.com/ApurvGude2000/Search-Engine-Scientific-Research-Database-",
      skills: ["Natural Language Processing", "Search Indexing", "nltk"],
    },
  ],
  experience: [
    {
      company: "Publicis Sapient",
      title: "Data Scientist",
      dateRange: "July 2022 - August 2025",
      bullets: [
        "Developed a scalable multi-stage CLV (Customer Lifetime Value) prediction pipeline in Azure Databricks for 3-year revenue prediction, processing 1M+ customers quarterly, integrating multi-source data pipelines with Gamma-Gamma and Pareto/NBD model outputs through a joint multi-task neural network with soft parameter sharing, reducing MAE by 67% and achieving an R² of 0.82",
        "Coordinated a team effort to develop a Monthly Behaviour Trend Segmentation Engine for a logistics and shipping company to classify 30M+ customers based on customer historical shipping trends, shapes, and behaviours, achieving >95% accuracy utilizing time series classification with deep learning encoder-decoder networks. Leveraged identified customer behaviors to quantify the true impact of churn and distinguish genuine churn from random fluctuations",
        "Led cross-study analysis of over 90K customer survey responses across multiple shipping providers using Canonical Correlation Analysis, regression models, and time series correlation to uncover key drivers of customer experience and brand relevance across journey touchpoints and segments",
        "Built a Bayesian causal inference pipeline using synthetic control methods and propensity score matching to quantify user-level campaign impact, replacing Z-score baselines and increasing attribution accuracy by $14.2M across marketing initiatives",
        "Streamlined a Neo4j Graph-Based Real Time Recommendation system for e-Commerce websites in grocery, fashion, travel and footwear domains, integrating real-time recommendations using Cypher queries with ML models including ALS (Alternating Least Squares) collaborative filtering and Market Basket Analysis with FP-growth algorithm, reducing loading time by 60% and providing personalized recommendations with explainability",
        "Trained customer segmentation models using random forests for growth and churn prediction on 12-month transactional data with 200+ variables, producing a combined percentile score to identify top 10% churners/growers and guide campaign strategy across regions and industries",
        "Automated tasks such as Graph Database Creation, Real-time Data Streaming and Database Updating using Google Tag Manager (GTM), Kafka and Kubernetes, streamlining the entire process with one-click functionality, streamlining the entire process from a 12 step manual workflow to 1-click functionality",
        "Designed a PowerPoint-to-Markdown parser using the PyMuPDF library and Vision LLMs to extract and caption images, retain table structures, and convert presentations into structured markdown for scalable multi-document RAG pipelines"
      ],
    },
    {
      company: "Publicis Sapient",
      title: "Data Science and Analytics Intern",
      dateRange: "May 2021 - August 2021",
      bullets: [
        "Implemented an end-to-end scalable platform for multi-target multivariate time series forecasting using ARIMA and DeepVAR models, orchestrating the entire pipeline from user input to result visualization, achieving 94% accuracy, and incorporating advanced features like hierarchical clustering, exogenous market variables, and cannibalization estimation"
      ],
    },
    {
      company: "Ninestacks Gaming LLP",
      title: "Business Analyst Intern",
      dateRange: "November 2020 - March 2021",
      bullets: [
        "Collaborated with product and engineering teams to design and optimize a data-driven personalized 10-day initiation program that boosted user retention rates",
        "Refined the user cheating detection algorithm, reducing false positives by 90% with minimal system impact",
        "Created a Classification system to identify a user as a VIP based on user activity in the first 2 weeks since registration using XGBoost Classification models",
      ],
    },
  ],
  education: [
    {
      school: "University of Washington, Seattle",
      degree: "Master of Science in Data Science",
      dateRange: "September 2025 - March 2027",
      achievements: [
        "Relevant Coursework: Statistical Machine Learning, Deep Learning, Scalable Systems, Software Design, Data Visualization"
      ],
    },
    {
      school: "Indian Institute of Technology, Madras",
      degree: "Bachelor of Technology in Mechanical Engineering with a minor in AI/Machine Learning",
      dateRange: "2018 - 2022",
      achievements: [
        "Graduated Magna Cum Laude with 3.87 GPA",
        "Relevant Coursework: Introduction to Programming, Computer Vision, Natural Language Processing, Pattern Recognition and Machine Learning, Mathematical Foundations of Data Science, Probability and Linear Algebra"
      ],
    },
  ],
};
