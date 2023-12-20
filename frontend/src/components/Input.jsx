/* eslint-disable react/prop-types */

const Input = ({
  type,
  placeholder,
  disabled,
  val,
  id,
  value,
  onChange,
  validateEmail,
}) => {
  if (disabled === true) {
    return (
      <input
        type={type}
        placeholder={val}
        className="input input-bordered input-error w-full max-w-xs text-black"
        disabled
      />
    );
  }
  if (id === "name") {
    <input
      type={type}
      placeholder={placeholder}
      className="input input-bordered input-error w-full max-w-xs text-black"
      id={id}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      required
    />;
  }
  if (id === "email") {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered input-error w-full max-w-xs text-black"
        id={id}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          validateEmail();
        }}
        required
      />
    );
  }
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input input-bordered input-error w-full max-w-xs text-black"
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
