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
            { title: "Oracle NetSuite", description: "Cloud ERP & business software", icon: "Building2", path: "..innerpages/netsuite" },
            { title: "Salesforce", description: "Customer relationship management", icon: "Users", path: "..innerpages/salesforce" }
          ]
        },
        {
          heading: "\u00A0",
          items: [
            { title: "Workday", description: "Finance and HR management", icon: "Briefcase", path: "..innerpages/workday" },
            { title: "Rootstock", description: "Manufacturing ERP solutions", icon: "Factory", path: "..innerpages/rootstock" }
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
            { title: "Cloud Applications", description: "Scalable cloud solutions", icon: "Cloud", path: "/services" },
            { title: "ERP Implementation", description: "End-to-end deployment", icon: "Server", path: "/services" }
          ]
        },
        {
          items: [
            { title: "Data Migration", description: "Secure data movement", icon: "Database", path: "/services" },
            { title: "CRM Implementation", description: "Sales & service platforms", icon: "Users", path: "/services" },
            { title: "HCM Implementation", description: "Workforce management", icon: "Heart", path: "/services" }
          ]
        },
        {
          items: [
            { title: "Managed Services", description: "Continuous support", icon: "Shield", path: "/services" },
            { title: "Monitoring Services", description: "Proactive health checks", icon: "Activity", path: "/services" },
            { title: "Performance Optimization", description: "System speed & efficiency", icon: "Zap", path: "/services" }
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
            { title: "Healthcare", description: "Patient-centric solutions", icon: "Heart", path: "#" },
            { title: "Manufacturing", description: "Production optimization", icon: "Settings", path: "#" },
            { title: "Finance", description: "Secure financial systems", icon: "DollarSign", path: "#" }
          ]
        },
        {
          items: [
            { title: "Retail", description: "Omnichannel commerce", icon: "Truck", path: "#" },
            { title: "Energy", description: "Resource management", icon: "Zap", path: "#" },
            { title: "Government", description: "Public sector modernization", icon: "Building2", path: "#" }
          ]
        },
        {
          items: [
            { title: "Supply Chain", description: "Logistics visibility", icon: "Truck", path: "#" },
            { title: "Hospitality", description: "Guest experience enhancement", icon: "Heart", path: "#" }
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
            { title: "Oracle", description: "Platinum Partner", image: "/partners/oracle.png", path: "#" },
            { title: "Salesforce", description: "Consulting Partner", image: "/partners/salesforce.png", path: "#" }
          ]
        },
        {
          items: [
            { title: "Rootstock", description: "Cloud ERP Partner", image: "/ai_logos/RTS_Logo_Colored.svg", path: "#" },
            { title: "NetSuite", description: "Alliance Partner", image: "/partners/netsuite.png", path: "#" }
          ]
        },
        {
          items: [
            { title: "Celigo", description: "Integration Partner", image: "/partners/celigo.png", path: "#" },
            { title: "Opkey", description: "Testing Partner", image: "/partners/opkey.png", path: "#" }
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
            { title: "About Us", description: "Our mission and values", icon: "Users", path: "#" },
            { title: "Leadership", description: "Meet our executive team", icon: "Users", path: "#" },
            { title: "Careers", description: "Join our growing team", icon: "Briefcase", path: "#" }
          ]
        },
        {
          items: [
            { title: "Case Studies", description: "Client success stories", icon: "BookOpen", path: "#" },
            { title: "Insights", description: "Industry perspectives", icon: "Lightbulb", path: "#" },
            { title: "News", description: "Latest company updates", icon: "Activity", path: "#" }
          ]
        },
        {
          items: [
            { title: "Events", description: "Upcoming webinars & events", icon: "Map", path: "#" },
            { title: "Contact", description: "Get in touch with us", icon: "Heart", path: "#" }
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
            { title: "Blog", description: "Latest insights & articles", icon: "BookOpen", path: "#" },
            { title: "Whitepapers", description: "In-depth industry reports", icon: "FileText", path: "#" },
            { title: "Success Stories", description: "How we help clients win", icon: "Heart", path: "#" }
          ]
        },
        {
          items: [
            { title: "Guides", description: "Step-by-step tutorials", icon: "Map", path: "#" },
            { title: "Documentation", description: "Technical resources", icon: "FileText", path: "#" },
            { title: "FAQs", description: "Frequently asked questions", icon: "HelpCircle", path: "#" }
          ]
        },
        {
          items: [
            { title: "Support Center", description: "Get help from our team", icon: "LifeBuoy", path: "#" },
            { title: "Downloads", description: "Assets and templates", icon: "Download", path: "#" }
          ]
        }
      ]
    },

  ];
};
