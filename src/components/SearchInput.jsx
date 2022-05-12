import cn from "classnames";

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
    <div className={cn(className, styles.searchInputWrapper)}>
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
        𝗫 {/* FIXME */}
      </span>
    </div>
  );
}

export { SearchInput };
