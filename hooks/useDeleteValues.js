import { useCallback, useState } from 'react';

const useDeleteArray = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const removeValue= useCallback((index) => {
        const newValues =[
            ...values
        ]
        newValues.splice(index, 1)
        setValues(newValues)
    },[values])
    return [values, removeValue];
}

export default useDeleteArray
