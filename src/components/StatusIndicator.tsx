import { motion } from "framer-motion";

interface StatusIndicatorProps {
  status: "online" | "warning" | "offline";
  label?: string;
  showLabel?: boolean;
}

export const StatusIndicator = ({ status, label, showLabel = true }: StatusIndicatorProps) => {
  const colors = {
    online: "bg-success",
    warning: "bg-primary",
    offline: "bg-destructive",
  };

  const labels = {
    online: "Online",
    warning: "Warning",
    offline: "Offline",
  };

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <motion.div
          className={`w-3 h-3 rounded-full ${colors[status]}`}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className={`absolute inset-0 w-3 h-3 rounded-full ${colors[status]}`}
          animate={{ scale: [1, 2], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      </div>
      {showLabel && (
        <span className="text-sm font-medium text-foreground">
          {label || labels[status]}
        </span>
      )}
    </div>
  );
};
