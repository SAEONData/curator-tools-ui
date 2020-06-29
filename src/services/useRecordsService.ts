import { useEffect, useState } from 'react'
import { Service } from '../types/Service'
import { IRecord } from '../types/RecordItem'
import apiClient from '../ApiClient'

export interface Records {
    results: IRecord[] 
    
}

const useRecordsService = () => {
    const [result, setResult] = useState<Service<Records | any>>({
        status: 'loading'
    })

    useEffect(() => {
       apiClient.get('https://odp.saeon.dvn/api/saeon/metadata/?limit=100')
        .then(res => setResult({ status: 'loaded', payload: res }))
        .catch(error => setResult({ status: 'error', error }))
    }, [])

    return result
}

export default useRecordsService
