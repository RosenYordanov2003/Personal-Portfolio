import { useEffect, useState } from 'react';
import "../PopupMessage/PopupMessage.css";
import "../PopupMessage/PopupMessageResponsive.css";

export default function PopupMessage({ message, removeNotification }) {

    const [isActive, setIsActive] = useState(undefined);

    useEffect(() => {
        setTimeout(()=> {
            setIsActive(true);
        }, 100)
    },[])


    function handleOnCloseNotification() {
        setIsActive(false);
        setTimeout(() => {
            removeNotification();
        }, 500)
    }

    return (
        <div className={`popup-container ${isActive == true ? "active" : ""}`}>
            <div className="popup-icon-container">
                <i className="fa-solid fa-check popup-icon"></i>
            </div>
            <h1>Success!</h1>
            <p>{message}</p>
            <button onClick={handleOnCloseNotification} className="close-button">Ok</button>
        </div>
    )
}