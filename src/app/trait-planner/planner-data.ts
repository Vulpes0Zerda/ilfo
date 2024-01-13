export interface Skill {
    "type": string;
    name: string;
    picture: string;
    animationTime?: string;
    damageType?: string;
    targets?: number;
    area?: number;
    inductionTime?: number;
    resistance?: string;
    skillType?: string;
    range?: number;
    info?: string;
    explaination?: string[];
    buff?: string;
    damageInfo?: string;
    damage?: string;
    primaryResorce?: string;
    secondaryResource?: string;
    duration?: number;
    cooldown?: number;
    effects?: string;
}

interface Trait {
    skill: Skill;
}

export interface PassiveTrait extends Trait {
    pointActivation: number;
}

export interface ActiveTrait extends Trait {
    pointRequirement: number;
    skillRequirement?: string;
    skillRequirementInfo?: string;
    treeRequirement?: string;
    treeRequirementInfo?: string;
    ranks: number;
}

export interface SkillTree {
    id: string;
    name: string[];
    role: string[];
    explanation: {
        "short": string[];
        "long": string[];
    }
    passive: string[];
    implicits: Skill[];
    passives: PassiveTrait[];
    actives: ActiveTrait[];
    arrangement: string[][];
}

interface JsonInput {
    meta: {
        "class": string;
        version: number;
        lang: string;
    };
    trees: SkillTree[];
}

export class PlannerData {
    trees: SkillTree[];
    tree_chosen: boolean = false;
    chosen_tree_id: string = "";

    constructor(data: JsonInput) {
        this.trees = data.trees;
    }
}
