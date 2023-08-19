import { ChangeEvent, FC } from 'react'
import { FaSearch } from 'react-icons/fa';

type PropsSearch = {
    placeholder: string,
    value: string
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}
const SearchComponent: FC<PropsSearch> = ({ placeholder, value, onChangeHandler }) => {
    console.log(value)
    return (
        <div className="search-container">
            <FaSearch />
            <input className='search-input' placeholder={placeholder} value={value} onChange={onChangeHandler} />
        </div>
    )
}

export default SearchComponent
