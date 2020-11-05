import React from 'react'
import { tether, Container, Heading, TextInput, Button } from '@triframe/designer'

export const CreateFavoriteThing = tether(function*({ Api, redirect }){

    const { FavoriteThing } = Api
    
    const form = yield {
        name: ''
    }

    return (
        <Container>
            <Heading>Create Favorite Things</Heading>
            <TextInput
                label="Name"
                value={form.name} 
                onChange={ value => form.name = value }
            />
            <Button onPress={ async () => {
                await FavoriteThing.create({ name: form.name })
                redirect('/')
            }}>
                Create
            </Button>
        </Container>
    )
})