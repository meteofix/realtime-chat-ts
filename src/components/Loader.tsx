import React, {FC} from 'react';
import {Container, Grid} from "@material-ui/core";
import {ldsHourglass} from "./Loader.module.css";

const Loader: FC = () => {
    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justifyContent={"center"}
            >
                <Grid
                      container
                      alignItems={"center"}
                      direction={"column"}
                >
                    <div className={ldsHourglass}></div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;