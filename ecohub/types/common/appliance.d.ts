enum ApplianceType {
  fridge = 'FRIDGE',
  oven = 'OVEN',
  dishwasher = 'DISHWASHER',
  washingMachine = 'WASHING_MACHINE',
  dryer = 'DRYER',
  unknown = 'UNKNOWN',
}

interface MaintenanceLog {
  date: number;
  data: Array<{
    title: string;
    subtitle: string;
    date: number;
  }>
}

interface MaintenanceTutorial {
  id: string;
  title: string;
  description: string;
  image: string;
  videoUrl: string;
}

interface SpareParts {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  url: string;
}

interface Appliance {
  id: string;
  name: string;
  type: ApplianceType;
  image: string;
  maxLifespan: number;
  manualUrl: string;
  maintenance:{
    logs: MaintenanceLog[];
    tutorials: MaintenanceTutorial[];
    spareParts: SpareParts[];
  };
  addedOn: string | null;
  releaseDate: string;
  purchaseDate: string | null;
}