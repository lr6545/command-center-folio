import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { 
  Cloud, Server, Shield, Network, Zap, Database, 
  GitBranch, Container, Settings, Activity, Lock, Globe
} from "lucide-react";

interface SkillCategory {
  title: string;
  color: "aws" | "azure" | "tools";
  services: {
    name: string;
    icon: React.ElementType;
    description: string;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "AWS Services",
    color: "aws",
    services: [
      { name: "EC2", icon: Server, description: "Auto-scaling compute" },
      { name: "VPC", icon: Network, description: "Network architecture" },
      { name: "IAM", icon: Shield, description: "Security & access" },
      { name: "Lambda", icon: Zap, description: "Serverless functions" },
      { name: "CloudFormation", icon: Settings, description: "IaC templates" },
      { name: "Route 53", icon: Globe, description: "DNS management" },
    ],
  },
  {
    title: "Azure Services",
    color: "azure",
    services: [
      { name: "DevOps", icon: GitBranch, description: "CI/CD pipelines" },
      { name: "ARM", icon: Settings, description: "Resource manager" },
      { name: "Monitor", icon: Activity, description: "Observability" },
      { name: "Functions", icon: Zap, description: "Serverless compute" },
      { name: "AAD", icon: Lock, description: "Identity management" },
      { name: "AKS", icon: Container, description: "Kubernetes service" },
    ],
  },
  {
    title: "CI/CD & Tools",
    color: "tools",
    services: [
      { name: "Jenkins", icon: Settings, description: "Build automation" },
      { name: "GitHub Actions", icon: GitBranch, description: "Workflow automation" },
      { name: "Docker", icon: Container, description: "Containerization" },
      { name: "Terraform", icon: Cloud, description: "Infrastructure as Code" },
      { name: "Ansible", icon: Settings, description: "Configuration mgmt" },
      { name: "Kubernetes", icon: Database, description: "Container orchestration" },
    ],
  },
];

const colorClasses = {
  aws: {
    border: "border-primary/30",
    bg: "bg-primary/10",
    text: "text-primary",
    glow: "hover:shadow-[0_0_30px_rgba(255,153,0,0.15)]",
  },
  azure: {
    border: "border-secondary/30",
    bg: "bg-secondary/10",
    text: "text-secondary",
    glow: "hover:shadow-[0_0_30px_rgba(0,120,212,0.15)]",
  },
  tools: {
    border: "border-muted-foreground/30",
    bg: "bg-muted",
    text: "text-foreground",
    glow: "hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]",
  },
};

export const SkillsDashboard = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted mb-4">
            <Cloud className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">CLOUD SKILLS DASHBOARD</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technology Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise across cloud platforms, automation tools, and DevOps practices
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <GlassCard hover={false} className="p-6">
                {/* Category Header */}
                <div className={`flex items-center gap-3 mb-6 pb-4 border-b ${colorClasses[category.color].border}`}>
                  <div className={`p-2 rounded-lg ${colorClasses[category.color].bg}`}>
                    {category.color === "aws" && <span className="text-xs font-bold text-primary">AWS</span>}
                    {category.color === "azure" && <span className="text-xs font-bold text-secondary">AZ</span>}
                    {category.color === "tools" && <Settings className={`w-4 h-4 ${colorClasses[category.color].text}`} />}
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + serviceIndex * 0.05 }}
                      className={`
                        group p-3 rounded-xl bg-muted/50 border border-transparent
                        hover:${colorClasses[category.color].border} 
                        ${colorClasses[category.color].glow}
                        transition-all duration-300 cursor-pointer
                      `}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <service.icon className={`w-4 h-4 ${colorClasses[category.color].text} opacity-70 group-hover:opacity-100 transition-opacity`} />
                        <span className="text-sm font-medium text-foreground">{service.name}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{service.description}</p>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
