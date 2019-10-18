import React, { Component } from 'react'
import { Form, Group, TextArea, Select, Button, Checkbox, Modal } from 'semantic-ui-react'

const institutionsOptions = [
    { key: '1', text: 'Inst 1', value: 'Inst 1' },
    { key: '2', text: 'Inst 2', value: 'Inst 2' },
    { key: '3', text: 'Inst 3', value: 'Inst 3' },
]

const userRoles = [
    { key: '1', text: 'Role 1', value: 'Role 1' },
    { key: '2', text: 'Role 2', value: 'Role 2' },
    { key: '3', text: 'Role 3', value: 'Role 3' },
]

class UserModal extends Component {
    render() {
        return (
            <Modal trigger={<Button primary>Add new user</Button>}>
                <Modal.Header>User details</Modal.Header>
                <Modal.Content scrolling>
                    <Form>
                        <Form.Group>
                            <Form.Input label='First name' placeholder='First Name' width={8} />
                            <Form.Input label='Last Name' placeholder='Last Name' width={8} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input label='Contact No' placeholder='Contact No' width={8} />
                            <Form.Input label='Email' placeholder='Email' width={8} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Field
                                id='form-textarea-control-address'
                                control={TextArea}
                                label='Address'
                                placeholder='Address'
                                width={16}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Field
                                control={Select}
                                options={institutionsOptions}
                                label={{ children: 'Institution', htmlFor: 'form-select-control-Institutions' }}
                                placeholder='Institutions'
                                search
                                searchInput={{ id: 'form-select-control-Institutions' }}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Input label='User Name' placeholder='User Name' width={6} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input label='Password' placeholder='Password' width={6} />
                        </Form.Group>
                        <Form.Group>
                            {
                                userRoles.map(userRole => <Checkbox label={userRole.value} key={userRole.key} />)
                            }
                        </Form.Group>
                        <Button primary>Add new user</Button>
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
export default UserModal;