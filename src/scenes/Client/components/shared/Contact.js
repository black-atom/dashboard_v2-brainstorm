import React, { Component } from 'react'

import { Form, Text, NestedForm } from 'react-form'

import { Row, Col } from 'react-flexbox-grid'

class Contact extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contact: [
                {
                    nome: '',
                    email: '',
                    telefone: '',
                    celular: '',
                    observacao: ''
                }
            ]
        }
    }

    formStyle = {
        width: '100%',
        borderRadius: '04px',
        border: 'solid 1px #ccc', 
        height: '30px'
    }
  


    render() {
        return (
        
        
            <NestedForm field="contact">
                <Form>
                    {
                        formApi => (
                            this.state.contact.map((contacts, i) => (
                                <Row>
                                <Col md={6} xs={12}>
                                    <label htmlFor="zip_code">CEP</label>
                                    <Text field="zip_code" id="zip_code" style={this.formStyle}/>
                                </Col>
        
                            </Row>
                        ))
                        
                            
                        )
                    }
                </Form>
            </NestedForm>
        
        )
    }
}

export default Contact
