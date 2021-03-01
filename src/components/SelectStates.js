import React from 'react'

export default function SelectStates() {
    const [states] = React.useState([
        {
            label: "Abia",
            value: "Abia"
        },
        {
            label: "Adamawa",
            value: "Adamawa"
        },
        {
            label: "Akwa-Ibom",
            value: "Akwa-Ibom"
        },
        {
            label: "Anambra",
            value: "Anambra"
        },
        {
            label: "Bauchi",
            value: "Bauchi"
        },
        {
            label: "Bayelsa",
            value: "Bayelsa"
        },
        {
            label: "Benue",
            value: "Benue"
        },
        {
            label: "Borno",
            value: "Borno"
        },
        {
            label: "Cross-River",
            value: "Cross-River"
        },
        {
            label: "Delta",
            value: "Delta"
        },
        {
            label: "Ebonyi",
            value: "Ebonyi"
        },
        {
            label: "Edo",
            value: "Edo"
        },
        {
            label: "Ekiti",
            value: "Ekiti"
        },
        {
            label: "Enugu",
            value: "Enugu"
        },
        {
            label: "FCT",
            value: "FCT"
        },
        {
            label: "Gombe",
            value: "Gombe"
        },
        {
            label: "Imo",
            value: "Imo"
        },
        {
            label: "Jigawa",
            value: "Jigawa"
        },
        {
            label: "Kaduna",
            value: "Kaduna"
        },
        {
            label: "Kano",
            value: "Kano"
        },
        {
            label: "Katsina",
            value: "Katsina"
        },
        {
            label: "Kebbi",
            value: "Kebbi"
        },
        {
            label: "Kogi",
            value: "Kogi"
        },
        {
            label: "Kwara",
            value: "Kwara"
        },
        {
            label: "Lagos",
            value: "Lagos"
        },
        {
            label: "Nasarawa",
            value: "Nasarawa"
        },
        {
            label: "Niger",
            value: "Niger"
        },
        {
            label: "Ogun",
            value: "Ogun"
        },
        {
            label: "Ondo",
            value: "Ondo"
        },
        {
            label: "Osun",
            value: "Osun"
        },
        {
            label: "Oyo",
            value: "Oyo"
        },
        {
            label: "Plateau",
            value: "Plateau"
        },
        {
            label: "Rivers",
            value: "Rivers"
        },
        {
            label: "Sokoto",
            value: "Sokoto"
        },
        {
            label: "Taraba",
            value: "Taraba"
        },
        {
            label: "Yobe",
            value: "Yobe"
        },
        {
            label: "Zamfara",
            value: "Zamfara"
        }
    ])
    return (
        <div>
            <div className="label">
                <label htmlFor="state">Select State</label>
            </div>
            <select>
            {states.map(({label, value}) => (
                <option
                    key={value}
                    value={value}
                >
                    {label}
                </option>
            ))}
            </select>
        </div>
    );
}