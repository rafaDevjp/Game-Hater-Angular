
export interface MyObjectGames {
    games: Array<Games>;
    totalSize: number;
};

export interface Games {
    _id: string;
    title: string;
    description: string;
    photos: Array<Photos>;
    genres:ItensGenres[];
    platforms:ItensPlatForms[];
    tags: Array<string>;
    rating: number;
    totalVotes: number;
    videos?: Array<Videos>;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    mediumPrice: number;
    releaseYear: number;
};

export interface Photos {
    name: string
    url: string;
    _id: string;
};
export interface Videos {
    typ?: string;
    url?: string;
    _id?: string
};

export enum ItensGenres{
    "Fight",
     "Sports",
     "Survival",
     "Horror",
     "RPG",
     "Fps",
     "Tps",
     "Platform",
     "Adventure",
     "Action",
     "Minigame",
     "Racing",
     "Strategy",
     "Musical",
     "Dance",
     "Simulator"
}

export enum ItensPlatForms{
    "PS",
    "PS2",
    "PS3",
    "PS4",
    "PS5",
    // "PSP",
    "XBOX",
    "XBOX 360",
    "XBOX ONE",
    "XBOX SERIES S",
    // "XBOX SERIES X",
    // "SUPER NINTENDO",
    "NINTENDO 64",
    "NINTENDO SWITCH",
    "NINTENDO WII",
    "NINTENDO DS",
    "NINTENDO 3DS",
    "MEGA DRIVE",
    "PC",
    "MOBILE"
}
