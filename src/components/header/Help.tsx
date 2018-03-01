import * as React from "react";
import { Svg } from 'react-vapor';

export interface IHelpDropdownState {
    opened: boolean;
}

export class HelpDropdown extends React.Component<any, IHelpDropdownState> {
    constructor(props: any, state: IHelpDropdownState) {
        super(props, state);
        this.state = {
            opened: false
        };
    }

    handleClick() {
        this.setState({
            opened: !this.state.opened
        });
    }

    render() {
        return (
            <div className="header-section mod-padded flex flex-center dropdown open" style={ { cursor: "pointer" } }onClick={() => this.handleClick()}>
                <Svg svgClass="icon mod-2x fill-light-grey" svgName="help-no-fill" />
                {this.getArrow()}
                {this.getMenu()}
            </div>
        )
    }

    private getArrow(): JSX.Element {
        return this.state.opened
            ? <Svg svgClass="icon fill-light-grey ml1" svgName="chart-up" />
            : <Svg svgClass="icon fill-light-grey ml1" svgName="chart-down" />;
    }

    private getMenu(): JSX.Element {
        return this.state.opened
            ? (
                <ul className="dropdown-menu normal-height">
                    <li><a className="enabled" href="http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=57">What's new</a></li>
                    <li><a className="enabled" href="http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=231">Documentation</a></li>
                    <li><a className="enabled" href="http://support.coveo.com">Support</a></li>
                    <li><a className="enabled" href="http://status.cloud.coveo.com">System status</a></li>
                    <li className="divider"></li>
                    <li><a className="enabled" href="http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=116">Security</a></li>
                    <li><a className="enabled" href="http://www.coveo.com/en/support/terms-agreements">Terms and privacy</a></li>
                </ul>
            )
            : null;
    }
}
