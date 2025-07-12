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

export type { NavigationLink, articlesCards }