import React, { Component } from 'react'

import { Button } from 'semantic-ui-react'

import { Form, Text } from 'react-form';
import Address from './shared/Address'
import Contact from './shared/Contact'

import { Grid, Row, Col } from 'react-flexbox-grid';

class NaturalPerson extends Component {

	constructor(props) {
		super(props)
}

formStyle = {
	width: '100%',
	borderRadius: '04px',
	border: 'solid 1px #ccc', 
	height: '30px'

}

	render() {	
		return (
			<Form onSubmit={submittedValues => console.log(submittedValues) }>
				{ formApi => (
					<form onSubmit={formApi.submitForm}> 

							<Grid fluid>

								<Row>

									<Col xs={12} md={3}>
										<label htmlFor="full_name" style={{display: 'block'}}>Nome completo</label>
										<Text field="full_name" id="full_name" style={this.formStyle}/>
									</Col>

									<Col xs={12} md={3}>
										<label htmlFor="rg" style={{display: 'block'}}>RG</label>
										<Text field="rg" id="rg" style={this.formStyle}/>
									</Col>

									<Col xs={12} md={3}>
										<label htmlFor="cpf" style={{display: 'block'}}>CPF</label>
										<Text field="cpf" id="cpf" style={this.formStyle}/>
									</Col>

									<Col xs={12} md={3}>
										<label htmlFor="birth_date" style={{display: 'block'}}>Data de Nasc.</label>
										<Text field="birth_date" id="birth_date" style={this.formStyle}/>
									</Col>

								</Row>

									
								<Address/>
								<Contact />

								<Button primary type="submit" style={{marginTop: '1%'}}>Primary</Button>
								
								
							</Grid>
						
					</form>

			)}
		</Form>
		)
	}
}

export default NaturalPerson

