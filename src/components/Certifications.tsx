import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "AWS Solutions Architect",
    level: "Associate",
    provider: "Amazon Web Services",
    color: "primary",
    year: "2023",
  },
  {
    name: "Azure Solutions Architect",
    level: "Expert",
    provider: "Microsoft",
    color: "secondary",
    year: "2024",
  },
  {
    name: "Certified Kubernetes Admin",
    level: "CKA",
    provider: "CNCF",
    color: "success",
    year: "2023",
  },
  {
    name: "HashiCorp Terraform",
    level: "Associate",
    provider: "HashiCorp",
    color: "primary",
    year: "2024",
  },
];

export const Certifications = () => {
  const colorClasses = {
    primary: {
      border: "border-primary/50",
      bg: "bg-primary/10",
      text: "text-primary",
      glow: "group-hover:shadow-[0_0_40px_rgba(255,153,0,0.2)]",
    },
    secondary: {
      border: "border-secondary/50",
      bg: "bg-secondary/10",
      text: "text-secondary",
      glow: "group-hover:shadow-[0_0_40px_rgba(0,120,212,0.2)]",
    },
    success: {
      border: "border-success/50",
      bg: "bg-success/10",
      text: "text-success",
      glow: "group-hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]",
    },
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="container px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
            <Award className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Credentials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Validated expertise across cloud platforms and DevOps tools
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const colors = colorClasses[cert.color as keyof typeof colorClasses];
            
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div 
                  className={`
                    glass-panel p-6 h-full flex flex-col items-center text-center
                    border-2 ${colors.border} ${colors.glow}
                    transition-all duration-500 cursor-pointer
                    hover:border-opacity-100
                  `}
                >
                  {/* Badge Icon */}
                  <motion.div
                    className={`
                      w-20 h-20 rounded-2xl ${colors.bg} 
                      flex items-center justify-center mb-4
                      group-hover:scale-110 transition-transform duration-300
                    `}
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Award className={`w-10 h-10 ${colors.text}`} />
                  </motion.div>

                  {/* Cert Info */}
                  <span className={`text-xs font-mono ${colors.text} mb-2`}>
                    {cert.level}
                  </span>
                  <h3 className="font-semibold text-foreground mb-1">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{cert.provider}</p>
                  
                  {/* Year Badge */}
                  <span className="mt-auto px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground">
                    Earned {cert.year}
                  </span>

                  {/* Hover Action */}
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink className={`w-4 h-4 ${colors.text}`} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
