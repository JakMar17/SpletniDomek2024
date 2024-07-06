import {ShowcaseHighlightModel} from "~/models/showcase/showcase-highlight.model";
import {ShowcaseDescriptionModel} from "~/models/showcase/showcase-description.model";

export interface ShowcaseModel {
    title: string;
    subtitle: string;
    link?: string;
    coverImage: string;
    highlights: ShowcaseHighlightModel[];
    highlightIntro: string;
    descriptions: ShowcaseDescriptionModel[];
}

