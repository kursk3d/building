import { AboutContent } from "../aboutContent/AboutContent";
export class PlatformContent {
    constructor() {
        this._content = [];
        this.aboutContent = new AboutContent();
    }
    close() {
        this.aboutContent.close();
        this._content = [];
    }
    create() {
        this.aboutContent.create();
        this.addContent(this.aboutContent.layerStage);
    }
    loadedContent() {
    }
    addContent(content) { this._content.push(content); }
    get content() { return this._content; }
}
