import { provideEditingConfig, Link, Widget } from 'scrivito'
import AccordionElementWidget from './AccordionElementWidgetClass'

provideEditingConfig(AccordionElementWidget, {
  title: "Accordion Element",
  attributes: {
    title: {
      title: "Please provide information title",
    },
    isOpen: {
      title: "Should the content be shown, when the page finished loading?",
      description: "Default: No",
    },
  },
  properties: ["title", "isOpen"],
  initialContent: {
    title: "Accordion item content",
    isOpen: "No",
  },
});
