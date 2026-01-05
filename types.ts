export interface HistoryItem {
  date: string;
  title: string;
  description?: string;
}

export interface ServiceDetailSection {
  heading?: string; // Optional subsection title
  text?: string; // Main paragraph text
  points?: string[]; // Optional bullet points for emphasis
  images?: string[]; // Optional array of image URLs
}

export interface ServiceItem {
  title: string;
  description: string;
  details: ServiceDetailSection[]; // Changed from string to structured array
  iconName: 'Truck' | 'Wrench' | 'Megaphone' | 'ShoppingCart' | 'Globe' | 'Building';
  externalLink?: string; // URL for external sites (e.g., Rakuten shop)
}

export interface CompanyInfo {
  label: string;
  value: string | string[];
}