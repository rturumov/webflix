import { createLazyFileRoute } from '@tanstack/react-router'
import {t} from "i18next";
import {useTranslation} from "react-i18next";
import Movies from "./movies.lazy.tsx";
import About from "./about.lazy.tsx";
import Serials from "./serials.lazy.tsx";
import Cartoons from "./cartoons.lazy.tsx";

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    const { t } = useTranslation();



    return (
        <div id="home" className="p-2">
            <About></About>
            <Movies></Movies>
            <Serials></Serials>
            <Cartoons></Cartoons>
        </div>
    );
}