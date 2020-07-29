import React from 'react';

function FormField({ label, type, name, value, onChange }) {
    if (type === 'textarea') {
        return (
            <div>
                <label>
                    {label}:
                </label>
                <textarea value={value} name={name} onChange={onChange} />
            </div>
        )
    } else {
        return (
            <div>
                <label>
                    {label}:
                <input
                        type={type}
                        value={value}
                        name={name}
                        onChange={onChange}
                />
                </label>
            </div>
        )
    }
}

export default FormField;