import { useState } from "react";

export default function ButtonToggle (){
    const [isOn, setIsOn] = useState(false);

    const toggle = () => {
        setIsOn(!isOn);
    };

    return (
        <div>
            <button data-testid="toggle-button" onClick={toggle}>
                {isOn ? "ON" : "OFF"}
            </button>
        </div>
    );
};
