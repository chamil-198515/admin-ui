import _ from 'lodash'
import React, { Component } from 'react'
import { Table, Button, Icon, Form } from 'semantic-ui-react'
import SubjectModal from './SubjectModal'

const subjects = [
    { key: '1', value: 'Physics', description: 'Advanced level physics' },
    { key: '2', value: 'Chemestry', description: 'Advance level chemistry ' },
    { key: '3', value: 'Maths', description: 'Advanced level Maths' },
]

class SubjectsTable extends Component {
    state = {
        column: null,
        data: subjects,
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
                                    sorted={column === 'value' ? direction : null}
                                    onClick={this.handleSort('value')}
                                >
                                    Subject
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
                    <SubjectModal></SubjectModal>
                </Form.Field>

            </Form>


        )
    }
}
export default SubjectsTable;