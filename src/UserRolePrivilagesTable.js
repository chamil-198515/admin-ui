import React, { Component } from 'react';
import { Table, Checkbox, Button, Icon } from 'semantic-ui-react';

const userRoles = [
    { key: 'ur1', value: 'Inst 1' },
    { key: 'ur2', value: 'Inst 2' },
    { key: 'ur3', value: 'Inst 3' },
]


const userPrevilages = [
    { key: 'up1', value: 'Previlage 1' },
    { key: 'up2', value: 'Previlage 2' },
    { key: 'up3', value: 'Previlage 3' },
]

class UserRolesPrivilagesTable extends Component {
    render() {
        return (<Table compact celled definition>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell />
                    {userRoles.map(userRole => <Table.HeaderCell textAlign='center'>{userRole.value}</Table.HeaderCell>)}
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {userPrevilages.map(userPrevilage =>
                    <Table.Row>
                        <Table.Cell collapsing>
                            {userPrevilage.value}
                        </Table.Cell>
                            {userRoles.map(userRole => <Table.Cell textAlign='center'><Checkbox user_role_key={userRole.key} user_previlage_key={userPrevilage.key} /></Table.Cell>)}
                    </Table.Row>
                )}
            </Table.Body>
        </Table>);
    }
}
export default UserRolesPrivilagesTable;
