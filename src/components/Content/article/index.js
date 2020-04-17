import React from 'react';
import {Switch, Route, useRouteMatch } from 'react-router-dom';
import Article from './article'
import ReadMore from './readmore'
const Index = () => {
    let {path} = useRouteMatch();
    return (
        <div>
            
            <Switch>
                <Route path={path} exact>
                <Article/>
                </Route>
                <Route path={`${path}/:id`}>
                    <ReadMore/>
                </Route>
            </Switch>
        </div>
    )
}
export default Index;