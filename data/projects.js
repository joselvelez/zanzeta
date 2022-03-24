export const projects = [
    {
        id: 4,
        date: "March 2021",
        images: [
            'nft_punchcard.png',
        ],
        demoVideo: 'https://www.youtube.com/watch?v=pAnLQQ6LFuc',
        title: "MerkleMe API",
        demoLink: "www.merkleme.io",
        titleLink: 'merkleme',
        github: 'https://github.com/nfgenes/merkleme',
        techStack: "Next.js, Tailwind CSS, Solidity, Hardhat, Ethers, MerkleTree.js",
        description: "A web3 application thats demonstrates the concept of using NFTs as punch cards to purchase or unlock content.",
        summary: ""
    },
    {
        id: 3,
        date: "November 2021",
        images: [
            'nft_punchcard.png',
        ],
        demoVideo: 'https://www.youtube.com/watch?v=pAnLQQ6LFuc',
        title: "NFT Punchcard Concept",
        demoLink: "https://nft-punchcard.onrender.com/",
        titleLink: 'nft-punchcard-concept',
        github: 'https://github.com/joselvelez/article_nft_punchcard',
        techStack: "React, Tailwind CSS, Solidity, Hardhat, Ethers",
        description: "A web3 application thats demonstrates the concept of using NFTs as punch cards to purchase or unlock content.",
        summary: "Article NFT Punchcard Concept This project is to demonstrate the concept of using NFTs as punch cards to purchase content. I setup this fake news app with fake articles to demonstrate. All of the articles are locked behind a paywall. To access an article, you must connect your wallet and mint a punchcard. Once a punchcard is minted, you can unlock individual articles. Each article that is unlocked is added to a list of articles you have access to and is stored on the blockchain. A punchard is currently configured to have 10 punches loaded by default, but it can be changed in the front end.  The cost of each punchcard, however, is determined onchain and stored in the contract. The contract owner can change the price via an available call. This is not meant to be a fully functioning application (I did this as quickly as I could over a weekend) and there are lots more optimizations and features that could be added."
    },
    {
        id: 2,
        date: "November 2021",
        images: [
            'portfolio_teamamericanftgame.png',
            'team_america_character_page.png',
            'team_america_battle_page.png'
        ],
        demoVideo: 'https://www.youtube.com/watch?v=pAnLQQ6LFuc',
        title: "Team America NFT Game",
        demoLink: "https://team-america-nft-game.onrender.com/",
        titleLink: 'buildspace-project-nft-game',
        github: 'https://github.com/joselvelez/nft_game_client',
        techStack: "React, Tailwind CSS, Solidity, Hardhat, Ethers",
        description: "A web3 application that allows you to mint an NFT character and fight a boss. The characters are stored on the blockchain and the stats change after each battle.",
        summary: ""
    },
    {
        id: 1,
        date: "October 2021",
        images: [
            'portfolio_waveportal.png',
        ],
        demoVideo: 'https://www.youtube.com/watch?v=pAnLQQ6LFuc',
        title: "Wave Portal web3 dApp",
        demoLink: "https://wave-portal.onrender.com/",
        titleLink: 'buildspace-project-waveportal',
        github: 'https://github.com/joselvelez/article_nft_punchcard',
        techStack: "React, Tailwind CSS, Solidity, Hardhat, Ethers",
        description: "This was a project built during the _buildspace hackathon, where I was in the Epsilon cohort. It is a web3 application to send messages that get saved onchain.",
        summary: ""
    }
]