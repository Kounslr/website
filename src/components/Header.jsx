import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { db } from '../backend/firebase.js';

const Header = () => {
    
    const [email, setEmail] = React.useState('');

    const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("email-list")
      .add({
        email: email,
      })

    setEmail("");
  };

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
                    </div>
                    <div class='normalText'>
                        For now, secure your spot to be one of the first to use Kounslr.
                    </div>
                    <div class='smallerSpaceBox'></div>
                    <form onSubmit={handleSubmit}>
                        <Grid container direction='row' justifyContent="center" alignItems="center">
                            <Grid item>
                                <input 
                                    type='text' 
                                    class="form-field" 
                                    style={{width: "300px"}} 
                                    placeholder='Enter your Email address'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <button class='form-field' type="submit"onClick={(e) => {}}>
                                    Submit    
                                </button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </div>
        </div>

    )
}

export default Header