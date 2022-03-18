import { KeyCatalogue, Companion, InfluenceChart, Level, Rank } from 'interfaces/general';

export const QUALITY: KeyCatalogue = {
    PREMIUM: 'premium',
    PROTOTYPE: 'prototype',
    ARTIFACT: 'artifact',
    LEGENDARY: 'legendary'
}

export const QUALITY_COLOR: KeyCatalogue = {
    PREMIUM: 'green',
    PROTOTYPE: 'blue',
    ARTIFACT: 'pink',
    LEGENDARY: 'yellow'
}

export const GIFTS: KeyCatalogue = {
    COURTING: 'courting',
    CULTURAL_ARTIFACT: 'cultural_artifact',
    DELICACIES: 'delicacies',
    IMPERIAL_MEMORABILIA: 'imperial_memorabilia',
    LUXURY: 'luxury',
    MAINTENANCE: 'maintenance',
    MILITARY_GEAR: 'military_gear',
    REPUBLIC_MEMORABILIA: 'republic_memorabilia',
    TECHNOLOGY: 'technology',
    TROPHY: 'trophy',
    UNDERWORLD_GOOD: 'underworld_good',
    WEAPON: 'weapon',
    SPECIAL_INSECTICULTURE: 'special_insecticulture',
    SPECIAL_FORGED_DOCUMENTS: 'special_forged_documents'
}

export const CATEGORIES: KeyCatalogue = {
    JEDI_CONSULAR: 'jedi_consular',
    JEDI_KNIGHT: 'jedi_knight',
    TROOPER: 'trooper',
    SMUGGLER: 'smuggler',
    SITH_WARRIOR: 'sith_warrior',
    SITH_INQUISITOR: 'sith_inquisitor',
    IMPERIAL_AGENT: 'imperial_agent',
    BOUNTY_HUNTER: 'bounty_hunter',
    KOTFE: 'kotfe',
    ONSLAUGHT: 'onslaught',
    SPECIAL: 'special',
    STAR_FORTRESS: 'star_fortress',
    RETIRED: 'retired',
    CARTEL_MARKET: 'cartel_market',
}

export const LIKE_INFLUENCE_VALUES: InfluenceChart = {
    premium: [
        [32, 26, 19, 13, 6, 3, 0, 0],
        [38, 32, 26, 19, 13, 6, 3, 0],
        [45, 38, 32, 26, 19, 13, 6, 3],
        [51, 45, 38, 32, 26, 19, 13, 6],
        [51, 51, 45, 38, 32, 26, 19, 13],
        [51, 51, 51, 45, 38, 32, 26, 19],
    ],
    prototype: [
        [64, 51, 38, 26, 13, 6, 0, 0],
        [77, 64, 51, 38, 26, 13, 6, 0],
        [90, 77, 64, 51, 38, 26, 13, 6],
        [102, 90, 77, 64, 51, 38, 26, 13],
        [102, 102, 90, 77, 64, 51, 38, 26],
        [102, 102, 102, 90, 77, 64, 51, 38],
    ],
    artifact: [
        [128, 102, 77, 51, 26, 13, 0, 0],
        [154, 128, 102, 77, 51, 26, 13, 0],
        [179, 154, 128, 102, 77, 51, 26, 13],
        [205, 179, 154, 128, 102, 77, 51, 26],
        [205, 205, 179, 154, 128, 102, 77, 51],
        [205, 205, 205, 179, 154, 128, 102, 77],
    ],
    legendary: [
        [320, 256, 192, 128, 64, 32, 0, 0],
        [384, 320, 256, 192, 128, 64, 32, 0],
        [448, 384, 320, 256, 192, 128, 64, 32],
        [512, 448, 384, 320, 256, 192, 128, 64],
        [512, 512, 448, 384, 320, 256, 192, 128],
        [512, 512, 512, 448, 384, 320, 256, 192],
    ],
}

export const FAVORITE_INFLUENCE_VALUES: InfluenceChart = {
    premium: [
        [72, 58, 43, 29, 14, 7, 0, 0],
        [86, 72, 58, 43, 29, 14, 7, 0],
        [101, 86, 72, 58, 43, 29, 14, 7],
        [115, 101, 86, 72, 58, 43, 29, 14],
        [115, 115, 101, 86, 72, 58, 43, 29],
        [115, 115, 115, 101, 86, 72, 58, 43],
    ],
    prototype: [
        [144, 115, 86, 58, 29, 14, 0, 0],
        [173, 144, 115, 86, 58, 29, 14, 0],
        [202, 173, 144, 115, 86, 58, 29, 14],
        [230, 202, 173, 144, 115, 86, 58, 29],
        [230, 230, 202, 173, 144, 115, 86, 58],
        [230, 230, 230, 202, 173, 144, 115, 86],
    ],
    artifact: [
        [288, 230, 173, 115, 58, 29, 0, 0],
        [346, 288, 230, 173, 115, 58, 29, 0],
        [403, 346, 288, 230, 173, 115, 58, 29],
        [461, 403, 346, 288, 230, 173, 115, 58],
        [461, 461, 403, 346, 288, 230, 173, 115],
        [461, 461, 461, 403, 346, 288, 230, 173],
    ],
    legendary: [
        [720, 576, 432, 288, 144, 72, 0, 0],
        [864, 720, 576, 432, 288, 144, 72, 0],
        [1008, 864, 720, 576, 432, 288, 144, 72],
        [1152, 1008, 864, 720, 576, 432, 288, 144],
        [1152, 1152, 1008, 864, 720, 576, 432, 288],
        [1152, 1152, 1152, 1008, 864, 720, 576, 432],
    ],
}

