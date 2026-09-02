interface TechBadgeProps {
  label: string;
}

const TechBadge = ({ label }: TechBadgeProps) => {
  return (
    <span className="max-w-full break-words px-2 py-1 bg-accent/10 text-accent rounded text-xs font-mono leading-4 border border-accent/20">
      {label}
    </span>
  );
};

export default TechBadge;
