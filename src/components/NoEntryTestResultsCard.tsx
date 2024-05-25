import { Card } from "flowbite-react";
import { useTranslation } from "react-i18next";
import React from "react";
import { PiEmptyThin } from "react-icons/pi";

const NoEntryTestResultsCard = () => {
    const { t } = useTranslation();

    return (
        <Card className="rounded-2xl">
            <div className="flex flex-col items-center">
                <PiEmptyThin size={100} className="my-4" />
            </div>
            <h3 className="text-xl font-bold text-center">No Results Available</h3>
            <p className="text-center mt-2">
                It looks like you haven't completed the entry test for your selected language yet. Please complete the
                test so we can tailor the questions to your level. Once you've finished, come back to this page to start
                practicing your skills.
            </p>
        </Card>
    );
};

export default NoEntryTestResultsCard;
