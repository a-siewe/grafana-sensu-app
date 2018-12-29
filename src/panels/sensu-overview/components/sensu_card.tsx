
import {PureComponent} from "react";
//import { getBGColor } from "./utils";
import * as React from "react";

// this allows @material-ui/core to be used
//import "../../external/babel.min.js";
//import * as MUI from "../../external/material-ui.development.js";
//import * as MUI from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
// https://github.com/mui-org/material-ui/blob/master/examples/cdn/index.html
//import "../../external/material-icons.css!";
export interface SensuCardProps {
  width: number;
  height: number;
  color: string;
  bgColor: string;
  titleText: string;
  primaryText: string;
  secondaryText: string;
}

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};
const styles2 = {
  margin: {
    margin: 6,
  }
};

const cardStyles = {
  root: {
    flexGrow: 1
  },
  title: {
    marginBottom: 16,
    fontSize: 22,
  },
  primaryText: {
    marginBottom : 12,
    "text-align" : "center",
  },
  secondaryText: {
    marginBottom: 12,
    "text-align": "center",
  }
};

export class SensuCard extends PureComponent<SensuCardProps> {
  props: any;
  constructor(props) {
    super(props);
  }

  static defaultProps: Partial<SensuCardProps> = {
    bgColor: "inherit",
    color: "white",
    titleText: "",
    primaryText: "",
    secondaryText: "",
  };

  render() {
    const { width, height, color, bgColor, titleText, primaryText, secondaryText } = this.props;

    let containerStyle: React.CSSProperties = {};
    if (bgColor) {
      containerStyle.background = bgColor;
    }
    if (color) {
      containerStyle.color = color;
    }
    return (
    <div style={cardStyles.root}>
        <Card style={containerStyle}>
          <CardContent>
            <Typography style={cardStyles.title} variant="headline" component="p" color="inherit">
              {titleText}
            </Typography>
            <Typography style={cardStyles.primaryText} variant="headline" component="p" color="inherit">
              {primaryText}
            </Typography>
            <Typography style={cardStyles.secondaryText} variant="headline" component="p" color="inherit">
              {secondaryText}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">Detail</Button>
          </CardActions>
        </Card>
    </div>
    );
  }
}
