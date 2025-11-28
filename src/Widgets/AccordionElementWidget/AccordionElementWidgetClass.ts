import { provideWidgetClass } from 'scrivito';

const AccordionElementWidget = provideWidgetClass(
  "AccordionElementWidget",
  {
    onlyInside: "AccordionWidget",
    attributes: {
      title: "string",
      content: "widgetlist",
      isOpen: ["enum", { values: ["Yes", "No"] }],
    },
    extractTextAttributes: ["title", "content"],
  }
);

export default AccordionElementWidget;
