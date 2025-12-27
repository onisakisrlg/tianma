export interface HistoryItem {
  date: string;
  title: string;
  description?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  iconName: 'Truck' | 'Wrench' | 'Megaphone' | 'ShoppingCart' | 'Globe' | 'Building';
}

export interface CompanyInfo {
  label: string;
  value: string | string[];
}