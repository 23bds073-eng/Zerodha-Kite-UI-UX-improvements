import './Input.css';

export default function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  prefix,
  suffix,
  className = '',
  ...props
}) {
  const classes = [
    'input-wrapper',
    error && 'input-error',
    disabled && 'input-disabled',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {label && <label className="input-label text-label-large">{label}</label>}
      <div className="input-container">
        {prefix && <span className="input-prefix">{prefix}</span>}
        <input
          type={type}
          className="input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
        {suffix && <span className="input-suffix text-body-medium text-neutral">{suffix}</span>}
      </div>
      {error && <span className="input-error-text text-body-small text-negative">{error}</span>}
    </div>
  );
}

