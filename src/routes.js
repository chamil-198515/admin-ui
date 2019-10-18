import React from 'react'
import { HashRouter, Route, Switch, NavLink, Link } from 'react-router-dom'
import { Segment, Grid, Button } from 'semantic-ui-react'
import LeftNav from './leftNav'
import UserTable from './UsersTable'
import UserRolesPrivilagesTable from './UserRolePrivilagesTable'
import UserRolesTable from './UserRolesTable';
import UserPrevilagesTable from './UserPrevilagesTable';
import SubjectsTable from './SubjectsTable';
import SylabusTable from './SylabusTable';
import ChaptersTable from './ChaptersTable';
import ChapterForm from './ChapterForm';
import UserSubscriptionPrivilagesTable from './UserSubscriptionPrivilagesTable';
import SubscriptionsTable from './SubscriptionsTable';
import SubscriptionPrivilagesTable from './SubscriptionPrivilagesTable';
import QuestionsTree from './QuestionsTree';


const LayoutContainer = {
    margin: '20px'
};

class Routes extends React.Component {
    render() {
        return (
            <HashRouter>
                <Grid style={LayoutContainer}>
                    <Grid.Column width={3}>
                        <LeftNav></LeftNav>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <Segment>
                            <Switch>
                                <Route exact path="/" component={UserTable} />
                                <Route exact path="/user_role" component={UserRolesTable} />
                                <Route exact path="/user_role/previlages" component={UserRolesPrivilagesTable} />
                                <Route exact path="/user_previlages" component={UserPrevilagesTable} />
                                <Route exact path="/subjects" component={SubjectsTable} />
                                <Route exact path="/sylabus" component={SylabusTable} />
                                <Route exact path="/chapters" component={ChaptersTable} />
                                <Route exact path="/chapters/add" component={ChapterForm} />      
                                <Route exact path="/user_subscription_previlages" component={UserSubscriptionPrivilagesTable} />   
                                <Route exact path="/subscriptions" component={SubscriptionsTable} /> 
                                <Route exact path="/subscriptions_previlages" component={SubscriptionPrivilagesTable} />   
                                <Route exact path="/questions" component={QuestionsTree} />  

                            </Switch>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </HashRouter>
        );
    }
}
export default Routes;
