export interface Trees {
  trees: Array<Tree>;
}

export interface Tree {
  name: string;
  role?: string;
  color: string;
  explanation?: {
    short?: string | Array<string>;
    long?: string | Array<string>;
  };
  bonuses?: Array<string | Array<string>>;
  implicits?: Array<Skill>;
  passives?: Array<PassiveTrait>;
  actives?: Array<ActiveTrait>;
}

export interface Trait {
  name: string;
  picture: string;
  trait: {
    description: Array<string> | string;
    effect:
      | Array<{
          rank?: number | null;
          description?: string | Array<string>;
        }>
      | [];
  };
  skill?: Skill;
}

export interface PassiveTrait extends Trait {
  pointActivation: number;
}

export interface ActiveTrait extends Trait {
  ranks: number;
  position: {
    x: number;
    y: number;
  };
  pointRequirement: number;
}

export interface Skill {
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
  explanation?: Array<string> | [];
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
