import Bool "mo:base/Bool";
import Int "mo:base/Int";

import Array "mo:base/Array";
import Text "mo:base/Text";

actor {
    // Type for portfolio companies
    type Company = {
        name: Text;
        description: Text;
        category: Text;
        imageUrl: Text;
    };

    // Stable storage for portfolio companies
    private stable var portfolioCompanies : [Company] = [
        {
            name = "Internet Computer";
            description = "Revolutionary blockchain platform enabling smart contracts and decentralized applications";
            category = "Blockchain";
            imageUrl = "https://cryptologos.cc/logos/internet-computer-icp-logo.png";
        },
        {
            name = "Ethereum";
            description = "Leading smart contract platform powering DeFi and NFTs";
            category = "Blockchain";
            imageUrl = "https://cryptologos.cc/logos/ethereum-eth-logo.png";
        },
        {
            name = "AI Dynamics";
            description = "Advanced AI solutions for enterprise automation";
            category = "Artificial Intelligence";
            imageUrl = "https://placehold.co/400x400?text=AI+Dynamics";
        },
        {
            name = "Neural Labs";
            description = "Cutting-edge neural network research and development";
            category = "Artificial Intelligence";
            imageUrl = "https://placehold.co/400x400?text=Neural+Labs";
        }
    ];

    // Query function to get all portfolio companies
    public query func getPortfolio() : async [Company] {
        portfolioCompanies
    };

    // Query function to get companies by category
    public query func getCompaniesByCategory(category: Text) : async [Company] {
        Array.filter<Company>(
            portfolioCompanies,
            func(company: Company) : Bool {
                company.category == category
            }
        )
    };
}
