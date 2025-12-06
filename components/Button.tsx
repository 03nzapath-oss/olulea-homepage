import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  subtitle?: string; // 日本語サブタイトル
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ to, href, children, subtitle, className = '', onClick }) => {
  const baseClasses = "inline-flex items-center justify-center border border-accent text-accent bg-white rounded px-6 py-3 text-sm tracking-widest hover:bg-accent hover:text-white transition-colors duration-300 min-w-[160px]";

  const content = subtitle ? (
    <span className="flex flex-col items-center gap-0.5">
      <span>{children}</span>
      <span className="text-xs tracking-normal opacity-70">{subtitle}</span>
    </span>
  ) : (
    children
  );

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${className}`} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {content}
    </button>
  );
};

export default Button;
