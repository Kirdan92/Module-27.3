import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUpComment, thumbDownComment, editComment, removeComment} from './actions';

const mapDispatchToProps = dispatch => ({
	thumbUpComment: (id) => dispatch(thumbUpComment(id)),
	thumbDownComment: (id) => dispatch(thumbDownComment(id)),
	editComment: (id, text) => dispatch(editComment(id,text)),
	removeComment: (id, text) => dispatch(editComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);