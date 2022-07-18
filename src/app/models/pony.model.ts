type ColorType = 'ORANGE' | 'YELLOW' | 'GREEN' | 'BLUE' | 'PURPLE';

export interface PonyModel {
  id: number;
  name: string;
  color: ColorType;
}
