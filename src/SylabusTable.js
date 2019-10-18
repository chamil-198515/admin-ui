import _ from 'lodash'
import React, { Component } from 'react'
import { Table, Button, Icon, Form } from 'semantic-ui-react'
import SylabusModal from './SylabusModal'

const sylabus = [
    { key: '1', subject: 'Physics', description: 'Advanced level physics', sylabus: 'Physics 2017 new sylabus', isAproved: true },
    { key: '2', subject: 'Chemestry', description: 'Advance level chemistry ', sylabus: 'chemstry 2016 new sylabus', isAproved: false },
    { key: '3', subject: 'Maths', description: 'Advanced level Maths', sylabus: 'Maths 2017 new sylabus', isAproved: true },
]

class SylabusTable extends Component {
    state = {
        column: null,
        data: sylabus,
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
                                <Table.HeaderCell textAlign='center'>
                                    Is Approved
                        </Table.HeaderCell>
                                <Table.HeaderCell
                                    sorted={column === 'sylabus' ? direction : null}
                                    onClick={this.handleSort('sylabus')}
                                >
                                    Sylabus
                        </Table.HeaderCell>
                                <Table.HeaderCell>
                                    Description
                        </Table.HeaderCell>
                                <Table.HeaderCell textAlign='center'>
                                    Edit Sylabus
                        </Table.HeaderCell>
                                <Table.HeaderCell textAlign='center'>
                                    Delete Sylabus
                        </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {_.map(data, ({ sylabus, description, isAproved }) => (
                                <Table.Row key={sylabus}>
                                    <Table.Cell textAlign='center'>{isAproved ? (<Icon name="check circle" color="green" size='large' />) : (<Icon name="dont" color="red" size='large' />)}</Table.Cell>
                                    <Table.Cell>{sylabus}</Table.Cell>
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
                    <SylabusModal></SylabusModal>
                </Form.Field>

            </Form>

        )
    }
}
export default SylabusTable;