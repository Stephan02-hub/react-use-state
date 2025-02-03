export default function Accordion({title , description}) {
    return (
    <div className="accordion">
        <div className="accordion__title">
            <h3>{title}</h3>
        </div>

        <button className="accordion__button">+</button>
        <div>{description}</div>
    </div>
    )
}