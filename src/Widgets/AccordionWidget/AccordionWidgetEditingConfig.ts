import { provideEditingConfig, Link, Widget } from 'scrivito'
import AccordionElementWidget from '../AccordionElementWidget/AccordionElementWidgetClass'
import accordionWidgetIcon from '../../assets/images/accordeon_widget.svg';
import AccordionWidget from './AccordionWidgetClass'

provideEditingConfig(AccordionWidget, {
  title: "Accordion",
  thumbnail: accordionWidgetIcon,
  description:
    "A widget, that provides one or more areas of collapsible content.",
  attributes: {
    elementsList: {
      title: "List of collapsed elements",
    },
  },
  properties: ["elementsList"],
  initialContent: {
    elementsList: [
      new AccordionElementWidget({}),
      new AccordionElementWidget({}),
    ],
  },
});
