import React from "react";
import withRoot from "./withRoot";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Query } from "react-apollo"
import { gql } from "apollo-boost"
import App from './pages/App'
import Profile from './pages/Profile'
import Header from './components/Shared/Header'


const Root = () => (
    <Query query={ME_QUERY}>
        {({data, loading, error}) => {
            if (loading) return <div>Loading</div>
            if (error) return <div>Error</div>

            return (
                <Router>
                    <>
                        <Header />
                        <Switch>
                            <Route exact path="/"  component={App} />
                            <Route path="/profile/:id"  component={Profile} />
                        </Switch>
                    </>
                </Router>
            )
        }}
    </Query>
)

// const GET_TRACK_QUERY = gql`
//     {
//         tracks {
//             id
//             title
//             description
//             url
//         }
//     }
// `

const ME_QUERY = gql `
{
    me {
        id
        username
        email
    }
}
`

export default withRoot(Root);
