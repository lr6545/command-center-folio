import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { AnimatedCounter } from "./AnimatedCounter";
import { Code, Hammer, TestTube, Rocket, Activity, ArrowRight, CheckCircle } from "lucide-react";

const pipelineStages = [
  { id: "code", name: "Code", icon: Code, status: "complete", description: "Git push triggers pipeline" },
  { id: "build", name: "Build", icon: Hammer, status: "complete", description: "Docker containerization" },
  { id: "test", name: "Test", icon: TestTube, status: "complete", description: "Automated test suites" },
  { id: "deploy", name: "Deploy", icon: Rocket, status: "active", description: "Blue-green deployment" },
  { id: "monitor", name: "Monitor", icon: Activity, status: "pending", description: "Real-time observability" },
];

const metrics = [
  { label: "Build Time Reduced", value: 60, suffix: "%" },
  { label: "Deployment Failures", value: 95, suffix: "% ↓" },
  { label: "Automation Coverage", value: 98, suffix: "%" },
];

export const PipelineView = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">CI/CD PIPELINE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Automated Delivery Pipeline
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end automation from code commit to production deployment
          </p>
        </motion.div>

        {/* Pipeline Visualization */}
        <GlassCard className="p-8 mb-12">
          {/* Desktop Pipeline */}
          <div className="hidden md:flex items-start justify-between relative pt-2">
            {/* Connector Line */}
            <div className="absolute top-10 left-8 right-8 h-1 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-success via-primary to-primary/30 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "75%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
              />
            </div>

            {pipelineStages.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.12, duration: 0.4 }}
                className="relative z-10 flex flex-col items-center flex-1"
              >
                <div 
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-3 transition-all duration-300 ${
                    stage.status === "complete" 
                      ? "bg-success/20 border-2 border-success" 
                      : stage.status === "active"
                      ? "bg-primary/20 border-2 border-primary animate-pulse"
                      : "bg-muted border-2 border-muted-foreground/30"
                  }`}
                >
                  {stage.status === "complete" ? (
                    <CheckCircle className="w-7 h-7 text-success" />
                  ) : (
                    <stage.icon className={`w-7 h-7 ${stage.status === "active" ? "text-primary" : "text-muted-foreground"}`} />
                  )}
                </div>
                <span className={`font-medium mb-1 text-sm ${stage.status === "pending" ? "text-muted-foreground" : "text-foreground"}`}>
                  {stage.name}
                </span>
                <span className="text-xs text-muted-foreground text-center max-w-[110px]">
                  {stage.description}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Mobile Pipeline (Vertical) */}
          <div className="md:hidden space-y-4">
            {pipelineStages.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="flex items-center gap-4"
              >
                <div 
                  className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${
                    stage.status === "complete" 
                      ? "bg-success/20 border border-success" 
                      : stage.status === "active"
                      ? "bg-primary/20 border border-primary"
                      : "bg-muted border border-muted-foreground/30"
                  }`}
                >
                  {stage.status === "complete" ? (
                    <CheckCircle className="w-6 h-6 text-success" />
                  ) : (
                    <stage.icon className={`w-6 h-6 ${stage.status === "active" ? "text-primary" : "text-muted-foreground"}`} />
                  )}
                </div>
                <div className="flex-1">
                  <span className="font-medium text-foreground">{stage.name}</span>
                  <p className="text-sm text-muted-foreground">{stage.description}</p>
                </div>
                {index < pipelineStages.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-muted-foreground rotate-90" />
                )}
              </motion.div>
            ))}
          </div>
        </GlassCard>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <GlassCard key={metric.label} delay={0.2 + index * 0.1} className="p-6 text-center">
              <p className="metric-value text-primary mb-2">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </p>
              <p className="metric-label">{metric.label}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
