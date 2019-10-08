import React from 'react'

function SearchUserForm(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit} onChange={props.handleChange} >
        <input
          type="search"
          value={props.value}
          placeholder="Search Github User name"
        />
      </form>
    </div>
  )
}

export default SearchUserForm
