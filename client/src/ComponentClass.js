import React, {Component} from 'react';

class Componentclass extends Component{
    constructor(props){
        super(props);
        this.state={
            StateString: 'react',
            StateArrayObj: ['react', {react: '200'}]
        }
    }

    buttononClick=(type)=>{
        if(type === 'String'){
            this.setState({StateString: 'react222'});
        }
        else{
            this.setState({StateArrayObj: ['react', {react: '200'}]});
        }
    }

    render(){
        console.log('render() 실행')
        return(
            <div>
                <button onClick={e=> this.buttononClick('String')}>문자열 변경</button>
                <button onClick={e=>this.buttononClick('ArrayObject')}>객체 배열 변경</button>
                {this.state.StateString}
            </div>
        )
    }
}

export default Componentclass;