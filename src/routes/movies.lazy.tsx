import { createLazyFileRoute } from '@tanstack/react-router'
import {t} from "i18next";
import {useTranslation} from "react-i18next";

export const Route = createLazyFileRoute('/movies')({
  component: Movies,
})

function Movies() {
    const { t } = useTranslation();
    return <div className="p-2">{t('Movies')}</div>
}