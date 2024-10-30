import React from "react";
import { HiOutlineChevronRight, HiOutlineHome } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPageName, links }) => {
  return (
    <div className=" mb-5">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <HiOutlineHome className="size-5" />
              Home
            </Link>
          </li>
          {links &&
            links.map((link, index) => (
              <li key={index} className="inline-flex items-center">
                <Link
                  to={link.path}
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
              <HiOutlineChevronRight className="size-5" />
              {link.title}
                </Link>
              </li>
            ))}
          <li aria-current="page">
            <div className="flex items-center">
              <HiOutlineChevronRight className="size-5" />
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                {currentPageName}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
