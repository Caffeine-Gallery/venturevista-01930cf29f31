import Bool "mo:base/Bool";
import Int "mo:base/Int";

import Array "mo:base/Array";
import Text "mo:base/Text";

actor {
    type Company = {
        name: Text;
        description: Text;
        category: Text;
        imageUrl: Text;
        yearFounded: Text;
        stage: Text;
    };

    private stable var portfolioCompanies : [Company] = [
        {
            name = "Internet Computer";
            description = "Revolutionary blockchain platform enabling smart contracts and decentralized applications";
            category = "Blockchain";
            imageUrl = "https://cryptologos.cc/logos/internet-computer-icp-logo.png";
            yearFounded = "2016";
            stage = "Growth"
        },
        {
            name = "Ethereum";
            description = "Leading smart contract platform powering DeFi and NFTs";
            category = "Blockchain";
            imageUrl = "https://cryptologos.cc/logos/ethereum-eth-logo.png";
            yearFounded = "2015";
            stage = "Growth"
        },
        {
            name = "Neural Labs";
            description = "Pioneering research in artificial general intelligence and neural networks";
            category = "Artificial Intelligence";
            imageUrl = "https://placehold.co/400x400?text=Neural+Labs";
            yearFounded = "2021";
            stage = "Series A"
        },
        {
            name = "Quantum Dynamics";
            description = "Quantum computing solutions for enterprise applications";
            category = "Quantum Computing";
            imageUrl = "https://placehold.co/400x400?text=Quantum+Dynamics";
            yearFounded = "2020";
            stage = "Series B"
        },
        {
            name = "CyberShield";
            description = "Next-generation cybersecurity powered by AI";
            category = "Cybersecurity";
            imageUrl = "https://placehold.co/400x400?text=CyberShield";
            yearFounded = "2019";
            stage = "Series C"
        },
        {
            name = "BioTech Solutions";
            description = "AI-driven drug discovery and development platform";
            category = "Healthcare";
            imageUrl = "https://placehold.co/400x400?text=BioTech+Solutions";
            yearFounded = "2018";
            stage = "Growth"
        },
        {
            name = "Robotics Plus";
            description = "Advanced robotics systems for manufacturing and logistics";
            category = "Robotics";
            imageUrl = "https://placehold.co/400x400?text=Robotics+Plus";
            yearFounded = "2017";
            stage = "Series B"
        },
        {
            name = "DataFlow AI";
            description = "Enterprise-grade machine learning infrastructure";
            category = "Artificial Intelligence";
            imageUrl = "https://placehold.co/400x400?text=DataFlow+AI";
            yearFounded = "2022";
            stage = "Seed"
        }
    ];

    public query func getPortfolio() : async [Company] {
        portfolioCompanies
    };

    public query func getCompaniesByCategory(category: Text) : async [Company] {
        Array.filter<Company>(
            portfolioCompanies,
            func(company: Company) : Bool {
                company.category == category
            }
        )
    };
}
