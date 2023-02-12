export interface Tasks {
  id: number;
  content: string;
  done: boolean;
}

export interface Title {
  title: string;
}

export interface SectionProps {
  title: string;
  body: JSX.Element;
  extraHeaderContent?: JSX.Element | undefined;
}

export interface QueryParameter {
  key: string;
  value: string | undefined;
}

export interface Id {
  id: string;
}

export interface Done {
  done: boolean;
}

export interface Remove {
  remove: boolean;
}
