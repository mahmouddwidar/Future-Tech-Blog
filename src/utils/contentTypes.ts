interface NavigationLink {
    id: number,
    href: string,
    text: string
}

interface articlesCards {
    id: number,
    title: string,
    imgLink: string,
    detailsExpanded: boolean,
    details?: {
        description: string,
        publicationDate: string,
        author: string,
    },
    category: string,
    likes: number,
    shares: number,
}

interface FeatureItem {
    id: number;
    title: string;
    desc: string;
}

interface FeatureGroup {
    id: number;
    title: string;
    desc: string;
    icon: string;
    features: FeatureItem[];
}

export type { NavigationLink, articlesCards, FeatureItem, FeatureGroup }