export const LOVE_INFLUENCE_VALUES: InfluenceChart = {
    premium: [
        [128, 102, 77, 51, 26, 13, 0, 0],
        [154, 128, 102, 77, 51, 26, 13, 0],
        [179, 154, 128, 102, 77, 51, 26, 13],
        [205, 179, 154, 128, 102, 77, 51, 26],
        [205, 205, 179, 154, 128, 102, 77, 51],
        [205, 205, 205, 179, 154, 128, 102, 77],
    ],
    prototype: [
        [256, 205, 154, 102, 51, 26, 0, 0],
        [307, 256, 205, 154, 102, 51, 26, 0],
        [358, 307, 256, 205, 154, 102, 51, 26],
        [410, 358, 307, 256, 205, 154, 102, 51],
        [410, 410, 358, 307, 256, 205, 154, 102],
        [410, 410, 410, 358, 307, 256, 205, 154],
    ],
    artifact: [
        [512, 410, 307, 205, 102, 51, 0, 0],
        [614, 512, 410, 307, 205, 102, 51, 0],
        [717, 614, 512, 410, 307, 205, 102, 51],
        [819, 717, 614, 512, 410, 307, 205, 102],
        [819, 819, 717, 614, 512, 410, 307, 205],
        [819, 819, 819, 717, 614, 512, 410, 307],
    ],
    legendary: [
        [1280, 1024, 768, 512, 256, 128, 0, 0],
        [1536, 1280, 1024, 768, 512, 256, 128, 0],
        [1792, 1536, 1280, 1024, 768, 512, 256, 128],
        [2048, 1792, 1536, 1280, 1024, 768, 512, 256],
        [2048, 2048, 1792, 1536, 1280, 1024, 768, 512],
        [2048, 2048, 2048, 1792, 1536, 1280, 1024, 768],
    ],
}

