import Image from "next/image";
import Link from "next/link";

export default function FooterComponent() {
  return (
    <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="py-[60px] px-0">
              <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div className="lg:col-span-4 md:col-span-12">
                  <a href="#" className="text-[22px] focus:outline-none">
                    <Image
                      src="https://res.cloudinary.com/deftmtx9e/image/upload/v1678297712/More%20From%20Games/siteLogo/logo-light_nrk68q.png"
                      alt=""
                      width="138"
                      height="24"
                    />
                  </a>
                  <p className="mt-6 text-gray-300">
                    We are your source for everything you need to take your
                    board, tabletop and roleplay games to the next level
                  </p>
                  <ul className="list-none mt-6">
                    <li className="inline">
                      <a
                        href="https://www.facebook.com/MoreFromGames"
                        target="_blank"
                        className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                      >
                        <i title="facebook">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                            />
                          </svg>
                        </i>
                      </a>
                    </li>
                    <li className="inline">
                      <a
                        href="https://www.tiktok.com/@morefromgames"
                        target="_blank"
                        className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                      >
                        <i
                          className="uil uil-tiktok align-middle"
                          title="customization"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"
                            />
                          </svg>
                        </i>
                      </a>
                    </li>
                    <li className="inline">
                      <a
                        href="https://www.instagram.com/morefromgames/"
                        target="_blank"
                        className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                      >
                        <i title="instagram">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
                            />
                          </svg>
                        </i>
                      </a>
                    </li>{" "}
                    <li className="inline">
                      <a
                        href="https://www.youtube.com/@morefromgames"
                        className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                      >
                        <i title="email">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 48 48"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              strokeLinejoin="round"
                            >
                              <path
                                strokeWidth="4"
                                d="M11.064 10.414c5.543-.276 9.854-.414 12.934-.414s7.393.138 12.939.415a6 6 0 0 1 5.68 5.492c.254 3.034.381 5.706.381 8.017c0 2.339-.13 5.048-.39 8.128a6 6 0 0 1-5.587 5.483c-4.741.31-9.082.465-13.023.465c-3.94 0-8.28-.155-13.018-.465a6 6 0 0 1-5.587-5.48c-.263-3.103-.395-5.814-.395-8.131c0-2.29.129-4.963.385-8.02a6 6 0 0 1 5.68-5.49Z"
                              />
                              <path
                                strokeWidth="3.429"
                                d="M21 19.61v8.796a.857.857 0 0 0 1.33.715l6.597-4.36a.857.857 0 0 0 .006-1.427l-6.598-4.436a.857.857 0 0 0-1.335.711Z"
                              />
                            </g>
                          </svg>
                        </i>
                      </a>
                    </li>
                    <li className="inline">
                      <a
                        href="mailto:info@morefromgames.com"
                        className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                      >
                        <i
                          className="uil uil-envelope align-middle"
                          title="email"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-2 md:col-span-4">
                  
                </div>

                <div className="lg:col-span-3 md:col-span-4">
                  <h5 className="tracking-[1px] text-gray-100 font-semibold">
                    Usefull Links
                  </h5>
                  <ul className="list-none footer-list mt-6">
                    
                    <li className="mt-[10px]">
                      <Link
                        href="/privacyPolicy"
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b"></i> Privacy Policy
                      </Link>
                    </li>
                    
                  </ul>
                </div>

                <div className="lg:col-span-3 md:col-span-4">
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
