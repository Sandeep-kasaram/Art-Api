import { useState } from "react";
import HeaderLogo from "../../../icons/HeaderLogo";
import "./Header.css";

function Header(props) {

  const [searchTerm, setSearchTerm]= useState('');

  const handleSearch = () =>{
    if(typeof props.handleSearch === 'function'){
      props.handleSearch(searchTerm)
    }
  }

  return (
      <div className="header w-100 row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3 m-0">
        <div className="col justify-content-md-start justify-content-sm-center d-flex justify-content-center justify-content-lg-start">
          <div className="logo">
            <HeaderLogo />
          </div>
          <div class="logo_title">Art API</div>
        </div>
        <div className="col justify-content-md-end justify-content-sm-center d-flex justify-content-center justify-content-lg-end">
          <input className="search_field" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}  placeholder="Please type in your search"/>
          <button className="search_button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
  );
}

export default Header;
