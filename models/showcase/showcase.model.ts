import type { ShowcaseHighlightModel } from '~/models/showcase/showcase-highlight.model'
import type { ShowcaseDescriptionModel } from '~/models/showcase/showcase-description.model'

export interface ShowcaseModel {
    _path: string
    title: string
    subtitle: string
    abstract: string
    links?: Array<{ linkTitle: string; linkUrl: string }>
    attachments?: Array<{ attachmentTitle: string; attachmentFile: string }>
    coverImage: string
    highlights: ShowcaseHighlightModel[]
    highlightIntro: string
    descriptions: ShowcaseDescriptionModel[]
}
