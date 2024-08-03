import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  const filterId = useId();
  return (
    <div className={css.inputWrap}>
      <label htmlFor="filterId" className={css.inputLabel}>
        Find сontacts by name
      </label>
      <input
        className={css.input}
        type="text"
        id={filterId}
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}