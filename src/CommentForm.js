import React from 'react';
import './CommentForm.css';
class CommentForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};

		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({text: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.addComment(this.state.text);
		this.setState({text: ''})
	}

	render() {
		return(
			<div className="comment-form-container">
				<form onSubmit={this.handleSubmit}>
					
					<label>Dodaj komentarz</label>
					<div>
						<textarea id="commentArea" rows="5" value={this.state.text} onChange={this.handleChange} placeholder="Treść komentarza" />
					</div>
						<button className="btn-add-comment">Dodaj</button>
					
				</form>
			</div>
		);
	}
}

export default CommentForm;