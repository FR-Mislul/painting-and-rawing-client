
const CommentCard = ({ comment }) => {
    return (
        <div>
            <p>{comment.userName}</p>
            <p>{comment.comment}</p>
        </div>
    );
};

export default CommentCard;