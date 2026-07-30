import React from 'react';
import {
  Cpu, BarChart3, MessageSquare, Zap, Target, RefreshCw,
  Search, Lightbulb, PenTool, Rocket, ShieldCheck,
  ArrowRight, Users, Briefcase, Database, Server
} from 'lucide-react';

export const aiCapabilities = [
  {
    icon: <RefreshCw size={24} />,
    title: "Intelligent Automation",
    description: "Automate repetitive tasks and complex workflows across your enterprise, freeing your team to focus on strategic initiatives."
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Predictive Analytics",
    description: "Anticipate market trends, customer behavior, and supply chain disruptions before they happen using machine learning models."
  },
  {
    icon: <Search size={24} />,
    title: "AI-Powered Reporting",
    description: "Generate dynamic, context-aware reports instantly. Move beyond static dashboards to interactive, narrative insights."
  },
  {
    icon: <Target size={24} />,
    title: "Intelligent Recommendations",
    description: "Get smart, data-backed suggestions for pricing, inventory management, and resource allocation in real-time."
  },
  {
    icon: <MessageSquare size={24} />,
    title: "Conversational ERP",
    description: "Interact with your ERP system using natural language. Ask questions and get instant, actionable answers."
  },
  {
    icon: <Zap size={24} />,
    title: "Process Optimization",
    description: "Continuously identify bottlenecks and inefficiencies in your operations, with AI suggesting paths for optimization."
  }
];

export const aiServices = [
  {
    title: "AI Readiness Assessment",
    desc: "We evaluate your current ERP ecosystem, data quality, and business processes to identify high-impact AI opportunities."
  },
  {
    title: "AI Strategy & Consulting",
    desc: "Develop a comprehensive roadmap for AI integration that aligns with your specific enterprise goals and industry requirements."
  },
  {
    title: "AI ERP Implementation",
    desc: "End-to-end deployment of AI-powered ERP platforms like Oracle AI, Salesforce Einstein, or customized intelligent solutions."
  },
  {
    title: "AI Integration",
    desc: "Connect advanced AI models and cognitive services to your existing legacy ERP infrastructure seamlessly."
  },
  {
    title: "AI Process Automation",
    desc: "Design and implement intelligent workflows that automate complex, multi-step business processes across departments."
  },
  {
    title: "AI Optimization & Support",
    desc: "Continuous monitoring, tuning, and enhancement of your AI models to ensure they evolve with your business needs."
  }
];

export const timelineSteps = [
  {
    num: "01",
    title: "Discover",
    desc: "Deep dive into your business processes, data landscape, and strategic objectives."
  },
  {
    num: "02",
    title: "Identify AI Opportunities",
    desc: "Pinpoint specific areas where AI can drive the most significant efficiency and ROI."
  },
  {
    num: "03",
    title: "Design Solution",
    desc: "Architect a scalable AI ERP solution tailored to your unique enterprise requirements."
  },
  {
    num: "04",
    title: "Deploy AI Capabilities",
    desc: "Implement, train, and integrate AI models into your workflows with minimal disruption."
  },
  {
    num: "05",
    title: "Optimize & Improve",
    desc: "Continuously refine AI performance based on real-world usage and evolving data."
  }
];

export const platforms = [
  {
    logo: "/ai_logos/oracle.png",
    name: "Oracle Cloud",
    desc: "Leverage Oracle's embedded AI and machine learning capabilities to automate finance, supply chain, and HR.",
    link: "/oracle-cloud"
  },
  {
    logo: "/ai_logos/netsuite.png",
    name: "Oracle NetSuite",
    desc: "Supercharge your growing business with intelligent insights, automated planning, and predictive forecasting.",
    link: "/innerpages/netsuite"
  },
  {
    logo: "/ai_logos/salesforce.png",
    name: "Salesforce",
    desc: "Deploy Salesforce Einstein to bring predictive intelligence and generative AI to your CRM and ERP data.",
    link: "/innerpages/salesforce"
  },
  {
    logo: "/ai_logos/workday.png",
    name: "Workday",
    desc: "Transform HR and finance with Workday's AI-driven skills intelligence, anomaly detection, and smart automation.",
    link: "/innerpages/workday"
  }
];

