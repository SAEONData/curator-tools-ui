import React from 'react'
import useRecordsService from '../services/useRecordsService'
import Loader from './Loader'
import RecordItem from './RecordItem'

const Records: React.FC<{}> = () => {
    const service = useRecordsService()
    const [id, setId] = React.useState('')

    return (
        <>
        
            <div className='card'>
                {service.status === 'loading' && (
                    <div className='loader-container'>
                        <Loader />
                    </div>
                )}
                {service.status === 'loaded' &&
                console.log(service.payload)
                    Object.keys(service.payload.res).map(field => (
                        <div
                            className='record-item'
                            onClick={() => setId(field.id)}
                            key={field.id}
                        >
                            {field.metadata.titles}
                        </div>
                    ))
                }
                {!!id && <RecordItem id={id} onClose={() => setId('')} />}
            </div>
            {service.status === 'error' && (
                <div>Error, who knows what went wrong, we'll refine these later</div> 
            )}
        </>
    )
}

export default Records
