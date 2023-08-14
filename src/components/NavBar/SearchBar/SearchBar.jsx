import React, { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";

//Fonts & Icons
import { BsSearch } from "react-icons/bs";

//Styles
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  const navigate = useNavigate();
  const search = useRef();
  const handlesubmit = useCallback((event) => {
    event.preventDefault();

    if (search.current.value == "") return;

    navigate(`/results?name=${search.current.value}`);
    search.current.value = "";
  }, []);

  return (
    <form className={classes.form} on onSubmit={handlesubmit}>
      <input
        ref={search}
        type="text"
        placeholder="Search"
        className={classes.input}
      />
      <button type="submit" className={classes.button}>
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchBar;
