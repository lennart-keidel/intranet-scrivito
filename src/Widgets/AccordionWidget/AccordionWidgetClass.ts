import { provideWidgetClass } from 'scrivito';

const AccordionWidget = provideWidgetClass("AccordionWidget", {
  attributes: {
    elementsList: ["widgetlist", { only: "AccordionElementWidget" }],
  },
  extractTextAttributes: ["elementsList"],
});

export default AccordionWidget;
