import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,

    },
    button: {
        color: 'white',
        backgroundColor: 'rgb(255, 92, 92)'
    },
    media: {
        height: 175,
    },
});

export default function Register() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // const [errors, setErrors] = useState({});

    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        // const userData = {
        //     email: this.state.email,
        //     password: this.state.password
        // };

        // redux + axios to send data to server
    };

    const handleChange = (event) => {
        setUserName(event.target.userName);
        setEmail(event.target.email);
        setPassword(event.target.password);
        setConfirmPassword(event.target.confirmPassword);
        // setErrors(event.target.errors);
    };

    // TODO: Validation and Error checking at some point

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10vh' }}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://cdn.pixabay.com/photo/2017/09/01/19/05/breadbasket-2705179_960_720.png"
                        title="Bread"
                    />
                    <CardContent>
                        <Typography variant="h5">
                            Register
                    </Typography>

                        {/* form for user data submission */}
                        <form noValidate onSubmit={handleSubmit}>
                            <TextField InputLabelProps={{ shrink: true }} id="handle"
                                required
                                name="handle"
                                type="handle"
                                label="User Name"
                                className={classes.textField}
                                value={userName}
                                onChange={handleChange}
                                fullWidth
                            />
                            <TextField InputLabelProps={{ shrink: true }} id="email"
                                required
                                name="email"
                                type="email"
                                label="Email"
                                className={classes.textField}
                                value={email}
                                onChange={handleChange}
                                fullWidth
                            />
                            <TextField InputLabelProps={{ shrink: true }} id="password"
                                required
                                name="password"
                                type="password"
                                label="Password"
                                className={classes.textField}
                                value={password}
                                onChange={handleChange}
                                fullWidth
                            />
                            <TextField InputLabelProps={{ shrink: true }} id="confirmPassword"
                                required
                                name="confirmPassword"
                                type="confirmPassword"
                                label="Confirm password"
                                className={classes.textField}
                                value={confirmPassword}
                                onChange={handleChange}
                                fullWidth
                            />
                            <br />
                            <br />
                            <Button type="submit" variant="contained" className={classes.button} fullWidth>
                                Submit
                            </Button>
                        </form>
                    </CardContent>

                    <CardActions>
                        <small>
                            Already have an account? Login <Link to="/login">here</Link>.
                        </small>
                    </CardActions>
                </CardActionArea>
            </Card >
        </div>
    );
}
