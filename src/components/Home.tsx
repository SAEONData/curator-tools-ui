import React from 'react'
import { MyForm } from './Form'

class Home extends React.Component<any, any> {
    render() {
        return(
            <div>
                
                <MyForm id='' doi='' institution_key='' metadata={{}} validated={false} />
            </div>
        )
    }
}

export default Home