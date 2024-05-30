import { getAuth, signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Button, Modal, Tooltip } from "flowbite-react";
import React, { useState } from "react";
import { FaDoorOpen } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const LogoutButton = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const auth = getAuth();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                navigate("/login");
            })
            .catch(() => toast.error(t("logOut.toastError")));
    };

    return (
        <>
            {/* eslint-disable-next-line react/style-prop-object */}
            <Tooltip content="Log Out" style="light">
                <button className="p-2 rounded-lg group hover:bg-gray-100" onClick={() => setOpenModal(true)}>
                    <FaDoorOpen size={26} className="text-gray-500 hover:text-gray-900" />
                </button>
            </Tooltip>
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <FaDoorOpen className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            {t("logOut.title")}
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button onClick={handleLogout}>{t("logOut.confirmButton")}</Button>
                            <Button color="gray" onClick={() => setOpenModal(false)}>
                                {t("logOut.cancel")}
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default LogoutButton;
