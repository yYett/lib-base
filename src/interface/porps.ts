export interface Button {
  url?: string;
  label: string;
  target?: string;
}


export interface Image {
  src: string;
  alt: string;
  title: string;
}

export interface Input {
  name: string;
  label: string;
}

export interface SelectOptions {
  value: string;
  label: string;
}

export interface FormFieldOptions {
  maxLength?: number;
  placeholder?: string;
}
