import React from "react";
import { connect } from "react-redux";
import { remove_movie, edit_movie } from "../store/actions/actions";
import Modal from "./modal";
import Edit from "./Edit";
// import { Link } from "@material-ui/core";
import {Link} from 'react-router-dom';
// import Desc from './description'

const movie = ({ movieslist, searchvalue, remove_movie, edit_movie }) => {
  return (
    <div className="movielist">
      {movieslist
        .filter(movie =>
          movie.movie.name
            .toLowerCase()
            .includes(searchvalue.byname.toLowerCase())
        )
        .filter(movie => searchvalue.byrate <= movie.movie.rank.ranknumber)
        .map(el => (
          <div className="moviecontainer">
            <span className="movierank">
              {el.movie.rank.stars.map((el2, i) => (
                <i
                  className={
                    i < el.movie.rank.ranknumber
                      ? "fas fa-star yellostars"
                      : "fas fa-star whitestars"
                  }
                />
              ))}
            </span>
            <img src={el.movie.url} />
            <p className="moviename">{el.movie.name}</p>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center"
              }}
            >
              <button style={{ alignSelf: "center" }}><Link to='/Desc'> Movie Description</Link></button>
            </div>
            {/* <Desc /> */}
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-around"
              }}
            >
              <Edit id={el.id} />
              <button onClick={() => remove_movie(el.id)}>Delete</button>
            </div>
          </div>
        ))}
      <div className={"modalcontainer moviecontainer"}>
        <Modal />
      </div>
    </div>
  );
};

const MapStateToProps = state => {
  return { movieslist: state.movieslist, searchvalue: state.searchvalue };
};
export default connect(MapStateToProps, { remove_movie, edit_movie })(movie);
