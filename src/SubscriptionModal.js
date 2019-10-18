import React, { Component } from 'react';
import { Form, Button, TextArea, Modal } from 'semantic-ui-react';

class SubscriptionModal extends Component {
    render() {
        return (
            <Modal trigger={<Button primary>Add new subscription type</Button>}>
                <Modal.Header>Subscription type details</Modal.Header>
                <Modal.Content scrolling>
                    <Form>
                        <Form.Field>
                            <Form.Input label='Subscription type' placeholder='Subscription type' width={8} />
                        </Form.Field>
                        <Form.Group>
                            <Form.Field
                                id='form-textarea-control-discription'
                                control={TextArea}
                                label='Discription'
                                placeholder='Discription'
                                width={16}
                            />
                        </Form.Group>
                        <Button primary>Add new subscription type</Button>
                        <Button.Group floated='right'>
                            <Button>Cancel</Button>
                            <Button.Or />
                            <Button positive>Save</Button>
                        </Button.Group>
                    </Form>
                </Modal.Content>
            </Modal>

        );
    }
}
export default SubscriptionModal;