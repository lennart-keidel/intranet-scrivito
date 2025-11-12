import * as Scrivito from "scrivito";
import buttonWidgetIcon from './thumbnail.svg';

Scrivito.provideEditingConfig("DisclosureWidget", {
  title: "Disclosure Widget",
  description: "Button for opening an info panel",
  thumbnail: buttonWidgetIcon,
  attributes: {
    labelHidden: {
      title: "Button label (hidden)"
    },
    labelDisclosed: {
      title: "Button label (disclosed)"
    }
  },
  properties: ["labelHidden", "labelDisclosed"]
});