function test(props) {
    console.log(props.target.value)
}
function List(props) {
    return <button type="button" onClick={test} id={'number-' + props.value} value={props.value}>{props.value}</button>
}


function AmazingNumberButton(props) {

    const number1 = props.number1
    const number2 = props.number2
    const number3 = props.number3
    const number4 = props.number4
    console.log(number4)
    console.log(props.number4)
    console.log(this)

    const listItems1 = props.numbers1.map((number) =>
        <List key={number.toString()} value={number} />
    );
    const listItems2 = props.numbers2.map((number) =>
        <List key={number.toString()} value={number} />

    );
    const listItems3 = props.numbers3.map((number) =>
        <List key={number.toString()} value={number} />

    );
    const listItems4 = <List key={number4} value={props.number4} />

    return (
        <section>

            <div>{listItems1}</div>

            <div >{listItems2}</div>

            <div >{listItems3}</div>

            <div>{listItems4}</div>
        </section>

    );
}

export default AmazingNumberButton;
