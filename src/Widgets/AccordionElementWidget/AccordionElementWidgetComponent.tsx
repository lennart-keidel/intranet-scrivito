import * as React from "react";
import { ContentTag, provideComponent, Widget } from "scrivito";
import classNames from "classnames";

import { CardHeader, Collapse, Card, CardBody } from "reactstrap";

// import ManualScrollRestoration from "../../utils/manualScrollRestoration";

class AccordionElementWidget extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      expanded: false,
    };
    this.toggle = this.toggle.bind(this);
    const id = this.props.widget.id();
    this.key = `Accordion${id}Expanded`;
  }

  componentDidMount() {
    const { widget } = this.props;
    const openByDefault = widget.get("isOpen") === "Yes";
    const wasOpen = window.sessionStorage.getItem(this.key) === "true";
    const restoreOpen = true && wasOpen;
    this.setState({ expanded: restoreOpen || openByDefault });
  }

  toggle() {
    const wasExpanded = this.state.expanded;
    if (wasExpanded) {
      window.sessionStorage.removeItem(this.key);
    } else {
      window.sessionStorage.setItem(this.key, true);
      // NOTE: some browsers on mobile change scrollTop after expanding
      // accordeon to keep the same content in the middle of the viewport.
      // This hack overcomes this behaviour.
      const scrollTop = window.pageYOffset;
      setTimeout(() => {
        window.scrollTo({ left: 0, top: scrollTop, behavior: "smooth" });
      }, 100);
    }
    this.setState({ expanded: !wasExpanded });
  }

  render() {
    const { widget } = this.props;
    const { expanded } = this.state;

    return (
      <Card className="Accordion">
        <CardHeader className={classNames({ open: expanded })}>
          <button
            className="btn btn-link d-flex align-items-start rm-btn-state"
            onClick={this.toggle}
          >
            <i className="Accordion--icon fa fa-angle-down"></i>
            <ContentTag
              tag="div"
              content={widget}
              className="accordion-header pull-left mb-0 align-self-end"
              attribute="title"
            />
          </button>
        </CardHeader>
        <Collapse isOpen={expanded}>
          <CardBody>
            <ContentTag content={widget} attribute="content" />
          </CardBody>
        </Collapse>
      </Card>
    );
  }
}
provideComponent("AccordionElementWidget", AccordionElementWidget);
