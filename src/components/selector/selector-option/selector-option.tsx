import React from 'react'

interface SelectorOptionProps extends React.HTMLAttributes<HTMLOptionElement> {
    label: string;
    value: string;
}

const SelectorOption = ({ label, value, ...rest }: SelectorOptionProps) => {
    return (
        <option
            {...rest}
            value={value}
        >
            {label}
        </option>
    )
}

export default SelectorOption