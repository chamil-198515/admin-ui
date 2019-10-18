import React, { Component } from 'react';
import { Form, Button, TextArea, Modal } from 'semantic-ui-react';

class SubjectModal extends Component {
    render() {
        return (
            <Modal trigger={<Button primary>Add new subject entry</Button>}>
                <Modal.Header>Subject details</Modal.Header>
                <Modal.Content scrolling>
                    <Form>
                        <Form.Field>
                            <Form.Input label='Subject' placeholder='subject name' width={8} />
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
                        <Button primary>Add new subject</Button>
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
export default SubjectModal;