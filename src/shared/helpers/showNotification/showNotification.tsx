import React from "react";
import ReactDOM from "react-dom";
import './showNotification.css'

interface NotificationProps {
    message: string;
    type?: "info" | "success" | "warning" | "error";
    duration?: number;
}

export const showNotification = ({
    message,
    type = "info",
    duration = 5000,
}: NotificationProps): void => {
    const container = document.createElement("div")
    document.body.appendChild(container)

    const unmount = () => {
        ReactDOM.unmountComponentAtNode(container)
        container.remove()
    };

    ReactDOM.render(
        <div className={`notification ${type}`}>
            <span>{message}</span>
            <button className="close-btn" onClick={unmount}>
                ×
            </button>
        </div>,
        container
    )

    setTimeout(() => {
        unmount()
    }, duration)
};