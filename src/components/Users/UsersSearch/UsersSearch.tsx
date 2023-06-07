import React, { useState } from "react"
import styles from "components/Users/UsersSearch/users-search.module.css"

export const UsersSearch = () => {
  const [value, setValue] = useState("")
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  const handleClickInput = () => {
    console.log("click")
  }
  return (
    <div className={styles.search}>
      <input
        className={styles.search__input}
        value={value}
        onChange={onChangeInput}
        onClick={handleClickInput}
        type="text"
        placeholder="Search..."
      />
    </div>
  )
}
