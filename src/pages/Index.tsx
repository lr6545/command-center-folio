import { Hero } from "@/components/Hero";
import { SkillsDashboard } from "@/components/SkillsDashboard";
import { PipelineView } from "@/components/PipelineView";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { TerminalContact } from "@/components/TerminalContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <SkillsDashboard />
      <PipelineView />
      <Projects />
      <Certifications />
      <ExperienceTimeline />
      <TerminalContact />
    </div>
  );
};

export default Index;
