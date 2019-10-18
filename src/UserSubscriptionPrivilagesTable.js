import React, { Component } from 'react';
import { Table, Checkbox, Button, Icon, Form, Tab } from 'semantic-ui-react';

const subscriptions = [
    { key: 's1', value: 'Subscription 1' },
    { key: 's2', value: 'Subscription 2' },
    { key: 's3', value: 'Subscription 3' },
]


const subscriptionPrivilages = [
    { key: 'sp1', value: 'Previlage 1' },
    { key: 'sp2', value: 'Previlage 2' },
    { key: 'sp3', value: 'Previlage 3' },
]

class UserSubscriptionPrivilagesTable extends Component {
    render() {
        return (
            <Form>
                <Form.Field>
                    <Table compact celled definition>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell />
                                {subscriptions.map(subscription => <Table.HeaderCell textAlign='center'>{subscription.value}</Table.HeaderCell>)}
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {subscriptionPrivilages.map(subscriptionPrivilage =>
                                <Table.Row>
                                    <Table.Cell collapsing>
                                        {subscriptionPrivilage.value}
                                    </Table.Cell>
                                    {subscriptions.map(subscription => <Table.Cell textAlign='center'><Checkbox subscriptions_key={subscriptions.key} subscription_previlage_key={subscriptionPrivilage.key} /></Table.Cell>)}
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>
                </Form.Field>
                <Form.Field >
                    <Button.Group >
                        <Button>Cancel</Button>
                        <Button.Or />
                        <Button positive>Save</Button>
                    </Button.Group>
                </Form.Field>
            </Form>
        );
    }
}
export default UserSubscriptionPrivilagesTable;
