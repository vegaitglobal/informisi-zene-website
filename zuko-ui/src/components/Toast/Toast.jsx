import styles from "./Toast.module.scss";
import { useToast } from "../../hooks/useToast";

const SuccessIcon = () => {
    return <span className={styles.successIcon}></span>;
};

const ErrorIcon = () => {
    return <span className={styles.errorIcon}></span>;
};

function Toast() {
    const { message, status, isDisplayed } = useToast();

    return (
        <>
            {isDisplayed && (
                <div className={`${styles.container} ${styles[status]}`}>
                    {status === "success" && <SuccessIcon />}
                    {status === "error" && <ErrorIcon />}
                    <span className={styles.message}>{message}</span>
                </div>
            )}
        </>
    );
}

export default Toast;
