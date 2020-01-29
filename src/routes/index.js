import React from 'react'
import { Route, Switch } from "react-router-dom";
import Posts from '../screens/Posts'
import CreatePost from '../screens/CreatePost'
import EditPost from '../screens/EditPost'
import Home from '../screens/Home'

export const Routes = (props) => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/post' component={Posts} />
            <Route exact path='/post/create' component={CreatePost} />
            <Route exact path='/post/edit/:post_id' component={EditPost} />

        </Switch>
    )
}