import React from 'react';
function SearchBox() {
    return ( 

        // {/* <!-- Search Box --> */}
        <div id="search_block_top">
        <form id="searchbox" method="get" action="url">
            <input className="search_query form-control ac_input" type="text" placeholder="Search"/>
            <button type="submit" className="btn btn-default button-search"> <span>Search</span> </button>
        </form>
        </div>

    )}

    export default SearchBox