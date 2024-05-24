import React, { Dispatch, SetStateAction, useState } from "react";
import { Card, Label, Select, Spinner, TextInput } from "flowbite-react";
import { getFunctions, httpsCallable } from "firebase/functions";
import { UserMain } from "../../interfaces/user";
import toast from "react-hot-toast";

interface UserDataUpdateRequest {
    email: string;
    fullName: string;
    learnLanguage: string;
    timezone: string;
}

const GeneralCard: React.FC<{ userData: UserMain; setUserData: Dispatch<SetStateAction<UserMain | null>> }> = (
    data
) => {
    const functions = getFunctions();
    const generalUpdate = httpsCallable<UserDataUpdateRequest>(functions, "updateUserData");
    const [newUserData, setNewUserData] = useState<UserDataUpdateRequest>({
        email: data.userData.users.email,
        fullName: data.userData.users.fullName,
        learnLanguage: data.userData.users.learnLanguage,
        timezone: data.userData.users.timezone,
    });
    const [loading, setLoading] = useState<boolean>(false);

    const handleGeneralDataUpdate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (
            newUserData.email === data.userData.users.email &&
            newUserData.fullName === data.userData.users.fullName &&
            newUserData.learnLanguage === data.userData.users.learnLanguage &&
            newUserData.timezone === data.userData.users.timezone
        ) {
            toast.error("No Data is changed");
            return;
        }

        fullFillNewData();

        setLoading(true);
        generalUpdate(newUserData)
            .then(() => {
                const updatedData: UserMain = {
                    ...data.userData,
                    users: {
                        email: newUserData.email,
                        fullName: newUserData.fullName,
                        learnLanguage: newUserData.learnLanguage,
                        timezone: newUserData.timezone,
                    },
                };

                data.setUserData(updatedData);
                toast.success("General settings were successfully updated!");
            })
            .catch((reason) => {
                toast.error("Something went wrong. Please try again later." + reason);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const fullFillNewData = () => {
        if (newUserData.email === "") {
            setNewUserData((prevState) => ({
                ...prevState,
                email: data.userData.users.email,
            }));
        }

        if (newUserData.fullName === "") {
            setNewUserData((prevState) => ({
                ...prevState,
                email: data.userData.users.fullName,
            }));
        }

        if (newUserData.timezone === "") {
            setNewUserData((prevState) => ({
                ...prevState,
                email: data.userData.users.timezone,
            }));
        }

        if (newUserData.learnLanguage === "") {
            setNewUserData((prevState) => ({
                ...prevState,
                email: data.userData.users.learnLanguage,
            }));
        }
    };

    return (
        <>
            <Card>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">General</h5>
                <form onSubmit={handleGeneralDataUpdate}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="fullName" value="Full Name" />
                            </div>
                            <TextInput
                                id="fullName"
                                type="name"
                                placeholder={newUserData.fullName}
                                onChange={(event) =>
                                    setNewUserData((prevState) => ({
                                        ...prevState,
                                        fullName: event.target.value,
                                    }))
                                }
                                shadow
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Your email" />
                            </div>
                            <TextInput
                                id="email"
                                type="email"
                                placeholder={newUserData.email}
                                onChange={(event) =>
                                    setNewUserData((prevState) => ({
                                        ...prevState,
                                        email: event.target.value,
                                    }))
                                }
                                shadow
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="timezone" value="Timezone" />
                            </div>
                            <TextInput
                                id="timezone"
                                type="text"
                                placeholder={newUserData.timezone}
                                onChange={(event) =>
                                    setNewUserData((prevState) => ({
                                        ...prevState,
                                        timezone: event.target.value,
                                    }))
                                }
                                shadow
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="learn-language" value="Learn Language" />
                            </div>
                            <Select
                                id="learn-language"
                                value={newUserData.learnLanguage}
                                onChange={(event) =>
                                    setNewUserData((prevState) => ({
                                        ...prevState,
                                        learnLanguage: event.target.value,
                                    }))
                                }
                            >
                                <option value="English">English</option>
                                <option value="Ukrainian">Ukrainian</option>
                                <option value="German">German</option>
                            </Select>
                        </div>
                    </div>
                    <div className="mt-5 flex justify-end">
                        <button
                            type="submit"
                            className="text-white space-x-3 bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center"
                        >
                            <span>Update</span>
                            {loading && <Spinner />}
                        </button>
                    </div>
                </form>
            </Card>
        </>
    );
};

export default GeneralCard;
