import React from 'react';
import { Grid, GridItem } from '@patternfly/react-core';
import { Card, CardHeader, CardBody, CardFooter } from '@patternfly/react-core';

class MostIssued extends React.Component {
    render() {
        return (
            <Grid gutter="md">
                <GridItem span={4}>
                <Card style={{paddingBottom:16}} isHoverable>
                    <CardHeader style={{fontSize: 24, color: "#EA80FC"}}><b>David Copperfield</b></CardHeader>
                    <CardBody><b>Days to return: 7</b></CardBody>
                    <CardFooter><b>Author: Charles Dickens</b></CardFooter>
                </Card>
                </GridItem>
                <GridItem span={4}>
                <Card style={{paddingBottom:16}} isHoverable>
                    <CardHeader style={{fontSize: 24, color: "#EA80FC"}}><b>David Copperfield</b></CardHeader>
                    <CardBody><b>Days to return: 7</b></CardBody>
                    <CardFooter><b>Author: Charles Dickens</b></CardFooter>
                </Card>
                </GridItem>
                <GridItem span={4}>
                <Card style={{paddingBottom:16}} isHoverable>
                    <CardHeader style={{fontSize: 24, color: "#EA80FC"}}><b>David Copperfield</b></CardHeader>
                    <CardBody><b>Days to return: 7</b></CardBody>
                    <CardFooter><b>Author: Charles Dickens</b></CardFooter>
                </Card>
                </GridItem>
            </Grid>
        );
    }
}
export default MostIssued;
