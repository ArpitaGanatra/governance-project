import React from 'react'
import {Grid,Button, Box} from '@mui/material'
const Vote = ({proposals, voteOnProposal}) => {
  return (
    <div>
             {proposals.length === 0 ? (
                                <div>No proposals have been created</div>
                            ) : (
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2}>
                                        {proposals.map((p, index) => (
                                            <Grid item xs={12} md={6} lg={4}>
                                                <div
                                                    key={index}
                                                    className="proposalCard"
                                                >
                                                    <h3 style={{ margin: "0" }}>
                                                        Proposal for: {p.title}
                                                    </h3>
                                                    <p style={{ margin: "0" }}>
                                                        {p.description}
                                                    </p>
                                                    <p style={{ margin: "0" }}>
                                                        Location: {p.location}
                                                    </p>
                                                    <p style={{ margin: "0" }}>
                                                        Deadline:{" "}
                                                        {p.deadline.toLocaleString()}
                                                    </p>
                                                    <p
                                                        style={{
                                                            marginBottom: "0",
                                                        }}
                                                    >
                                                        Yay Votes: {p.yayVotes}
                                                    </p>
                                                    <p style={{ margin: "0" }}>
                                                        Nay Votes: {p.nayVotes}
                                                    </p>
                                                    <p style={{ margin: "0" }}>
                                                        Abstain Votes:{" "}
                                                        {p.abstainVotes}
                                                    </p>
                                                    <div className="btn__container">
                                                        <Button
                                                            variant="outlined"
                                                            onClick={() =>
                                                                voteOnProposal(
                                                                    p.proposalId,
                                                                    "Yay"
                                                                )
                                                            }
                                                        >
                                                            Yay
                                                        </Button>
                                                        <Button
                                                            variant="outlined"
                                                            onClick={() =>
                                                                voteOnProposal(
                                                                    p.proposalId,
                                                                    "Nay"
                                                                )
                                                            }
                                                        >
                                                            Nay
                                                        </Button>
                                                        <Button
                                                            variant="outlined"
                                                            onClick={() =>
                                                                voteOnProposal(
                                                                    p.proposalId,
                                                                    "Abstain"
                                                                )
                                                            }
                                                        >
                                                            Abstain
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            )}
    </div>
  )
}
export default Vote