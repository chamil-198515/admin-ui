import React, { Component } from 'react';
import { Form, Button, TextArea, Dropdown, Modal } from 'semantic-ui-react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

const countryOptions = [
    { key: '1', value: '1', text: 'Maths' },
    { key: '2', value: '2', text: 'Chemestry' },
    { key: '3', value: '3', text: 'Physics' },
]

class SylabusModal extends Component {

    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.onStartDateChange = this.onStartDateChange.bind(this);
        this.onEndDateChange = this.onEndDateChange.bind(this);
    }


    onStartDateChange(event) {
        console.log('date changeWiley1234')
    }
    onEndDateChange(event) {
        console.log('date changeWiley1234')
    }
    render() {
        return (
            <Modal trigger={<Button primary>Add new syllabus</Button>}>
                <Modal.Header>Syllabus details</Modal.Header>
                <Modal.Content scrolling>
                    <Form>
                        <label>Subject</label>
                        <Form.Field width={8}>
                            <Dropdown
                                clearable
                                search
                                selection
                                options={countryOptions}
                                placeholder='Select Subject'
                                fluid
                            />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input label='Sylabus' placeholder='sylabus name' width={8} />
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
                        <label>Sylabus start date</label>
                        <Form.Field>
                            <SemanticDatepicker onDateChange={this.onStartDateChange} />
                        </Form.Field>

                        <label>Sylabus end date</label>
                        <Form.Field>
                            <SemanticDatepicker onDateChange={this.onEndDateChange} />
                        </Form.Field>
                        <Button primary>Add new sylabus</Button>
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
export default SylabusModal;