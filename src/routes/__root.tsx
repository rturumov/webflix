import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { useState } from "react";
import Auth from "../auth/authModal.tsx";

export const Route = createRootRoute({
  component: Component,
})

function Component() {
  const { t } = useTranslation();
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(!user);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsAuthModalOpen(true);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <div className="h-16 fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50 p-3 flex flex-row gap-4 items-center">
        <Link
          to="/"
          className="text-white font-semibold hover:text-blue-400 transition duration-300 ease-in-out"
        >
          {t("About")}
        </Link>

        <Link
          to="/movies"
          className="text-white font-semibold hover:text-blue-400 transition duration-300 ease-in-out"
        >
          {t("Movies")}
        </Link>

        <Link
          to="/serials"
          className="text-white font-semibold hover:text-blue-400 transition duration-300 ease-in-out"
        >
          {t("Serials")}
        </Link>

        <Link
          to="/cartoons"
          className="text-white font-semibold hover:text-blue-400 transition duration-300 ease-in-out"
        >
          {t("Cartoons")}
        </Link>

        <Link
            to="/profile"
            className="text-white font-semibold hover:text-blue-400 transition duration-300 ease-in-out"
        >
          {t("Profile")}
        </Link>

        <div className="ml-auto flex space-x-2">
          <div className="flex space-x-2">
            <button
              className="bg-gray-200 text-gray-800 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-300 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => changeLanguage("en")}
            >
              {t("english")}
            </button>
            <button
              className="bg-gray-200 text-gray-800 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-300 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => changeLanguage("ru")}
            >
              {t("russian")}
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          {user ? (
            <>
              <h1 className="text-1xl font-bold">
                {t("Welcome")}, {user.name}!
              </h1>
              <button
                onClick={handleLogout}
                className="ml-5 bg-red-500 text-white py-2 px-4 rounded"
              >
                {t("Logout")}
              </button>
            </>
          ) : null}
          {isAuthModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white text-black p-6 rounded-md shadow-lg w-80">
                <Auth onLogin={handleLogin} />
              </div>
            </div>
          )}
        </div>
      </div>

      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
