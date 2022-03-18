import React, { useState } from 'react';
import classNames from 'classnames';
import _ from 'lodash';

import { RadioGroup } from '@headlessui/react';
import Card from 'components/Card';
import Chip from 'components/Chip';
import TextInput from 'components/Input';
import DynamicTable from 'components/DynamicTable';

import { QUALITY, QUALITY_COLOR, RANKS } from 'helpers/constants';

import { Colors, GiftAmount, Quality, Reaction } from 'interfaces/general';
import { getGiftsForNextRankByLevel } from 'helpers';

type Props = {}

type InfluenceRow = GiftAmount | {
    className?: string
    spacer?: boolean
}

const InfluenceCalculatorScreen = (props: Props) => {
    const [reaction, setReaction] = useState<Reaction>('love');
    const [level, setLevel] = useState<number>(1);
    const [influence, setInfluence] = useState<number>(0);
    const [bonus, setBonus] = useState<number>(0);
    
    // const [selectedCompanion, setSelectedCompanion] = useState();
    // const [filteredCompanions, setFilteredCompanions] = useState<Companion[]>([]);
    // const [query, setQuery] = useState('');
    // useEffect(() => {
    //     let fc: Companion[] = [];
    //     if (query.length > 3) 
    //         fc = _.filter(COMPANIONS, (c) => c.name.toLowerCase().includes(query.toLowerCase()));
    
    //     setFilteredCompanions(fc);
    // }, [query]);

    const formatGiftType = (v: number, row: any) => {
        return `Rank ${row.giftRank + 1} ${_.capitalize(QUALITY_COLOR[row.quality.toUpperCase()])}`;
    }

    const rankHeaders = _.map(_.slice(RANKS, 0, -1) , (r) => ({ 
        label: `${r.min} - ${r.max}`,
        accesor: `amountRank${r.id}`,
        renderer: (value: number) => value || '-',
        headerClassName: 'text-right px-2',
        cellClassName: 'text-right px-2'
    }))

    const headers = [
        { 
            label: 'Gift Type', 
            accesor: 'giftRank', 
            renderer: formatGiftType, 
            headerClassName: 'font-medium text-left px-2', 
            cellClassName: 'font-medium text-left px-2' 
        },
        ...rankHeaders,
        { 
            label: 'Total', 
            accesor: 'total', 
            headerClassName: 'text-right px-2', 
            cellClassName: 'text-right px-2' 
        },
    ]

    const getGiftsPerInfluenceRank = (): InfluenceRow[] => {
        let influenceValues: InfluenceRow[] = [];
        _.forEach(_.range(6), (giftRank) => {
            const v = _.map(QUALITY, (quality) => {
                const amountRanks: number[] = _.map(
                    _.slice(RANKS, 0, -1), 
                    (rank) => getGiftsForNextRankByLevel(reaction, quality as Quality, giftRank + 1, rank, level, influence, (bonus/100) + 1)
                );
                const obj: InfluenceRow = {
                    giftRank,
                    quality: quality as Quality,
                    amountRank1: amountRanks[0],
                    amountRank2: amountRanks[1],
                    amountRank3: amountRanks[2],
                    amountRank4: amountRanks[3],
                    amountRank5: amountRanks[4],
                    amountRank6: amountRanks[5],
                    amountRank7: amountRanks[6],
                    total: _.reduce(amountRanks, (acc, ar) => acc + ar, 0)
                }
                return obj;        
            })
            influenceValues = (giftRank > 4) ? [...influenceValues, ...v] : [...influenceValues, ...v, { className: 'h-3', spacer: true }];
        })
        return influenceValues;
    }

    const getRowClasses = (row: any) => {
        const rowClasses = classNames(
            'hover:text-gray-900',
            { 'hover:bg-green-200': row.quality === 'premium' },
            { 'hover:bg-blue-200': row.quality === 'prototype' },
            { 'hover:bg-pink-200': row.quality === 'artifact' },
            { 'hover:bg-yellow-200': row.quality === 'legendary' }
        );
        return rowClasses;
    }

    return (
        <div className='screen-influencecalculator h-screen flex justify-center items-center'>
            <Card>
                <Card.Header text='Influence Calculator' />
                <Card.Body justify='evenly'>
                    <div>
                        <label htmlFor='level' className='text-lg mr-3'>Level:</label>
                        <TextInput 
                            id='level' 
                            type='number'
                            maxLength={2}
                            className='px-1 w-8 text-center'
                            value={level}
                            onChange={(v) => setLevel(Number(v))}
                        />
                    </div>
                    <div className=''>
                        <label htmlFor='influence' className='text-lg mr-3'>Influence Bar:</label>
                        <TextInput 
                            id='influence' 
                            type='number'
                            maxLength={4}
                            className='px-1 w-12 text-center'
                            value={influence}
                            onChange={(v) => setInfluence(Number(v))}
                        />
                    </div>
                </Card.Body>
                <Card.Body>
                    <RadioGroup value={reaction} onChange={setReaction} className='flex items-center'>
                        {_.map(['love', 'favorite', 'like'], (r) => 
                            <RadioGroup.Option key={r} className='mr-4 last:mr-0' value={r}>
                                {({ checked }) => <Chip label={_.capitalize(r)} variant={checked ? 'contained' : 'outlined'} color={r as Colors} />}
                            </RadioGroup.Option>
                        )}
                    </RadioGroup>
                </Card.Body>
                <Card.Body>
                    <RadioGroup value={bonus} onChange={setBonus} className='flex items-center'>
                        {_.map([0, 10, 20, 30], (r) => 
                            <RadioGroup.Option key={r} className='mr-4 last:mr-0' value={r}>
                                {({ checked }) => <Chip label={`${r}%`} variant={checked ? 'contained' : 'outlined'} color='primary' />}
                            </RadioGroup.Option>
                        )}
                    </RadioGroup>
                </Card.Body>
                <Card.Body>
                    <DynamicTable 
                        headers={headers}
                        rows={getGiftsPerInfluenceRank()}
                        getRowClassName={getRowClasses}
                    />
                </Card.Body>
            </Card>
        </div>
    )
}

export default InfluenceCalculatorScreen;
