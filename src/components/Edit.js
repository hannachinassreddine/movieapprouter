import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { connect } from "react-redux";
import { edit_movie } from "../store/actions/actions";
class editMovie extends Component {
  state = {
    open: false,
    movietoedit:'',
    name: "",
    src: "",
    rank: ""
  };
  handelnewmoviesrc = e => {
    this.setState({ src: e.target.value });
  };
  handelnewmovierank = e => {
    this.setState({ rank: e.target.value });
  };
  handelnewmoviename = e => {
    this.setState({ name: e.target.value });
  };
  handleOpen = () => {
    this.setState({
      open: true,
      
      name: this.props.movieslist.filter(
        movie => movie.id === this.props.id
      )[0].movie.name,
      src: this.props.movieslist.filter(
        movie => movie.id === this.props.id
      )[0].movie.url,
      rank: this.props.movieslist.filter(
        movie => movie.id === this.props.id
      )[0].movie.rank.ranknumber,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div>
        <button type="button" onClick={this.handleOpen}>
          Edit
        </button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className="modal"
          open={this.state.open}
          onClose={this.handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={this.state.open}>
            <div className="paper">
              <h2>Edit Movies :</h2>
              <input
                name="name"
                type="text"
                placeholder="title"
                onChange={this.handelnewmoviename}
                value={this.state.name}
              />
              <input
                name="link"
                type="text"
                placeholder="Link"
                onChange={this.handelnewmoviesrc}
                value={this.state.src}
              />

              <input
                name="rate"
                type="text"
                placeholder="rate"
                onChange={this.handelnewmovierank}
                value={this.state.rank}
              />
              <button
                onClick={() => {
                  this.props.edit_movie({
                    id: this.props.id,
                    movie: {
                      name: this.state.name,
                      rank: {
                        stars: ["", "", "", "", ""],
                        ranknumber: this.state.rank
                      },
                      url: this.state.src
                    }
                  });
                  this.setState({ name: "", src: "", rank: "",open: false})
                  
                }}
              >
                Edit
              </button>
              <button onClick={this.handleClose}>Cancel</button>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }
}
const MapStateToProps = state => {
  return { movieslist: state.movieslist };
};
export default connect(MapStateToProps, { edit_movie })(editMovie);
