type PonyColorType = 'YELLOW' | 'ORANGE' | 'PURPLE' | 'GREEN' | 'BLUE';

export interface PonyModel {
  id: number;
  name: string;
  color: PonyColorType;
}