export const outcomes = [
  {
    icon: <Rocket size={32} />,
    title: "Increase Productivity",
    desc: "Automate repetitive tasks and accelerate complex workflows."
  },
  {
    icon: <RefreshCw size={32} />,
    title: "Reduce Manual Work",
    desc: "Eliminate manual data entry and error-prone processes."
  },
  {
    icon: <Lightbulb size={32} />,
    title: "Improve Decision Making",
    desc: "Base strategic choices on predictive insights, not just past data."
  },
  {
    icon: <Target size={32} />,
    title: "Faster Financial Insights",
    desc: "Accelerate month-end closes and real-time financial reporting."
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Smarter Forecasting",
    desc: "Predict demand, supply chain issues, and revenue with high accuracy."
  },
  {
    icon: <Users size={32} />,
    title: "Better Customer Experience",
    desc: "Deliver personalized, proactive service driven by AI insights."
  }
];

export const whyDimension = [
  {
    title: "AI + ERP Expertise",
    desc: "We don't just know AI, and we don't just know ERP. We excel at the intersection of both, delivering intelligent enterprise systems."
  },
  {
    title: "Certified Consultants",
    desc: "Our team holds advanced certifications across major AI and ERP platforms, ensuring best-in-class implementation."
  },
  {
    title: "Enterprise Delivery Experience",
    desc: "Proven track record of delivering complex, large-scale technology transformations for global enterprises."
  },
  {
    title: "Global Delivery Model",
    desc: "Seamless, round-the-clock implementation and support leveraging our optimized global talent network."
  },
  {
    title: "Long-Term Optimization",
    desc: "We build partnerships, providing ongoing AI tuning and optimization long after the initial go-live."
  },
  {
    title: "Proven Implementation Methodology",
    desc: "Our structured, agile approach mitigates risk and accelerates time-to-value for your AI investments."
  }
];

export const faqs = [
  {
    id: 1,
    question: "What is AI-powered ERP?",
    answer: "AI-powered ERP integrates artificial intelligence, machine learning, and advanced analytics directly into Enterprise Resource Planning systems. Instead of just storing and reporting data, the system actively learns, predicts outcomes, automates complex workflows, and provides intelligent recommendations to users."
  },
  {
    id: 2,
    question: "Which ERP platforms support AI?",
    answer: "Most leading modern ERP platforms now offer robust AI capabilities. We specialize in implementing AI solutions across Oracle Cloud ERP, Oracle NetSuite, Salesforce, and Workday, leveraging their native AI tools (like Oracle AI or Salesforce Einstein) or integrating custom AI models."
  },
  {
    id: 3,
    question: "Can AI be added to an existing ERP?",
    answer: "Yes. While migrating to a modern, cloud-native ERP often provides the most seamless AI experience, we can integrate specific AI capabilities, cognitive services, and intelligent automation into many existing legacy or on-premise ERP environments using modern APIs and middleware."
  },
  {
    id: 4,
    question: "How long does AI ERP implementation take?",
    answer: "The timeline varies significantly based on the scope of the project. A targeted AI automation within an existing system might take 4-8 weeks, while a comprehensive enterprise-wide AI-powered ERP implementation can take 6-12 months. We define clear timelines during our initial Discovery phase."
  },
  {
    id: 5,
    question: "Is AI ERP suitable for small and mid-sized businesses?",
    answer: "Absolutely. Platforms like Oracle NetSuite bring powerful AI and predictive capabilities to the mid-market. AI helps SMBs punch above their weight by automating manual tasks, allowing small teams to operate with the efficiency and insight of much larger organizations."
  }
];
