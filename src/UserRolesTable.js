import _ from 'lodash'
import React, { Component } from 'react'
import { Table, Button, Icon, Form } from 'semantic-ui-react'
import UserRoleModal from './UserRoleModal';

const userRoles = [
    { key: '1', value: 'ADMIN', description: 'Admin user', },
    { key: '2', value: 'TEACHER', description: 'Teacher', },
    { key: '3', value: 'CHECKER', description: 'Checker' },
]
class UserRolesTable extends Component {
    state = {
        column: null,
        data: userRoles,
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
                                    sorted={column === 'Value' ? direction : null}
                                    onClick={this.handleSort('value')}
                                >
                                    Value
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                    Description
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                    Edit user roles
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                    Delete user roles
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {_.map(data, ({ value, description }) => (
                                <Table.Row key={value}>
                                    <Table.Cell>{value}</Table.Cell>
                                    <Table.Cell>{description}</Table.Cell>
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
                    <UserRoleModal></UserRoleModal>
                </Form.Field>
            </Form>

        )
    }
}
export default UserRolesTable;