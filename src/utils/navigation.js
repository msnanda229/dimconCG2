export const generateNavigationData = () => {
  return [
    {
      slug: "cloud applications",
      name: "Cloud Applications",
      description: "Enterprise-grade cloud solutions to transform your operations and drive growth.",
      icon: "Cloud",
      featuredCTA: "Explore Cloud Solutions",
      columns: [
        {
          heading: "Platforms",
          items: [
            { title: "Oracle Cloud", description: "Enterprise cloud infrastructure", icon: "Database", path: "/oracle-cloud" },
            { title: "Oracle NetSuite", description: "Cloud ERP & business software", icon: "Server", path: "..innerpages/netsuite" },
            { title: "Salesforce", description: "Customer relationship management", icon: "Users", path: "..innerpages/salesforce" },
            { title: "Workday", description: "Finance and HR management", icon: "Briefcase", path: "..innerpages/workday" }
          ]
        },
        
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
          heading: "Implementation Services",
          items: [
            { title: "ERP Implementation", description: "End-to-end deployment", icon: "Server", path: "#" },
            { title: "CRM Implementation", description: "Customer platform setup", icon: "Users", path: "#" },
            { title: "HCM Implementation", description: "HR system integration", icon: "Briefcase", path: "#" }
          ]
        },
        {
          heading: "Consulting",
          items: [
            { title: "Digital Transformation", description: "Modernize your business", icon: "Zap", path: "#" },
            { title: "Cloud Strategy", description: "Roadmap to the cloud", icon: "Map", path: "#" },
            { title: "Technology Advisory", description: "Strategic IT guidance", icon: "Lightbulb", path: "#" }
          ]
        },
        {
          heading: "Managed Services",
          items: [
            { title: "AMS Support", description: "Application management", icon: "Settings", path: "#" },
            { title: "Monitoring", description: "24/7 system tracking", icon: "Activity", path: "#" },
            { title: "Performance Optimization", description: "Enhance system speed", icon: "TrendingUp", path: "#" }
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
            { title: "Oracle", description: "Platinum Partner", image: "/ai_logos/oracle.png", path: "#" },
            { title: "Salesforce", description: "Consulting Partner", image: "/ai_logos/salesforce.png", path: "#" }
          ]
        },
        {
          items: [
            { title: "Workday", description: "Services Partner", image: "/ai_logos/workday.png", path: "#" },
            { title: "NetSuite", description: "Alliance Partner", image: "/ai_logos/netsuite.png", path: "#" }
          ]
        },
        {
          items: [
            { title: "Celigo", description: "Integration Partner", image: "/ai_logos/celigo.png", path: "#" },
            { title: "Opkey", description: "Testing Partner", image: "/ai_logos/opkey.png", path: "#" }
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
