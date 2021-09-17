function AmazingNumberButton(props) {



    return (
        <div class='number_div'>

            <button type="button" onClick={props.handleClick} className="number_button" id={'number-' + props.label} value={props.label}>{props.label}</button>

        </div>

    );
}

export default AmazingNumberButton;
