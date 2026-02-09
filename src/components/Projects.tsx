import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { 
  Cloud, Server, Database, Network, Shield, Zap, Activity,
  ArrowDown, ArrowUp 
} from "lucide-react";

const projects = [
  {
    title: "Multi-Region AWS Infrastructure",
    description: "High-availability cloud architecture with automatic failover",
    architecture: [
      { icon: Cloud, label: "Route 53" },
      { icon: Server, label: "EC2 Auto Scaling" },
      { icon: Database, label: "RDS Multi-AZ" },
    ],
    techStack: ["AWS", "Terraform", "CloudFormation", "Python"],
    metrics: [
      { icon: ArrowDown, value: "50%", label: "Provisioning Time" },
      { icon: ArrowUp, value: "99.99%", label: "Uptime Achieved" },
    ],
    color: "primary" as const,
  },
  {
    title: "Kubernetes Migration Project",
    description: "Containerized legacy applications for Azure Kubernetes Service",
    architecture: [
      { icon: Network, label: "Azure DevOps" },
      { icon: Shield, label: "AKS Cluster" },
      { icon: Database, label: "Azure SQL" },
    ],
    techStack: ["Azure", "Kubernetes", "Docker", "Helm"],
    metrics: [
      { icon: ArrowDown, value: "40%", label: "Infrastructure Cost" },
      { icon: Zap, value: "10x", label: "Deployment Speed" },
    ],
    color: "secondary" as const,
  },
  {
    title: "Observability Platform",
    description: "Centralized monitoring and alerting for microservices",
    architecture: [
      { icon: Activity, label: "Prometheus" },
      { icon: Server, label: "Grafana Stack" },
      { icon: Zap, label: "Alert Manager" },
    ],
    techStack: ["Grafana", "Prometheus", "Loki", "Terraform"],
    metrics: [
      { icon: ArrowDown, value: "80%", label: "MTTR Reduction" },
      { icon: ArrowUp, value: "100%", label: "Visibility" },
    ],
    color: "success" as const,
  },
];

const colorMap = {
  primary: {
    border: "border-primary/30",
    bg: "bg-primary/10",
    text: "text-primary",
    connector: "bg-primary/30",
  },
  secondary: {
    border: "border-secondary/30",
    bg: "bg-secondary/10",
    text: "text-secondary",
    connector: "bg-secondary/30",
  },
  success: {
    border: "border-success/30",
    bg: "bg-success/10",
    text: "text-success",
    connector: "bg-success/30",
  },
};

export const Projects = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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
            const colors = colorMap[project.color];
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
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
                            transition={{ delay: index * 0.1 + nodeIndex * 0.12, duration: 0.4 }}
                            className={`w-20 h-20 rounded-xl bg-card border ${colors.border} flex flex-col items-center justify-center gap-1 group-hover:border-opacity-100 transition-all duration-300`}
                          >
                            <node.icon className={`w-6 h-6 ${colors.text}`} />
                            <span className="text-xs text-muted-foreground text-center px-1">
                              {node.label}
                            </span>
                          </motion.div>
                          {nodeIndex < project.architecture.length - 1 && (
                            <div className={`mx-auto w-0.5 h-4 ${colors.connector}`} />
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
