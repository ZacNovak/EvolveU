import React, { Component } from 'react';
import zn from "./linkList";


class LinkListComp extends Component {
    onNew(e){
        //console.log('onNex', e);
        let val = document.getElementById("newNodeTxt").value;
        console.log('Value', val);
        let ll = new zn.LinkList(val);
        console.log('LinkList', ll.show());
        ll.add('second');
        console.log('LinkList', ll.show());


    }
    
    render(){
        return(
            <div className="LinkedList">
                Hello world from LinkListComp
                <br/>
                <button onClick={this.onNew}>New</button>
                <br/>                
                <input id = "newNodeTxt"></input>
            
            </div>
        )
    }
}

export default LinkListComp;