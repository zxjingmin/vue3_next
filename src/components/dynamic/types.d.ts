export interface FormItemType {
  name: string;
  label: string;
  type: 'select' | 'text';
  list?: Array<string>;
  default?: string;
}
