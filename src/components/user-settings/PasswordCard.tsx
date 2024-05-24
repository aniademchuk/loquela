import { Button, Card, Label, Modal, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Auth, EmailAuthProvider, reauthenticateWithCredential, updatePassword } from "firebase/auth";
import toast from "react-hot-toast";

const PasswordCard = ({ auth }: { auth: Auth }) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [oldPassword, setOldPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handlePasswordUpdateStart = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (password.length < 8 || confirmPassword.length < 8) {
            toast.error("Password is too short!");
            return;
        }

        if (password === "" || confirmPassword === "" || password !== confirmPassword) {
            toast.error("Passwords don't match!");
            return;
        }

        setOpenModal(true);
    };

    const handleReauthenticateAndUpdatePassword = async () => {
        setLoading(true);
        try {
            const user = auth.currentUser;

            if (user && user.email) {
                const credential = EmailAuthProvider.credential(user.email, oldPassword);

                await reauthenticateWithCredential(user, credential);
                await updatePassword(user, password);
                toast.success("Password updated successfully!");
            }
        } catch (error: any) {
            toast.error("Failed to update password. Please Try Again");
        } finally {
            setOpenModal(false);
            setLoading(false);
            setPassword("");
            setConfirmPassword("");
            setConfirmPassword("");
        }
    };

    return (
        <>
            <Card>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Update Password</h5>
                <form onSubmit={handlePasswordUpdateStart}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password1" value="Password" />
                            </div>
                            <TextInput
                                id="password1"
                                type="password"
                                required
                                shadow
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password2" value="Confirm Password" />
                            </div>
                            <TextInput
                                id="password2"
                                type="password"
                                required
                                shadow
                                onChange={(event) => setConfirmPassword(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mt-5 flex justify-end">
                        <button
                            type="submit"
                            className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center"
                        >
                            Update
                        </button>
                    </div>
                </form>
                <Modal show={openModal} position="center" onClose={() => setOpenModal(false)}>
                    <Modal.Header>Confirm Update</Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6 p-6">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                You have to provide your old password to proceed with update.
                            </p>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="oldPassword" value="Old Password" />
                                </div>
                                <TextInput
                                    id="oldPassword"
                                    type="password"
                                    required
                                    shadow
                                    onChange={(event) => setOldPassword(event.target.value)}
                                />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex flex-row space-x-2 ml-auto">
                            <Button color="gray" onClick={() => setOpenModal(false)} className="px-2">
                                Decline
                            </Button>
                            <Button onClick={handleReauthenticateAndUpdatePassword}>
                                <div>Update</div>
                                {loading && <Spinner className="ml-2" size="sm" />}
                            </Button>
                        </div>
                    </Modal.Footer>
                </Modal>
            </Card>
        </>
    );
};

export default PasswordCard;
