import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Building2, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "TechCorp Global",
    role: "Senior DevOps Engineer",
    duration: "2023 - Present",
    platforms: ["AWS", "Azure"],
    achievements: [
      "Led migration of 50+ microservices to Kubernetes",
      "Reduced deployment time by 70% with GitOps practices",
      "Implemented zero-downtime deployment strategies",
    ],
  },
  {
    company: "CloudScale Solutions",
    role: "DevOps Engineer",
    duration: "2021 - 2023",
    platforms: ["AWS"],
    achievements: [
      "Automated infrastructure provisioning with Terraform",
      "Built CI/CD pipelines serving 15 development teams",
      "Achieved 99.9% uptime for production systems",
    ],
  },
  {
    company: "StartupX Inc",
    role: "Junior DevOps Engineer",
    duration: "2020 - 2021",
    platforms: ["AWS"],
    achievements: [
      "Containerized legacy applications using Docker",
      "Set up monitoring and alerting with Prometheus",
      "Reduced infrastructure costs by 30%",
    ],
  },
];

export const ExperienceTimeline = () => {
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
            <Building2 className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">CAREER TIMELINE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through cloud infrastructure and DevOps excellence
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-muted md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-12 last:mb-0 pl-12 md:pl-0 ${
                index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
              }`}
            >
              {/* Timeline Node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.1, type: "spring" }}
                className={`
                  absolute left-0 md:left-1/2 w-8 h-8 rounded-full 
                  bg-card border-2 border-primary
                  flex items-center justify-center
                  md:-translate-x-1/2 z-10
                `}
              >
                <div className="w-3 h-3 rounded-full bg-primary" />
              </motion.div>

              {/* Content Card */}
              <GlassCard 
                className={`p-6 md:max-w-md ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
                delay={index * 0.2}
              >
                {/* Duration */}
                <div className={`flex items-center gap-2 mb-3 ${
                  index % 2 === 0 ? "md:justify-end" : ""
                }`}>
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-mono text-muted-foreground">{exp.duration}</span>
                </div>

                {/* Role & Company */}
                <h3 className="text-lg font-semibold text-foreground mb-1">{exp.role}</h3>
                <p className="text-primary font-medium mb-3">{exp.company}</p>

                {/* Platform Badges */}
                <div className={`flex gap-2 mb-4 ${
                  index % 2 === 0 ? "md:justify-end" : ""
                }`}>
                  {exp.platforms.map((platform) => (
                    <span 
                      key={platform}
                      className={`
                        px-2 py-1 text-xs rounded-md font-medium
                        ${platform === "AWS" 
                          ? "bg-primary/10 text-primary" 
                          : "bg-secondary/10 text-secondary"
                        }
                      `}
                    >
                      {platform}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.li
                      key={achIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + achIndex * 0.05 }}
                      className={`flex items-start gap-2 text-sm text-muted-foreground ${
                        index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""
                      }`}
                    >
                      <ChevronRight className={`w-4 h-4 text-success flex-shrink-0 mt-0.5 ${
                        index % 2 === 0 ? "md:rotate-180" : ""
                      }`} />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
