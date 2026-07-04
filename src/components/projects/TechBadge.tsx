interface TechBadgeProps {
  label: string;
}

const TechBadge = ({ label }: TechBadgeProps) => {
  return (
    <span className="max-w-full break-words px-2 py-1 bg-accent-primary/10 text-accent-primary rounded text-xs leading-4 border border-accent-primary/20">
      {label}
    </span>
  );
};

export default TechBadge;
