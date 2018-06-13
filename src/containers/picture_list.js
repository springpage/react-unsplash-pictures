import React, {Component} from 'react';
import {connect} from 'react-redux';

class PictureList extends Component{
  state={index:0};

  componentWillReceiveProps(nextProps){
    if (nextProps.photos != this.props.photos){
      this.setState({index:0});
    }
  }

  changePrevious(){
    const {index}=this.state;
    if(this.props.photos[index-1]){
      this.setState({index:index-1});
    }
  }
  changeNext(){
    const {index}=this.state;
    if(this.props.photos[index+1]){
      this.setState({index:index+1});
    }
  }

  renderPhoto(){
    const photo=this.props.photos[this.state.index];
    if(photo){
      return(
        <img className="img-fluid" src={photo.urls.regular}></img>
      )
    }
  }

  render(){
    return(
      <div>
        <div className="col-md-4"></div>
        <div className="col-md-4"><button onClick={this.changePrevious.bind(this)} type="button" className="btn btn-primary">Previous</button></div>
        <div className="col-md-4"><button onClick={this.changeNext.bind(this)} type="button" className="btn btn-success">Next</button></div>

        {this.renderPhoto()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {photos:state.photos};
}

export default connect(mapStateToProps)(PictureList);
