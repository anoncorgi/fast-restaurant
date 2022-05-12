function SearchInput({
  className,
  placeholder,
  value,
  inputRef,
  onChange,
  onReset,
}) {
  return (
    <>
      <input
        className={className}
        type="text"
        placeholder={placeholder}
        ref={inputRef}
        value={value}
        onChange={onChange}
      />
      <span onClick={onReset}>𝗫</span>
    </>
  );
}

export { SearchInput };
