import {createRootRoute, Link, Outlet, useLocation, useNavigate} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Component() {
    const { t } = useTranslation();
    console.log(i18n.language);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const handleSearch = () => {
        console.log("Search query:", searchQuery);
        // Здесь вы можете добавить логику для обработки поиска
    };

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <>
            <div className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50 p-3 flex flex-row gap-4 items-center">
                <Link to="/" className={`font-semibold hover:underline ${location.pathname === '/about' ? 'font-bold' : ''}`}>
                    {t('About')}
                </Link>
                <Link to="/movies" className={`font-semibold hover:underline ${location.pathname === '/movies' ? 'font-bold' : ''}`}>
                    {t('Movies')}
                </Link>
                <Link to="/serials" className={`font-semibold hover:underline ${location.pathname === '/serials' ? 'font-bold' : ''}`}>
                    {t('Serials')}
                </Link>
                <Link to="/cartoons" className={`font-semibold hover:underline ${location.pathname === '/cartoons' ? 'font-bold' : ''}`}>
                    {t('Cartoons')}
                </Link>
                <div className="ml-auto flex space-x-2">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={t('Search')}
                        className="border-2 border-white rounded-md p-1 text-black"
                    />
                    <button
                        className="border-2 border-white rounded-md p-1 flex items-center"
                        onClick={handleSearch}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} /> {/* Иконка поиска */}
                    </button>
                    <button className="border-2 border-white rounded-md p-1" onClick={() => changeLanguage("en")}>
                        {t('english')}
                    </button>
                    <button className="border-2 border-white rounded-md p-1" onClick={() => changeLanguage("ru")}>
                        {t('russian')}
                    </button>
                </div>
            </div>

            <hr />
            <Outlet  />
            <TanStackRouterDevtools />
        </>
    );
}

export const Route = createRootRoute({
    component: Component,
});
