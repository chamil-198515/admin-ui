import _ from 'lodash'
import React, { Component } from 'react'
import { Checkbox, Accordion, Icon, Form, Dropdown, Message, Grid, Rating, Header, Button, Divider } from 'semantic-ui-react'
import QuestionModel from './QuestionModel';


const subjects = [
    { key: '1', value: '1', text: 'Advanced level physics' },
    { key: '2', value: '2', text: 'Advance level chemistry ' },
    { key: '3', value: '3', description: 'Advanced level Maths' },
]

const sylabus = [
    { key: '1', value: '1', text: 'Physics 2017 new sylabus' },
    { key: '2', value: '2', text: 'chemstry 2016 new sylabus' },
    { key: '3', value: '3', text: 'Maths 2017 new sylabus' },
]


let data = [
    {
        id:0,
        parent_id:0,
        title: "Top level 1",
        slug: "top-level-1",
        children: []
    },
    {
        id:2,
        parent_id:0,
        title: "Top level 2",
        slug: "top-level-2",
        children: []
    }
];


class AccordionExampleFluid extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state

        return (
            <Accordion fluid styled>
                <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                >
                    <Icon name='dropdown' />
                    What is a dog?
          </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={15}><label>1 The domestic dog is a member of the genus Canis (canines), which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore.</label></Grid.Column>
                            <Grid.Column width={1}><Checkbox defaultChecked /></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={15}><label>2 The domestic dog is a member of the genus Canis (canines), which forms part of the wolf-like canids, </label></Grid.Column>
                            <Grid.Column width={1}><Checkbox /></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={15}><label>3 The domestic dog is a member of the genus Canis (canines), </label></Grid.Column>
                            <Grid.Column width={1}><Checkbox /></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={15}><label>4 The domestic dog is a member of the genus Canis (canines), The domestic dog is a member of the genus Canis (canines),  which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore.</label></Grid.Column>
                            <Grid.Column width={1}><Checkbox defaultChecked /></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Divider></Divider>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Header as='h3'>Question Ratings</Header>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={5}><label>Rating 1</label></Grid.Column>
                            <Grid.Column width={2}><Rating maxRating={5} defaultRating={3} icon='star' /></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={5}><label>Rating 2</label></Grid.Column>
                            <Grid.Column width={2}><Rating maxRating={5} defaultRating={2} icon='star' /></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={5}><label>Rating 3</label></Grid.Column>
                            <Grid.Column width={2}><Rating maxRating={5} defaultRating={1} icon='star' /></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={5}><label>Rating 4</label></Grid.Column>
                            <Grid.Column width={2}><Rating maxRating={5} defaultRating={5} icon='star' /></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Button primary>Edit question</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Accordion.Content>

                <Accordion.Title
                    active={activeIndex === 1}
                    index={1}
                    onClick={this.handleClick}
                >
                    <Icon name='dropdown' />
                    What kinds of dogs are there?
          </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={15}><label>1 The domestic dog is a member of the genus Canis (canines), which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore.</label></Grid.Column>
                            <Grid.Column width={1}><Checkbox defaultChecked /></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={15}><label>2 The domestic dog is a member of the genus Canis (canines), which forms part of the wolf-like canids, </label></Grid.Column>
                            <Grid.Column width={1}><Checkbox /></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={15}><label>3 The domestic dog is a member of the genus Canis (canines), </label></Grid.Column>
                            <Grid.Column width={1}><Checkbox /></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={15}><label>4 The domestic dog is a member of the genus Canis (canines), The domestic dog is a member of the genus Canis (canines),  which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore.</label></Grid.Column>
                            <Grid.Column width={1}><Checkbox defaultChecked /></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Divider></Divider>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Header as='h3'>Question Ratings</Header>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={5}><label>Rating 1</label></Grid.Column>
                            <Grid.Column width={2}><Rating maxRating={5} defaultRating={3} icon='star' /></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={5}><label>Rating 2</label></Grid.Column>
                            <Grid.Column width={2}><Rating maxRating={5} defaultRating={2} icon='star' /></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={5}><label>Rating 3</label></Grid.Column>
                            <Grid.Column width={2}><Rating maxRating={5} defaultRating={1} icon='star' /></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={5}><label>Rating 4</label></Grid.Column>
                            <Grid.Column width={2}><Rating maxRating={5} defaultRating={5} icon='star' /></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Button primary>Edit question</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Accordion.Content>
            </Accordion>
        )
    }
}

const Menu = ({ data }) => {
    return (
        <ul>
            {data.map(m => {
                return (<li>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={12}>
                                <div>
                                    <Message
                                        attached
                                        header='Chapter 1'
                                        content='Chapter 1 details'
                                    />
                                    <AccordionExampleFluid />
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                            <QuestionModel></QuestionModel>
                            </Grid.Column>
                        </Grid.Row>

                    </Grid>
                    {m.children && <Menu data={m.children} />}
                </li>);
            })}
        </ul>
    );
}




class QuestionsTree extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Form>

                    <Form.Field width={8}>
                        <label>Select subject</label>
                        <Dropdown
                            clearable
                            search
                            selection
                            options={subjects}
                            placeholder='Select Subject'
                            fluid
                        />
                    </Form.Field>

                    <Form.Field width={8}>
                        <label>Select sylabus</label>
                        <Dropdown
                            clearable
                            search
                            selection
                            options={sylabus}
                            placeholder='Select Sylabus'
                            fluid
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Chapters</label>
                        <Menu data={data} />
                    </Form.Field>
                </Form>

                <div>

                </div>
            </div>
        )
    }
}
export default QuestionsTree;