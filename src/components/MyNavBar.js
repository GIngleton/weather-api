import React, { Component } from 'react';
import {Button, Form, FormGroup, FormControl, Navbar, Nav, NavItem} from 'react-bootstrap';
import WeatherFetcher from '../utils/WeatherFetcher';
import { browserHistory } from 'react-router';


class MyNavbar extends Component {
	constructor(){
		super();
		this.state={
			value: ""
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	};

	handleChange(event){
		this.setState({ value: event.target.value});

	}

	handleClick(){
		const path = `/forecast/${this.state.value}`
		//We are setting the value here once a user changes
		//the input field
		this.setState({ value: ""});
		browserHistory.push(path);
	}

	componentDidUpdate(){
		if(this.state.loaded){
			debugger
		}
	}
	render() {
		return (
			<Navbar className="MyNav">
          		<Navbar.Header>
		            <Navbar.Brand>
		              <a href="/">Weather App</a>
		            </Navbar.Brand>
          		</Navbar.Header>
	          	<Navbar.Collapse>
		            <Nav pullRight>
		              <NavItem>
		                <Form inline className="Form">
		                  <FormGroup controlId="formInlineName">
		                    <FormControl type="text"  placeholder="New York, NY" value={this.state.value} onChange={this.handleChange}/>
		                    {' '}
		                    <Button bsStyle="success" bsSize="small" onClick={this.handleClick}>Get Weather</Button>
		                  </FormGroup>
		                </Form>
		              </NavItem>
		            </Nav>
	          	</Navbar.Collapse>
        	</Navbar>
		)
	}
}

export default MyNavbar;
