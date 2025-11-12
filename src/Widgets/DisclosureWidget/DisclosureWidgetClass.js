import * as Scrivito from "scrivito";

export const DisclosureWidget = Scrivito.provideWidgetClass("DisclosureWidget", {
  attributes: {
    heading: "string",
    body: "widgetlist",
    labelHidden: "string",
    labelDisclosed: "string"
  }
});