import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { useAppSelector } from '../app/reduxHook';
import { UPDATE_COMMENT_MUTATION } from '../lib/mutation';

interface UpdateCommentProps {
  setToggleShow: (value: boolean) => void;
  postId: number;
  comment: string;
  commentId: number;
}

const UpdateComment: React.FC<UpdateCommentProps> = ({
  setToggleShow,
  postId,
  comment,
  commentId,
}) => {
  const [updatedComment, setUpdatedComment] = useState(comment);
  const [updateComment] = useMutation(UPDATE_COMMENT_MUTATION);
  const userId = useAppSelector((state) => state.auth.user.id);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setUpdatedComment(event.target.value);
  };

  const postSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await updateComment({
      variables: {
        id: commentId,
        input: { content: updatedComment, user: userId, post: postId },
      },
    });

    setToggleShow(false);
  };

  return (
    <div className="fixed w-full h-full left-0 z-[6000000]">
      <div className="z-[50000] w-full h-full bg-[#7777] fixed left-0 right-0 top-0 bottom-0"></div>
      <div className="fixed left-0 right-0 top-[-10%] w-full h-full z-[6000000] flex flex-col items-center justify-center mx-auto my-auto space-y-4 duration-1000 delay-700 bg-transparent  h-22 ">
        <div className="w-4/12 p-2 bg-white rounded shadow-xl">
          <span onClick={() => setToggleShow(false)} className="cursor-pointer">
            x
          </span>
          <form className="mt-3 space-y-2" onSubmit={postSubmitHandler}>
            <input
              type="text"
              name="comment"
              value={updatedComment}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(event)
              }
              className="w-full h-8 px-3 border text-clip overflow-hidden ... border-gray-800 rounded"
              placeholder="Comment"
            />

            <button className="w-full  px-2 py-2 text-xs font-medium text-center text-white bg-blue-900 rounded-md">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateComment;
