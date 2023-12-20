const Select = (id, value, onChange) => {
  console.log(onChange);
  return (
    <select
      className="select w-full max-w-xs text-black lg:flex-1"
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
    </select>
  );
};

export default Select;
