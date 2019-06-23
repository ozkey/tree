import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline/index";
import Grid from "@material-ui/core/Grid/index";
import Card from "@material-ui/core/Card/index";
import CardActionArea from "@material-ui/core/CardActionArea/index";
import CardContent from "@material-ui/core/CardContent/index";
import {getValue} from "@ozkey/tree-backbone/data/"
class App extends Component {
  render() {

    return (
      <div className="App">
        <CssBaseline />

              <Grid
                spacing={8}
                container
                direction="row"
                justify="center"
                alignItems="center"
              >

                <Card>
                  <CardActionArea>
                    <CardContent>
                      hello world {getValue()}
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card>
                  <CardActionArea>
                    <CardContent>
                      hello world
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

      </div>
    );
  }
}

export default App;