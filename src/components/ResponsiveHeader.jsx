import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import { db } from '../backend/firebase.js';

const Header = () => {
    
    const [email, setEmail] = React.useState('');

    const handleSubmit = (e) => {
        console.log(submitted)
        console.log(email.length > 0)
        e.preventDefault();

        if (email.length > 0 && email.includes('@')) {
            setSubmitted(true);
            db.collection("email-list")
            .add({
                email: email,
            })
        }

        setEmail("");
        setTimeout(() => {setSubmitted(false)}, 3000);

    };

    const [submitted, setSubmitted] = React.useState(false);

    return (
        <div class="background">
            <div class="blur">
                <div class='smallerSpaceBox'></div>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center">
                    <div class="header">kounslr</div>
                    <div class='spaceBox'></div>
                    <div class='mainText'>
                        Landing Soon
                    </div>
                    <div class='smallestSpaceBox'></div>
                    <div class='normalText'>
                        We can't wait to show you what we've been working on. 
                        {/* For now, secure your spot to be one of the first to use Kounslr. */}
                    </div>
                    <div class='normalText'>
                        For now, secure your spot to be one of the first to use Kounslr.
                    </div>
                    <div class='smallerSpaceBox'></div>
                    <form onSubmit={handleSubmit}>
                        <Grid container direction='row' justifyContent="center" alignItems="center">
                            <Grid item>
                                <input 
                                    // disabled={submitted}
                                    autoCapitalize="none"
                                    type='email' 
                                    class="form-field" 
                                    style={{}} 
                                    placeholder='Enter your Email address'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <button class='form-field' type="submit" onClick={(e) => {}}>
                                    Submit    
                                </button>
                            </Grid>
                        </Grid>
                        {submitted ? <Alert variant= "filled" severity="success">Success! Thank you for registering</Alert> : null}
                    </form>
                </Grid>
            </div>
        </div>

    )
}

export default Header