import React, { Component } from 'react';
import { Form, Button, TextArea, Modal, Grid, Rating, Header } from 'semantic-ui-react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css'

class QuestionModel extends Component {
    render() {
        return (
            <Modal trigger={<Button primary>Add new question</Button>}>
                <Modal.Header>Question details</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Header as='h3'>Question</Header>
                        <SimpleMDE></SimpleMDE>

                        <Form.Field>
                            <Header as='h3'>Answers</Header>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={15}>
                                        <input />
                                    </Grid.Column>
                                    <Grid.Column width={1}>
                                        <Button icon='plus' color='green'/>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Form.Field>
                        <Form.Field>
                            <Header as='h3'>Question Ratings</Header>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={5}><label>Rating 1</label></Grid.Column>
                                    <Grid.Column width={2}><Rating maxRating={5} defaultRating={null} icon='star' size='large'/></Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={5}><label>Rating 2</label></Grid.Column>
                                    <Grid.Column width={2}><Rating maxRating={5} defaultRating={null} icon='star' size='large'/></Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={5}><label>Rating 3</label></Grid.Column>
                                    <Grid.Column width={2}><Rating maxRating={5} defaultRating={null} icon='star' size='large'/></Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={5}><label>Rating 4</label></Grid.Column>
                                    <Grid.Column width={2}><Rating maxRating={5} defaultRating={null} icon='star' size='large'/></Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Form.Field>
                        <Form.Field>
                            <Button.Group>
                                <Button>Cancel</Button>
                                <Button.Or />
                                <Button positive>Save</Button>
                            </Button.Group>
                        </Form.Field>
                    </Form>
                </Modal.Content>
            </Modal>

        );
    }
}
export default QuestionModel;