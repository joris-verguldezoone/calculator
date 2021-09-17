import logo from './logo.svg';
import './App.css';

function BeautifullScreen(props) {
    return (
        <section className="screen">
            <p>{props.operation}</p>
        </section>
    );
}

export default BeautifullScreen;
