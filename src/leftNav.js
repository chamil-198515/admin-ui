import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Dropdown, Icon, Divider, Menu,Image } from 'semantic-ui-react'
import user_Role_Image from '../res/images/user_role.png'
import user_Previlage_Image from '../res/images/user_previlage.png'
import chapter_Image from '../res/images/chapters.png'
import subscription_Image from '../res/images/sabscription.png'
import syllabus_Image from '../res/images/syllabus.png'
import subject_Image from '../res/images/subject.png'
import user_Image from '../res/images/user.png'
import questions_Image from '../res/images/questions.png'



class LeftNav extends Component {


    constructor(props) {
        super(props);
        this.state = {}
    }

    handleItemClick = (e, { name, routepath }) => {
        this.setState({ activeItem: name });
        this.props.history.push(routepath)
    }

    render() {
        const { activeItem } = this.state

        return (
            <Menu vertical fluid>
                <Menu.Item>
                    Manage Users
                    <Image src={user_Image} size='mini' circular floated='right' />
                    <Menu.Menu>
                        <Menu.Item
                            name='view_users'
                            routepath='/'
                            active={activeItem === 'view_users'}
                            onClick={this.handleItemClick}
                        >
                            View Users
                    </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    Manage user roles
                    <Image src={user_Role_Image} size='mini' circular floated='right' />
                    <Menu.Menu>
                        <Menu.Item
                            name='set_user_previlages'
                            routepath='/user_role/previlages'
                            active={activeItem === 'set_user_previlages'}
                            onClick={this.handleItemClick}
                        >
                            Set user previlages
                        </Menu.Item>
                        <Menu.Item
                            name='view_user_roles'
                            routepath='/user_role'
                            active={activeItem === 'view_user_roles'}
                            onClick={this.handleItemClick}
                        >
                            View user roles
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    Manage user previlages
                    <Image src={user_Previlage_Image} size='mini' circular floated='right' />
                    <Menu.Menu>
                        <Menu.Item
                            name='view_users_previlages'
                            routepath='/user_previlages'
                            active={activeItem === 'view_users_previlages'}
                            onClick={this.handleItemClick}
                        >
                            View user previlages
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    Manage subcriptions
                    <Image src={subscription_Image} size='mini' circular floated='right' />
                    <Menu.Menu>
                        <Menu.Item
                            name='set_subscription_previlages'
                            routepath='/user_subscription_previlages'
                            active={activeItem === 'view_users_previlages'}
                            onClick={this.handleItemClick}
                        >
                            Set subscription previlages
                        </Menu.Item>
                        <Menu.Item
                            name='subscriptions'
                            routepath='/subscriptions'
                            active={activeItem === 'subscriptions'}
                            onClick={this.handleItemClick}
                        >
                            View subscriptions
                        </Menu.Item>
                        <Menu.Item
                            name='subscriptions_previlages'
                            routepath='/subscriptions_previlages'
                            active={activeItem === 'subscriptions_previlages'}
                            onClick={this.handleItemClick}
                        >
                            View subscription previlages
                        </Menu.Item>

                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    Manage subject
                    <Image src={subject_Image} size='mini' circular floated='right' />
                    <Menu.Menu>
                        <Menu.Item
                            name='view_subjects'
                            routepath='/subjects'
                            active={activeItem === 'view_subjects'}
                            onClick={this.handleItemClick}
                        >
                            View subjects
                        </Menu.Item>
    
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    Manage Sylabus
                    <Image src={syllabus_Image} size='mini' circular floated='right' />
                    <Menu.Menu>
                        <Menu.Item
                            name='view_sylabus'
                            routepath='/sylabus'
                            active={activeItem === 'view_sylabus'}
                            onClick={this.handleItemClick}
                        >
                            View Sylabus
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    Manage Chapters/ Topics
                    <Image src={chapter_Image} size='mini' circular floated='right' />
                    <Menu.Menu>
                        <Menu.Item
                            name='view_chapters'
                            routepath='/chapters'
                            active={activeItem === 'view_chapters'}
                            onClick={this.handleItemClick}
                        >
                            View Chapters/ Topics
                        </Menu.Item>
                        <Menu.Item
                            name='add_chapters'
                            routepath='/chapters/add'
                            active={activeItem === 'add_chapters'}
                            onClick={this.handleItemClick}
                        >
                            Add Chapters/ Topics
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    Manage Questions
                    <Image src={questions_Image} size='mini' circular floated='right' />
                    <Menu.Menu>
                        <Menu.Item
                            name='view_questions'
                            routepath='/questions'
                            active={activeItem === 'view_questions'}
                            onClick={this.handleItemClick}
                        >
                            View questions
                        </Menu.Item>
                        <Menu.Item
                            name='add_questions'
                            routepath='/questions/add'
                            active={activeItem === 'add_questions'}
                            onClick={this.handleItemClick}
                        >
                            Add questions
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>


            </Menu>
        )
    }
}
export default withRouter(LeftNav);