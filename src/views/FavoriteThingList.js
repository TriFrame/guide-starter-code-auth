import React from 'react'
import { tether, Container, Heading, BubbleButton, List, ToggleButton, Area } from '@triframe/designer'

export const FavoriteThingList = tether(function*({ Api, redirect }){

    const  { FavoriteThing } = Api

    const things = yield FavoriteThing.list()

    return (
        <Container>
            <Heading>Favorite Things</Heading>
            {things.map( thing => (
                <List.Item
                    title={thing.name}
                    onPress={() => redirect(`/edit/${thing.id}`)}
                    right={() => <ToggleButton onPress={() => thing.delete()} icon="delete" />}
                />
            ))}
            <Area inline alignX="right">
                <BubbleButton icon="plus" onPress={() => redirect('/create')} />
            </Area>
        </Container>
    )
})