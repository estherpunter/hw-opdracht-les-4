function FruitCounter({title, counterName}) {
    return (
        <>
            <h2>{title}</h2>
            <button type="button">-</button>
            <p>{counterName}</p>
            <button type="button">+</button>

        </>
    )
}

export default FruitCounter;