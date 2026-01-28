import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { AnimatedCounter } from "./AnimatedCounter";
import { StatusIndicator } from "./StatusIndicator";
import { Cloud, Rocket, Shield, ArrowRight, Server } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  const metrics = [
    { 
      icon: Shield, 
      value: 99.9, 
      suffix: "%", 
      label: "Uptime", 
      color: "text-success" 
    },
    { 
      icon: Rocket, 
      value: 500, 
      suffix: "+", 
      label: "Deployments Automated", 
      color: "text-primary" 
    },
    { 
      icon: Cloud, 
      value: 3, 
      suffix: "+", 
      label: "Years Experience", 
      color: "text-secondary" 
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-5" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 py-20">
        {/* Top Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-12"
        >
          <div className="flex items-center gap-3">
            <Server className="w-5 h-5 text-muted-foreground" />
            <span className="font-mono text-sm text-muted-foreground">devops-portfolio.sys</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-muted-foreground hidden sm:block">
              SYSTEM STATUS:
            </span>
            <StatusIndicator status="online" label="ALL SYSTEMS OPERATIONAL" />
          </div>
        </motion.div>

        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Available for new opportunities</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="text-foreground">DevOps</span>
              <br />
              <span className="text-gradient-aws">Engineer</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Building reliable, scalable cloud infrastructure. Automating everything. 
              Specializing in <span className="text-primary font-medium">AWS</span> & <span className="text-secondary font-medium">Azure</span> ecosystems.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                View Architecture
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-secondary/50 text-secondary hover:bg-secondary/10"
              >
                View Pipelines
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Metrics Dashboard */}
          <div className="grid gap-4">
            {metrics.map((metric, index) => (
              <GlassCard key={metric.label} delay={0.3 + index * 0.1} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-muted ${metric.color}`}>
                      <metric.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="metric-label">{metric.label}</p>
                      <p className={`metric-value ${metric.color}`}>
                        <AnimatedCounter 
                          value={metric.value} 
                          suffix={metric.suffix}
                          decimals={metric.value % 1 !== 0 ? 1 : 0}
                        />
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <StatusIndicator status="online" showLabel={false} />
                  </div>
                </div>
              </GlassCard>
            ))}

            {/* Cloud Badges */}
            <GlassCard delay={0.6} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">AWS</span>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 border border-secondary/30 flex items-center justify-center">
                      <span className="text-xs font-bold text-secondary">AZ</span>
                    </div>
                  </div>
                  <div>
                    <p className="metric-label">Certified On</p>
                    <p className="text-foreground font-semibold">AWS & Azure</p>
                  </div>
                </div>
                <Shield className="w-5 h-5 text-success" />
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
