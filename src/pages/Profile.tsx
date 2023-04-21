import { useState } from 'react';
import TopNav from '../components/TopNav';

const Profile = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [editImage, setEditImage] = useState(false);

  const editModal = () => {
    setShowEdit(!showEdit);
  };

  const showImageModal = () => {
    setEditImage(!editImage);
  };

  return (
    <>
      <TopNav />
      <div className="relative w-10/12 mx-auto mt-12 h-8 bg-slate-200">
        <div className=" p-5 h-42 bg-slate-400">
          <div className="flex flex-col items-start justify-start gap-2">
            <img
              src="https://img.freepik.com/free-photo/african-american-woman-mockup-psd-black-long-sleeve-tee-portr_53876-145641.jpg?size=626&ext=jpg"
              alt="fdd"
              className="w-32 h-32 transition duration-200 transform border-4 border-white rounded-full shadow-md hover:scale-110"
            />
            <div className="flex justify-start w-2/4 ">
              <h4 className="ml-3 text-sm">abu hossain </h4>
              <span>
         
                <button
                  onClick={showImageModal}
                  className="text-sm rounded-sm hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 ml-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full gap-1">
          <div className="flex-col w-6/12 p-5 bg-slate-300">
            <div className="flex justify-between mb-1">
              <p className="text-xs">Introductoin</p>
              <p className="text-xs">
                <button
                  onClick={editModal}
                  className="text-xs rounded-sm hover:bg-slate-700 hover:text-white"
                >
                  + Edit-profile
                </button>
              </p>
            </div>

            <div className="flex flex-wrap justify-start w-full gap-2 p-2 rounded-sm shadow-lg bg-slate-200 list-style-none">
              <div className="flex-col items-center justify-between w-full text-xs hover:bg-slate-300">
                <p>Name: </p>
                <span className="text-xs hover:font-medium">
                  mohammad Abu Hossain
                </span>
              </div>
              <div className="flex-col items-center justify-between w-full text-xs hover:bg-slate-300">
                <p>Email:</p>{' '}
                <span className="text-xs hover:font-medium">abu@gmail.com</span>
              </div>

              <div className="flex-col items-center justify-between w-full text-xs hover:bg-slate-300">
                <p>Contact:</p>{' '}
                <span className="text-xs hover:font-medium">
                  mobile:066699999, 02255555
                </span>
              </div>

              <div className="flex-col items-center justify-between w-full text-xs hover:bg-slate-300">
                <p>Department :</p>{' '}
                <span className="text-xs hover:font-medium">cse </span>
              </div>
              <div className="flex-col items-center justify-between w-full text-xs hover:bg-slate-300">
                <p> Institution: </p>{' '}
                <span className="text-xs hover:font-medium">
                  m c college sylhet and more{' '}
                </span>
              </div>

              <div className="flex-col items-center text-xs">
                <p>
                  Blood group :<span> b+ </span>{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="flex-col w-6/12 p-5 shadow-lg bg-slate-300">
            <div className="flex mb-1">
              <h3 className="text-xs">Friends</h3>
            </div>

            <div className="flex flex-wrap justify-center w-full gap-2 py-2 rounded-sm shadow-lg bg-slate-200 list-style-none">
              <li className="flex-col p-1 list-none duration-500 delay-100 border rounded-lg bg-slate-100 hover:bg-slate-400 hover:text-white">
                <img
                  src="https://img.freepik.com/free-photo/african-american-woman-mockup-psd-black-long-sleeve-tee-portr_53876-145641.jpg?size=626&ext=jpg"
                  alt="tmf"
                  className="w-8 h-8 rounded-lg"
                />
                <span className="text-xs">abu kawser</span>
              </li>
              <li className="flex-col p-1 list-none duration-500 delay-100 border rounded-lg bg-slate-100 hover:bg-slate-400 hover:text-white">
                <img
                  src="https://img.freepik.com/free-photo/african-american-woman-mockup-psd-black-long-sleeve-tee-portr_53876-145641.jpg?size=626&ext=jpg"
                  alt="tmf"
                  className="w-8 h-8 rounded-lg"
                />
                <span className="text-xs">abu kawser</span>
              </li>
              <li className="flex-col gap-1 p-1 list-none duration-500 delay-100 border rounded-lg bg-slate-100 hover:bg-slate-400 hover:text-white">
                <img
                  src="https://img.freepik.com/free-photo/african-american-woman-mockup-psd-black-long-sleeve-tee-portr_53876-145641.jpg?size=626&ext=jpg"
                  alt="tmf"
                  className="w-8 h-8 rounded-lg"
                />
                <span className="text-xs">abu kawser</span>
              </li>
              <li className="flex-col gap-1 p-1 list-none duration-500 delay-100 border rounded-lg bg-slate-100 hover:bg-slate-400 hover:text-white">
                <img
                  src="https://img.freepik.com/free-photo/african-american-woman-mockup-psd-black-long-sleeve-tee-portr_53876-145641.jpg?size=626&ext=jpg"
                  alt="tmf"
                  className="w-8 h-8 rounded-lg"
                />
                <span className="text-xs">abu kawser</span>
              </li>
              <li className="flex-col gap-1 p-1 list-none duration-500 delay-100 border rounded-lg bg-slate-100 hover:bg-slate-400 hover:text-white">
                <img
                  src="https://img.freepik.com/free-photo/african-american-woman-mockup-psd-black-long-sleeve-tee-portr_53876-145641.jpg?size=626&ext=jpg"
                  alt="tmf"
                  className="w-8 h-8 rounded-lg"
                />
                <span className="text-xs">abu kawser</span>
              </li>
              <li className="flex-col gap-1 p-1 list-none duration-500 delay-100 border rounded-lg bg-slate-100 hover:bg-slate-400 hover:text-white">
                <img
                  src="https://img.freepik.com/free-photo/african-american-woman-mockup-psd-black-long-sleeve-tee-portr_53876-145641.jpg?size=626&ext=jpg"
                  alt="tmf"
                  className="w-8 h-8 rounded-lg"
                />
                <span className="text-xs">abu kawser</span>
              </li>
              <li className="flex-col gap-1 p-1 list-none duration-500 delay-100 border rounded-lg bg-slate-100 hover:bg-slate-400 hover:text-white">
                <img
                  src="https://img.freepik.com/free-photo/african-american-woman-mockup-psd-black-long-sleeve-tee-portr_53876-145641.jpg?size=626&ext=jpg"
                  alt="tmf"
                  className="w-8 h-8 rounded-lg"
                />
                <span className="text-xs">abu kawser</span>
              </li>
            </div>
          </div>
        </div>

        {editImage ? (
          <div className="absolute z-30 flex p-3 mt-5 max-w-3/12 top-4 left-5 bg-slate-50">
            <input
              type="file"
              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 "
            />
            <button onClick={() => alert('will update image')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </button>
          </div>
        ) : null}

        {showEdit ? (
          <div
            aria-orientation="horizontal"
            className="absolute z-20 flex justify-center p-3 mx-auto top-8 right-8 min-w-10/12 bg-slate-100"
          >
            <span
              onClick={() => setShowEdit(false)}
              className="top-0 left-0 right-0 cursor-pointer hover:font-bold bottom-1"
            >
              x
            </span>
            <div className="flex flex-col justify-center max-w-3xl mt-1 md:flex-row">
              <div className="flex flex-col w-full px-2 py-1 bg-slate-200 rounded-tl-3xl">
                <div className="flex flex-col md:flex-row ">
                  <div className="">
                    <input
                      type="text"
                      name="name"
                      id=""
                      placeholder="Enter first name"
                      className="w-full px-3 mt-2 mr-2 text-sm duration-200 ease-in-out border-2 border-white rounded-lg outline-none placeholder:text-black placeholder:opacity-40 focus:border-blue-500"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name="institution"
                      id=""
                      placeholder="Edit your institution"
                      className="w-full md:w-[95%] border-2 border-white px-3  text-sm outline-none placeholder:text-black placeholder:opacity-40 mt-2 md:ml-2 focus:border-blue-500 duration-200 ease-in-out rounded-lg"
                    />
                  </div>
                </div>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter email address"
                  className="w-full px-3 mt-2 text-sm duration-200 ease-in-out border-2 border-white rounded-lg outline-none placeholder:text-black placeholder:opacity-40 focus:border-blue-500"
                />
                <input
                  type="text"
                  name="contact"
                  id=""
                  placeholder="Phone Number"
                  className="w-full px-3 mt-2 text-sm duration-200 ease-in-out border-2 border-white rounded-lg outline-none placeholder:text-black placeholder:opacity-40 focus:border-blue-500"
                />
                <input
                  type="text"
                  name="department"
                  id=""
                  placeholder="department"
                  className="w-full px-3 mt-2 text-sm duration-200 ease-in-out border-2 border-white rounded-lg outline-none placeholder:text-black placeholder:opacity-40 focus:border-blue-500"
                />
                <input
                  type="text"
                  name="blood "
                  id=""
                  placeholder="blood group"
                  className="w-full px-3 mt-2 text-sm duration-200 ease-in-out border-2 border-white rounded-lg outline-none placeholder:text-black placeholder:opacity-40 focus:border-blue-500"
                />
                <textarea
                  id="address"
                  name="address"
                  placeholder="address"
                  className="w-full px-3 mt-2 mb-1 text-sm leading-6 duration-200 ease-in-out border-2 border-white rounded-lg outline-none resize-none h-25 placeholder:text-black placeholder:opacity-40 focus:border-blue-500"
                ></textarea>
                <button className="w-1/2 px-4 mx-auto my-3 font-semibold text-center text-white bg-blue-900 rounded-lg rounded-bl-lg hover:bg-blue-600">
                  Update
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default Profile;
