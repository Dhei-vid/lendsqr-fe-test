import './searchbar.styles.scss'
import { MdSearch as Search } from 'react-icons/md'

const SearchBar = () => {
  return (
    <div className='wrap'>
      <div className='search'>
        <input
          type='text'
          className='searchTerm'
          placeholder='search for anything'
        />
        <button type='submit' className='searchButton'>
          <Search />
        </button>
      </div>
    </div>
  )
}

export default SearchBar
