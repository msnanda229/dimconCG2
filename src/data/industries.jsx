import React from 'react';
import {
  HeartPulse,
  Factory,
  LineChart,
  ShoppingBag,
  ShoppingCart,
  Cpu,
  Building2,
  Zap,
  Microchip,
  Hotel,
  Truck,
  HardHat,
  Package
} from "lucide-react";

import healthcareImg from '../assets/industries/healthcare_premium.png';
import manufacturingImg from '../assets/industries/manufacturing_premium.png';
import financeImg from '../assets/industries/finance_premium.png';
import retailImg from '../assets/industries/retail_premium.png';

export const industries = [
  {
    name: "Healthcare",
    slug: "healthcare",
    icon: <HeartPulse size={22} />,
    image: healthcareImg,
    headline: "Transform patient care through intelligent healthcare systems.",
    desc: "Modernize clinical operations with secure cloud platforms, AI-assisted workflows, and interoperable healthcare systems that improve patient outcomes while maintaining regulatory compliance.",
    outcomes: [
      { val: 40, suffix: "%", label: "Clinical Efficiency" },
      { val: 100, suffix: "%", label: "HIPAA Compliance" },
      { val: 10, suffix: "x", label: "Data Accessibility" }
    ],
    techStack: ["Oracle Health", "Salesforce", "Azure", "Snowflake"]
  },
  {
    name: "Manufacturing",
    slug: "manufacturing",
    icon: <Factory size={22} />,
    image: manufacturingImg,
    headline: "Build connected factories with real-time operational intelligence.",
    desc: "Digitize production, automate plant operations, and improve supply chain visibility through ERP modernization and predictive analytics.",
    outcomes: [
      { val: 30, suffix: "%", label: "Productivity Increase" },
      { val: 25, suffix: "%", label: "Downtime Reduction" },
      { val: 20, suffix: "%", label: "Inventory Savings" }
    ],
    techStack: ["Oracle", "SAP", "Celigo", "Azure"]
  },
  {
    name: "Finance",
    slug: "finance",
    icon: <LineChart size={22} />,
    image: financeImg,
    headline: "Accelerate secure financial transformation.",
    desc: "Modernize banking, insurance, and financial services through secure cloud platforms, intelligent automation, and AI-driven compliance solutions.",
    outcomes: [
      { val: 99.9, suffix: "%", label: "Fraud Detection" },
      { val: 50, suffix: "%", label: "Processing Speed" },
      { val: 45, suffix: "%", label: "Compliance Efficiency" }
    ],
    techStack: ["Salesforce", "MuleSoft", "AWS", "Databricks"]
  },
  {
    name: "Retail",
    slug: "retail",
    icon: <ShoppingBag size={22} />,
    image: retailImg,
    headline: "Create seamless omnichannel retail experiences.",
    desc: "Unify stores, warehouses, and digital commerce platforms to deliver personalized customer journeys and operational excellence.",
    outcomes: [
      { val: 35, suffix: "%", label: "Sales Growth" },
      { val: 28, suffix: "%", label: "Inventory Accuracy" },
      { val: 50, suffix: "%", label: "Customer Retention" }
    ],
    techStack: ["Salesforce", "NetSuite", "Shopify", "Snowflake"]
  },
  {
    name: "E-Commerce",
    slug: "ecommerce",
    icon: <ShoppingCart size={22} />,
    image: "/industries/ecommerce.webp",
    headline: "Scale digital commerce with intelligent automation.",
    desc: "Optimize online storefronts, fulfillment operations, and customer engagement using cloud-native commerce platforms.",
    outcomes: [
      { val: 42, suffix: "%", label: "Conversion Growth" },
      { val: 55, suffix: "%", label: "Order Automation" },
      { val: 30, suffix: "%", label: "Cart Recovery" }
    ],
    techStack: ["Shopify", "Salesforce", "Stripe", "Oracle"]
  },
  {
    name: "IT",
    slug: "it",
    icon: <Cpu size={22} />,
    image: "/industries/it.webp",
    headline: "Accelerate innovation through cloud-native engineering.",
    desc: "Build scalable digital platforms, modern DevOps pipelines, AI capabilities, and secure enterprise architectures.",
    outcomes: [
      { val: 15, suffix: "x", label: "Deployment Speed" },
      { val: 99.99, suffix: "%", label: "Platform Uptime" },
      { val: 35, suffix: "%", label: "Infrastructure Savings" }
    ],
    techStack: ["AWS", "Azure", "Kubernetes", "Snowflake"]
  },
  {
    name: "Government & NPO",
    slug: "government-npo",
    icon: <Building2 size={22} />,
    image: "/industries/government.webp",
    headline: "Deliver secure digital public services.",
    desc: "Modernize citizen services, grants management, and nonprofit operations with secure cloud technologies and automated workflows.",
    outcomes: [
      { val: 60, suffix: "%", label: "Service Response" },
      { val: 100, suffix: "%", label: "Compliance" },
      { val: 40, suffix: "%", label: "Operational Savings" }
    ],
    techStack: ["Salesforce", "Azure", "MuleSoft", "AWS"]
  },
  {
    name: "Energy",
    slug: "energy",
    icon: <Zap size={22} />,
    image: "/industries/energy.webp",
    headline: "Power intelligent energy operations.",
    desc: "Improve asset performance, automate field operations, and optimize energy distribution using predictive analytics.",
    outcomes: [
      { val: 25, suffix: "%", label: "Maintenance Savings" },
      { val: 98, suffix: "%", label: "Asset Availability" },
      { val: 30, suffix: "%", label: "Carbon Reduction" }
    ],
    techStack: ["Oracle", "Azure", "Workday", "AWS"]
  },
  {
    name: "Hi-Tech",
    slug: "hi-tech",
    icon: <Microchip size={22} />,
    image: "/industries/hitech.webp",
    headline: "Drive innovation through enterprise technology.",
    desc: "Accelerate product engineering, AI adoption, cloud transformation, and global technology operations.",
    outcomes: [
      { val: 18, suffix: "x", label: "Release Velocity" },
      { val: 99.99, suffix: "%", label: "Availability" },
      { val: 40, suffix: "%", label: "Engineering Efficiency" }
    ],
    techStack: ["Azure", "AWS", "Kubernetes", "Snowflake"]
  },
  {
    name: "Hospitality",
    slug: "hospitality",
    icon: <Hotel size={22} />,
    image: "/industries/hospitality.webp",
    headline: "Deliver exceptional guest experiences.",
    desc: "Modernize hotel operations, reservation systems, and customer engagement with intelligent cloud platforms.",
    outcomes: [
      { val: 30, suffix: "%", label: "Guest Satisfaction" },
      { val: 25, suffix: "%", label: "Revenue Growth" },
      { val: 45, suffix: "%", label: "Operational Efficiency" }
    ],
    techStack: ["Oracle Hospitality", "Salesforce", "Azure", "NetSuite"]
  },
  {
    name: "Supply Chain",
    slug: "supply-chain",
    icon: <Truck size={22} />,
    image: "/industries/supplychain.webp",
    headline: "Create resilient and connected supply networks.",
    desc: "Optimize procurement, logistics, inventory, and warehouse operations through intelligent ERP solutions.",
    outcomes: [
      { val: 35, suffix: "%", label: "Delivery Speed" },
      { val: 22, suffix: "%", label: "Inventory Savings" },
      { val: 99, suffix: "%", label: "Order Accuracy" }
    ],
    techStack: ["Oracle SCM", "SAP", "Celigo", "Power BI"]
  },
  {
    name: "Construction",
    slug: "construction",
    icon: <HardHat size={22} />,
    image: "/industries/construction.webp",
    headline: "Digitize construction project delivery.",
    desc: "Connect project planning, workforce management, procurement, and financial reporting across every job site.",
    outcomes: [
      { val: 20, suffix: "%", label: "Project Savings" },
      { val: 95, suffix: "%", label: "On-Time Delivery" },
      { val: 40, suffix: "%", label: "Budget Accuracy" }
    ],
    techStack: ["NetSuite", "Procore", "Celigo", "Power BI"]
  },
  {
    name: "Wholesale & Distribution",
    slug: "wholesale-distribution",
    icon: <Package size={22} />,
    image: "/industries/wholesale.webp",
    headline: "Optimize inventory and distribution networks.",
    desc: "Improve warehouse efficiency, order fulfillment, supplier collaboration, and demand forecasting through integrated ERP platforms.",
    outcomes: [
      { val: 30, suffix: "%", label: "Fulfillment Speed" },
      { val: 25, suffix: "%", label: "Inventory Accuracy" },
      { val: 35, suffix: "%", label: "Distribution Efficiency" }
    ],
    techStack: ["Oracle", "NetSuite", "Celigo", "Snowflake"]
  }
];
