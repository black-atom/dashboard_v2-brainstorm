import React, { Component } from 'react'

import { Form, Text, NestedForm } from 'react-form';
import { Row, Col } from 'react-flexbox-grid';

class Address extends Component {
    constructor(props) {
        super(props)
        this.state = {
            address: [
                {
                    cep: '',
                    rua: '',
                    numero: '',
                    bairro: '',
                    cidade: '',
                    estado: '',
                    complemento: '',
                    ponto_referencia: ''
                }
            ]
        }
    }

    handleAddAddress = () => {
        this.setState({ address: this.state.address.concat([{ ...this.state.addresss }]) });
      }

     formStyle = {
        width: '100%',
        borderRadius: '04px',
        border: 'solid 1px #ccc', 
        height: '30px'
    }
  
 
    render() {
       

        return (
            <NestedForm field="address">
                <Form>
                    { 
                        formApi => (
                            this.state.address.map((addresses, index) => (

                        <React.Fragment>
        
                        <Row>
                           <Col md={6}>
                                <Row>
                                    <Col md={12} xs={12} style={{marginTop: '2%'}}>
                                        <label htmlFor="zip_code">CEP</label>
                                        <Text field="zip_code" id="zip_code" style={this.formStyle}/>
                                    </Col>

                                    <Col md={9} xs={12} style={{marginTop: '2%'}}>
                                        <label htmlFor="street">Rua</label>
                                        <Text field="street" id="street" style={this.formStyle}/>
                                    </Col>

                                    <Col md={3} xs={12} style={{marginTop: '2%'}}>
                                        <label htmlFor="number">Número</label>
                                        <Text field="number" id="number" style={this.formStyle}/>
                                    </Col>

                                    <Col md={6} xs={12} style={{marginTop: '2%'}}>
                                        <label htmlFor="neighborhood">Bairro</label>
                                        <Text field="neighborhood" id="neighborhood" style={this.formStyle}/>
                                    </Col>

                                    <Col md={5} xs={12} style={{marginTop: '2%'}}>
                                        <label htmlFor="city">Cidade</label>
                                        <Text field="city" id="city" style={this.formStyle}/>
                                    </Col>

                                    <Col md={1} xs={12} style={{marginTop: '2%'}}>
                                        <label htmlFor="uf">UF</label>
                                        <Text field="uf" id="uf" style={this.formStyle}/>
                                    </Col>

                                    <Col md={6} xs={12} style={{marginTop: '2%'}}>
                                        <label htmlFor="complement">Complemento</label>
                                        <Text field="complement" id="complement" style={this.formStyle}/>
                                    </Col>

                                    <Col md={6} xs={12} style={{marginTop: '2%'}}>
                                        <label htmlFor="reference_point">Ponto de Referência</label>
                                        <Text field="reference_point" id="reference_point" style={this.formStyle}/>
                                    </Col>
                        
                                </Row>
                                
                           </Col>


                        </Row>

                 </React.Fragment>

                        ))
                )
            }
                </Form>
            </NestedForm>
        )
    }
}

export default Address


// <div>
// <label htmlFor="firstName2" style={{display: 'block'}}>First name</label>
// <Text field={['rua', idx]} id="firstName2" />

// <label htmlFor="friend1"  style={{display: 'block'}}>Friend1</label>
// <Text field={['street', idx]} id="friend1" />
// </div>


// <Form
// onSubmit={submittedValues => this.setState( { submittedValues } )}>
// { formApi => (
//   <form onSubmit={formApi.submitForm} id="form3">
//       {
//           this.state.address.map((addresses, idx) => (
//               <Grid.Row columns={3}>
//                   <Grid.Column>
//                       <label htmlFor="birth_date" style={{display: 'block'}}>Data de Nascimento</label>
//                       <Text field={['cep', idx]} id="birth_date"/>
//                   </Grid.Column>

//                   <Grid.Column>
//                       <label htmlFor="birth_date" style={{display: 'block'}}>Data de Nascimento</label>
//                       <Text field={['rua', idx]} id="birth_date"/>
//                   </Grid.Column>

//                   <Grid.Column>
//                       <label htmlFor="birth_date" style={{display: 'block'}}>Data de Nascimento</label>
//                       <Text field={['numero', idx]} id="birth_date"/>
//                   </Grid.Column>
//               </Grid.Row>

//           ))
//       }
   

//   </form>
// )}
// </Form>