export const COMPANIONS: Companion[] = [
    {
        id: 'blizz',
        name: 'Blizz', 
        like: [], 
        favorite: [GIFTS.CULTURAL_ARTIFACT, GIFTS.IMPERIAL_MEMORABILIA, GIFTS.LUXURY, GIFTS.MILITARY_GEAR, GIFTS.REPUBLIC_MEMORABILIA, GIFTS.TROPHY, GIFTS.WEAPON], 
        love: [GIFTS.TECHNOLOGY, GIFTS.UNDERWORLD_GOOD],
        categories: [CATEGORIES.BOUNTY_HUNTER]
    }, 
    {
        id: 'gault',
        name: 'Gault',
        like: [GIFTS.CULTURAL_ARTIFACT, GIFTS.TECHNOLOGY, GIFTS.WEAPON],
        favorite: [GIFTS.UNDERWORLD_GOOD],
        love: [GIFTS.LUXURY],
        categories: [CATEGORIES.BOUNTY_HUNTER]
    }, 
    {
        id: 'mako',
        name: 'Mako',
        like: [GIFTS.CULTURAL_ARTIFACT, GIFTS.LUXURY, GIFTS.TROPHY, GIFTS.WEAPON],
        favorite: [GIFTS.UNDERWORLD_GOOD],
        love: [GIFTS.TECHNOLOGY],
        categories: [CATEGORIES.BOUNTY_HUNTER]
    },
    {
        id: 'skadge',
        name: 'Skadge',
        like: [GIFTS.LUXURY, GIFTS.TROPHY],
        favorite: [GIFTS.MILITARY_GEAR],
        love: [GIFTS.UNDERWORLD_GOOD, GIFTS.WEAPON],
        categories: [CATEGORIES.BOUNTY_HUNTER]
    },
    {
        id: 'torian_cadera_cs',
        name: 'Torian Cadera (Class Story)',
        like: [GIFTS.CULTURAL_ARTIFACT, GIFTS.TECHNOLOGY, GIFTS.UNDERWORLD_GOOD],
        favorite: [GIFTS.WEAPON],
        love: [GIFTS.MILITARY_GEAR, GIFTS.TROPHY],
        categories: [CATEGORIES.BOUNTY_HUNTER]
    },
    {
        id: 'torian_cadera_all',
        name: 'Torian Cadera (Alliance)',
        like: [GIFTS.CULTURAL_ARTIFACT, GIFTS.TECHNOLOGY, GIFTS.UNDERWORLD_GOOD],
        favorite: [GIFTS.MILITARY_GEAR, GIFTS.WEAPON],
        love: [GIFTS.TROPHY],
        categories: [CATEGORIES.BOUNTY_HUNTER]
    },
    {
        id: 'eckard_lokin',
        name: 'Eckard Lokin',
        like: [GIFTS.REPUBLIC_MEMORABILIA, GIFTS.UNDERWORLD_GOOD],
        favorite: [GIFTS.LUXURY, GIFTS.MILITARY_GEAR],
        love: [GIFTS.IMPERIAL_MEMORABILIA, GIFTS.TECHNOLOGY],
        categories: [CATEGORIES.IMPERIAL_AGENT]
    },
    {
        id: 'ensign_raina_temple',
        name: 'Ensign Raina Temple',
        like: [GIFTS.COURTING, GIFTS.LUXURY, GIFTS.REPUBLIC_MEMORABILIA, GIFTS.WEAPON],
        favorite: [GIFTS.MILITARY_GEAR],
        love: [GIFTS.IMPERIAL_MEMORABILIA],
        categories: [CATEGORIES.IMPERIAL_AGENT]
    },
    {
        id: 'kaliyo_djannis_cs',
        name: 'Kaliyo Djannis (Class Story)',
        like: [GIFTS.MILITARY_GEAR, GIFTS.TECHNOLOGY],
        favorite: [GIFTS.DELICACIES, GIFTS.LUXURY, GIFTS.TROPHY, GIFTS.WEAPON],
        love: [GIFTS.UNDERWORLD_GOOD],
        categories: [CATEGORIES.IMPERIAL_AGENT]
    },
    {
        id: 'kaliyo_djannis_all',
        name: 'Kaliyo Djannis (Alliance)',
        like: [GIFTS.MILITARY_GEAR, GIFTS.TECHNOLOGY],
        favorite: [GIFTS.LUXURY, GIFTS.UNDERWORLD_GOOD],
        love: [GIFTS.WEAPON],
        categories: [CATEGORIES.IMPERIAL_AGENT]
    },
    {
        id: 'scorpio',
        name: 'SCORPIO',
        like: [GIFTS.CULTURAL_ARTIFACT, GIFTS.MILITARY_GEAR, GIFTS.TROPHY],
        favorite: [GIFTS.WEAPON],
        love: [GIFTS.MAINTENANCE, GIFTS.TECHNOLOGY],
        categories: [CATEGORIES.IMPERIAL_AGENT]
    },
    {
        id: 'vector_hyllus',
        name: 'Vector Hyllus',
        like: [GIFTS.DELICACIES, GIFTS.LUXURY, GIFTS.TROPHY, GIFTS.WEAPON],
        favorite: [GIFTS.IMPERIAL_MEMORABILIA],
        love: [GIFTS.CULTURAL_ARTIFACT],
        categories: [CATEGORIES.IMPERIAL_AGENT]
    },
    {
        id: 'lieutenant_felix_iresso_cs',
        name: 'Lieutenant Felix Iresso (Class Story)',
        like: [GIFTS.LUXURY, GIFTS.WEAPON],
        favorite: [GIFTS.REPUBLIC_MEMORABILIA],
        love: [GIFTS.TROPHY],
        categories: [CATEGORIES.JEDI_CONSULAR]
    },
    {
        id: 'lieutenant_felix_iresso_all',
        name: 'Lieutenant Felix Iresso (Alliance)',
        like: [GIFTS.CULTURAL_ARTIFACT, GIFTS.LUXURY, GIFTS.WEAPON],
        favorite: [],
        love: [GIFTS.TROPHY],
        categories: [CATEGORIES.JEDI_CONSULAR]
    },
    {
        id: 'nadia_grell',
        name: 'Nadia Grell',
        like: [GIFTS.COURTING, GIFTS.LUXURY, GIFTS.UNDERWORLD_GOOD],
        favorite: [GIFTS.REPUBLIC_MEMORABILIA],
        love: [GIFTS.CULTURAL_ARTIFACT],
        categories: [CATEGORIES.JEDI_CONSULAR]
    },
    {
        id: 'qyzen_fess',
        name: 'Qyzen Fess',
        like: [GIFTS.TECHNOLOGY, GIFTS.UNDERWORLD_GOOD],
        favorite: [GIFTS.MILITARY_GEAR],
        love: [GIFTS.WEAPON],
        categories: [CATEGORIES.JEDI_CONSULAR]
    },
    {
        id: 'tharan_cedrax',
        name: 'Tharan Cedrax',
        like: [GIFTS.COURTING, GIFTS.CULTURAL_ARTIFACT, GIFTS.UNDERWORLD_GOOD],
        favorite: [GIFTS.TECHNOLOGY],
        love: [GIFTS.LUXURY],
        categories: [CATEGORIES.JEDI_CONSULAR]
    },
    {
        id: 'zenith_cs',
        name: 'Zenith (Class Story)',
        like: [],
        favorite: [GIFTS.UNDERWORLD_GOOD, GIFTS.WEAPON],
        love: [GIFTS.MILITARY_GEAR],
        categories: [CATEGORIES.JEDI_CONSULAR]
    },
    {
        id: 'zenith_all',
        name: 'Zenith (Alliance)',
        like: [],
        favorite: [GIFTS.MILITARY_GEAR, GIFTS.WEAPON],
        love: [GIFTS.UNDERWORLD_GOOD],
        categories: [CATEGORIES.JEDI_CONSULAR]
    },
    {
        id: 'doc',
        name: 'Doc',
        like: [GIFTS.MILITARY_GEAR, GIFTS.REPUBLIC_MEMORABILIA, GIFTS.TECHNOLOGY, GIFTS.TROPHY, GIFTS.UNDERWORLD_GOOD],
        favorite: [GIFTS.CULTURAL_ARTIFACT],
        love: [GIFTS.COURTING, GIFTS.LUXURY],
        categories: [CATEGORIES.JEDI_KNIGHT]
    },
    {
        id: 'rusk',
        name: 'Rusk',
        like: [GIFTS.CULTURAL_ARTIFACT, GIFTS.IMPERIAL_MEMORABILIA, GIFTS.LUXURY, GIFTS.TECHNOLOGY, GIFTS.TROPHY],
        favorite: [GIFTS.REPUBLIC_MEMORABILIA, GIFTS.WEAPON],
        love: [GIFTS.MILITARY_GEAR],
        categories: [CATEGORIES.JEDI_KNIGHT]
    },
    {
        id: 'kira_carsen',
        name: 'Kira Carsen',
        like: [GIFTS.COURTING, GIFTS.CULTURAL_ARTIFACT, GIFTS.IMPERIAL_MEMORABILIA, GIFTS.MILITARY_GEAR, GIFTS.TECHNOLOGY, GIFTS.TROPHY, GIFTS.UNDERWORLD_GOOD],
        favorite: [GIFTS.LUXURY],
        love: [GIFTS.REPUBLIC_MEMORABILIA],
        categories: [CATEGORIES.JEDI_KNIGHT]
    },
    {
        id: 'lord_scourge',
        name: 'Lord Scourge',
        like: [GIFTS.CULTURAL_ARTIFACT, GIFTS.MILITARY_GEAR, GIFTS.REPUBLIC_MEMORABILIA, GIFTS.UNDERWORLD_GOOD, GIFTS.WEAPON],
        favorite: [GIFTS.IMPERIAL_MEMORABILIA, GIFTS.TECHNOLOGY],
        love: [GIFTS.TROPHY],
        categories: [CATEGORIES.JEDI_KNIGHT]
    },
    {
        id: 't7_01',
        name: 'T7-01',
        like: [GIFTS.MILITARY_GEAR, GIFTS.WEAPON],
        favorite: [GIFTS.CULTURAL_ARTIFACT, GIFTS.MAINTENANCE, GIFTS.REPUBLIC_MEMORABILIA],
        love: [GIFTS.TECHNOLOGY],
        categories: [CATEGORIES.JEDI_KNIGHT]
    },
    {
        id: 'andronikos_revel',
        name: 'Andronikos Revel',
        like: [GIFTS.LUXURY],
        favorite: [GIFTS.MILITARY_GEAR, GIFTS.UNDERWORLD_GOOD],
        love: [GIFTS.WEAPON],
        categories: [CATEGORIES.SITH_INQUISITOR]
    },
    {
        id: 'ashara_zavros',
        name: 'Ashara Zavros',
        like: [GIFTS.MILITARY_GEAR, GIFTS.WEAPON],
        favorite: [GIFTS.CULTURAL_ARTIFACT],
        love: [GIFTS.REPUBLIC_MEMORABILIA],
        categories: [CATEGORIES.SITH_INQUISITOR]
    },
    {
        id: 'khem_val',
        name: 'Khem Val',
        like: [GIFTS.IMPERIAL_MEMORABILIA, GIFTS.TECHNOLOGY, GIFTS.TROPHY],
        favorite: [GIFTS.WEAPON],
        love: [GIFTS.CULTURAL_ARTIFACT],
        categories: [CATEGORIES.SITH_INQUISITOR]
    },
    {
        id: 'talos_drellik',
        name: 'Talos Drellik',
        like: [GIFTS.COURTING, GIFTS.TECHNOLOGY],
        favorite: [GIFTS.LUXURY, GIFTS.REPUBLIC_MEMORABILIA],
        love: [GIFTS.CULTURAL_ARTIFACT, GIFTS.IMPERIAL_MEMORABILIA],
        categories: [CATEGORIES.SITH_INQUISITOR]
    },
    {
        id: 'xalek',
        name: 'Xalek',
        like: [GIFTS.UNDERWORLD_GOOD],
        favorite: [GIFTS.TROPHY],
        love: [GIFTS.MILITARY_GEAR, GIFTS.WEAPON],
        categories: [CATEGORIES.SITH_INQUISITOR]
    },
    {
        id: 'broonmark',
        name: 'Broonmark',
        like: [GIFTS.CULTURAL_ARTIFACT, GIFTS.IMPERIAL_MEMORABILIA, GIFTS.MILITARY_GEAR],
        favorite: [GIFTS.REPUBLIC_MEMORABILIA, GIFTS.TECHNOLOGY],
        love: [GIFTS.TROPHY, GIFTS.WEAPON],
        categories: [CATEGORIES.SITH_WARRIOR]
    },
    {
        id: 'jaesa_willsaam_csl',
        name: 'Jaesa Willsaam (Class Story (Light))',
        like: [GIFTS.COURTING, GIFTS.TROPHY, GIFTS.WEAPON],
        favorite: [GIFTS.MILITARY_GEAR],
        love: [GIFTS.CULTURAL_ARTIFACT, GIFTS.REPUBLIC_MEMORABILIA],
        categories: [CATEGORIES.SITH_WARRIOR]
    },
    {
        id: 'jaesa_willsaam_csd',
        name: 'Jaesa Willsaam (Class Story (Dark))',
        like: [GIFTS.IMPERIAL_MEMORABILIA, GIFTS.MILITARY_GEAR],
        favorite: [GIFTS.LUXURY, GIFTS.TROPHY],
        love: [GIFTS.WEAPON],
        categories: [CATEGORIES.SITH_WARRIOR]
    },
    {
        id: 'lieutenant_pierce',
        name: 'Lieutenant Pierce',
        like: [GIFTS.IMPERIAL_MEMORABILIA, GIFTS.REPUBLIC_MEMORABILIA, GIFTS.TECHNOLOGY, GIFTS.UNDERWORLD_GOOD],
        favorite: [GIFTS.DELICACIES, GIFTS.TROPHY],
        love: [GIFTS.MILITARY_GEAR, GIFTS.WEAPON],
        categories: [CATEGORIES.SITH_WARRIOR]
    },
    {
        id: 'malavai_quinn',
        name: 'Malavai Quinn',
        like: [GIFTS.COURTING, GIFTS.TECHNOLOGY, GIFTS.TROPHY],
        favorite: [GIFTS.WEAPON],
        love: [GIFTS.IMPERIAL_MEMORABILIA, GIFTS.MILITARY_GEAR],
        categories: [CATEGORIES.SITH_WARRIOR]
    },
    {
        id: 'vette',
        name: 'Vette',
        like: [GIFTS.COURTING, GIFTS.IMPERIAL_MEMORABILIA, GIFTS.LUXURY, GIFTS.REPUBLIC_MEMORABILIA, GIFTS.TECHNOLOGY, GIFTS.WEAPON],
        favorite: [GIFTS.CULTURAL_ARTIFACT],
        love: [GIFTS.UNDERWORLD_GOOD],
        categories: [CATEGORIES.SITH_WARRIOR]
    },
    {
        id: 'akaavi_spar',
        name: 'Akaavi Spar',
        like: [GIFTS.COURTING, GIFTS.IMPERIAL_MEMORABILIA, GIFTS.REPUBLIC_MEMORABILIA, GIFTS.TECHNOLOGY, GIFTS.UNDERWORLD_GOOD],
        favorite: [GIFTS.WEAPON],
        love: [GIFTS.MILITARY_GEAR, GIFTS.TROPHY],
        categories: [CATEGORIES.SMUGGLER]
    },
    {
        id: 'bowdaar',
        name: 'Bowdaar',
        like: [GIFTS.COURTING, GIFTS.MILITARY_GEAR, GIFTS.TECHNOLOGY, GIFTS.UNDERWORLD_GOOD],
        favorite: [GIFTS.CULTURAL_ARTIFACT, GIFTS.DELICACIES, GIFTS.WEAPON],
        love: [GIFTS.LUXURY, GIFTS.TROPHY],
        categories: [CATEGORIES.SMUGGLER]
    },
    {
        id: 'corso_riggs',
        name: 'Corso Riggs',
        like: [GIFTS.COURTING, GIFTS.CULTURAL_ARTIFACT, GIFTS.LUXURY, GIFTS.REPUBLIC_MEMORABILIA, GIFTS.TECHNOLOGY, GIFTS.TROPHY],
        favorite: [GIFTS.MILITARY_GEAR],
        love: [GIFTS.WEAPON],
        categories: [CATEGORIES.SMUGGLER]
    },
    {
        id: 'guss',
        name: 'Guss',
        like: [GIFTS.CULTURAL_ARTIFACT, GIFTS.IMPERIAL_MEMORABILIA, GIFTS.TECHNOLOGY, GIFTS.TROPHY],
        favorite: [GIFTS.COURTING, GIFTS.LUXURY],
        love: [GIFTS.REPUBLIC_MEMORABILIA, GIFTS.UNDERWORLD_GOOD],
        categories: [CATEGORIES.SMUGGLER]
    },
    {
        id: 'risha',
        name: 'Risha',
        like: [GIFTS.IMPERIAL_MEMORABILIA, GIFTS.MILITARY_GEAR, GIFTS.REPUBLIC_MEMORABILIA, GIFTS.TECHNOLOGY, GIFTS.WEAPON],
        favorite: [GIFTS.CULTURAL_ARTIFACT, GIFTS.UNDERWORLD_GOOD],
        love: [GIFTS.LUXURY],
        categories: [CATEGORIES.SMUGGLER]
    },
    {
        id: 'aric_jorgan_cs',
        name: 'Aric Jorgan (Class Story)',
        like: [GIFTS.CULTURAL_ARTIFACT, GIFTS.REPUBLIC_MEMORABILIA, GIFTS.TECHNOLOGY, GIFTS.TROPHY],
        favorite: [GIFTS.DELICACIES, GIFTS.MILITARY_GEAR],
        love: [GIFTS.WEAPON],
        categories: [CATEGORIES.TROOPER]
    },
    {
        id: 'aric_jorgan_all',
        name: 'Aric Jorgan (Alliance)',
        like: [GIFTS.CULTURAL_ARTIFACT, GIFTS.REPUBLIC_MEMORABILIA, GIFTS.TECHNOLOGY, GIFTS.TROPHY],
        favorite: [GIFTS.MILITARY_GEAR],
        love: [GIFTS.WEAPON],
        categories: [CATEGORIES.TROOPER]
    },
    {
        id: 'elara_dorne',
        name: 'Elara Dorne',
        like: [GIFTS.TECHNOLOGY],
        favorite: [GIFTS.LUXURY, GIFTS.MILITARY_GEAR],
        love: [GIFTS.IMPERIAL_MEMORABILIA, GIFTS.REPUBLIC_MEMORABILIA],
        categories: [CATEGORIES.TROOPER]
    },
    {
        id: 'm1_4x',
        name: 'M1-4X',
        like: [GIFTS.COURTING, GIFTS.CULTURAL_ARTIFACT, GIFTS.LUXURY, GIFTS.TROPHY, GIFTS.WEAPON],
        favorite: [GIFTS.MAINTENANCE, GIFTS.MILITARY_GEAR, GIFTS.TECHNOLOGY],
        love: [GIFTS.REPUBLIC_MEMORABILIA],
        categories: [CATEGORIES.TROOPER]
    },
    {
        id: 'tanno_vik_cs',
        name: 'Tanno Vik (Class Story)',
        like: [GIFTS.TECHNOLOGY],
        favorite: [GIFTS.MILITARY_GEAR, GIFTS.WEAPON],
        love: [GIFTS.DELICACIES, GIFTS.LUXURY, GIFTS.UNDERWORLD_GOOD],
        categories: [CATEGORIES.TROOPER]
    },
    {
        id: 'yuun_cs',
        name: 'Yuun (Class Story)',
        like: [GIFTS.IMPERIAL_MEMORABILIA, GIFTS.MILITARY_GEAR, GIFTS.REPUBLIC_MEMORABILIA, GIFTS.WEAPON],
        favorite: [GIFTS.CULTURAL_ARTIFACT],
        love: [GIFTS.TECHNOLOGY, GIFTS.TROPHY],
        categories: [CATEGORIES.TROOPER]
    },
    {
        id: 'yuun_all',
        name: 'Yuun (Alliance)',
        like: [GIFTS.IMPERIAL_MEMORABILIA, GIFTS.REPUBLIC_MEMORABILIA, GIFTS.WEAPON],
        favorite: [GIFTS.CULTURAL_ARTIFACT, GIFTS.MILITARY_GEAR],
        love: [GIFTS.TECHNOLOGY, GIFTS.TROPHY],
        categories: [CATEGORIES.TROOPER]
    },
    {
        id: 'c2_n2',
        name: 'C2-N2',
        like: [GIFTS.LUXURY, GIFTS.REPUBLIC_MEMORABILIA],
        favorite: [GIFTS.TECHNOLOGY],
        love: [GIFTS.CULTURAL_ARTIFACT, GIFTS.MAINTENANCE],
        categories: [CATEGORIES.JEDI_CONSULAR, CATEGORIES.JEDI_KNIGHT, CATEGORIES.SMUGGLER, CATEGORIES.TROOPER]
    },
    {
        id: '2v_r8',
        name: '2V-R8',
        like: [GIFTS.IMPERIAL_MEMORABILIA, GIFTS.LUXURY],
        favorite: [GIFTS.TECHNOLOGY],
        love: [GIFTS.CULTURAL_ARTIFACT, GIFTS.MAINTENANCE],
        categories: [CATEGORIES.SITH_INQUISITOR, CATEGORIES.SITH_WARRIOR, CATEGORIES.IMPERIAL_AGENT, CATEGORIES.BOUNTY_HUNTER]
    },
    {
        id: 'akghal_usar',
        name: "Ak'ghal Usar",
        like: [GIFTS.TECHNOLOGY, GIFTS.TROPHY],
        favorite: [GIFTS.WEAPON],
        love: [GIFTS.CULTURAL_ARTIFACT],
        categories: [CATEGORIES.KOTFE]
    },
    {
        id: 'arcann',
        name: 'Arcann',
        like: [GIFTS.COURTING, GIFTS.TECHNOLOGY, GIFTS.TROPHY],
        favorite: [GIFTS.WEAPON],
        love: [GIFTS.IMPERIAL_MEMORABILIA, GIFTS.MILITARY_GEAR],
        categories: [CATEGORIES.KOTFE]
    },
    {
        id: 'hk_55',
        name: 'HK-55',
        like: [GIFTS.TROPHY, GIFTS.WEAPON],
        favorite: [GIFTS.MAINTENANCE, GIFTS.TECHNOLOGY],
        love: [GIFTS.MILITARY_GEAR],
        categories: [CATEGORIES.KOTFE]
    },
    {
        id: 'jakarro',
        name: 'Jakarro',
        like: [GIFTS.COURTING, GIFTS.MILITARY_GEAR, GIFTS.TECHNOLOGY, GIFTS.UNDERWORLD_GOOD],
        favorite: [GIFTS.CULTURAL_ARTIFACT, GIFTS.DELICACIES, GIFTS.WEAPON],
        love: [GIFTS.LUXURY, GIFTS.TROPHY],
        categories: [CATEGORIES.ONSLAUGHT]
    },
    {
        id: 'koth',
        name: 'Koth',
        like: [GIFTS.CULTURAL_ARTIFACT, GIFTS.MILITARY_GEAR],
        favorite: [GIFTS.TECHNOLOGY, GIFTS.UNDERWORLD_GOOD],
        love: [GIFTS.DELICACIES, GIFTS.WEAPON],
        categories: [CATEGORIES.KOTFE]
    },
    {
        id: 'lana_beniko',
        name: 'Lana Beniko',
        like: [GIFTS.TECHNOLOGY, GIFTS.TROPHY],
        favorite: [GIFTS.DELICACIES, GIFTS.IMPERIAL_MEMORABILIA],
        love: [GIFTS.CULTURAL_ARTIFACT],
        categories: [CATEGORIES.KOTFE]
    },
    {
        id: 'senya',
        name: 'Senya',
        like: [GIFTS.DELICACIES, GIFTS.MILITARY_GEAR],
        favorite: [GIFTS.CULTURAL_ARTIFACT],
        love: [GIFTS.LUXURY],
        categories: [CATEGORIES.KOTFE]
    },
    {
        id: 'theron_shan',
        name: 'Theron Shan',
        like: [GIFTS.CULTURAL_ARTIFACT, GIFTS.LUXURY, GIFTS.TROPHY, GIFTS.WEAPON],
        favorite: [GIFTS.UNDERWORLD_GOOD],
        love: [GIFTS.TECHNOLOGY],
        categories: [CATEGORIES.KOTFE]
    },
    {
        id: 'z0_0m',
        name: 'Z0-0M',
        like: [GIFTS.COURTING, GIFTS.CULTURAL_ARTIFACT, GIFTS.LUXURY, GIFTS.TROPHY, GIFTS.WEAPON],
        favorite: [GIFTS.MAINTENANCE, GIFTS.MILITARY_GEAR, GIFTS.TECHNOLOGY],
        love: [GIFTS.REPUBLIC_MEMORABILIA],
        categories: [CATEGORIES.KOTFE]
    },
    {
        id: 'choza_raabat',
        name: 'Choza Raabat',
        like: [GIFTS.DELICACIES],
        favorite: [GIFTS.CULTURAL_ARTIFACT, GIFTS.TECHNOLOGY],
        love: [GIFTS.REPUBLIC_MEMORABILIA],
        categories: [CATEGORIES.STAR_FORTRESS]
    },
    {
        id: 'deadeye_leyta',
        name: 'Deadeye Leyta',
        like: [GIFTS.WEAPON],
        favorite: [GIFTS.CULTURAL_ARTIFACT, GIFTS.DELICACIES],
        love: [GIFTS.MILITARY_GEAR],
        categories: [CATEGORIES.STAR_FORTRESS]
    },
    {
        id: 'hemdil_tre',
        name: 'Hemdil Tre',
        like: [GIFTS.DELICACIES, GIFTS.MILITARY_GEAR],
        favorite: [GIFTS.LUXURY, GIFTS.TECHNOLOGY],
        love: [GIFTS.IMPERIAL_MEMORABILIA, GIFTS.REPUBLIC_MEMORABILIA],
        categories: [CATEGORIES.STAR_FORTRESS]
    },
    {
        id: 'kkrohl',
        name: 'Kkrohl',
        like: [GIFTS.MILITARY_GEAR],
        favorite: [GIFTS.DELICACIES, GIFTS.WEAPON],
        love: [GIFTS.LUXURY, GIFTS.UNDERWORLD_GOOD],
        categories: [CATEGORIES.STAR_FORTRESS]
    },
    {
        id: 'rokuss',
        name: 'Rokuss',
        like: [GIFTS.MILITARY_GEAR, GIFTS.WEAPON],
        favorite: [GIFTS.TECHNOLOGY],
        love: [GIFTS.TROPHY],
        categories: [CATEGORIES.STAR_FORTRESS]
    },
    {
        id: 'veeroa denz',
        name: 'Veeroa Denz',
        like: [GIFTS.TROPHY],
        favorite: [GIFTS.LUXURY, GIFTS.WEAPON],
        love: [GIFTS.IMPERIAL_MEMORABILIA, GIFTS.UNDERWORLD_GOOD],
        categories: [CATEGORIES.STAR_FORTRESS]
    },
    {
        id: 'altuur_zok_adon',
        name: 'Altuur zok Adon',
        like: [],
        favorite: [],
        love: [GIFTS.SPECIAL_INSECTICULTURE],
        categories: [CATEGORIES.SPECIAL]
    },
    {
        id: 'darth_hexid',
        name: 'Darth Hexid',
        like: [GIFTS.TECHNOLOGY, GIFTS.TROPHY],
        favorite: [GIFTS.DELICACIES, GIFTS.IMPERIAL_MEMORABILIA],
        love: [GIFTS.CULTURAL_ARTIFACT],
        categories: [CATEGORIES.SPECIAL]
    },
    {
        id: 'gamorrean_guard',
        name: 'Gamorrean Guard',
        like: [GIFTS.LUXURY, GIFTS.TROPHY],
        favorite: [GIFTS.MILITARY_GEAR],
        love: [GIFTS.UNDERWORLD_GOOD, GIFTS.WEAPON],
        categories: [CATEGORIES.SPECIAL]
    },
    {
        id: 'lysslo',
        name: 'Lysslo',
        like: [GIFTS.MILITARY_GEAR],
        favorite: [],
        love: [GIFTS.DELICACIES],
        categories: [CATEGORIES.SPECIAL]
    },
    {
        id: 'h2_wf',
        name: 'H2-WF',
        like: [GIFTS.TECHNOLOGY],
        favorite: [],
        love: [GIFTS.MAINTENANCE],
        categories: [CATEGORIES.SPECIAL]
    },
    {
        id: 'hk_51',
        name: 'HK-51',
        like: [GIFTS.TECHNOLOGY, GIFTS.TROPHY],
        favorite: [GIFTS.MAINTENANCE, GIFTS.WEAPON],
        love: [GIFTS.MILITARY_GEAR],
        categories: [CATEGORIES.SPECIAL]
    },
    {
        id: 'phrojo_nuray',
        name: 'Phrojo Nuray',
        like: [GIFTS.CULTURAL_ARTIFACT, GIFTS.DELICACIES, GIFTS.LUXURY, GIFTS.TECHNOLOGY, GIFTS.TROPHY],
        favorite: [GIFTS.UNDERWORLD_GOOD, GIFTS.WEAPON],
        love: [GIFTS.MILITARY_GEAR],
        categories: [CATEGORIES.SPECIAL]
    },
    {
        id: 'quick_vrik',
        name: 'Quick Vrik',
        like: [GIFTS.DELICACIES, GIFTS.MILITARY_GEAR, GIFTS.UNDERWORLD_GOOD, GIFTS.WEAPON],
        favorite: [GIFTS.MAINTENANCE, GIFTS.TROPHY],
        love: [GIFTS.TECHNOLOGY],
        categories: [CATEGORIES.SPECIAL]
    },
    {
        id: 'treek',
        name: 'Treek',
        like: [GIFTS.MILITARY_GEAR, GIFTS.WEAPON],
        favorite: [GIFTS.TROPHY],
        love: [GIFTS.TECHNOLOGY],
        categories: [CATEGORIES.SPECIAL]
    },
    {
        id: 'a7_surveillance_drone',
        name: 'A7 Surveillance Drone',
        like: [GIFTS.TECHNOLOGY],
        favorite: [],
        love: [GIFTS.MAINTENANCE],
        categories: [CATEGORIES.CARTEL_MARKET]
    },
    {
        id: 'akk_dog',
        name: 'Akk Dog',
        like: [GIFTS.MILITARY_GEAR],
        favorite: [],
        love: [GIFTS.DELICACIES],
        categories: [CATEGORIES.CARTEL_MARKET]
    },
    {
        id: 'annihilator_t4_1d',
        name: 'Annihilator T4-1D',
        like: [GIFTS.TECHNOLOGY],
        favorite: [],
        love: [GIFTS.MAINTENANCE],
        categories: [CATEGORIES.CARTEL_MARKET]
    },
    {
        id: 'banshee',
        name: 'Banshee',
        like: [GIFTS.MILITARY_GEAR],
        favorite: [],
        love: [GIFTS.DELICACIES],
        categories: [CATEGORIES.CARTEL_MARKET]
    },
    {
        id: 'bogstalker',
        name: 'Bogstalker',
        like: [GIFTS.MILITARY_GEAR],
        favorite: [],
        love: [GIFTS.DELICACIES],
        categories: [CATEGORIES.CARTEL_MARKET]
    },
    {
        id: 'c8_s3c',
        name: 'C8-S3C',
        like: [GIFTS.TECHNOLOGY],
        favorite: [],
        love: [GIFTS.MAINTENANCE],
        categories: [CATEGORIES.CARTEL_MARKET]
    },
    {
        id: 'd_r3d',
        name: 'D-R3D',
        like: [GIFTS.TECHNOLOGY],
        favorite: [],
        love: [GIFTS.MAINTENANCE],
        categories: [CATEGORIES.CARTEL_MARKET]
    },
    {
        id: 'exoboar',
        name: 'Exoboar',
        like: [GIFTS.MILITARY_GEAR],
        favorite: [],
        love: [GIFTS.DELICACIES],
        categories: [CATEGORIES.CARTEL_MARKET]
    },
    {
        id: 'ginx',
        name: 'Ginx',
        like: [GIFTS.MILITARY_GEAR],
        favorite: [],
        love: [GIFTS.DELICACIES],
        categories: [CATEGORIES.CARTEL_MARKET]
    },
    {
        id: 'h1_k1',
        name: 'H1-K1',
        like: [GIFTS.TECHNOLOGY],
        favorite: [],
        love: [GIFTS.MAINTENANCE],
        categories: [CATEGORIES.CARTEL_MARKET]
    },
    {
        id: 'i_o8',
        name: 'I-O8',
        like: [GIFTS.TECHNOLOGY],
        favorite: [],
        love: [GIFTS.MAINTENANCE],
        categories: [CATEGORIES.CARTEL_MARKET]
    },
    {
        id: 'iso_5r',
        name: 'ISO-5R',
        like: [GIFTS.TECHNOLOGY],
        favorite: [],
        love: [GIFTS.MAINTENANCE],
        categories: [CATEGORIES.CARTEL_MARKET]
    },
    {
        id: 'k1_z3n',
        name: 'K1-Z3N',
        like: [GIFTS.TECHNOLOGY],
        favorite: [],
        love: [GIFTS.MAINTENANCE],
        categories: [CATEGORIES.CARTEL_MARKET]
    },
    {
        id: 'klorslug_soldier',
        name: 'Klorslug Soldier',
        like: [GIFTS.MILITARY_GEAR],
        favorite: [],
        love: [GIFTS.DELICACIES],
        categories: [CATEGORIES.CARTEL_MARKET]
    },
    {
        id: 'krakjya',
        name: 'Krakjya',
        like: [GIFTS.MILITARY_GEAR],
        favorite: [],
        love: [GIFTS.DELICACIES],
        categories: [CATEGORIES.CARTEL_MARKET]
    },
    {
        id: 'mawvorr',
        name: 'Mawvorr',
        like: [GIFTS.MILITARY_GEAR],
        favorite: [],
        love: [GIFTS.DELICACIES],
        categories: [CATEGORIES.CARTEL_MARKET]
    },
    {
        id: 'nathema_beast',
        name: 'Nathema Beast',
        like: [GIFTS.MILITARY_GEAR],
        favorite: [],
        love: [GIFTS.DELICACIES],
        categories: [CATEGORIES.CARTEL_MARKET]
    },
    {
        id: 'nathema_voreclaw',
        name: 'Nathema Voreclaw',
        like: [GIFTS.MILITARY_GEAR],
        favorite: [],
        love: [GIFTS.DELICACIES],
        categories: [CATEGORIES.CARTEL_MARKET]
    },
    {
        id: 'nexu',
        name: 'Nexu',
        like: [GIFTS.MILITARY_GEAR],
        favorite: [],
        love: [GIFTS.DELICACIES],
        categories: [CATEGORIES.CARTEL_MARKET]
    },
    {
        id: 'p3_kp',
        name: 'P3-KP',
        like: [GIFTS.TECHNOLOGY],
        favorite: [],
        love: [GIFTS.MAINTENANCE],
        categories: [CATEGORIES.CARTEL_MARKET]
    },
    {
        id: 'personal_warbot',
        name: 'Personal Warbot',
        like: [GIFTS.TECHNOLOGY],
        favorite: [],
        love: [GIFTS.MAINTENANCE],
        categories: [CATEGORIES.CARTEL_MARKET]
    },
    {
        id: 'probe_droid',
        name: 'Probe Droid',
        like: [GIFTS.TECHNOLOGY],
        favorite: [],
        love: [GIFTS.MAINTENANCE],
        categories: [CATEGORIES.CARTEL_MARKET]
    },
    {
        id: 'qo_77',
        name: 'QO-77',
        like: [GIFTS.TECHNOLOGY],
        favorite: [],
        love: [GIFTS.MAINTENANCE],
        categories: [CATEGORIES.CARTEL_MARKET]
    },
    {
        id: 'tukata',
        name: 'Tukata',
        like: [GIFTS.MILITARY_GEAR],
        favorite: [],
        love: [GIFTS.DELICACIES],
        categories: [CATEGORIES.CARTEL_MARKET]
    },
    {
        id: 'ty_4n',
        name: 'TY-4N',
        like: [GIFTS.TECHNOLOGY],
        favorite: [],
        love: [GIFTS.MAINTENANCE],
        categories: [CATEGORIES.CARTEL_MARKET]
    },
    {
        id: 'vine_cat',
        name: 'Vine Cat',
        like: [GIFTS.MILITARY_GEAR],
        favorite: [],
        love: [GIFTS.MAINTENANCE],
        categories: [CATEGORIES.CARTEL_MARKET]
    },
    {
        id: 'wampa',
        name: 'Wampa',
        like: [GIFTS.COURTING, GIFTS.TECHNOLOGY, GIFTS.TROPHY],
        favorite: [GIFTS.WEAPON],
        love: [GIFTS.IMPERIAL_MEMORABILIA, GIFTS.MILITARY_GEAR],
        categories: [CATEGORIES.CARTEL_MARKET]
    },
    {
        id: 'master_ranos',
        name: 'Master Ranos',
        like: [GIFTS.COURTING, GIFTS.CULTURAL_ARTIFACT, GIFTS.IMPERIAL_MEMORABILIA, GIFTS.MILITARY_GEAR, GIFTS.TECHNOLOGY, GIFTS.TROPHY, GIFTS.UNDERWORLD_GOOD],
        favorite: [GIFTS.LUXURY],
        love: [GIFTS.REPUBLIC_MEMORABILIA],
        categories: [CATEGORIES.RETIRED]
    },
    {
        id: 'nico_okarr',
        name: 'Nico Okarr',
        like: [GIFTS.COURTING, GIFTS.CULTURAL_ARTIFACT, GIFTS.IMPERIAL_MEMORABILIA, GIFTS.REPUBLIC_MEMORABILIA, GIFTS.TROPHY],
        favorite: [GIFTS.LUXURY, GIFTS.TECHNOLOGY],
        love: [GIFTS.UNDERWORLD_GOOD],
        categories: [CATEGORIES.RETIRED]
    },
    {
        id: 'paxton_rall',
        name: 'Paxton Rall',
        like: [GIFTS.COURTING, GIFTS.LUXURY, GIFTS.MILITARY_GEAR, GIFTS.WEAPON],
        favorite: [GIFTS.CULTURAL_ARTIFACT],
        love: [GIFTS.TROPHY, GIFTS.UNDERWORLD_GOOD],
        categories: [CATEGORIES.RETIRED]
    },
    {
        id: 'shae_vizla',
        name: 'Shae Vizla',
        like: [GIFTS.COURTING, GIFTS.TECHNOLOGY, GIFTS.TROPHY],
        favorite: [GIFTS.WEAPON],
        love: [GIFTS.IMPERIAL_MEMORABILIA, GIFTS.MILITARY_GEAR],
        categories: [CATEGORIES.RETIRED]
    },
    {
        id: 'fen_zeil',
        name: 'Fen Zeil',
        like: [],
        favorite: [],
        love: [GIFTS.SPECIAL_FORGED_DOCUMENTS],
        categories: [CATEGORIES.SPECIAL]
    }
]

