import { useState, useEffect } from "react"
import React from "react"

const useForm = (initialFieldValues) => {
    const [values, setValues] = useState(initialFieldValues)

    const handleInputChange = e => {
    const {name, value} = e.target
        setValues({
        ...values,
        [name]: value

    })
    }

    return {
        values,
        setValues,
        handleInputChange
    };
}

export default useForm