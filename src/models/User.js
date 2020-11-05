import { Resource } from '@triframe/core'
import { include, Model, string, hasMany } from '@triframe/scribe'

export class User extends Resource {
    @include(Model)

    @string 
    username = ""

    @hasMany
    favoriteThings = []

}