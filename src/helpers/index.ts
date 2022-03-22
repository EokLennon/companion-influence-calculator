import _ from 'lodash';

import { COMPANION_LEVEL, FAVORITE_INFLUENCE_VALUES, LIKE_INFLUENCE_VALUES, LOVE_INFLUENCE_VALUES, RANKS } from 'helpers/constants';

import { Reaction, Level, Quality, Rank } from 'interfaces/general';

export const getLevel = (level: number): Level | undefined => {
    const levelObj = _.find(COMPANION_LEVEL, (cl) => cl.level === level);
    
    return levelObj;
}

export const getInfluenceByLevel = (level: number): number => {
    const levelObj = getLevel(level);
    const totalInfluence = levelObj?.total || 0;
    return totalInfluence;
}

export const getGiftInfluence = (affinity: Reaction, giftQuality: Quality, giftRank: number, rank: number): number => {
    switch (affinity) {
        case 'like': 
            return _.get(LIKE_INFLUENCE_VALUES, `${giftQuality}.${giftRank - 1}.${rank - 1}`, 0);
        case 'favorite': 
            return _.get(FAVORITE_INFLUENCE_VALUES, `${giftQuality}.${giftRank - 1}.${rank - 1}`, 0);
        case 'love': 
            return _.get(LOVE_INFLUENCE_VALUES, `${giftQuality}.${giftRank - 1}.${rank - 1}`, 0);
        default: 
            return 0;
    }
}

export const getGiftsForNextRankByLevel = (reaction: Reaction, giftQuality: Quality, giftRank: number, rank: Rank, level: number, levelInfluence: number = 0, multiplier: number = 1): number => {
    const currentInfluence = getInfluenceByLevel(level) + levelInfluence;
    const rankInfluence = rank.total;
    const nextRank = _.find(RANKS, (r) => r.total > rankInfluence);

    if (!nextRank || currentInfluence > nextRank.total) return 0;
    
    const minus = (currentInfluence > rank.total) ? currentInfluence : rank.total;
    const giftInfluence = getGiftInfluence(reaction, giftQuality, giftRank, rank.id);

    if (giftInfluence === 0) return 0;

    const total = (nextRank.total - minus) / (giftInfluence * multiplier);
    return _.ceil(total, 0);
}

export const getGiftsForNextRankByCurrentInfluence = (reaction: Reaction, giftQuality: Quality, giftRank: number, currentInfluence: number, multiplier: number = 1): number => {
    const orderedRanks = _.orderBy(RANKS, ['id'], ['desc']);
    const currentRank = _.find(orderedRanks, (r) => r.total <= currentInfluence);
    const nextRank = _.find(RANKS, (r) => r.total > currentInfluence);

    if (!currentRank || !nextRank) return 0;

    const giftInfluence = getGiftInfluence(reaction, giftQuality, giftRank, currentRank.id);

    if (giftInfluence === 0) return 0;

    const total = (nextRank.total - currentInfluence) / (giftInfluence * multiplier);
    return _.ceil(total, 0);
}

export const getGiftsForTargetLevel = (reaction: Reaction, giftQuality: Quality, giftRank: number, currentLevel: number, targetLevel: number, influence: number = 0, multiplier: number = 1): number => {
    const currentInfluence = getInfluenceByLevel(currentLevel) + influence;
    const targetInfluence = getInfluenceByLevel(targetLevel);

    const orderedRanks = _.orderBy(RANKS, ['id'], ['desc']);
    const currentRank = _.find(orderedRanks, (r) => r.total <= currentInfluence);
    const targetRank = _.find(orderedRanks, (r) => r.total <= targetInfluence);
    
    if (!currentRank || !targetRank) return 0;

    const filteredRanks = _.filter(RANKS, (r) => r.id >= currentRank.id && r.id <= targetRank.id);

    let total = 0;
    _.forEach(filteredRanks, (fr, i) => {
        const iInfluence = (fr.id === currentRank.id) ? currentInfluence : fr.total;
        const totalForRank = getGiftsForNextRankByCurrentInfluence(reaction, giftQuality, giftRank, iInfluence, multiplier);        
        total += _.ceil(totalForRank, 0);
    });
    
    return total;
}