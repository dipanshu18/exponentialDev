export default function Button({
  text,
  icon,
  onClick,
}: {
  text: string;
  icon?: any;
  onClick?: () => void;
}) {
  return (
    <button onClick={onClick} className="btn btn-primary">
      {icon ? icon : undefined}
      {text}
    </button>
  );
}
