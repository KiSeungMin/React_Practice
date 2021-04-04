import React, {Component} from 'react';

class OnMouseOver extends Component{
    MouseOver(){
        document.getElementById("aaa").style.color="red";
    }

    MouseOut(){
        document.getElementById("aaa").style.color="black";
    }

    render(){
        return(
            <>
            <h3 id="aaa"onMouseOver={e=>this.MouseOver()} onMouseOut={e=>this.MouseOut()}>DIV onMouseOver</h3>
            {/* <div onMouseOver={e=>this.MouseOver("div")} onMouseOut={e=>this.MouseOut("div")}>
                <h3>DIV onMouseOver</h3>
            </div>
            <input type="text" onMouseOver={e=>this.MouseOver("input")} onMouseOut={e=>this.MouseOut("input")}/>
            <select onMouseOver={e=>this.MouseOver("select")} onMouseOut={e=>this.MouseOut("select")}>
                <option value="react">react</option>
                <option value="200">200</option>
            </select> */}
            </>
        )
    }
}

export default OnMouseOver;