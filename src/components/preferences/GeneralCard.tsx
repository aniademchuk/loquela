import React from "react";
import { Card, Label, Select, Spinner, TextInput } from "flowbite-react";
import { useUser } from "../../context/UserContext";

const GeneralCard = () => {
    const { userData } = useUser();

    if (!userData) return <Spinner />;

    return (
        <>
            <Card>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">General</h5>
                <form className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="countries" value="Language to Learn" />
                        </div>
                        <Select id="learn-language" value={userData.users.learnLanguage} required>
                            <option>English</option>
                            <option>Ukrainian</option>
                            <option>German</option>
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="countries" value="Interface Language" />
                        </div>
                        <Select id="interface-language" required>
                            <option>English</option>
                            <option>Ukrainian</option>
                            <option>German</option>
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="" value="Full Name" />
                        </div>
                        <TextInput id="email2" type="name" placeholder={userData.users.fullName} required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email2" value="Your email" />
                        </div>
                        <TextInput id="email2" type="email" placeholder={userData.users.email} required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="timezone" value="Timezone" />
                        </div>
                        <TextInput id="timezone" type="text" placeholder={userData.users.timezone} required shadow />
                        {/*<Select id="interface-language" required>*/}
                        {/*    <option>English</option>*/}
                        {/*    <option>Ukrainian</option>*/}
                        {/*    <option>German</option>*/}
                        {/*</Select>*/}
                    </div>
                </form>
                <div>
                    <button
                        type="submit"
                        className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Update
                    </button>
                </div>
            </Card>
        </>
    );
};

export default GeneralCard;
