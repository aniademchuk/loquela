import React, { useState } from "react";
import { Button, Spinner } from "flowbite-react";
import { getFunctions, httpsCallable } from "firebase/functions";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const DeleteUserAccountButton: React.FC = () => {
    const functions = getFunctions();
    const deleteUserAccount = httpsCallable(functions, "deleteUserAccount");
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleDeleteUser = () => {
        setLoading(true);
        deleteUserAccount()
            .then(() => {
                navigate("/");
            })
            .catch(() => {
                toast.error("There was a problem deleting you account. Please try again");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div>
            <Button color="red" onClick={handleDeleteUser}>
                <div className="flex h-full items-center space-x-3">
                    <span className="text-[14px]">Delete Account</span>
                    {loading && <Spinner size="md" color="failure" />}
                </div>
            </Button>
        </div>
    );
};

export default DeleteUserAccountButton;
