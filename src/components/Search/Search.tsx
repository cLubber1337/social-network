import React, { useCallback, useContext, useState } from "react"
import styles from "components/Search/search.module.css"
import { SearchContext } from "App"
import debounce from "lodash/debounce"

export const Search = () => {
  const [value, setValue] = useState("")
  const { setSearchInput } = useContext(SearchContext)
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
    updateSearchVale(e.currentTarget.value)
  }

  const updateSearchVale = useCallback(
    debounce((str) => {
      setSearchInput(str)
    }, 1000),
    []
  )

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
