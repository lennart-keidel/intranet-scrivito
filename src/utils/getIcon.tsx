import * as Scrivito from "scrivito";
import { ComponentProps } from "react";

type ImageTagProps = ComponentProps<typeof Scrivito.ImageTag>;
export default function getIcon(obj: Scrivito.Widget, iconName: string, className: string = "", props?: Omit<ImageTagProps, "content" | "className">) {
  const content = obj && obj.get(iconName);

  return (
    <Scrivito.ImageTag
      content={content}
      className={className}
      {...props}
      loading="lazy"
    />
  );
}
