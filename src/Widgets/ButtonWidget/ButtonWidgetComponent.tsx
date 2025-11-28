import {
  isInPlaceEditingActive,
  LinkTag,
  provideComponent,
  WidgetTag,
} from 'scrivito'
import { alignmentClassNameWithBlock } from '../../utils/alignmentClassName'
import { ButtonWidget } from './ButtonWidgetClass'
import { ensureString } from '../../utils/ensureString'
import { buttonSizeClassName } from '../../utils/buttonSizeClassName'

provideComponent(ButtonWidget, ({ widget }) => {
  const target = widget.get('target')
  const title = ensureString(target?.title())
  const withFile = widget.get("withFile");

  const buttonClassNames = ['btn']
  buttonClassNames.push(widget.get('buttonFontColor') || 'btn-font-color-primary')
  buttonClassNames.push(widget.get('buttonBorderColor') || 'btn-border-color-primary')
  buttonClassNames.push(widget.get('buttonBackgroundColor') || 'btn-background-color-white')
  buttonClassNames.push(widget.get('buttonBackgroundColorHover') || 'btn-background-color-white-hover')

  const isDownloadButton = withFile === "yes";
  if (isDownloadButton) {
    buttonClassNames.push("hasFile");
  }

  const icon = (
    <LinkTag className="download-icon bi bi-filetype-pdf bi-2x m-auto">
    </LinkTag>
  );

  const buttonSize = buttonSizeClassName(widget.get('buttonSize'))
  if (buttonSize) buttonClassNames.push(buttonSize)

  return (
    <WidgetTag className={alignmentClassNameWithBlock(widget.get('alignment'))}>
      <LinkTag to={target} className={buttonClassNames.join(' ')}>
        {icon}
        {!title && isInPlaceEditingActive()
          ? 'Provide the button link and text in the widget properties.'
          : title}
      </LinkTag>
    </WidgetTag>
  )
})
