import { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import UpdateComment from './UpdateComment';

interface CommentListProps {
  comment: string;
  deleteCommentHandler: (id: number) => Promise<void>;
  commentId: number;
  postId: number;
}

const CommentList: React.FC<CommentListProps> = ({
  comment,
  deleteCommentHandler,
  commentId,
  postId,
}) => {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <div className="border rounded bg-white mt-0.5 p-1 text-sm ">
      {toggleShow === true ? (
        <UpdateComment
          setToggleShow={setToggleShow}
          postId={postId}
          comment={comment}
          commentId={commentId}
        />
      ) : null}
      <p>{comment}</p>
      <div className="flex">
        <FaRegEdit
          className="ml-auto mr-1"
          onClick={() => setToggleShow(true)}
        />
        <RiDeleteBin6Line onClick={() => deleteCommentHandler(commentId)} />
      </div>
    </div>
  );
};

export default CommentList;
