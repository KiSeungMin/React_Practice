import React, {Component} from 'react';

class OnClick extends Component{
    buttonClick=(param)=>{
        if(typeof param != 'string') param = "click a";
        console.log('param : ' + param);
    }

    render(){
        return(
            <>
            <button onClick={e => {this.buttonClick("Click button")}}>Click button</button>
            <div onClick={e=> {this.buttonClick("Click div")}}>Click div</div>
            <a href="javascript:" onClick={this.buttonClick}>Click a</a>
            </>
        )
    }
}

export default OnClick;