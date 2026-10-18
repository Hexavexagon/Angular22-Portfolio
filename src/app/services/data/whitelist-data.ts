export type WhitelistData = {
  introduction: boolean,
  education: boolean;
  workHistory: boolean;
  achievements: boolean;
  referees: boolean;
  portfolio: boolean;
  interests: boolean;
  goals: boolean;
  contact: boolean;
};

export const whitelistData: WhitelistData = { 
  introduction: true,
  education: true,
  workHistory: true,
  achievements: true,
  referees: true,
  portfolio: true,
  interests: true,
  goals: true,
  contact: true,
};
