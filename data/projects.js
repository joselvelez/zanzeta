export const projects = [
    {
        "id": 4,
        "date": "March 2021",
        "images": [
            "merkleme.png"
        ],
        "demoVideo": [
            "https://www.youtube.com/embed/wEkYdGIa1mo",
            "https://www.youtube.com/embed/9n2Vm5asZRI",
            "https://www.youtube.com/embed/Nf6LCK-WxAQ"
        ],
        "title": "MerkleMe API",
        "demoLink": "https://www.merkleme.io",
        "titleLink": "merkleme",
        "github": "https://github.com/nfgenes/merkleme",
        "techStack": "Next.js, Tailwind CSS, Solidity, Hardhat, Ethers, MerkleTree.js, Node.js",
        "description": "This is an exploratory project to build a backend solution for generating Merkle trees for a given list of addresses (a whitelist). Lots of folks are needing whitelists for their NFT projects and typically have to go through the extra steps of generating a Merkle tree and then running a backend to verify proofs on the fly. These steps also require knowledge of Merkle trees to implement them. The idea behind this project is to abstract away the Merkle tree process and simply provide a front end solution that allows anyone to copy + paste their whitelist into a form and click a button to automagically generate their Merkle Tree. Once the Merkle tree is created, the developer only needs to add the root hash and the OpenZeppelin MerkleProof library to their minting contract. The developer's front end will then be able to grab a user's address (likely from their wallet) and use it to generate a Merkle proof on the fly for that given address via the MerkeMe backend API. With a Merkle proof in hand, the frontend can then submit a transaction to the minting contract to attempt minting.",
    },
    {
        "id": 3,
        "date": "November 2021",
        "images": [
            "nft_punchcard.png"
        ],
        "demoVideo": [
            "https://www.youtube.com/embed/DWk7CmNCTo8"
        ],
        "title": "NFT Punchcard Concept",
        "demoLink": "https://nft-punchcard.onrender.com/",
        "titleLink": "nft-punchcard-concept",
        "github": "https://github.com/joselvelez/article_nft_punchcard",
        "techStack": "React, Tailwind CSS, Solidity, Hardhat, Ethers",
        "description": "A web3 application thats demonstrates the concept of using NFTs as punch cards to purchase or unlock content.",
    },
    {
        "id": 2,
        "date": "November 2021",
        "images": [
            "portfolio_teamamericanftgame.png",
            "team_america_character_page.png",
            "team_america_battle_page.png"
        ],
        "demoVideo": [
            "https://www.youtube.com/embed/pAnLQQ6LFuc"
        ],
        "title": "Team America NFT Game",
        "demoLink": "https://team-america-nft-game.onrender.com/",
        "titleLink": "buildspace-project-nft-game",
        "github": "https://github.com/joselvelez/nft_game_client",
        "techStack": "React, Tailwind CSS, Solidity, Hardhat, Ethers",
        "description": "A web3 application that allows you to mint an NFT character and fight a boss. The characters are stored on the blockchain and the stats change after each battle.",
    },
    {
        "id": 1,
        "date": "October 2021",
        "images": [
            "portfolio_waveportal.png"
        ],
        "demoVideo": "",
        "title": "Wave Portal web3 dApp",
        "demoLink": "https://wave-portal.onrender.com/",
        "titleLink": "buildspace-project-waveportal",
        "github": "https://github.com/joselvelez/article_nft_punchcard",
        "techStack": "React, Tailwind CSS, Solidity, Hardhat, Ethers",
        "description": "This was a project built during the _buildspace hackathon, where I was in the Epsilon cohort. It is a web3 application to send messages that get saved onchain.",
    }
]