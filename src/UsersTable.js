import _ from 'lodash'
import React, { Component } from 'react'
import { Table, Header, Button, Icon, Form } from 'semantic-ui-react'
import UserModal from './UserModal'

const tableData = [
    { user_name: 'John123', name: 'John123', contact_no: '0772926206', email: 'chamil1985151@gmail.com', address: '674/B, Bolanegama, Horampalle', roles: ['Role 1', 'Role 2'] },
    { user_name: 'John1234', name: 'John1234', contact_no: '0772926207', email: 'chamil1985152@gmail.com', address: '674/B, Bolanegama, Horampalle', roles: ['Role 1', 'Role 2'] },
    { user_name: 'John1235', name: 'John1235', contact_no: '0772926208', email: 'chamil1985153@gmail.com', address: '674/B, Bolanegama, Horampalle', roles: ['Role 1', 'Role 2'] },
    { user_name: 'John1236', name: 'John1236', contact_no: '0772926209', email: 'chamil1985154@gmail.com', address: '674/B, Bolanegama, Horampalle', roles: ['Role 1', 'Role 2'] },
]

export default class UsersTable extends Component {
    state = {
        column: null,
        data: tableData,
        direction: null,
    }

    handleSort = (clickedColumn) => () => {
        const { column, data, direction } = this.state

        if (column !== clickedColumn) {
            this.setState({
                column: clickedColumn,
                data: _.sortBy(data, [clickedColumn]),
                direction: 'ascending',
            })

            return
        }

        this.setState({
            data: data.reverse(),
            direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
    }

    render() {
        const { column, data, direction } = this.state

        return (
            <Form>
                <Form.Field>
                    <Table sortable celled fixed>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell
                                    sorted={column === 'UserName' ? direction : null}
                                    onClick={this.handleSort('UserName')}
                                    textAlign='center'>
                                    UserName
            </Table.HeaderCell>
                                <Table.HeaderCell
                                    sorted={column === 'Name' ? direction : null}
                                    onClick={this.handleSort('Name')}
                                    textAlign='center'>
                                    Name
            </Table.HeaderCell>
                                <Table.HeaderCell textAlign='center'>
                                    ContactNo
            </Table.HeaderCell>
                                <Table.HeaderCell textAlign='center'>
                                    Email
            </Table.HeaderCell>
                                <Table.HeaderCell textAlign='center'>
                                    Address
            </Table.HeaderCell>
                                <Table.HeaderCell textAlign='center'>
                                    User roles
            </Table.HeaderCell>
                                <Table.HeaderCell textAlign='center'>
                                    Edit user
            </Table.HeaderCell>
                                <Table.HeaderCell textAlign='center'>
                                    Delete user
            </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {_.map(data, ({ user_name, name, contact_no, email, address, roles }) => (
                                <Table.Row key={user_name}>
                                    <Table.Cell>{user_name}</Table.Cell>
                                    <Table.Cell>{name}</Table.Cell>
                                    <Table.Cell>{contact_no}</Table.Cell>
                                    <Table.Cell>{email}</Table.Cell>
                                    <Table.Cell>{address}</Table.Cell>
                                    <Table.Cell>{roles.map(role => <Header size='small'>{role}</Header>)}</Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        <Button icon>
                                            <Icon name='edit' />
                                        </Button>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        <Button icon>
                                            <Icon name='delete' />
                                        </Button>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                            
                        </Table.Body>
                    </Table>
                </Form.Field>
                <Form.Field>
                    <UserModal></UserModal>
                </Form.Field>
            </Form>

        )
    }
}