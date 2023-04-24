import { useMutation } from '@apollo/client';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { DELETE_COMMENT_MUTATION } from '../lib/mutation';
import { COMMENTS_BY_POST_ID_QUERY } from '../lib/queries';

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

  console.log('postid - comment', postId);

  const deleteCommentHandler = async (id: number) => {
    console.log(id);
    if (id) {
      await deleteComment({ variables: { id } });
    }
  };
  const editCommentHandler = (id: number) => {
    console.log('Comment-Edited', id);
  };

  console.log(comment);

  return (
    <div>
      {comment?.map((comment: any) => (
        <div
          key={comment.id}
          className="border rounded bg-white mt-0.5 p-1 text-sm "
        >
          <p>{comment?.attributes?.content}</p>
          <div className="flex">
            <FaRegEdit
              className="ml-auto mr-1"
              onClick={() => editCommentHandler(comment.id)}
            />
            <RiDeleteBin6Line
              onClick={() => deleteCommentHandler(comment.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
