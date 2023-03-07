export default function Card() {
  return (
    <div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out">
      <div className="relative">
        <img
          src="https://res.cloudinary.com/deftmtx9e/image/upload/v1676546001/More%20From%20Games/Site/Games/hero_quest_ufrncm.png"
          alt="Hero Quest Image"
        />

        <div className="absolute bottom-0 ltr:left-0 rtl:right-0 ltr:ml-6 rtl:mr-6 mb-6 text-lg ltr:bg-gradient-to-r rtl:bg-gradient-to-l to-indigo-600 from-fuchsia-600 text-white rounded-full px-3">
          <i className="uil uil-clock align-middle"></i>
          <small id="auction-item-1" className="font-semibold"></small>
        </div>
      </div>

      <div className="content p-6">
        <a
          href="/"
          className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
        >
          Hero Quest{" "}
        </a>
        <p className="text-slate-400 mt-3">
          Description of hero quest //TODO: make this 3 lines only
        </p>

        <div className="mt-4">
          <a
            href="/"
            className="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
          >
            Read More <i className="uil uil-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
