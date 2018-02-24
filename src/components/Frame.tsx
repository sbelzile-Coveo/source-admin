import * as React from "react";
import { Tooltip, Svg } from "react-vapor";

export interface IFrameProps {
    title: string;
    tooltipText?: string;
    tooltipLink?: string;
    description?: string;
    headerAction?: JSX.Element;
}

export class Frame extends React.Component<IFrameProps, any> {
    render() {
        const tooltip = this.props.tooltipText ? this.getTooltip(this.props.tooltipText, this.props.tooltipLink)
                                             : "";
        const actionSection: JSX.Element[] = [];
        if (this.props.headerAction) {
            actionSection.push(<div key="comp1" className="flex-auto" />);
            actionSection.push(
                <div key="comp2" className="js-action-bar">
                    <div className="btn-container inline-block">
                        {this.props.headerAction}
                    </div>
                </div>
            );
        }

        return (
            <div className="application-container full-height">
                <div className="component-header">
                    <div className="flex flex-center panel-header">
                        <div className="page-info-container">
                            <h1 className="inline bold text-medium-blue">{this.props.title}</h1>
                            {tooltip}
                            <h4 className="admin-description text-dark-grey">{this.props.description}</h4>
                        </div>
                        {actionSection}
                    </div>
                </div>
                <div className="main">
                    {this.props.children}
                </div>
            </div>
        );
    }

    private getTooltip(title: string,
                       link: string): JSX.Element {
        let tooltip = (
            <Tooltip title={title} placement="right">
                <Svg svgName="help" className="icon mod-2x ml1" svgClass="fill-orange" />
            </Tooltip>
        );

        if (link) {
            tooltip = (
                <a target="_blank"
                   href={link}>
                    {tooltip}
                </a>
            );
        }

        return tooltip;
    }
}