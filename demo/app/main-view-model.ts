import {Observable} from 'data/observable';
import {TNSWebViewAdvanced} from 'nativescript-webview-advanced';

export class WebViewDemo extends Observable {
  public message: string;
  private webview: TNSWebViewAdvanced;

  constructor() {
    super();

    this.webview = new TNSWebViewAdvanced();
    this.message = this.webview.message;
  }
}