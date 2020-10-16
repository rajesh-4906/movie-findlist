import React from 'react';
import Nav from './Nav';

const SearchArea = (props) => {
    return (
        <div className="container">
            <div className="row">
                <section className="col s4 offset-s4">
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className="input-field">
                            <input placeholder="Search a Movie" type="text" onChange={props.handleChange}/>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}
export default SearchArea;