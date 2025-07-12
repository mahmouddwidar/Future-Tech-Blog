import { type articlesCards, NavigationLink } from "./contentTypes";

const navigationLinks: NavigationLink[] = [
    {
        id: 1,
        href: "/",
        text: "Home"
    },
    {
        id: 2,
        href: "/news",
        text: "News"
    },
    {
        id: 3,
        href: "/podcasts",
        text: "Podcasts"
    },
    {
        id: 4,
        href: "/resources",
        text: "Resources"
    },
]

const articlesCards: articlesCards[] = [
    {
        id: 1,
        title: "Global Climate Summit Addresses Urgent Climate Action",
        imgLink: "/imgs/articles/article1.png",
        detailsExpanded: true,
        details: {
            description: "World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions.",
            publicationDate: "10/10/2023",
            author: "Jane Smith",
        },
        category: "Environment",
        likes: 14000,
        shares: 204
    },
    {
        id: 2,
        title: "A Decisive Victory for Progressive Policies",
        imgLink: "/imgs/articles/article2.png",
        detailsExpanded: false,
        category: "Politics",
        likes: 2200,
        shares: 60
    },
    {
        id: 3,
        title: "Tech Giants Unveil Cutting-Edge AI Innovations",
        imgLink: "/imgs/articles/article3.png",
        detailsExpanded: false,
        category: "Technology",
        likes: 6000,
        shares: 92
    },
    {
        id: 4,
        title: "COVID-19 Variants",
        imgLink: "/imgs/articles/article4.png",
        detailsExpanded: false,
        category: "Health",
        likes: 10000,
        shares: 124
    },
]

export { navigationLinks, articlesCards }