import SideBar from "../components/SideBar";
import LogoutButton from "../components/auth/LogoutButton";
import { useUser } from "../context/UserContext";
import { Button, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { getFunctions, httpsCallable } from "firebase/functions";
import toast from "react-hot-toast";

interface ChatResponse {
    result: string;
}

const Home = () => {
    const { userData } = useUser();
    const [chatResponse, setChatResponse] = useState("");
    const [userInput, setUserInput] = useState("");

    if (!userData) return <Spinner />;

    const handleChatCall = (message: string) => {
        const functions = getFunctions();
        const generateText = httpsCallable<unknown, string>(functions, "generateText");

        generateText(message)
            .then((response) => {
                console.log(response);
                const result = response.data;
                setChatResponse(response.data);
                console.log(result);
                toast.success("API call was successful");
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                toast.error(error.message);
            });
    };

    return (
        <>
            <SideBar>
                <div className="flex flex-col text-center ">
                    <h1 className="mt-20 text-3xl">
                        Hey <span className="font-bold text-blue-600">{userData.users.fullName}</span>. Welcome to
                        Loquela!
                    </h1>
                    <div className="mt-10">
                        <LogoutButton />
                    </div>
                    <div className="mt-10">
                        <Button onClick={() => handleChatCall(userInput)}>Create Request</Button>
                    </div>
                    <div className="mt-10">
                        <TextInput onChange={(e) => setUserInput(e.target.value)} />
                    </div>
                    {chatResponse && <div>{chatResponse}</div>}
                </div>
            </SideBar>
        </>
    );
};

export default Home;
