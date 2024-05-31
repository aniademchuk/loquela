import { Card } from "flowbite-react";
import React from "react";
import { PiEmptyThin } from "react-icons/pi";
import { useTranslation } from "react-i18next";

const NoEntryTestResultsCard = () => {
    const { t } = useTranslation();

    return (
        <Card className="rounded-2xl">
            <div className="flex flex-col items-center">
                <PiEmptyThin size={100} className="my-4" />
            </div>
            <h3 className="text-xl font-bold text-center">{t("noTestResult.title")}</h3>
            <p className="text-center mt-2">{t("noTestResult.description")}</p>
        </Card>
    );
};

export default NoEntryTestResultsCard;
