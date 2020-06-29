import React from 'react'
import useRecordByIdService from '../services/useRecordByIdService'
import Loader from './Loader'

export interface Props {
    id: string
    onClose(): void
}

const RecordItem: React.FC<Props> = ({ id, onClose }) => {
    const service = useRecordByIdService(id) 

    return (
        <div className='record-modal-container'>
            <div className='record-modal-background' onClick={onClose} />
            
            {service.status === 'loading' && <Loader /> }

            {service.status === 'loaded' && (
                <div className='record'>
                    <h2>{service.payload.metadata}</h2>
                    <div className="institution_key">
                        {!!service.payload.institution_key &&
                            <>
                               institution_key
                            </>
                        }
                    </div>
                </div>    
            )}
        </div>
    )
}

export default RecordItem