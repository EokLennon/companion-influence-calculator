import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import _ from 'lodash';

import { RadioGroup } from '@headlessui/react';

import Card from 'components/Card';
import Chip from 'components/Chip';
import Slider from 'components/Slider';
import TextInput from 'components/Input';

import { QUALITY, QUALITY_COLOR, RANKS } from 'helpers/constants';

import { Colors, GiftAmount, KeyCatalogue, Quality, Reaction } from 'interfaces/general';
import { getGiftsForNextRankByLevel, getGiftsForTargetLevel, getLevel } from 'helpers';

type Props = {}

type GiftForQuality = {
    [quality in Quality]: number
} & { rank: number }

const InfluenceCalculatorScreen = (props: Props) => {
    const [reaction, setReaction] = useState<Reaction>('love');
    const [currentLevel, setCurrentLevel] = useState<number>(1);
    const [targetLevel, setTargetLevel] = useState<number>(50);
    const [influence, setInfluence] = useState<number>(0);
    const [maxInfluence, setMaxInfluence] = useState<number>(0);
    const [bonus, setBonus] = useState<number>(0);

    useEffect(() => {
        const levelInfluence = getLevel(currentLevel + 1);
        const influence = levelInfluence?.influence || 0;
        setMaxInfluence(influence > 0 ? influence - 1 : 0);
    }, [currentLevel]);
    
    // const [selectedCompanion, setSelectedCompanion] = useState();
    // const [filteredCompanions, setFilteredCompanions] = useState<Companion[]>([]);
    // const [query, setQuery] = useState('');
    // useEffect(() => {
    //     let fc: Companion[] = [];
    //     if (query.length > 3) 
    //         fc = _.filter(COMPANIONS, (c) => c.name.toLowerCase().includes(query.toLowerCase()));
    
    //     setFilteredCompanions(fc);
    // }, [query]);

    const getGiftsPerInfluenceRank = (): GiftForQuality[] => {
        let gifts: GiftForQuality[] = [];
        _.forEach(_.range(6), (giftRank) => {
            const list = _.map(QUALITY, (quality) => {
                const g = getGiftsForTargetLevel(reaction, quality as Quality, giftRank + 1, currentLevel, targetLevel, influence, (bonus / 100) + 1);
                return g;
            });
            gifts.push({
                rank: giftRank + 1,
                premium: list[0],
                prototype: list[1],
                artifact: list[2],
                legendary: list[3],
            });
        })
        return gifts;
    }

    const values = getGiftsPerInfluenceRank();

    const reactionRGClasses = classNames('mr-1', 'last:mr-0');
    const bonusRGClasses = classNames('mr-1', 'last:mr-0');
    const giftsClasses = classNames('flex', 'justify-self-center', 'mb-4', 'last:mb-0');

    return (
        <div className='screen-influencecalculator h-screen flex justify-center'>
            <Card>
                <Card.Header text='Gift Calculator' />
                <Card.Body flex direction='row' justify='center'>
                    <div className='mr-3 mb-3 sm:mb-0'>
                        <label htmlFor='currentLevel' className='text-lg mr-3'>Current:</label>
                        <TextInput 
                            id='currentLevel' 
                            type='number'
                            maxLength={2}
                            className='w-12 text-center'
                            value={currentLevel}
                            min={1}
                            max={50}
                            onChange={(v: string) => setCurrentLevel(Number(v))}
                        />
                    </div>
                    <div className='mx-3'>
                        <label htmlFor='targetLevel' className='text-lg mr-3'>Target:</label>
                        <TextInput 
                            id='targetLevel' 
                            type='number'
                            maxLength={2}
                            className='w-12 text-center'
                            value={targetLevel}
                            onChange={(v: string) => setTargetLevel(Number(v))}
                            min={1}
                            max={50}
                            disabled={currentLevel === 50}
                        />
                    </div>
                    <div className='ml-3'>
                        <label htmlFor='influence' className='text-lg mr-3'>Influence Bar:</label>
                        <TextInput 
                            id='influence' 
                            type='number'
                            maxLength={4}
                            className='w-16 text-center'
                            value={influence}
                            min={0}
                            max={maxInfluence}
                            onChange={(v: string) => setInfluence(Number(v))}
                            disabled={currentLevel === 50}
                        />
                    </div>
                </Card.Body>
                <RadioGroup as={Card.Body} value={reaction} onChange={setReaction} flex justify='center'>
                    {_.map(['love', 'favorite', 'like'], (r) => 
                        <RadioGroup.Option key={r} className={reactionRGClasses} value={r}>
                            {({ checked }) => 
                                <Chip 
                                    label={_.capitalize(r)} 
                                    variant={checked ? 'contained' : 'outlined'} 
                                    color={r as Colors}
                                    clickable
                                />
                            }
                        </RadioGroup.Option>
                    )}
                </RadioGroup>
                <RadioGroup as={Card.Body} value={bonus} onChange={setBonus} flex justify='center'>
                    {_.map([0, 10, 20, 30], (r) => 
                        <RadioGroup.Option key={r} className={bonusRGClasses} value={r}>
                            {({ checked }) => 
                                <Chip 
                                    label={`${r}%`}
                                    className='w-12'
                                    variant={checked ? 'contained' : 'outlined'}
                                    color='primary'
                                    clickable
                                />
                            }
                        </RadioGroup.Option>
                    )}
                </RadioGroup>
                <Card.Body flex justify='center' className='pb-0'>
                {_.map(values, (v) => 
                    <div className='mx-1 mb-3'>
                        <p title={v.rank === 1 ? 'Up to Level 40' : undefined} className='mb-1 text-center'>Rank {v.rank}</p>
                        <Chip label={`${v.premium}`} className='w-16 mb-1' variant='outlined' color='like' />
                        <Chip label={`${v.prototype}`} className='w-16 mb-1' variant='outlined' color='favorite' />
                        <Chip label={`${v.artifact}`} className='w-16 mb-1' variant='outlined' color='love' />
                        <Chip label={`${v.legendary}`} className='w-16' variant='outlined' color='secondary' />
                    </div>
                )}
                </Card.Body>
            </Card>
        </div>
    )
}

export default InfluenceCalculatorScreen;
