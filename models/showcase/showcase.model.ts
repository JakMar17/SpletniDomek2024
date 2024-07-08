import type { ShowcaseHighlightModel } from '~/models/showcase/showcase-highlight.model'
import type { ShowcaseDescriptionModel } from '~/models/showcase/showcase-description.model'

export interface ShowcaseModel {
    title: string
    subtitle: string
    links?: Array<{ linkTitle: string; linkUrl: string }>
    coverImage: string
    highlights: ShowcaseHighlightModel[]
    highlightIntro: string
    descriptions: ShowcaseDescriptionModel[]
}
