const Badge = ({ name }: { name: string }) => {
  return (
    <span className="bg-primary/20 text-white px-3 py-1 rounded-full text-sm inline-block">
      {name}
    </span>
  );
};

export default Badge;
