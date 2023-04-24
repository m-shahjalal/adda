import { useMutation } from '@apollo/client';
import { DELETE_COMMENT_MUTATION } from '../lib/mutation';
import { COMMENTS_BY_POST_ID_QUERY } from '../lib/queries';
import CommentList from './CommentList';

interface CommentsPropsType {
  comment: [id: number, content: string];
  postId: number;
}

const Comments: React.FC<CommentsPropsType> = ({ comment, postId }) => {
  const [deleteComment] = useMutation(DELETE_COMMENT_MUTATION, {
    refetchQueries: () => [
      {
        query: COMMENTS_BY_POST_ID_QUERY,
        variables: { id: postId },
      },
    ],
  });

  const deleteCommentHandler = async (id: number) => {
    if (id) {
      await deleteComment({ variables: { id } });
    }
  };

  return (
    <div>
      {comment?.map((comment: any) => (
        <CommentList
          key={comment.id}
          comment={comment?.attributes?.content}
          deleteCommentHandler={deleteCommentHandler}
          commentId={comment.id}
          postId={postId}
        />
      ))}
    </div>
  );
};

export default Comments;
