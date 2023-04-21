import TopNav from '../components/TopNav';

const EventPage = () => {
  return (
    <>
      <TopNav />
      <div className="mt-16 p-2 bg-slate-100">
        <section className="text-gray-600 body-font">
          <div className=" px-5 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
              <div className="rounded-lg w-full h-44 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center w-full"
                  src="https://live.staticflickr.com/5139/5477293588_cf1d112d07_b.jpg"
                />
              </div>
              <span className="text-xs font-semibold hover:text-indigo-600">
                bannar caption/title : this bannar is for event image caption
                here
              </span>

              {/* body tab */}
              <div className="container bg-slate-100 flex gap-2 min-h-screen mx-auto">
                <div className="w-6/12 bg-slate-300 p-3">
                  <div className="w-full flex flex-col mt-3 mb-2 px-3">
                    <img
                      src="https://freeiconshop.com/wp-content/uploads/edd/image-outline-filled.png"
                      alt="icon"
                      className="w-6/12 mx-auto rounded-full shadow-lg rounded-full p-1 cover-full background-cover border border-dotted border-red-800"
                    />
                    <span className="text-slate-700">
                      slogan: -olor sit amet consectetur adipisicing elit.
                      Velit, quae.
                    </span>
                  </div>

                  <div className="w-full p-3 list-none  bg-slate-200 shadow-md rounded-md">
                    <span className="flex items-center justify-center mx-2 gap-2 text-xs font-semibold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-blue-600 hover:bg-indigo-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                      Event information:
                    </span>

                    <li>
                      <span></span>
                      <span className="text-xs text-indigo-500 hover:font-bold font-normal mb-2">
                        description:
                      </span>
                      <br />
                      <p className="text-xs italic">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ut perspiciatis sit molestiae, veniam repellendus
                        nostrum perferendis commodi rerum facilis eaque, atque a
                        ratione sint dolorem deleniti natus sed ullam porro?
                      </p>
                    </li>
                    <li>
                      <span className="text-xs hover:font-bold text-indigo-500 font-normal">
                        duration:
                      </span>
                      <p className="text-xs italic">3 weeks </p>{' '}
                    </li>
                    <li>
                      <span className="text-xs hover:font-bold text-indigo-500 font-normal">
                        Venue
                      </span>
                      <p className="text-xs italic">
                        syhlet internatinal stadium
                      </p>
                    </li>
                  </div>
                </div>

                <div className="flex-col w-6/12 p-5 shadow-lg bg-slate-300">
                  <div className="flex mb-3">
                    <h3 className="text-xs">Our Team Members</h3>
                  </div>

                  <div className="flex flex-wrap justify-center w-full gap-2 py-2 rounded-2xl shadow-lg bg-slate-200 list-style-none">
                    <li className="flex-row p-1 list-none duration-500 delay-100 border rounded-3xl bg-slate-100 hover:bg-slate-400 hover:text-white">
                      <img
                        src="https://img.freepik.com/free-photo/african-american-woman-mockup-psd-black-long-sleeve-tee-portr_53876-145641.jpg?size=626&ext=jpg"
                        alt="tmf"
                        className="w-8 h-8 rounded-lg"
                      />
                      <span className="text-xs">abu kawser</span>
                    </li>
                    <li className="flex-col p-1 list-none duration-500 delay-100 border rounded-3xl bg-slate-100 hover:bg-slate-400 hover:text-white">
                      <img
                        src="https://img.freepik.com/free-photo/african-american-woman-mockup-psd-black-long-sleeve-tee-portr_53876-145641.jpg?size=626&ext=jpg"
                        alt="tmf"
                        className="w-8 h-8 rounded-lg"
                      />
                      <span className="text-xs">abu kawser</span>
                    </li>
                    <li className="flex-col gap-1 p-1 list-none duration-500 delay-100 border rounded-3xl bg-slate-100 hover:bg-slate-400 hover:text-white">
                      <img
                        src="https://img.freepik.com/free-photo/african-american-woman-mockup-psd-black-long-sleeve-tee-portr_53876-145641.jpg?size=626&ext=jpg"
                        alt="tmf"
                        className="w-8 h-8 rounded-lg"
                      />
                      <span className="text-xs">abu kawser</span>
                    </li>
                    <li className="flex-col gap-1 p-1 list-none duration-500 delay-100 border rounded-3xl bg-slate-100 hover:bg-slate-400 hover:text-white">
                      <img
                        src="https://img.freepik.com/free-photo/african-american-woman-mockup-psd-black-long-sleeve-tee-portr_53876-145641.jpg?size=626&ext=jpg"
                        alt="tmf"
                        className="w-8 h-8 rounded-lg"
                      />
                      <span className="text-xs">abu kawser</span>
                    </li>
                    <li className="flex-col gap-1 p-1 list-none duration-500 delay-100 border rounded-3xl bg-slate-100 hover:bg-slate-400 hover:text-white">
                      <img
                        src="https://img.freepik.com/free-photo/african-american-woman-mockup-psd-black-long-sleeve-tee-portr_53876-145641.jpg?size=626&ext=jpg"
                        alt="tmf"
                        className="w-8 h-8 rounded-lg"
                      />
                      <span className="text-xs">abu kawser</span>
                    </li>
                    <li className="flex-col gap-1 p-1 list-none duration-500 delay-100 border rounded-3xl bg-slate-100 hover:bg-slate-400 hover:text-white">
                      <img
                        src="https://img.freepik.com/free-photo/african-american-woman-mockup-psd-black-long-sleeve-tee-portr_53876-145641.jpg?size=626&ext=jpg"
                        alt="tmf"
                        className="w-8 h-8 rounded-lg"
                      />
                      <span className="text-xs">abu kawser</span>
                    </li>
                    <li className="flex-col gap-1 p-1 list-none duration-500 delay-100 border rounded-3xl bg-slate-100 hover:bg-slate-400 hover:text-white">
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
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default EventPage;
