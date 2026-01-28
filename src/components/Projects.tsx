import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { 
  Cloud, Server, Database, Network, Shield, Zap, 
  ArrowDown, ArrowUp, ExternalLink 
} from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Multi-Region AWS Infrastructure",
    description: "High-availability cloud architecture with automatic failover",
    architecture: [
      { icon: Cloud, label: "Route 53", position: "top" },
      { icon: Server, label: "EC2 Auto Scaling", position: "middle" },
      { icon: Database, label: "RDS Multi-AZ", position: "bottom" },
    ],
    techStack: ["AWS", "Terraform", "CloudFormation", "Python"],
    metrics: [
      { icon: ArrowDown, value: "50%", label: "Provisioning Time" },
      { icon: ArrowUp, value: "99.99%", label: "Uptime Achieved" },
    ],
    color: "primary",
  },
  {
    title: "Kubernetes Migration Project",
    description: "Containerized legacy applications for Azure Kubernetes Service",
    architecture: [
      { icon: Network, label: "Azure DevOps", position: "top" },
      { icon: Shield, label: "AKS Cluster", position: "middle" },
      { icon: Database, label: "Azure SQL", position: "bottom" },
    ],
    techStack: ["Azure", "Kubernetes", "Docker", "Helm"],
    metrics: [
      { icon: ArrowDown, value: "40%", label: "Infrastructure Cost" },
      { icon: Zap, value: "10x", label: "Deployment Speed" },
    ],
    color: "secondary",
  },
  {
    title: "Observability Platform",
    description: "Centralized monitoring and alerting for microservices",
    architecture: [
      { icon: Activity, label: "Prometheus", position: "top" },
      { icon: Server, label: "Grafana Stack", position: "middle" },
      { icon: Zap, label: "Alert Manager", position: "bottom" },
    ],
    techStack: ["Grafana", "Prometheus", "Loki", "Terraform"],
    metrics: [
      { icon: ArrowDown, value: "80%", label: "MTTR Reduction" },
      { icon: ArrowUp, value: "100%", label: "Visibility" },
    ],
    color: "success",
  },
];

import { Activity } from "lucide-react";

export const Projects = () => {
  const colorClasses = {
    primary: {
      border: "border-primary/30",
      bg: "bg-primary/10",
      text: "text-primary",
    },
    secondary: {
      border: "border-secondary/30",
      bg: "bg-secondary/10",
      text: "text-secondary",
    },
    success: {
      border: "border-success/30",
      bg: "bg-success/10",
      text: "text-success",
    },
  };

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
            <Server className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">ARCHITECTURE MODE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Infrastructure Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world cloud architectures and automation solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colors = colorClasses[project.color as keyof typeof colorClasses];
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <GlassCard className="p-6 h-full flex flex-col group">
                  {/* Architecture Diagram */}
                  <div className={`p-6 rounded-xl ${colors.bg} mb-6 relative overflow-hidden`}>
                    <div className="flex flex-col items-center gap-4">
                      {project.architecture.map((node, nodeIndex) => (
                        <div key={node.label} className="relative">
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + nodeIndex * 0.1 }}
                            className={`
                              w-20 h-20 rounded-xl bg-card border ${colors.border}
                              flex flex-col items-center justify-center gap-1
                              group-hover:border-opacity-100 transition-all duration-300
                            `}
                          >
                            <node.icon className={`w-6 h-6 ${colors.text}`} />
                            <span className="text-xs text-muted-foreground text-center px-1">
                              {node.label}
                            </span>
                          </motion.div>
                          {nodeIndex < project.architecture.length - 1 && (
                            <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-0.5 h-4 ${colors.bg}`} />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className={`px-2 py-1 text-xs rounded-md ${colors.bg} ${colors.text}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="mt-auto grid grid-cols-2 gap-4">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <metric.icon className={`w-4 h-4 ${colors.text}`} />
                          <span className={`font-mono font-bold ${colors.text}`}>
                            {metric.value}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
