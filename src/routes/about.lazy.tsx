import { createLazyFileRoute } from '@tanstack/react-router'
import {t} from "i18next";
import {useTranslation} from "react-i18next";

export const Route = createLazyFileRoute('/about')({
    component: About,
})

function About() {
    const { t } = useTranslation();
    return <div className="p-2">{t('About us')}</div>
}
