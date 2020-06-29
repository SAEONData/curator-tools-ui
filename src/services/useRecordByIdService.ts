import { useEffect, useState } from 'react'
import { Service } from '../types/Service'
import { IRecord } from '../types/RecordItem'

const useRecordByIdService = (id: string) => {
    const [result, setResult] = useState<Service<IRecord>>({
        status: 'loading'
    })

    useEffect(() => {
        if(id) {
            setResult({ status: 'loading' })
            fetch(id) 
            .then(response => response.json())
            .then(response => setResult({  status: 'loaded', payload: response }))
            .catch(error => setResult({ status: 'error', error }))
        }
    }, [id])

    return result
}

export default useRecordByIdService