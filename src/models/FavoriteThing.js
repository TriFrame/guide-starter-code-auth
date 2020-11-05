import { Resource } from '@triframe/core'
import { include, Model, string, belongsTo } from '@triframe/scribe'

export class FavoriteThing extends Resource {
    @include(Model)

    @string
    name = ""

    @belongsTo
    user = null

}