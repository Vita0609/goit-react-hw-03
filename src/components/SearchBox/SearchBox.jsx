import s from './SearchBox.module.css'
import { useId } from 'react';

const SearchBox = ({value, onChange}) => {
    const id = useId();
    return (
        <div className={s.searchBox}>
            <label htmlFor={id} className={s.searchLabel}>Find contacts by name</label>
            <input className={s.search}
                id={id}
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Enter name"
            />
        </div>
    )
}

export default SearchBox