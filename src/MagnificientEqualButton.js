function MagnificientEqualButton(props) {
    return (
        <button type="button" onClick={props.handleClick} className="number_button" id={'number-' + props.label} value={props.label}>{props.label}</button>


    );
}

export default MagnificientEqualButton;

