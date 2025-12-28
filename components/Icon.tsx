import React from 'react';
import { Truck, Wrench, Megaphone, ShoppingCart, Globe, Building, Menu, X, Phone, MapPin, Mail, ChevronRight, ExternalLink, Check } from 'lucide-react';

export type IconName = 'Truck' | 'Wrench' | 'Megaphone' | 'ShoppingCart' | 'Globe' | 'Building' | 'Menu' | 'X' | 'Phone' | 'MapPin' | 'Mail' | 'ChevronRight' | 'ExternalLink' | 'Check';

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  const icons = {
    Truck,
    Wrench,
    Megaphone,
    ShoppingCart,
    Globe,
    Building,
    Menu,
    X,
    Phone,
    MapPin,
    Mail,
    ChevronRight,
    ExternalLink,
    Check
  };

  const IconComponent = icons[name];
  return IconComponent ? <IconComponent className={className} size={size} /> : null;
};