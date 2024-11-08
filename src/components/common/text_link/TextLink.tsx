"use client";
interface LinkProps {
  name: string;
  href: string;
  color?: string;
}

const TextLink: React.FC<LinkProps> = ({ name, href, color }: LinkProps) => {
  return (
    <a
      href={href}
      target="__blank"
      className={`hover:underline ${color == "white" ? ` text-white` : color}`}
    >
      {name}
    </a>
  );
};

export default TextLink;
