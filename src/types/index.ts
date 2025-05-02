export type NavItem = {
  title: string;
  href: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export type Package = {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  isPrimary?: boolean;
};

export type ComparisonItem = {
  feature: string;
  bharatPath: boolean;
  googleMaps: boolean;
};

export type Step = {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
};