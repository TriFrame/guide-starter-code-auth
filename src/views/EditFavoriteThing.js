import React from 'react'
import { tether, Container, Heading, TextInput } from '@triframe/designer'

export const EditFavoriteThing = tether(function*({ Api, useParams }){

   const { FavoriteThing } = Api

   const { id } = yield useParams()

   const thing = yield FavoriteThing.read(id)

   return (
        <Container>
           <Heading>Edit Thing:</Heading>
           <TextInput
               label="Name"
               value={thing.name}
               onChange={value => thing.name = value}
           />
        </Container>
    )
})