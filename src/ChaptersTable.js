import _ from 'lodash'
import React, { Component } from 'react'
import { Form, Dropdown, Grid, Message } from 'semantic-ui-react'

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


const Chapters = ({ data }) => {
    return (
        <ul>
            {data.map(m => {
                return (<li>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Message>
                                    <Message.Header>Changes in Service</Message.Header>
                                    <p>
                                        We updated our privacy policy here to better service our customers. We
                                        recommend reviewing the changes.
                                    </p>
                                </Message>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    {m.children && <Chapters data={m.children} />}
                </li>);
            })}
        </ul>
    );
}


class ChaptersTable extends Component {
    render() {

        return (
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

                    <label>Sylect sylabus</label>
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
                    <Chapters data={data}></Chapters>
                </Form.Field>
            </Form>

        )
    }
}
export default ChaptersTable;