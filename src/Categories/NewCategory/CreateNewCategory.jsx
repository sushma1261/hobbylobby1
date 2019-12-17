import React from 'react';
import { Button, Form, Grid, Header, TextArea, Segment } from 'semantic-ui-react'
class CreateNewCategory extends React.Component {
    render() {
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450, backgroundColor:"white" }} >
                    <Header as='h2' color='teal' textAlign='center'>
                        New Category Details
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                        <Form.Input fluid iconPosition='left' placeholder='Name of the new category' />
                        <TextArea fluid placeholder='Description' style={{ minHeight: 100 }} />
                        <input fluid type = "file"></input>
                        <Button color='teal' fluid size='large'>
                            Create Category
                        </Button>
                        </Segment>
                    </Form>
                </Grid.Column>
        </Grid>
        );
    }
}
export default CreateNewCategory;