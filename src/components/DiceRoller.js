// https://medium.com/swlh/building-controlled-forms-using-functional-components-in-react-965d033a89bd
import { useState } from 'react';
import { diceRoll } from '../Maths';


const DiceRoller = () => {
    const [number, setNumber] = useState("1");
    const [sides, setSides] = useState("4");
    const [bonus, setBonus] = useState("0");
    const [result, setResult] = useState();

    const handleSubmit= (e) => {
        e.preventDefault();
        setResult(diceRoll(number, sides, bonus));
      }

    return (
        <>
            <div className="widget">
                <h3>Try rolling some dice!</h3>
                <div className="dice-roller">
                    <form onSubmit={e => {handleSubmit(e)}}>
                        <div className="flex-row">
                            <div className="">
                                <input
                                className="input-number"
                                name='number' 
                                type='number'
                                min="1"
                                value={number}
                                onChange={e => setNumber(e.target.value)}
                                />
                                <br/>
                            </div>
                            <label>d</label>
                            <div className="">
                                <select type="number" className="input-number" name="sides" value={sides} onChange={e => setSides(e.target.value)}>
                                    <option type="number" value="4">4</option>
                                    <option type="number" value="6">6</option>
                                    <option type="number" value="8">8</option>
                                    <option type="number" value="10">10</option>
                                    <option type="number" value="12">12</option>
                                    <option type="number" value="20">20</option>
                                    <option type="number" value="100">100</option>
                                </select>
                            </div>
                            <div className="">+</div>
                            <div className="">
                                <input
                                className="input-number"
                                name='bonus' 
                                type='number'
                                min="0"
                                value={bonus}
                                onChange={e => setBonus(e.target.value)}
                                />
                                <br/>
                            </div>
                        </div>
                        <div className="flexrow">
                            <input
                            className='btn submitButton, green'
                            type='submit' 
                            value='Roll them dice!' 
                            />
                        </div>
                    </form>
                    <br />
                    <div className="flex-row">
                    {result && <div className="total">
                        <h2>{`Total = ${result[2]}`}</h2>
                    </div>}
                    </div>
                    {result && <div className="dice-results">
                        {result[0].map((dice ) => (
                            <div className="dice black">
                                <p>{dice}</p>
                            </div>
                        ))}
                        <div className="dice green" style={{ backgroundColor: "green"}}>
                            <p>{result[1]}</p>
                        </div>
                    </div>}
                </div>
            </div>
        </>
    );
}
 
export default DiceRoller;