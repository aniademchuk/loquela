import React from "react";
import { Card, Label, Select, TextInput } from "flowbite-react";

const GeneralCard = () => {
    return (
        <>
            <Card>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">General</h5>
                <form className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="countries" value="Language to Learn" />
                        </div>
                        <Select id="learn-language" required>
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
                        <TextInput id="email2" type="name" placeholder="Mark Golovchenko" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email2" value="Your email" />
                        </div>
                        <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password2" value="Your password" />
                        </div>
                        <TextInput id="password2" type="password" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="repeat-password" value="Repeat password" />
                        </div>
                        <TextInput id="repeat-password" type="password" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="timezone" value="Timezone" />
                        </div>
                        <Select id="interface-language" required>
                            <option>English</option>
                            <option>Ukrainian</option>
                            <option>German</option>
                        </Select>
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
