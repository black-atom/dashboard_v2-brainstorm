import React, { Component } from 'react'

import { Input, Menu, Dropdown, Responsive, Image, Label, Icon } from 'semantic-ui-react'

import logo from './../../images/logo.png'

class Navbar extends Component {

    constructor() {
        super()
        this.state = {
            activeItem: 'dashboard'
        }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name }) 

    render() {
        const { activeItem } = this.state

            return (
                <Menu size='small' fixed='top' stackable pointing secondary style={{position: 'relative'}}>

                <Menu.Item as='a' header>
                  <Image
                    size='mini'
                    src={logo}
                    style={{ marginRight: '1.7em' }}
                  />
                  Connecta
                </Menu.Item>

                  <Menu.Item name='dashboard' active={activeItem === 'dashboard'} onClick={this.handleItemClick} />
                  <Menu.Item name='monitoramento' active={activeItem === 'monitoramento'} onClick={this.handleItemClick} />
    
                  <Dropdown item text='Clientes' pointing>
                    <Dropdown.Menu>
                      <Dropdown.Item icon='add user' text='Novo' />
                      <Dropdown.Item icon='browser' text='Gerenciar' />
                      <Dropdown.Item icon='signal' text='Métricas' />
                    </Dropdown.Menu>
                  </Dropdown>
            
                  <Dropdown item text='Funcionários' pointing>
                    <Dropdown.Menu>
                      <Dropdown.Item icon='add user' text='Novo' />
                      <Dropdown.Item icon='browser' text='Gerenciar' />
                      <Dropdown.Item icon='signal' text='Métricas' />
                    </Dropdown.Menu>
                  </Dropdown>
    
                <Dropdown item text='Atendimentos' pointing>
                  <Dropdown.Menu>
                    <Dropdown.Item icon='add user' text='Novo' />
                    <Dropdown.Item icon='browser' text='Gerenciar' />
                    <Dropdown.Item icon='signal' text='Métricas' />
                  </Dropdown.Menu>
                </Dropdown>
    
                <Dropdown item text='Produtos' pointing>
                  <Dropdown.Menu>
                    <Dropdown.Item icon='add user' text='Novo' />
                    <Dropdown.Item icon='browser' text='Gerenciar' />
                    <Dropdown.Item icon='signal' text='Métricas' />
                  </Dropdown.Menu>
                </Dropdown>
    
              <Menu.Item name='metricas' content='Métricas' active={activeItem === 'metricas'} onClick={this.handleItemClick} />

              <Menu.Menu position='right'>

               <Menu.Item as='a'>
                  <Icon size={'large'} name='world' /> 
                  <Label color='black' floating>22</Label>
                </Menu.Item>

                <Menu.Item>
                  <Responsive
                  {...Responsive.onlyComputer}
                  as={Input}
                  icon='search'
                  loading
                  placeholder='Pesquisar...'
                  />
                </Menu.Item>
                
                <Menu.Item name='sair' active={activeItem === 'logout'} onClick={this.handleItemClick} />

              </Menu.Menu>

              </Menu>
        )
    }
}


export default Navbar