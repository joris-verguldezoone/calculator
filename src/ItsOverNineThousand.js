import { useEffect, useState } from 'react';
import image1 from './image/vegeta.jpg';

function ItsOverNineThousand({ result }) {
    const [isOver, setOver] = useState(false)

    useEffect(() => { // traitement dans l'objet
        console.log(result)
        result > 9000 && setOver(true)
    }, [result]) // state dans le tableau 
    return (
        isOver ? (
            <section id='itsOver' >
                <p>IT'S OVER NINE THOUSAND !!!</p>
                <img src={image1} id='vegeta' alt='vegeta' />
            </section>
        ) : (
            <div className='itsOver'></div>
        )
    );
}

export default ItsOverNineThousand;