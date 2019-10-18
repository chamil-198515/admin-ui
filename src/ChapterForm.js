import _ from 'lodash'
import React, { Component } from 'react'
import { Table, Button, Icon, Form, Dropdown, Segment, Grid, Input } from 'semantic-ui-react'

const names = [
    { id: 1, parent_id: 0, childNodes: [{ id: 1 - 1, parent_id: 1 }, { id: 1 - 2, parent_id: 1 }, { id: 1 - 3, parent_id: 1 }] },
    { id: 2, parent_id: 0, childNodes: [{ id: 2 - 1, parent_id: 2 }, { id: 2 - 2, parent_id: 2 }, { id: 2 - 3, parent_id: 2 }] },
    { id: 3, parent_id: 0, childNodes: [{ id: 3 - 1, parent_id: 3 }, { id: 3 - 2, parent_id: 3 }, { id: 3 - 3, parent_id: 3 }] },
    { id: 4, parent_id: 0, childNodes: [] },
]

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
        title: "Top level 1",
        slug: "top-level-1",
        children: [
            {
                title: "Sub level 1",
                slug: "sub-level-1",
                children: [
                    {
                        title: "Sub Sub Level 1",
                        slug: "sub-sub-level-1",
                        children: [
                            {
                                title: "Sub Sub Level 2",
                                slug: "sub-sub-level-2"
                            },
                            {
                                title: "Sub Sub Level 2",
                                slug: "sub-sub-level-2"
                            },
                            {
                                title: "Sub Sub Level 2",
                                slug: "sub-sub-level-2"
                            },
                            {
                                title: "Sub Sub Level 2",
                                slug: "sub-sub-level-2"
                            }
                        ]
                    }
                ]
            },
            {
                title: "Sub level 2",
                slug: "sub-level-2"
            }
        ]
    },
    {
        title: "Top level 2",
        slug: "top-level 2"
    }
];


  

const Menu = ({ data }) => {
    return (
        <ul>
            {data.map(m => {
                return (<li>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Segment>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={12}>
                                                <Form>
                                                    <Form.Field>
                                                <Input placeholder='Name' fluid />
                                                </Form.Field>
                                                <Form.Field>
                                                <Button.Group basic>
                                                    <Button>Add Child</Button>
                                                    <Button>Edit Child</Button>
                                                    <Button>Delete Child</Button>
                                                </Button.Group>
                                                </Form.Field>
                                                </Form>
                                            </Grid.Column>
                                            <Grid.Column width={4}>
                                                <Button.Group basic vertical>
                                                    <Button>Add Parent</Button>
                                                    <Button>Edit Parent</Button>
                                                    <Button>Delete Parent</Button>
                                                </Button.Group>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    {m.children && <Menu data={m.children} />}
                </li>);
            })}
        </ul>
    );
}




class ChapterForm extends Component {

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
export default ChapterForm;