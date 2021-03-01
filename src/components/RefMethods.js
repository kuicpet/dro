import React from 'react'

export default function RefMethods() {
    const [ref_methods] = React.useState([
        {
            "id": 1,
            "name": "Twitter"
        },
        {
            "id": 2,
            "name": "Instagram"
        },
        {
            "id": 3,
            "name": "Facebook"
        },
        {
            "id": 4,
            "name": "LinkedIn"
        },
        {
            "id": 5,
            "name": "Google Play Store"
        },
        {
            "id": 6,
            "name": "Apple App Store"
        }
    ])
    return (
        <div>
            <div className="label">
                <label htmlFor="state">How you heard about us?</label>
                <select>
                    {ref_methods.map(({id,name}) => (
                        <option
                            key={id}
                            value={id}
                        >
                            {name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
