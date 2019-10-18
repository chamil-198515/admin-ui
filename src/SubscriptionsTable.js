import _ from 'lodash'
import React, { Component } from 'react'
import { Form, Table, Button, Icon } from 'semantic-ui-react'
import SubscriptionModal from './SubscriptionModal'

const subscriptions = [
    { key: '1', value: 'Silver', description: 'Silver subscription', },
    { key: '2', value: 'Gold', description: 'Gold subscription', },
    { key: '3', value: 'Platinum', description: 'Platinum subscription' },
]
class SubscriptionsForm extends Component {
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

            return;
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
                    <SubscriptionModal></SubscriptionModal>
                </Form.Field>
            </Form>

        )
    }
}
export default SubscriptionsForm;