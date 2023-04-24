import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { EventList } from '../components/EventList';
import { KnownPeople } from '../components/KnownPeople';
import Post from '../components/Post';
import PostCard from '../components/PostCard';
import { TopNav } from '../components/TopNav';
import { POSTS_QUERY } from '../lib/queries';

const Home = () => {
  const [showEventPage, setShowEventPage] = useState(false);
  const { data, loading, error } = useQuery(POSTS_QUERY);

  const posts = data?.posts?.data;

  const showEvent = () => {
    setShowEventPage(!showEventPage);
  };

  return (
    <div>
      <TopNav />

      <div className="flex w-full h-screen gap-2 p-2 mx-auto mt-16">
        <div className="flex flex-col w-1/4 h-full p-3 bg-slate-200">
          <button
            onClick={showEvent}
            className="relatvie w-full bg-slate-50 mb-3 text-xs font-semibold hover:text-white hover:bg-slate-600 rounded-lg"
          >
            + create event
          </button>
          <EventList />
        </div>
        <div className="flex flex-col w-2/4 h-screen p-2 bg-slate-300">
          <Post />
          {posts?.map((post: any) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <div className="flex flex-col w-1/4 h-full p-2 bg-slate-200">
          <KnownPeople />
        </div>
      </div>

      {showEventPage ? (
        <form className="fixed  shadow-md w-8/12 mr-20 p-5 top-0 z-50 mt-6 right-0 duration-500 delay-500 bg-slate-50 rounded-md">
          <button
            onClick={() => setShowEventPage(false)}
            className="absolute top-0 right-0 mr-3 cursor-pointer"
          >
            x
          </button>

          <div className="grid md:grid-cols-2 md:gap-3">
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="floating_title"
                id="floating_title"
                className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Event Title
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="floating_slogan"
                id="floating_slogan"
                className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Event Slogan
              </label>
            </div>
          </div>

          <div className="relative z-0 w-full mb-2 group">
            <input
              type="text"
              name="floating_desc"
              id="floating_desc"
              className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Description
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-3">
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="floating_venu"
                id="floating_venu"
                className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Venue Loactin
              </label>
            </div>
            <div className="relative z-0 w-full mb-2 group">
              <input
                type="text"
                name="floating_duration"
                id="floating_duratin"
                className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Event Duratin
              </label>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="w-5/12 mb-2 group">
              <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
                Event Bannar
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
              />
            </div>
            <div className="w-5/12 mb-2 group">
              <label className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">
                Event Icon
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-gray-500 bg-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center hover:text-gray-400 hover:duration-500 delay-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      ) : null}
    </div>
  );
};
export default Home;
