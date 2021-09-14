import AmazingNumberButton from './AmazingNumberButton';
import BeautifullScreen from './BeautifullScreen';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const numbers3 = [7, 8, 9];
const numbers4 = 0;

function Calculator() {


    return (
        <section id='calculator_container'>
            {/* <div class='display_container'> */}
            <BeautifullScreen />
            <div id='button_container'>
                <AmazingNumberButton numbers1={numbers1} numbers2={numbers2} numbers3={numbers3} numbers4={numbers4} />

                <GreatOperationButton />
                {/* number4 + le props du = */}
            </div>
            <div id="MagnificientEqualButton">
                <MagnificientEqualButton />
            </div>
            {/* </div> */}

        </section>
    );
}

export default Calculator;