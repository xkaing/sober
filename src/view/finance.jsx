import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    main: {
        marginTop: 40,
    },
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: 1000,
        // textAlign: 'center',
        margin: '0 auto',
    },
});

function Finance(props) {
    const { classes } = props;

    return (
        <div className={classes.main}>
            <Paper className={classes.root} elevation={2}>
                <Typography variant="headline" component="h3">
                    This is a sheet of paper.
                </Typography>
                <Typography component="p">
                    Paper can be used to build surface or other elements for your application.
                </Typography>
            </Paper>
        </div>
    );
}

Finance.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Finance);