import React, {Component} from 'react';
import {UncontrolledCollapse, Button, CardBody, Card, CardHeader} from 'reactstrap';

class ReactstrapCollapse extends Component{
    render(){
        return(
            <div>
                <Button color="warning" id="toggle">
                    펼치기/접기
                </Button>
                <UncontrolledCollapse toggler="#toggle">
                    <Card>
                        <CardHeader style={{backgroundColor:"red"}}>
                            wow
                        </CardHeader>
                        <CardBody>
                            REACT 200
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
        )
    }
}

export default ReactstrapCollapse;