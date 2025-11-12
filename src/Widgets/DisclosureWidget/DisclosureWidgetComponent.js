import * as React from "react";
import { provideComponent, ContentTag } from 'scrivito'

provideComponent("DisclosureWidget", ({ widget }) => {
  const [isDisclosed, setIsDisclosed] = React.useState(false);

  const label = isDisclosed
    ? widget.get("labelDisclosed") || "Here we go!"
    : widget.get("labelHidden") || "Disclose!";

  return (
    <>
      <div className="text-center">
        <button
          className="btn btn-primary"
          onClick={() => {
            setIsDisclosed(!isDisclosed);
          }}
        >
          {label}
        </button>
      </div>
      {isDisclosed && (
        <div className="card">
          <ContentTag
            className="card-header"
            content={widget}
            attribute="heading"
          />
          <div className="card-body">
            <ContentTag
              className="card-text"
              content={widget}
              attribute="body"
            />
          </div>
        </div>
      )}
    </>
  );
});
