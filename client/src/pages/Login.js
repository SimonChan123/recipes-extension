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

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [errors, setErrors] = useState({});

    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        // const userData = {
        //     email: this.state.email,
        //     password: this.state.password
        // };
        // TODO: send data to be checked to redux and then use axios to request routes
    };

    const handleChange = (event) => {
        setEmail(event.target.email);
        setPassword(event.target.password);
        // setErrors(event.target.errors);
    };

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
                            Login
                    </Typography>

                        <form noValidate onSubmit={handleSubmit}>
                            <TextField id="email"
                                name="email"
                                type="email"
                                label="Email"
                                className={classes.textField}
                                value={email}
                                onChange={handleChange}
                                fullWidth
                            />
                            <TextField id="password"
                                name="password"
                                type="password"
                                label="Password"
                                className={classes.textField}
                                value={password}
                                onChange={handleChange}
                                fullWidth
                            />
                            <br />
                            <br />
                            <Button type="submit" variant="contained" className={classes.button} fullWidth>
                                Login
                            </Button>
                        </form>
                    </CardContent>

                    <CardActions>
                        <small>
                            Don't have an account? Sign up <Link to="/signup">here</Link>.
                        </small>
                    </CardActions>
                </CardActionArea>
            </Card >
        </div>
    );
}
