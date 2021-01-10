export interface IOptions{
  widgetId?: string;
  textColor?: string;
  buttonBg?: string;
  widgetBg?: string;
}

export interface IWidget{
  init: () => void
}
