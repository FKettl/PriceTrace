import React, { useState } from "react"
import { Nav, Form } from "react-bootstrap"
import useOnclickOutside from "react-cool-onclickoutside"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"



function Search () {
  const [search, setSearch] = useState()

  const toggle = () => {
    setSearch(true)
  }

  const closeSearch = () => (search === true ? setSearch(false) : null)

  const ref = useOnclickOutside(() => {
    closeSearch()
  })

  return (
      <div className="w-1/4 m-auto relative">
      <Form
        className={"searchbar w-100"}
      >
          <input
            ref={ref}
            className="search-input w-100"
            type="text"
            name=""
            placeholder="Search..."
          />
        <div
          className="icon-bg relative"
        >
          <FontAwesomeIcon
              onClick={toggle}
              className="search-icon absolute right-2 top-2 align-middle"
              icon={faSearch}
          />
        </div>
      </Form>
    </div>
  )
}

export default Search;
