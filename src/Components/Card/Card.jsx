import { useEffect } from 'react';
import { useState } from 'react';
import './Card.css';
import {
    CardStyle,
    CardNumber
} from './Card.styled';

const Card = () => {
    const [dataNumbers, setDataNumbers] = useState([]);
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [isActive, setIsActive] = useState(false);

    const Shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

    useEffect(() => {
        const NewList = Array.from({length: 16}, () => Math.floor(Math.random() * 60));
        const NewArray = NewList.concat(NewList);
        const NewData = Shuffle(NewArray);
        setDataNumbers(NewData);
    }, [setDataNumbers])

    setTimeout(() => {
        setIsActive(true)
    }, 5000);

    const ClickNumber = (e) => {
        e.preventDefault();
        // if (firstNumber === '') {
        //     setFirstNumber(e.target.value);
        // }
        // if (firstNumber >= 0) {
        //     setSecondNumber(e.target.value)
        // }
        setFirstNumber(e.target.value);
        e.currentTarget.classList.add('visible');
    }
    console.log(firstNumber, secondNumber);

    const CheckNumber = (e) => {
        // if (firstNumber === secondNumber) {
        //     e.currentTarget.classList.add('visible');
        //     e.currentTarget.classList.remove('hidden');
        // }
        // if (firstNumber !== secondNumber) {
        //     e.currentTarget.classList.add('hidden');
        //     e.currentTarget.classList.remove('visible');
        // }
        // return (e.currentTarget.classList.add('hidden'));
    }
    // console.log("firstNumber: ", firstNumber);
    // console.log("dataNumbers: ", dataNumbers);

    return (
        <CardStyle>
                {dataNumbers.map((content) => (
                    <CardNumber className={isActive ? 'hidden' : ''}
                        key={content.id}
                        onClick={(e) => { ClickNumber(e); CheckNumber(e) }}
                        value={content}
                        type='button'
                    >
                        {content}
                    </CardNumber>
                ))}
        </CardStyle>
    )
};

export default Card;