export const RANKS: Rank[] = [
    { id: 1, level: 1,  min: 1,  max: 6,  total: 0      },
    { id: 2, level: 6,  min: 6,  max: 10, total: 3600   },
    { id: 3, level: 10, min: 10, max: 15, total: 10000  },
    { id: 4, level: 15, min: 15, max: 20, total: 22500  },
    { id: 5, level: 20, min: 20, max: 30, total: 40000  },
    { id: 6, level: 30, min: 30, max: 40, total: 90000  },
    { id: 7, level: 40, min: 40, max: 50, total: 160000 },
    { id: 8, level: 50, min: 50, max: 50, total: 250000 },
]

export const COMPANION_LEVEL: Level[] = [
    { level: 1,  influence: 0,    total: 0      },
    { level: 2,  influence: 400,  total: 400    },
    { level: 3,  influence: 500,  total: 900    },
    { level: 4,  influence: 700,  total: 1600   },
    { level: 5,  influence: 900,  total: 2500   },
    { level: 6,  influence: 1100, total: 3600   },
    { level: 7,  influence: 1300, total: 4900   },
    { level: 8,  influence: 1500, total: 6400   },
    { level: 9,  influence: 1700, total: 8100   },
    { level: 10, influence: 1900, total: 10000  },
    { level: 11, influence: 2100, total: 12100  },
    { level: 12, influence: 2300, total: 14400  },
    { level: 13, influence: 2500, total: 16900  },
    { level: 14, influence: 2700, total: 19600  },
    { level: 15, influence: 2900, total: 22500  },
    { level: 16, influence: 3100, total: 25600  },
    { level: 17, influence: 3300, total: 28900  },
    { level: 18, influence: 3500, total: 32400  },
    { level: 19, influence: 3700, total: 36100  },
    { level: 20, influence: 3900, total: 40000  },
    { level: 21, influence: 4100, total: 44100  },
    { level: 22, influence: 4300, total: 48400  },
    { level: 23, influence: 4500, total: 52900  },
    { level: 24, influence: 4700, total: 57600  },
    { level: 25, influence: 4900, total: 62500  },
    { level: 26, influence: 5100, total: 67600  },
    { level: 27, influence: 5300, total: 72900  },
    { level: 28, influence: 5500, total: 78400  },
    { level: 29, influence: 5700, total: 84100  },
    { level: 30, influence: 5900, total: 90000  },
    { level: 31, influence: 6100, total: 96100  },
    { level: 32, influence: 6300, total: 102400 },
    { level: 33, influence: 6500, total: 108900 },
    { level: 34, influence: 6700, total: 115600 },
    { level: 35, influence: 6900, total: 122500 },
    { level: 36, influence: 7100, total: 129600 },
    { level: 37, influence: 7300, total: 136900 },
    { level: 38, influence: 7500, total: 144400 },
    { level: 39, influence: 7700, total: 152100 },
    { level: 40, influence: 7900, total: 160000 },
    { level: 41, influence: 8100, total: 168100 },
    { level: 42, influence: 8300, total: 176400 },
    { level: 43, influence: 8500, total: 184900 },
    { level: 44, influence: 8700, total: 193600 },
    { level: 45, influence: 8900, total: 202500 },
    { level: 46, influence: 9100, total: 211600 },
    { level: 47, influence: 9300, total: 220900 },
    { level: 48, influence: 9500, total: 230400 },
    { level: 49, influence: 9700, total: 240100 },
    { level: 50, influence: 9900, total: 250000 },
]