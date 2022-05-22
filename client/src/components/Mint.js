import React from 'react'
import {Grid, Stack, Button, Paper} from '@mui/material'

const Mint = ({alreadyMinted, formValues, handleInputChange, handleSubmit, CssTextField}) => {
  return (
    <form
    // onSubmit={handleSubmit}
    style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }}
>
    <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
    >
        <Stack
            component="form"
            sx={{
                width: "35ch",
            }}
            spacing={2}
            noValidate
            autoComplete="off"
        >
            <Grid item>
                <CssTextField
                    id="name-input"
                    name="name"
                    label="Name"
                    type="text"
                    fullWidth
                    value={formValues.name}
                    onChange={handleInputChange}
                />
            </Grid>
            <Grid item>
                <CssTextField
                    id="birth-location"
                    name="birthLocation"
                    label="Birth Location"
                    fullWidth
                    type="text"
                    value={formValues.birthLocation}
                    onChange={handleInputChange}
                />
            </Grid>
            <Grid item>
                <CssTextField
                    id="current-location"
                    name="currentLocation"
                    label="Current Location"
                    type="text"
                    fullWidth
                    value={
                        formValues.currentLocation
                    }
                    onChange={handleInputChange}
                />
            </Grid>
            <Grid item>
                <CssTextField
                    id="date"
                    label="Birthday"
                    name="birthday"
                    type="date"
                    fullWidth
                    value={formValues.birthday}
                    onChange={handleInputChange}
                    // sx={{ width: 220 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </Stack>
        {alreadyMinted? <div style={{paddingTop:40}}>** You already have a Birth Certificate</div>: <></>}
    </Grid>
</form>
  )
}

export default Mint
