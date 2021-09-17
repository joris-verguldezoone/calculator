import React, { useState } from 'react';
import AmazingNumberButton from './AmazingNumberButton';
import BeautifullScreen from './BeautifullScreen';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';
import ItsOverNineThousand from './ItsOverNineThousand';

function Calculator() {

    const [operation, setOperation] = useState('');
    const [result, setResult] = useState(null);
    const [operand, setOperand] = useState()

    function handleClick(e) {
        // récuperer l'événement
        e.preventDefault()
        const event = e.target.value;
        console.log(event)


        switch (event) { // a la base les case servent a gerer les cas de double operand mais g eu la flem xd
            case '+': case '-': case '/': case '%': case '*':
                setOperation((operation + event).substr(0, 15));
                setOperand(event)
                break;
            case '=':
                setOperation(operation + event);
                let temp = eval(operation);
                setOperation(temp);
                setResult(temp); // C'est en double car j'ai fais le hook sur ItsOverNineThousand {...}
                setOperand('')
                break;
            case 'C':
                setOperation("");
                break;
            default:
                setOperation((operation + event).substr(0, 15));
                break;
        }
    }
    return (
        <section className="containerPrincipal">
            <ItsOverNineThousand result={result} />
            {/* {itsOver ? <ItsOverNineThousand /> : <div></div>} */}
            <BeautifullScreen operation={operation} />
            <div className="diviseNumber_Operator" >

                <div className='AmazingNumber'>
                    <AmazingNumberButton label='1' handleClick={handleClick} />
                    <AmazingNumberButton label='2' handleClick={handleClick} />
                    <AmazingNumberButton label='3' handleClick={handleClick} />
                    <AmazingNumberButton label='4' handleClick={handleClick} />
                    <AmazingNumberButton label='5' handleClick={handleClick} />
                    <AmazingNumberButton label='6' handleClick={handleClick} />
                    <AmazingNumberButton label='7' handleClick={handleClick} />
                    <AmazingNumberButton label='8' handleClick={handleClick} />
                    <AmazingNumberButton label='9' handleClick={handleClick} />

                </div>
                <div className="operator">
                    <GreatOperationButton handleClick={handleClick} label='C' />
                    <GreatOperationButton operand={operand} handleClick={handleClick} label='+' />
                    <GreatOperationButton operand={operand} handleClick={handleClick} label='-' />
                    <GreatOperationButton operand={operand} handleClick={handleClick} label='/' />
                    <GreatOperationButton operand={operand} handleClick={handleClick} label='*' />
                    <GreatOperationButton operand={operand} handleClick={handleClick} label='%' />
                </div>
            </div>
            <div className='bottomButton'>
                <AmazingNumberButton label='.' handleClick={handleClick} />
                <AmazingNumberButton label='0' handleClick={handleClick} />
                <MagnificientEqualButton handleClick={handleClick} label="=" />
            </div>

        </section>

    );
}

export default Calculator;