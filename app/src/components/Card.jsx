import './Card.css';

export default function Card({ 
  children, 
  variant = 'default',
  padding = 'default',
  className = '',
  onClick
}) {
  const classes = [
    'card',
    `card-${variant}`,
    `card-padding-${padding}`,
    onClick && 'card-clickable',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
}

