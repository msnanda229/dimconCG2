
export const generateNavigationData = () => {
  return [
    {
      slug: "cloud-applications",
      name: "Cloud Applications",
      description: "Enterprise-grade cloud solutions to transform your operations and drive growth.",
      icon: "Cloud",
      featuredCTA: "Explore Cloud Solutions",
      columns: [
        {
          heading: "Platforms",
          items: [
            { title: "Oracle Cloud", description: "Enterprise cloud infrastructure", icon: "Cloud", path: "/oracle-cloud" },
            { title: "Oracle NetSuite", description: "Cloud ERP & business software", icon: "Building2", path: "/cloud-applications/netsuite" },
            { title: "Salesforce", description: "Customer relationship management", icon: "Users", path: "/cloud-applications/salesforce" }
          ]
        },
        {
          heading: "\u00A0",
          items: [
            { title: "Workday", description: "Finance and HR management", icon: "Briefcase", path: "/cloud-applications/workday" },
            { title: "Rootstock", description: "Manufacturing ERP solutions", icon: "Factory", path: "/cloud-applications/rootstock" }
          ]
        }

      ]
    },
    {
      slug: "services",
      name: "Services",
      description: "End-to-end consulting, implementation, and support for your digital transformation.",
      icon: "Layers",
      featuredCTA: "View All Services",
      columns: [
        {
          items: [
            { title: "AI-Powered ERP", description: "Intelligent enterprise planning", icon: "Cpu", path: "/services/ai-powered-erp" },
            { title: "Cloud Applications", description: "Scalable cloud solutions", icon: "Cloud", path: "/services/cloud-applications" },
            { title: "ERP Implementation", description: "End-to-end deployment", icon: "Server", path: "/services/erp-implementation" }
          ]
        },
        {
          items: [
            { title: "Data Migration", description: "Secure data movement", icon: "Database", path: "/services/data-migration" },
            { title: "CRM Implementation", description: "Sales & service platforms", icon: "Users", path: "/services/crm-implementation" },
            { title: "HCM Implementation", description: "Workforce management", icon: "Heart", path: "/services/hcm-implementation" }
          ]
        },
        {
          items: [
            { title: "Managed Services", description: "Continuous support", icon: "Shield", path: "/services/managed-services" },
            { title: "Monitoring Services", description: "Proactive health checks", icon: "Activity", path: "/services/monitoring-services" },
            { title: "Performance Optimization", description: "System speed & efficiency", icon: "Zap", path: "/services/performance-optimization" }
          ]
        }
      ]
    },
    {
      slug: "industries",
      name: "Industries",
      description: "Tailored solutions addressing the unique challenges of your specific industry.",
      icon: "Building2",
      featuredCTA: "Explore Industries",
      columns: [
        {
          items: [
            { title: "Healthcare", description: "Patient-centric solutions", icon: "Heart", path: "/industries/healthcare" },
            { title: "Manufacturing", description: "Production optimization", icon: "Settings", path: "/industries/manufacturing" },
            { title: "Finance", description: "Secure financial systems", icon: "DollarSign", path: "/industries/finance" },
            { title: "E-Commerce", description: "Online retail solutions", icon: "ShoppingCart", path: "/industries/e-commerce" },
            { title: "Construction", description: "Building the future with smart solutions", icon: "Factory", path: "/industries/construction" }
          ]
        },
        {
          items: [
            { title: "Retail", description: "Omnichannel commerce", icon: "Truck", path: "/industries/retail" },
            { title: "Energy", description: "Resource management", icon: "Zap", path: "/industries/energy" },
            { title: "Government & NPO", description: "Public sector modernization", icon: "Building2", path: "/industries/government-npo" },
            { title: "HI-Tech", description: "Innovative technology solutions", icon: "Cpu", path: "/industries/hi-tech" },
            { title: "WholeSale & Distribution", description: "Streamlined supply chain solutions", icon: "Layers", path: "/industries/wholesale-distribution" }
          ]
        },
        {
          items: [
            { title: "Supply Chain", description: "Logistics visibility", icon: "Truck", path: "/industries/supply-chain" },
            { title: "Hospitality", description: "Guest experience enhancement", icon: "ShieldPlus", path: "/industries/hospitality" },
            { title: "IT", description: "backbone of every modern enterprise", icon: "Cloud", path: "/industries/it" }

          ]
        }
      ]
    },
    {
      slug: "partnerships",
      name: "Partnerships",
      description: "Strategic alliances with leading technology providers to deliver maximum value.",
      icon: "Handshake",
      featuredCTA: "View Partners",
      columns: [
        {
          items: [
            { title: "Oracle", description: "Platinum Partner", image: "/partners/oracle.png", path: "/partnerships/oracle" },
            { title: "Salesforce", description: "Consulting Partner", image: "/partners/salesforce.png", path: "/partnerships/salesforce" }
          ]
        },
        {
          items: [
            { title: "Rootstock", description: "Cloud ERP Partner", image: "/ai_logos/RTS_Logo_Colored.svg", path: "/partnerships/rootstock" },
            { title: "NetSuite", description: "Alliance Partner", image: "/partners/netsuite.png", path: "/partnerships/netsuite" }
          ]
        },
        {
          items: [
            { title: "Celigo", description: "Integration Partner", image: "/partners/celigo.png", path: "/partnerships/celigo" },
            { title: "Opkey", description: "Testing Partner", image: "/partners/opkey.png", path: "/partnerships/opkey" }
          ]
        }
      ]
    },
    {
      slug: "products-accelerators",
      name: "Products & Accelerators",
      description:
        "Enterprise products accelerating digital transformation.",
      icon: "Database",
      featuredCTA: "Explore Products",
      columns: [
        {
          heading: "Products",
          items: [
            {
              title: "AECCAR",
              description: "Cloud migration accelerator",
              icon: "Database",
              path: "#"
            },
            {
              title: "Synthera",
              description: "AI-powered enterprise platform",
              icon: "Cpu",
              path: "#"
            },
            {
              title: "RightlyHR",
              description: "Modern HR platform",
              icon: "Users",
              path: "#"
            }
          ]
        },
        {
          heading: "Accelerators",
          items: [
            {
              title: "ERP Accelerators",
              description: "Rapid implementation toolkit",
              icon: "Server",
              path: "#"
            },
            {
              title: "AI Accelerators",
              description: "Pre-built AI solutions",
              icon: "Zap",
              path: "#"
            },
            {
              title: "Integration Accelerators",
              description: "Enterprise connectors",
              icon: "RefreshCw",
              path: "#"
            }
          ]
        },
        {
          heading: "Why Products",
          items: [
            {
              title: "Innovation",
              description: "Built from real enterprise experience",
              icon: "Lightbulb",
              path: "#"
            }
          ]
        }
      ]
    },
    {
      slug: "company",
      name: "Company",
      description: "Learn about our mission, leadership, and the values that drive Dimension Consulting.",
      icon: "Users",
      featuredCTA: "About Us",
      columns: [
        {
          items: [
            { title: "About Us", description: "Our mission and values", icon: "Users", path: "/company/about-us" },
            { title: "Leadership", description: "Meet our executive team", icon: "Users", path: "/company/leadership" },
            { title: "Careers", description: "Join our growing team", icon: "Briefcase", path: "/company/careers" }
          ]
        },
        {
          items: [
            { title: "Events", description: "Upcoming webinars & events", icon: "Map", path: "/company/events" },
            { title: "Contact", description: "Get in touch with us", icon: "Heart", path: "/company/contact" }
          ]
        }
      ]
    },
    {
      slug: "resources",
      name: "Resources",
      description: "Insights, case studies, and thought leadership from our team of experts.",
      icon: "BookOpen",
      featuredCTA: "Browse Resources",
      columns: [
        {
          items: [
            { title: "Blog", description: "Latest insights & articles", icon: "BookOpen", path: "/resources/blog" },
            { title: "Whitepapers", description: "In-depth industry reports", icon: "FileText", path: "/resources/whitepapers" },
            { title: "Case Studies", description: "Success Stories", icon: "Heart", path: "resources/case-studies" }
          ]
        },
        {
          items: [
            { title: "Support Center", description: "Get help from our team", icon: "LifeBuoy", path: "/resources/support-center" },
            { title: "FAQs", description: "Frequently asked questions", icon: "HelpCircle", path: "/resources/faqs" }
          ]
        }
      ]
    },

  ];
};
