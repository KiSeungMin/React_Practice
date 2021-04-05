import React from 'react';
import Children from './ContextChildren';

const {Provider, Consumer}=React.createContext();
export{Consumer};

class ContextApi extends React.Component{
    render(){
        return(
            <Provider value='React200'>
                <Children/>
            </Provider>
        )
    }
}


export default ContextApi;