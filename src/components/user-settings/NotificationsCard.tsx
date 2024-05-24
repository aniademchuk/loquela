import React, { Dispatch, SetStateAction, useState } from "react";
import { Card, Spinner } from "flowbite-react";
import { UserMain } from "../../interfaces/user";
import { getFunctions, httpsCallable } from "firebase/functions";
import toast from "react-hot-toast";

const TOGGLE_SWITCH_STYLE =
    "w-11 h-6 mr-4 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-cyan-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-cyan-600";
interface UserReminderSettings {
    practice: boolean;
    weeklyStatistic: boolean;
    news: boolean;
}

const NotificationsCard: React.FC<{ userData: UserMain; setUserData: Dispatch<SetStateAction<UserMain | null>> }> = (
    data
) => {
    const [loading, setLoading] = useState<boolean>();
    const [userSettings, setUserSettings] = useState<UserReminderSettings>({
        practice: data.userData.user_reminders.practice,
        weeklyStatistic: data.userData.user_reminders.weekly_stats,
        news: data.userData.user_reminders.loquela_news,
    });
    const functions = getFunctions();
    const updateUserRemindersData = httpsCallable(functions, "updateUserRemindersData");

    const handleRemindersUpdate = () => {
        setLoading(true);
        updateUserRemindersData(userSettings)
            .then(() => {
                const updatedData: UserMain = {
                    ...data.userData,
                    user_reminders: {
                        practice: userSettings.practice,
                        weekly_stats: userSettings.weeklyStatistic,
                        loquela_news: userSettings.news,
                    },
                };

                data.setUserData(updatedData);
                toast.success("Reminders settings were successfully updated.");
            })
            .catch((error: any) => toast.error("Something went wrong. Please try again later." + error))
            .finally(() => setLoading(false));
    };

    return (
        <Card>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">Reminders & Notifications</h5>
            <div className="divide-y divide-gray-200 ">
                <div className="flex items-center justify-between py-4">
                    <div className="flex grow flex-col">
                        <div className="flex flex-row justify-between text-base font-normal items-center text-gray-700 ">
                            <div className="flex items-center justify-between py-2">
                                <div className="flex flex-row justify-between text-base font-normal items-center text-gray-700 ">
                                    I would like to receive daily email reminders to practice.
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={userSettings.practice}
                                    onChange={(event) =>
                                        setUserSettings((prevState) => ({
                                            ...prevState,
                                            practice: event.target.checked,
                                        }))
                                    }
                                />
                                <div className={TOGGLE_SWITCH_STYLE}></div>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-between text-base font-normal items-center text-gray-700">
                    <div className="flex items-center justify-between py-5">
                        <div className="flex flex-row justify-between text-base font-normal items-center text-gray-700">
                            I would like to receive my practice weekly statistic.
                        </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={userSettings.weeklyStatistic}
                            onChange={(event) =>
                                setUserSettings((prevState) => ({
                                    ...prevState,
                                    weeklyStatistic: event.target.checked,
                                }))
                            }
                        />
                        <div className={TOGGLE_SWITCH_STYLE}></div>
                    </label>
                </div>

                <div className="flex flex-row pt-4 justify-between text-base font-normal items-center text-gray-700">
                    <div className="flex items-center justify-between pt-1">
                        <div className="flex flex-row justify-between text-base font-normal items-center text-gray-700">
                            I would like to receive Loquela News.
                        </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={userSettings.news}
                            onChange={(event) =>
                                setUserSettings((prevState) => ({
                                    ...prevState,
                                    news: event.target.checked,
                                }))
                            }
                        />
                        <div className={TOGGLE_SWITCH_STYLE}></div>
                    </label>
                </div>
            </div>

            <div className="mt-5 flex justify-end">
                <button
                    className="text-white space-x-3 bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center"
                    onClick={handleRemindersUpdate}
                >
                    <span>Update</span>
                    {loading && <Spinner size="sm" />}
                </button>
            </div>
        </Card>
    );
};

export default NotificationsCard;
