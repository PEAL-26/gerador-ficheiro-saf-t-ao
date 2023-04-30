import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { BASE_URL } from "../config/app";
import { LogoGreen54w } from "../assets/images";

type LayoutProps = {
  children?: React.ReactNode;
};

const NOME_SITE = "Gerador de Ficheiro SAF-T AO";
const NOT_FOUND = -1;
const LINKS = [
  { url: `${BASE_URL}/`, nome: "Home" },
  { url: `${BASE_URL}/documentacao-api`, nome: "Documentação Api" },
  { url: `${BASE_URL}/documentacao-agt`, nome: "Documentação AGT" },
];

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<number | null>(null);

  console.log(process.env.NODE_ENV);
  console.log(process.env.REACT_APP_BASE_URL);

  useEffect(() => {
    let findIndex = LINKS.findIndex(({ url }) => url === location.pathname);

    if (findIndex === NOT_FOUND) {
      findIndex = LINKS.findIndex(({ url }) => {
        return location.pathname.indexOf(url) !== NOT_FOUND && url !== "/";
      });
    }

    if (findIndex !== NOT_FOUND) {
      setActiveLink(findIndex);
    }

    if (activeLink && activeLink !== 0) {
      document.title = `${LINKS[activeLink].nome} | ${NOME_SITE}`;
    }
  }, [activeLink, location.pathname]);

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full border-gray-200 bg-gray dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img src={LogoGreen54w} className="h-8 mr-3" alt="Saf-t AO Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Gerador de Ficheiro SAF-T AO
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              {LINKS.map(({ url, nome }, index) => (
                <li key={index}>
                  <a
                    href={url}
                    className={`block py-2 pl-3 pr-4 rounded ${
                      index === activeLink
                        ? "text-white bg-green md:bg-transparent md:text-green md:p-0 md:dark:text-green dark:bg-green md:dark:bg-transparent"
                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:hover:text-green md:p-0 dark:text-white md:dark:hover:text-green dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    }    `}
                    aria-current="page"
                  >
                    {nome}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <div className="py-20">
        {children}

        <footer className="bg-gray dark:bg-gray-900 fixed bottom-0 left-0 w-full">
          <div className="mx-auto w-full max-w-screen-xl">
            <div className="px-6 py-3 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
                © {` ${new Date().getFullYear()} `}
                <a href="/">Gerador de Ficheiro SAF-T AO</a>. Todos direitos
                reservados.
              </span>
              <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
                <a
                  href="https://github.com/PEAL-26/gerador-ficheiro-saf-t-ao"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">GitHub account</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
