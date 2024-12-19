import React, { useState } from "react"

const SearchTerm = () => {
  const [term, setTerm] = useState('');
  console.log(term)

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.currentTarget.value;
    setTerm(inputValue)
  }
  return (
    <div>
      <input type="text" className="" value={term}  onChange={handleChangeInput} />
    </div>
  )
}
export default SearchTerm;