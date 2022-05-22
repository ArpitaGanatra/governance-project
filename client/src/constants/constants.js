export const NFT_CONTRACT_ADDRESS =
    "0x92bBdbA86C3344c23cBB2B21A6d6a83781604E2E";
export const VOTE_CONTRACT_ADDRESS =
    "0x93E83689b2082151cc7952480258eD4B42156562";
export const nftabi = [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [{ internalType: "uint256", name: "_days", type: "uint256" }],
        name: "_daysToDate",
        outputs: [
            { internalType: "uint256", name: "year", type: "uint256" },
            { internalType: "uint256", name: "month", type: "uint256" },
            { internalType: "uint256", name: "day", type: "uint256" },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "addresstoTokenId",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "_dateofBirth", type: "uint256" },
        ],
        name: "checkVoteEligibity",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "fromTimestamp", type: "uint256" },
            { internalType: "uint256", name: "toTimestamp", type: "uint256" },
        ],
        name: "diffYears",
        outputs: [{ internalType: "uint256", name: "_years", type: "uint256" }],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "generateCertificate",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "getApproved",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
        ],
        name: "getCertificatebyTokenId",
        outputs: [
            { internalType: "string", name: "name", type: "string" },
            { internalType: "string", name: "locationofBirth", type: "string" },
            { internalType: "string", name: "location", type: "string" },
            { internalType: "uint256", name: "dateofBirth", type: "uint256" },
            {
                internalType: "uint256",
                name: "voterEligibity",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "getDateofBirth",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "_address", type: "address" },
        ],
        name: "getTokenIdbyAddress",
        outputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "getTokenURI",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "getVoterEligibity",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "operator", type: "address" },
        ],
        name: "isApprovedForAll",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "_address", type: "address" },
            { internalType: "string", name: "_name", type: "string" },
            {
                internalType: "string",
                name: "_locationofBirth",
                type: "string",
            },
            { internalType: "string", name: "_location", type: "string" },
            { internalType: "uint256", name: "_dateofBirth", type: "uint256" },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "ownerOf",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "bytes", name: "_data", type: "bytes" },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "operator", type: "address" },
            { internalType: "bool", name: "approved", type: "bool" },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "bytes4", name: "interfaceId", type: "bytes4" },
        ],
        name: "supportsInterface",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "tokenIdtoCertificate",
        outputs: [
            { internalType: "string", name: "name", type: "string" },
            { internalType: "string", name: "locationofBirth", type: "string" },
            { internalType: "string", name: "location", type: "string" },
            { internalType: "uint256", name: "dateofBirth", type: "uint256" },
            {
                internalType: "uint256",
                name: "voterEligibity",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "tokenURI",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "tokenId", type: "uint256" },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
        name: "updateEligibity",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];

export const voteabi = [
    {
        inputs: [
            { internalType: "string", name: "_title", type: "string" },
            { internalType: "string", name: "_body", type: "string" },
            { internalType: "string", name: "_location", type: "string" },
            { internalType: "uint256", name: "_deadline", type: "uint256" },
        ],
        name: "createProposal",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" },
        ],
        name: "getEligibityandLocation",
        outputs: [
            {
                internalType: "uint256",
                name: "voterEligibity",
                type: "uint256",
            },
            { internalType: "string", name: "location", type: "string" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getTokenId",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "numProposals",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "proposals",
        outputs: [
            { internalType: "string", name: "title", type: "string" },
            { internalType: "string", name: "body", type: "string" },
            { internalType: "string", name: "location", type: "string" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
            { internalType: "uint256", name: "Yay", type: "uint256" },
            { internalType: "uint256", name: "Nay", type: "uint256" },
            { internalType: "uint256", name: "Abstain", type: "uint256" },
            { internalType: "bool", name: "created", type: "bool" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "_address", type: "address" },
        ],
        name: "setBirthCertificateAddress",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "_numProposals", type: "uint256" },
            { internalType: "string", name: "_vote", type: "string" },
        ],
        name: "vote",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
