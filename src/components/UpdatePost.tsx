import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { useAppSelector } from '../app/reduxHook';
import { UPDATE_POST_MUTATION } from '../lib/mutation';
import { POSTS_QUERY } from '../lib/queries';

interface UpdatePostProps {
  post: {
    id: number;
    attributes: {
      title: string;
      content: string;
      isCommentable: boolean;
      slug: string;
    };
  };
  setToggleShow: (value: boolean) => void;
}

const UpdatePost: React.FC<UpdatePostProps> = ({ post, setToggleShow }) => {
  const {
    id,
    attributes: { title, content, isCommentable, slug },
  } = post;
  const [updatedPost, setUpdatedPost] = useState({
    title,
    content,
    isCommentable,
  });
  const userId = useAppSelector((state) => state.auth.user.id);
  const [updatePost] = useMutation(UPDATE_POST_MUTATION, {
    refetchQueries: () => [
      {
        query: POSTS_QUERY,
        variables: { userId },
      },
    ],
  });

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setUpdatedPost({
      ...updatedPost,
      [event.target.name]: event.target.value,
    });
  };

  const postSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userId) {
      await updatePost({
        variables: { id: id, input: { ...updatedPost, user: userId } },
      });
    }
    setToggleShow(false);
  };

  return (
    <div className="fixed w-full h-full left-0 z-[6000000]">
      <div className="z-[50000] w-full h-full bg-[#7777] fixed left-0 right-0 top-0 bottom-0"></div>
      <div className="absolute left-0 right-0 top-40 z-[6000000] flex flex-col items-center justify-center mx-auto my-auto space-y-4 duration-1000 delay-700 bg-transparent top-12 h-22 ">
        <div className="w-4/12 p-2 bg-white rounded shadow-xl">
          <span onClick={() => setToggleShow(false)} className="cursor-pointer">
            x
          </span>
          <form className="mt-3 space-y-2" onSubmit={postSubmitHandler}>
            <input
              type="text"
              name="title"
              value={updatedPost.title}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(event)
              }
              className="w-full h-8 px-3 border text-clip overflow-hidden ... border-gray-800 rounded"
              placeholder="Title"
            />

            <textarea
              name="content"
              placeholder="whtat you say"
              value={updatedPost.content}
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                handleChange(event)
              }
              className="w-full h-20 px-3 border text-clip overflow-hidden ... border-gray-800 rounded"
            />

            <select
              name="isCommentable"
              id=""
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                handleChange(event)
              }
              className="w-full border border-gray-800 rounded"
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>

            <div className="flex justify-start text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>

            <button className="w-full  px-2 py-2 text-xs font-medium text-center text-white bg-blue-900 rounded-md">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePost;
