import React from "react";
import { getBGColor } from "./utils";
//import * as MultiStatPanel from "../types";

const DEFAULT_COLOR = "rgb(31, 120, 193)";
const BACKGROUND_OPACITY = 0.1;
const LABEL_SIZE_COEF = 0.7;

export interface SensuMenuProps {
  width: number;
  height: number;
  label: string;
  value: string;
  color?: string;
  colorValue?: boolean;
  colorBackground?: boolean;
  fontSize?: number;
  labelFontSize?: number;
}

export class SensuMenu extends React.PureComponent<SensuMenuProps> {
  props: any;

  constructor(props) {
    super(props);
  }

  static defaultProps: Partial<SensuMenuProps> = {
    color: "white",
  };

  render() {
    const { width, height, label, value, colorBackground, colorValue } = this.props;
    const valueColor = this.props.color;
    const bgColor = getBGColor(valueColor, BACKGROUND_OPACITY);

    let containerStyle: React.CSSProperties = {};
    containerStyle.height = height;
    containerStyle.width = width;

    if (colorBackground) {
      containerStyle.background = bgColor;
    }

    const labelFontSize = Math.floor((this.props.labelFontSize || this.props.fontSize) * LABEL_SIZE_COEF);
    let valueFontSize = this.props.fontSize;
    const labelStyle: React.CSSProperties = {
      fontSize: labelFontSize,
    };
    const labelContainerStyle: React.CSSProperties = {
      lineHeight: labelFontSize + "px",
    };

    let valueStyle: React.CSSProperties = {
      fontSize: valueFontSize + "px",
    };
    if (colorValue) {
      valueStyle.color = valueColor;
    }
    let valueContainerStyle: React.CSSProperties = {
      fontSize: valueFontSize + "px",
    };
    return (
      <div className={`multistat-single`} style={containerStyle}>
        <div className="multistat-label-container" style={labelContainerStyle}>
          <span className="multistat-label" style={labelStyle}>
            {label} what
          </span>
        </div>
        <div className="multistat-value-container" style={valueContainerStyle}>
          <span className="singlestat-panel-value multistat-value" style={valueStyle}>
            {value}
          </span>
        </div>
      </div>
    );
  }
}