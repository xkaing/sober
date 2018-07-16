import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import ChartMonth from '../component/ChartMonth'
import TotalAssets from '../component/TotalAssets'

const styles = theme => ({
    main: {
        marginTop: 40,
        height: 2040,
    },
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: 1200,
        height: 2000,
        margin: '0 auto',
    },
});

function Finance(props) {
    const { classes } = props;

    return (
        <div className={classes.main}>
            <Paper className={classes.root} elevation={10}>
                <TotalAssets />
                <ChartMonth />
            </Paper>
        </div>
    );
}

Finance.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Finance);