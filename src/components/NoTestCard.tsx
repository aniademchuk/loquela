import { Card } from "flowbite-react";
import { useTranslation } from "react-i18next";
import React from "react";

const NoTestCard = () => {
    const { t } = useTranslation();

    return (
        <div className="flex items-center justify-center min-h-80">
            <Card>{t("noTestCard.main")}</Card>{" "}
        </div>
    );
};

export default NoTestCard;
