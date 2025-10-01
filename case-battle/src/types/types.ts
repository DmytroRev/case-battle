export interface OperationItem {
  id?: number;
  slug?: string;
  title: string;
  subtitle: string;
  price: number | string;
  box: string;
  logo: string;
}

export interface OperationDataList {
  title: string;
  titleBg: string;
  items: OperationItem[];
}

