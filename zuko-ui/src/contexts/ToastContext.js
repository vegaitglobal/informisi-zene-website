import { createContext, useState } from "react";

export const ToastContext = createContext();

export const ToastContextProvider = ({ children }) => {
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("error");

    const handleToast = (status, message) => {
        setIsDisplayed(true);
        setMessage(message);
        setStatus(status);

        return setTimeout(() => {
            setIsDisplayed(false);
            setMessage("");
            setStatus("");
        }, 3000);
    };

    const successToast = (message) => {
        handleToast("success", message);
    };

    const errorToast = (message) => {
        handleToast("error", message);
    };

    return (
        <ToastContext.Provider
            value={{ isDisplayed, message, status, successToast, errorToast }}
        >
            {children}
        </ToastContext.Provider>
    );
};
