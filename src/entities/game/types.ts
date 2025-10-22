export interface TGame {
  gameID: string;
  gameName: string;
  gameTypeID: 'vs' | 'ar' | 'cs' | 'lg' | 'bj' | 'bc' | 'sc' | 'rl' | 'vp';
  technology: string;
  platform: string;
  firstSeenAt: string;
}
