import React from 'react'
import { Provider, Route } from '@triframe/designer'
import { FavoriteThingList } from './views/FavoriteThingList'
import { CreateFavoriteThing } from './views/CreateFavoriteThing'
import { EditFavoriteThing } from './views/EditFavoriteThing'


export default () => (
    <Provider url={process.env.REACT_APP_BACKEND_URL}>
        <Route exact path="/" component={FavoriteThingList} />
        <Route exact path="/create" component={CreateFavoriteThing} />
        <Route exact path="/edit/:id" component={EditFavoriteThing} />
    </Provider>
)