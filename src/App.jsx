import './App.css'
import {useState} from "react";
import FruitCounter from "./components/FruitCounter.jsx";

function App() {

    const [bananaCounter, setBananaCounter] = useState(0);
    const [strawberryCounter, setStrawberryCounter] = useState(0);
    const [appleCounter, setAppleCounter] = useState(0);
    const [kiwiCounter, setKiwiCounter] = useState(0);

    const [formState, setFormState] = useState({
        firstname: '',
        lastname: '',
        age: '0',
        zipcode: '',
        deliveryFrequency: '',
        deliveryTime: '',
        comments: '',
        conditions: '',
    });

    function handleChange(e) {
        const changedFieldName = e.target.name;
        const newValue = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState, bananaCounter, strawberryCounter, appleCounter, kiwiCounter);
    }

    function resetFruits() {
        setBananaCounter(0);
        setStrawberryCounter(0);
        setAppleCounter(0);
        setKiwiCounter(0);
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>

            <FruitCounter
            title="🍌Bananen"
            counterName={bananaCounter}
            />

            <h2>🍌 Bananen</h2>
            <button type="button" onClick={() => setBananaCounter(bananaCounter ? bananaCounter - 1 : 0)}>-</button>
            <p>{bananaCounter}</p>
            <button type="button" onClick={() => setBananaCounter(bananaCounter + 1)}>+</button>

            <h2>🍓 Aardbeien</h2>
            <button type="button"
                    onClick={() => setStrawberryCounter(strawberryCounter ? strawberryCounter - 1 : 0)}>-
            </button>
            <p>{strawberryCounter}</p>
            <button type="button" onClick={() => setStrawberryCounter(strawberryCounter + 1)}>+</button>

            <h2>🍏 Appels</h2>
            <button type="button" onClick={() => setAppleCounter(appleCounter ? appleCounter - 1 : 0)}>-</button>
            <p>{appleCounter}</p>
            <button type="button" onClick={() => setAppleCounter(appleCounter + 1)}>+</button>

            <h2>🥝 Kiwi's</h2>
            <button type="button" onClick={() => setKiwiCounter(kiwiCounter ? kiwiCounter - 1 : 0)}>-</button>
            <p>{kiwiCounter}</p>
            <button type="button" onClick={() => setKiwiCounter(kiwiCounter + 1)}>+</button>


            <button type="button"
                    onClick={() => resetFruits()}>
                Reset
            </button>

            <form onSubmit={handleSubmit}>
                <label htmlFor="firstname">Voornaam</label>
                <input
                    type="text"
                    name="firstname"
                    value={formState.firstname}
                    onChange={handleChange}
                />

                <label htmlFor="lastname">Achternaam</label>
                <input
                    type="text"
                    name="lastname"
                    value={formState.lastname}
                    onChange={handleChange}
                />

                <label htmlFor="age">Leeftijd</label>
                <input
                    type="number"
                    name="age"
                    value={formState.age}
                    onChange={handleChange}
                />

                <label htmlFor="zipcode">Postcode</label>
                <input
                    type="text"
                    name="zipcode"
                    value={formState.zipcode}
                    onChange={handleChange}
                />

                <label htmlFor="deliveryfrequency">Bezorgfrequentie</label>
                <select
                    name="deliveryfrequency"
                    value={formState.deliveryFrequency}
                    onChange={handleChange}>
                    <option value="weekly">Iedere week</option>
                    <option value="every-other-week">Om de week</option>
                    <option value="monthly">Iedere maand</option>
                </select>

                <label htmlFor="deliverytime">Tijdvak</label>
                <input
                    type="radio"
                    name="deliveryTime"
                    value="day"
                    checked={formState.deliveryTime === "day"}
                    onChange={handleChange}
                />Overdag
                <input
                    type="radio"
                    name="deliveryTime"
                    value="evening"
                    checked={formState.deliveryTime === "evening"}
                    onChange={handleChange}
                />'s Avonds

                <label htmlFor="comments">Opmerkingen</label>
                <input
                    type="textarea"
                    name="comments"
                    value={formState.comments}
                    onChange={handleChange}
                />

                <input
                    type="checkbox"
                    name="conditions"
                    checked={formState.conditions}
                    onChange={handleChange}
                />
                <label htmlFor="terms-and-conditions">Ik ga akkoord met de voorwaarden</label>

                <button
                    type="submit"

                >
                    Verzend
                </button>
            </form>
        </>


    )
}

export default App;
