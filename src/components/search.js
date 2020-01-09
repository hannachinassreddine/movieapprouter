import React from "react";
import {connect} from 'react-redux'
import {search_movie} from '../store/actions/actions'

class search extends React.Component {
  state = {
    rating: ["", "", "", "", ""],
    ratingnumber: 0,
    
    
  };
  render() {
    return (
      <div className={"serchcontainer movielist"}>
        <div className={"navsearch"}>
          <input onChange={(e)=>this.props.search_movie({byname:e.target.value,byrate:this.props.Sbyrate})}></input>
          <button >Search</button>
        </div>
        <div className={"searchrating"}>
          <p>minimum rating</p>
          <span className="movierank2">
            {this.state.rating.map((el2, z) => (
              <i
                onClick={() => {
                  this.setState({ ratingnumber: z + 1 });
                  this.props.search_movie({byname:this.props.Sbyname,byrate:(z + 1)});
                }}
                className={
                  z < this.state.ratingnumber
                    ? "fas fa-star yellostars"
                    : "fas fa-star whitestars"
                }
              />
            ))}
          </span>
        </div>
      </div>
    );
  }
}
const Mapstatetoprops=state=>{
    return({Sbyname:state.searchvalue.byname,Sbyrate:state.searchvalue.byrate})
}
export default connect(Mapstatetoprops,{search_movie})(search);
