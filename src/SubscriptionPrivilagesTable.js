import _ from 'lodash'
import React, { Component } from 'react'
import { Form, Table, Button, Icon } from 'semantic-ui-react'
import SubscriptionPrivilagesModal from './SubscriptionPrivilagesModal'

const subscriptions = [
    { key: '1', value: 'Prvilage 1', description: 'Prvilage 1', },
    { key: '2', value: 'Prvilage 2', description: 'Prvilage 2', },
    { key: '3', value: 'Prvilage 3', description: 'Prvilage 3' },
]
class SubscriptionPrivilagesTable extends Component {
    state = {
        column: null,
        data: subscriptions,
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
                                    Edit subscription
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                    Delete subscription
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
                    <SubscriptionPrivilagesModal></SubscriptionPrivilagesModal>
                </Form.Field>
            </Form>

        )
    }
}
export default SubscriptionPrivilagesTable;