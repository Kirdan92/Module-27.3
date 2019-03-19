import React from 'react';
import './Comment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';


class Comment extends React.Component {
	constructor(props) {
  	super(props);
    
    this.state = {
    	edit: false,
    	text: this.props.text
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeText = this.changeText.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  
  changeText(event) {
  	this.setState({text: event.target.value});
  }
  
  showEdit() {
  	this.setState({
    	edit: !this.state.edit
    })
  }

  handleSubmit(event) {
	 event.preventDefault();
	 this.props.editComment(this.props.id, this.state.text);
  }
  
  handleRemove(event) {
    this.props.removeComment(this.props.id);
  }
  render() {
  	return (
    	<li className="comment">
        <span onClick={this.showEdit.bind(this)}>
          {this.state.edit ? (
          	<form onSubmit={this.handleSubmit}>
          		<input autoFocus onChange={this.changeText} type="text" value={this.state.text}/> 
          		<button onClick={this.handleSubmit}>Ok</button>      		
          	</form>
          	) : this.props.text}
          
        </span>
        <div className="votes-container">
          <span>votes: {this.props.votes}</span> 
          <button className="btn-vote btn-up" onClick={() => this.props.thumbUpComment(this.props.id)}><FontAwesomeIcon icon={faThumbsUp} /></button> 
          <button className="btn-vote btn-down" onClick={() => this.props.thumbDownComment(this.props.id)}><FontAwesomeIcon icon={faThumbsDown} /></button>
        </div>
        <button className="btn-remove" onClick={() => this.handleRemove()}>X</button>
      </li>
    );
  }
}

export default Comment;