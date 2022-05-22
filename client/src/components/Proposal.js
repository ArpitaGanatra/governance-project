import React from 'react'
import {Grid, Stack, Button, TextField} from '@mui/material'
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const Proposal = ({nftBalance, CssTextField, proposalFormValues, handleCreateInputChange,setDeadlineTime, createProposal, createProposalLoading, deadlineTime}) => {
  return (
    <div>
         {nftBalance === 0 ? (
                                <div>
                                    You do not own any BirthCertificateNFT.{" "}
                                    <br />
                                    <b>
                                        You cannot create or vote on proposals.
                                    </b>
                                </div>
                            ) : (
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
                                                    id="title-input"
                                                    name="title"
                                                    label="title"
                                                    type="text"
                                                    fullWidth
                                                    value={
                                                        proposalFormValues.title
                                                    }
                                                    onChange={
                                                        handleCreateInputChange
                                                    }
                                                />
                                            </Grid>
                                            <Grid item>
                                                <CssTextField
                                                    id="desc-input"
                                                    name="description"
                                                    label="description"
                                                    type="text"
                                                    fullWidth
                                                    value={
                                                        proposalFormValues.description
                                                    }
                                                    onChange={
                                                        handleCreateInputChange
                                                    }
                                                />
                                            </Grid>
                                            <Grid item>
                                                <CssTextField
                                                    id="location-input"
                                                    name="location"
                                                    label="location"
                                                    type="text"
                                                    fullWidth
                                                    value={
                                                        proposalFormValues.location
                                                    }
                                                    onChange={
                                                        handleCreateInputChange
                                                    }
                                                />
                                            </Grid>
                                            <Grid item>
                                                <LocalizationProvider
                                                    dateAdapter={AdapterDateFns}
                                                >
                                                    <DateTimePicker
                                                        label="Voting Deadline"
                                                        sx={{color:'#fff'}}
                                                        renderInput={(
                                                            params
                                                        ) => (
                                                            <TextField
                                                                {...params}
                                                            />
                                                        )}
                                                        value={deadlineTime}
                                                        onChange={(
                                                            newValue
                                                        ) => {
                                                            setDeadlineTime(
                                                                newValue
                                                            );
                                                        }}
                                                    />
                                                </LocalizationProvider>
                                                {/* <CssTextField
                                                    id="date"
                                                    label="Deadline"
                                                    name="deadline"
                                                    type="date"
                                                    fullWidth
                                                    value={
                                                        proposalFormValues.deadline
                                                    }
                                                    onChange={(
                                                        newValue
                                                    ) => {
                                                        setDeadlineTime(
                                                            newValue
                                                        );
                                                    }}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                /> */}
                                            </Grid>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                                onClick={createProposal}
                                            >
                                                {createProposalLoading
                                                    ? "loading..."
                                                    : "Submit"}
                                            </Button>
                                        </Stack>
                                    </Grid>
                                </form>
                            )}
    </div>
  )
}

export default Proposal
