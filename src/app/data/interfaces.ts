export interface trees {
    meta?: {
        className?: string;
        version?: number;
        lang?: string;
    };
    tree?: {
        b?: tree;
        r?: tree;
        y?: tree;
    };
}

export interface tree{
    header?: {
        name?: string;
        role?: string;
        explanation?: {
            short?: string|Array<string>;
            long?: string|Array<string>;
        };
        attributeGainOnSelection?: string|Array<string>;
        traitGainOnSelection?: Array<trait>
    }
    body?: {
        passivTraits?: Array<passivTrait>;
        activTraits?: Array<activeTrait>
    }
}

export interface trait{
    name: string;
    picture: string;
    trait?: Array<{
        description?: Array<string>|string;
        effect?: Array<{ rank?: number|null; description?: string|Array<string> }>|[]
    }>
    acquiredSkill?: skill
}

export interface passivTrait extends trait{
    pointActivation: number;
}

export interface activeTrait extends trait{
    ranks: number,
    pointRequirement?: number;
    skillRequirement?: string,
    treeRequirement?: string,
}

export interface skill{
    name: string;
    picture: string;
    animationTime?: string;
    damageType?: string;
    targets?: number;
    area?: number;
    inductionTime?: number;
    channelTime?: number;
    resistance?: string;
    skillType?: string;
    range?: number;
    info?: string;
    explanation?: Array<string>|[];
    buff?: string;
    damageInfo?: string;
    damage?: string;
    primaryResorce?: string;
    secondaryResorce?: string;
    duration?: number;
    cooldown?: number;
    effects?: string;
    treeRequirementInfo?: string;
    skillRequirementInfo?: string;
}