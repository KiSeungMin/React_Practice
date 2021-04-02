import React, {Component} from 'react';
import {Button, UncontrolledPopover, PopoverHeader, PopoverBody} from 'reactstrap';

class ReactstrapPopover extends Component{
    render(){
        return(
            <>
            <Button id="Popover_id" type="button">
                Popover Button
            </Button>
            <UncontrolledPopover placement="right" target="Popover_id">
                <PopoverHeader>
                    React 200
                </PopoverHeader>
                <PopoverBody>
                    Aenean id magna id risus congur oranre.
                    Vestibulum sed diam et mi  pulvinar facilisis sed eu risus.
                </PopoverBody>
            </UncontrolledPopover>
            </>
        )
    }
}

export default ReactstrapPopover;