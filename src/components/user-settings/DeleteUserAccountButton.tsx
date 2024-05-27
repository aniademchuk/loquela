import React, { useState } from "react";
import { Button, Modal, Spinner } from "flowbite-react";
import { getFunctions, httpsCallable } from "firebase/functions";
import { useNavigate } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import toast from "react-hot-toast";
import { getAuth, signOut } from "firebase/auth";

const DeleteUserAccountButton: React.FC = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const auth = getAuth();
    const functions = getFunctions();
    const deleteUserAccount = httpsCallable(functions, "deleteUserAccount");
    const navigate = useNavigate();

    const handleDeleteUser = () => {
        setLoading(true);
        deleteUserAccount()
            .then(() => {
                toast.success("Account was successfully deleted.");
                signOut(auth).then();
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
            <Button color="red" onClick={() => setOpenModal(true)}>
                <div className="flex h-full items-center space-x-3">
                    <span className="text-[14px]">Delete Account</span>
                </div>
            </Button>
            <Modal show={openModal} size="lg" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this account?
                        </h3>
                        <div className="mt-10 flex justify-center gap-4">
                            <Button color="failure" onClick={handleDeleteUser}>
                                <div className="flex flex-row align-middle space-x-2">
                                    <span className="text-[15px]">Yes, I'm sure</span>
                                    {loading && <Spinner size="md" color="failure" />}
                                </div>
                            </Button>
                            <Button color="gray" onClick={() => setOpenModal(false)}>
                                <span className="text-[15px]">No, cancel</span>
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default DeleteUserAccountButton;
