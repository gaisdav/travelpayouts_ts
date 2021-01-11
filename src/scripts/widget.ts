import { IOptions, IWidget } from './interfaces';
import '../styles/styles.scss'

class Widget implements IWidget {
  private readonly widgetBg: string = '';
  private readonly buttonBg: string = '';
  private readonly textColor: string = '';
  private readonly widgetId: string = 'widget';
  private readonly widgetStyles: string = './widgetstyles.css';

  private readonly descriptionText =
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';

  private get template(): string {
    return `
    <div class='widget-wrapper' style="background: ${this.widgetBg}; color: ${this.textColor}">
      <div class='widget_title'>
        Where does it come from?
        Why do we use it?
      </div>

      <div class="widget_body">
        <div class='widget_description widget_description__sm'>
          ${this.descriptionText}
        </div>
        <div class='widget_form'>
          <span>
            <input type="date" placeholder='Depart date'/>
            <input type="date" placeholder='Return date'/>
          </span>
          <button type="submit" style="background: ${this.buttonBg}">SEARCH</button>
        </div>
        <div class='widget_description widget_description__xs' >
          ${this.descriptionText}
        </div>
      </div>
    </div>
    `;
  }

  constructor(options?: IOptions) {
    if (options) {
      this.widgetBg = options.widgetBg || this.widgetBg;
      this.buttonBg = options.buttonBg || this.buttonBg;
      this.textColor = options.textColor || this.textColor;
      this.widgetId = options.widgetId || this.widgetId;
      this.widgetStyles = options.widgetStyles || this.widgetStyles;
    }
  }

  init = () => {
    const style = document.createElement('link');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('href', this.widgetStyles);

    const ref = document.querySelector('head');
    const container = document.getElementById(this.widgetId);

    if (container && ref) {
      ref.append(style);

      container.innerHTML = this.template;
    }

  };
}

// @ts-ignore
window.WIDGET = Widget;
