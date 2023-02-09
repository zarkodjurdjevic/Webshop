import { useEffect, useState } from "react";
import "../FilterBar/FilterBar.css";

const FilterBar = ({ onFilter }) => {

    const [labels, setLabels] = useState([])

    useEffect(() => {
        let toBeRenderedLabels = [
            {
                name: "cocktail",
                checked: "unchecked",
            },
            {
                name: "wine",
                checked: "unchecked",
            },
            {
                name: "cheese",
                checked: "unchecked",
            },
        ]

        setLabels(toBeRenderedLabels);
    }, [])

    const toBeRenderedLabels = labels.map(label => {
        let input = <input onChange={() => filterItem(label.name)} type="checkbox" id={label.name} className="filterbar__checkbox" />

        if(label.checked === "checked"){
            input = <input checked onChange={() => filterItem(label.name)} type="checkbox" id={label.name} className="filterbar__checkbox" />
        
        }
        return (
            <div key={label.name} className="filterbarinput__wrapper">
                {input}
                <label htmlFor={label.name}>{label.name}</label>
            </div>

        );
    });

    const filterItem = (filter) => {
        let copy = [...labels]
        const newState = copy.map(label => {
            if(label.name !== filter){
                label.checked = "unchecked";
            }
            if(label.name === filter){
                label.checked = "checked";
            }
            return label;
        });
        setLabels(newState);
        onFilter(filter);
    }

    return (
        <section className="filterbar">
            <div className="filterbar__wrapper">
                {toBeRenderedLabels}
            </div>
        </section>
    )
}

export default FilterBar;