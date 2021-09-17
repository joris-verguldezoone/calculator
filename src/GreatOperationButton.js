import { useEffect } from "react";

function GreatOperationButton({ operand, handleClick, label }) {
    useEffect(() => {
        console.log(operand)
    }, [operand])
    return (
        <div class='number_div'>
            <button type="button" className={`number_button ${operand == label ? 'toggleFocus' : ''}`} onClick={handleClick} value={label}>{label}</button>
        </div>
    );
}

export default GreatOperationButton;