import React from 'react' 
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  FieldArray,
} from 'formik' 

import {IRecord} from '../types/RecordItem'

import styled from '@emotion/styled'
import '../styles.css'
import '../styles-custom.css'

// interface IRecord {
//     id: string
//     doi: string
//     institution_key: string
//     metadata: {
//         titles: [
//             {
//                 title: string
//             }
//         ]
//     }
//     validated: boolean
// }

export const MyForm: React.FC<IRecord> = () => {

  const initialValues: IRecord = { id: '', doi: '', institution_key: '', metadata:  { publisher: '', publicationYear: '', creators: [] }, validated: false } 
 

  return (
    <div>
      <h4>Create a new record</h4>
      <Formik
        initialValues={{initialValues}}
        onSubmit={values =>          
            alert(JSON.stringify(values, null, 2))
        }
        render={({ values }) => (
          <Form>
            <Field
              name='id'
              render={({ field, form, meta }) => (
                <div>
                  <input type='text' {...field} placeholder='id' />
                  {meta.touched && meta.error && meta.error}
                </div>
              )}
            />
            <Field
              name='doi'
              render={({ field, form, meta }) => (
                <div>
                  <input type='text' {...field} placeholder='doi' />
                  {meta.touched && meta.error && meta.error}
                </div>
              )}
            />  
            <Field
              name='institution key'
              render={({ field, form, meta }) => (
                <div>
                  <input type='text' {...field} placeholder='institution key' />
                  {meta.touched && meta.error && meta.error}
                </div>
              )}
            />
            <button type="submit" onSubmit={() => values }>Submit</button>
            {/* <FieldArray
              name="metadata"
              render={arrayHelpers => (
                <div>
                  {Object.keys(values.metadata).map((metadataItem, index) => (
                    <div key={index}>
                      <Field name={`metadataItem.${index}.publisher`} />
                      <Field name={`metadataItem.${index}.publicationYear`} />
                      the same
                      <button type="button" onClick={() => arrayHelpers.remove(index)}>
                        -
                      </button>
                </div>
                ))}
                <button
                  type="button"
                  onClick={() => arrayHelpers.push({ publisher: '', publicationYear: '' })}
              >
                    +
                </button>
                </div>
              )}
            /> */}
            <pre>{JSON.stringify(initialValues, null, 2)}</pre>
          </Form>
        )}
      />
      
      
    </div>
  ) 
} 
