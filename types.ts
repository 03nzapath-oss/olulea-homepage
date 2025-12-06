export interface MenuItem {
  name?: string;
  price?: string;
  description?: string;
  subcategory?: string; // サブカテゴリ名（例：〈メンズ〉）
  items?: MenuItem[]; // ネストされたアイテム
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export interface HolidayRule {
  type: 'weekly' | 'nth_day' | 'specific';
  dayOfWeek?: number; // 0=Sun, 1=Mon...
  nth?: number; // 1st, 2nd, 3rd...
  addDays?: number; // e.g. +1 day
}

export interface SpaStep {
  step: number;
  title: string;
}

export interface ProcessStep {
  name: string;
  description?: string;
}

export interface ProcessFlow {
  preSteps?: ProcessStep[];
  branches: {
    name: string;
    steps: ProcessStep[];
  }[];
  postSteps?: ProcessStep[];
}

export interface HeadSpaCourse {
  name: string;
  price?: string;
  duration?: string;
  features?: string;
  tag?: string;
  description?: string;
  items?: {
    name: string;
    duration?: string;
    price?: string;
    description?: string;
    processFlow?: ProcessFlow;
    note?: string;
    variations?: {
      note: string;
      duration: string;
      price: string;
    }[];
  }[];
  note?: string;
}
