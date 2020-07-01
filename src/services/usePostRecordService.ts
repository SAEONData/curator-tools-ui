import { useState } from 'react'
import { Service } from '../types/Service'
import { IRecord } from '../types/RecordItem'
import apiClient from '../ApiClient'
import RecordItem from '../components/RecordItem'


export type PostRecordItem = Pick< 
    IRecord<{} | any>, 
    'id' | 'doi' | 'institution_key' | 'metadata' | 'validated'
> 

const usePostRecordService = () => {
    const [service, setService] = useState<Service<PostRecordItem | any>>({
        status: 'init'
    })

   const publishRecordItem = (recordItem: PostRecordItem) => {
       setService({ status : 'loading' })
   

   const headers = new Headers() 
   headers.append('Content-Type', 'application/json charset=utf-8')

    return new Promise((resolve, reject) => {
        apiClient.post('https://odp.saeon.dvn/api/saeon/metadata', {
            method: 'POST',
            body: JSON.stringify(RecordItem),
            headers
        })
        
        .then(response => {
            setService({ status: 'loaded', payload: response })
            resolve(response)
        })
        .catch(error => {
            setService({ status: 'error', error })
            reject(error)
        })
    })  
    }


    return {
        service,
        publishRecordItem
    }
}

export default usePostRecordService
