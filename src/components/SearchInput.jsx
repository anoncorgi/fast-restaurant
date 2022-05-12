import styles from "./SearchInput.module.css";

function SearchInput({
  className,
  placeholder,
  value,
  inputRef,
  onChange,
  onReset,
}) {
  return (
    <div className={cx(className, styles.searchInputWrapper)}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder={placeholder}
        ref={inputRef}
        value={value}
        onChange={onChange}
      />
      <span
        className={styles.reset}
        onClick={onReset}
      >
        𝗫
      </span>
    </div>
  );
}

// FIXME use classnames? move this to a util?
function cx(
  ...classNames
) {
  return classNames.filter(Boolean).join(' ');
}

export { SearchInput };
