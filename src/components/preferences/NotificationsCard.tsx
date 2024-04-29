import { useState } from "react";
import { Card } from "flowbite-react";

const TOGGLE_SWITCH_STYLE =
    "w-11 h-6 mr-4 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-cyan-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-cyan-600";
const SELECTION_STYLE = "flex flex-row items-center rounded-lg text-black  focus:ring-gray-200 focus:border-gray-500 ";

export const NOTIFICATION_FREQUENCY_OPTIONS = [
    {
        label: "Everyday",
        value: "everyday",
    },
    {
        label: "Every week day",
        value: "work",
    },
    {
        label: "Every weekend day",
        value: "weekend",
    },
];

export const NOTIFICATION_TIME_OPTIONS = [
    {
        label: "5:00 AM",
        value: "05-00",
    },
    {
        label: "6:00 AM",
        value: "06-00",
    },
    {
        label: "7:00 AM",
        value: "07-00",
    },
    {
        label: "8:00 AM",
        value: "08-00",
    },
    {
        label: "9:00 AM",
        value: "09-00",
    },
    {
        label: "10:00 AM",
        value: "10-00",
    },
    {
        label: "11:00 AM",
        value: "11-00",
    },
    {
        label: "12:00 PM",
        value: "12-00",
    },
    {
        label: "01:00 PM",
        value: "13-00",
    },
    {
        label: "02:00 PM",
        value: "14-00",
    },
    {
        label: "03:00 PM",
        value: "15-00",
    },
    {
        label: "04:00 PM",
        value: "16-00",
    },
    {
        label: "05:00 PM",
        value: "17-00",
    },
    {
        label: "06:00 PM",
        value: "18-00",
    },
    {
        label: "07:00 PM",
        value: "19-00",
    },
    {
        label: "08:00 PM",
        value: "20-00",
    },
    {
        label: "09:00 PM",
        value: "21-00",
    },
    {
        label: "10:00 PM",
        value: "22-00",
    },
    {
        label: "11:00 PM",
        value: "23-00",
    },
];

interface UserSettings {
    practiceReminder: boolean;
    practiceReminderTime: string;
    weeklyStatistic: boolean;
    weeklyStatisticTime: string;
    news: boolean;
}

const NotificationsCard = () => {
    const [userSettings, setUserSettings] = useState<UserSettings>({
        practiceReminder: false,
        practiceReminderTime: "11:00 PM",
        weeklyStatistic: false,
        weeklyStatisticTime: "12:00 PM",
        news: false,
    });

    return (
        <Card>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">Reminders & Notifications</h5>
            <div className="divide-y divide-gray-200 ">
                <div className="flex items-center justify-between py-4">
                    <div className="flex grow flex-col">
                        <div className="flex flex-row justify-between text-base font-normal items-center text-gray-700 ">
                            {userSettings.practiceReminder ? (
                                <div className="flex flex-col mb-2">
                                    <div className="flex space-y-2 lg:space-y-0 flex-col lg:flex-row text-base font-normal items-start lg:items-center text-gray-700 ">
                                        <span className="mr-2">Email me reminders to practice</span>
                                        <div className="flex flex-col lg:flex-row">
                                            <select
                                                className={SELECTION_STYLE}
                                                value={userSettings.practiceReminderTime}
                                            >
                                                {NOTIFICATION_FREQUENCY_OPTIONS.map((option, index) => (
                                                    <option key={index} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                            <div className="flex flex-row items-center space-x-2 mt-2 lg:mt-0">
                                                <span className="ml-2">at</span>
                                                <select
                                                    className={SELECTION_STYLE}
                                                    // value={userAlertsSettings!.email.time}
                                                    // onChange={handleEmailTimeChange}
                                                >
                                                    {NOTIFICATION_TIME_OPTIONS.map((option, index) => (
                                                        <option key={index} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center justify-between py-2">
                                    <div className="flex flex-row justify-between text-base font-normal items-center text-gray-700 ">
                                        I would like to receive email reminders to practice.
                                    </div>
                                </div>
                            )}

                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    value=""
                                    className="sr-only peer"
                                    checked={userSettings.practiceReminder}
                                    onChange={(event) =>
                                        setUserSettings((prevState) => ({
                                            ...prevState,
                                            practiceReminder: event.target.checked,
                                        }))
                                    }
                                />
                                <div className={TOGGLE_SWITCH_STYLE}></div>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-between text-base font-normal items-center text-gray-700">
                    {userSettings.weeklyStatistic ? (
                        <div className="flex py-4 space-y-2 lg:space-y-0 flex-col lg:flex-row text-base font-normal items-start lg:items-center text-gray-700">
                            <span className="mr-2 mt-1">Send me weekly statistic at</span>
                            <div className="flex flex-col xs:flex-row items-start xs:items-center space-y-2 xs:space-y-0 space-x-0">
                                <select
                                    className={SELECTION_STYLE}
                                    value={userSettings.weeklyStatisticTime}
                                    // onChange={handleWebPushTimeChange}
                                >
                                    {NOTIFICATION_TIME_OPTIONS.map((option, index) => (
                                        <option key={index} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center justify-between py-5">
                            <div className="flex flex-row justify-between text-base font-normal items-center text-gray-700">
                                I would like to receive my practice weekly statistic.
                            </div>
                        </div>
                    )}
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            value=""
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
                    {userSettings.news ? (
                        <div className="flex flex-row text-base font-normal items-center text-gray-700">
                            <span className="mr-2 mt-1">Send me Loquela News</span>
                        </div>
                    ) : (
                        <div className="flex items-center justify-between pt-1">
                            <div className="flex flex-row justify-between text-base font-normal items-center text-gray-700">
                                I would like to receive Loquela News.
                            </div>
                        </div>
                    )}
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            value=""
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
        </Card>
    );
};

export default NotificationsCard;
