import './filter.styles.scss'

const Filter = () => {
  return (
    <div className='filter-container'>
      <form>
        <label>
          Organization
          <select name='organization' id='organization'>
            <option value='org1'>org1</option>
            <option value='org2'>org2</option>
            <option value='org3'>org3</option>
            <option value='org4'>org4</option>
          </select>
        </label>

        <label>
          Username
          <input name='username' type='text' />
        </label>

        <label>
          Email
          <input name='email' type='text' />
        </label>

        <label>
          Date
          <input name='date' type='date' />
        </label>

        <label>
          Phone Number
          <input name='phone' type='text' />
        </label>

        <label>
          Status
          <input name='status' type='select' />
        </label>
      </form>
    </div>
  )
}

export default Filter
