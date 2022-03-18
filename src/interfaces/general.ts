export type Colors = 'gray'|'primary'|'secondary'|'love'|'favorite'|'like';

export type Reaction = 'like' | 'favorite' | 'love';
export type Quality = 'premium' | 'prototype' | 'artifact' | 'legendary';

/** Hierarchy: [Quality][Rank][IRank] */
export type InfluenceChart = { [key in Quality]: number[][] };

export interface KeyCatalogue {
    [key: string]: string
}

export interface Companion {
    id: string
    name: string
    like: string[]
    favorite: string[]
    love: string[]
    categories: string[]
}

export interface Rank { 
    id: number
    level: number
    total: number 
    min: number
    max: number
}

export interface Level {
    level: number
    influence: number
    total: number
}

export type GiftAmount = {
    giftRank: number
    quality: Quality
    amountRank1: number
    amountRank2: number
    amountRank3: number
    amountRank4: number
    amountRank5: number
    amountRank6: number
    amountRank7: number
    total: number
};