import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Terminal, Linkedin, Mail, FileText, Github } from "lucide-react";

const commands = [
  { cmd: "ssh", label: "linkedin", icon: Linkedin, url: "https://linkedin.com" },
  { cmd: "curl", label: "email", icon: Mail, url: "mailto:hello@devops.engineer" },
  { cmd: "wget", label: "resume", icon: FileText, url: "#" },
  { cmd: "git clone", label: "github", icon: Github, url: "https://github.com" },
];

export const TerminalContact = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const promptText = "$ run connect";

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= promptText.length) {
        setDisplayedText(promptText.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 mb-4">
            <Terminal className="w-4 h-4 text-success" />
            <span className="text-sm font-medium text-success">TERMINAL</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next infrastructure project
          </p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-panel overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-primary/80" />
                <div className="w-3 h-3 rounded-full bg-success/80" />
              </div>
              <span className="ml-4 text-sm font-mono text-muted-foreground">
                devops@portfolio:~
              </span>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono">
              {/* Prompt Animation */}
              <div className="text-success mb-6 text-lg">
                {displayedText}
                <span 
                  className={`inline-block w-2.5 h-5 bg-success ml-1 ${
                    cursorVisible ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-100`}
                />
              </div>

              {/* Command Outputs */}
              <div className="space-y-3">
                <p className="text-muted-foreground text-sm mb-4">
                  Available connections:
                </p>
                
                {commands.map((command, index) => (
                  <motion.a
                    key={command.label}
                    href={command.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="
                      group flex items-center gap-3 p-3 rounded-lg
                      bg-muted/30 hover:bg-muted/50 border border-transparent
                      hover:border-success/30 transition-all duration-300
                      cursor-pointer
                    "
                  >
                    <span className="text-primary">{command.cmd}</span>
                    <span className="text-success group-hover:text-success/80">
                      {command.label}
                    </span>
                    <command.icon className="w-4 h-4 text-muted-foreground group-hover:text-success ml-auto transition-colors" />
                  </motion.a>
                ))}
              </div>

              {/* Status Line */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="mt-6 pt-4 border-t border-border text-sm text-muted-foreground"
              >
                <span className="text-success">✓</span> Ready to accept connections
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            Built with <span className="text-primary">React</span> • Deployed on <span className="text-secondary">Cloud</span> • 
            <span className="text-success"> Always Available</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
