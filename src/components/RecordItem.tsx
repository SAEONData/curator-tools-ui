import React from 'react'
import useRecordByIdService from '../services/useRecordByIdService'
import Loader from './Loader'

export interface Props {
    id: any
    onClose(): void
}

const RecordItem: React.FC<Props | any> = ({ id, onClose }) => {
    const service = useRecordByIdService(id) 

    return (
        <div className='record-modal-container'>
            <div className='record-modal-background' onClick={onClose} />
            
            {service.status === 'loading' && <Loader /> }

            {service.status === 'loaded' && (
                <div className='record'>
                    <h2>{service.payload.id}</h2>
                    <div className="institution_key">
                        {!!service.payload.institution_key &&
                            <>
                               institution_key
                            </>
                        }
                    </div>
                </div>    
            )}

            {service.status === 'error' && (
                <div className='record'>
                    seems to be something amiss! 
                </div>    
            )}
        </div>
    )
}

export default RecordItem