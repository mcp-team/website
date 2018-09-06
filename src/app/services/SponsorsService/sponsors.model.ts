
export enum SponsorType {
    Bronze = 'bronze',
    Silver = 'silver',
    Gold = 'gold',
    Platinum = 'platinum'
}

export interface Sponsor {
    name: string;
    description: string;
    url: string;
    type: SponsorType;
    logoUrl: string;
}