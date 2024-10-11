import { createLazyFileRoute } from '@tanstack/react-router'
import {t} from "i18next";
import {useTranslation} from "react-i18next";

export const Route = createLazyFileRoute('/cartoons')({
  component: Cartoons,
})

function Cartoons() {
    const { t } = useTranslation();
    return <div className="p-2">{t('Cartoons')}</div>
}