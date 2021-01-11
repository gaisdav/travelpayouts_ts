export interface IOptions{
  widgetId?: string;
  textColor?: string;
  buttonBg?: string;
  widgetBg?: string;
  widgetStyles?: string;
}

export interface IWidget{
  init: () => void
}
