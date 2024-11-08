import Bool "mo:base/Bool";
import Int "mo:base/Int";
import Principal "mo:base/Principal";

import Array "mo:base/Array";
import Text "mo:base/Text";

actor {
    type TeamMember = {
        name: Text;
        title: Text;
        bio: Text;
        imageUrl: Text;
    };

    type Company = {
        name: Text;
        description: Text;
        category: Text;
        imageUrl: Text;
        yearFounded: Text;
        stage: Text;
    };

    private stable var teamMembers : [TeamMember] = [
        {
            name = "Ken Fried";
            title = "Founder & Managing Partner";
            bio = "Veteran investor with over 20 years of experience in technology and venture capital.";
            imageUrl = "https://placehold.co/400x500?text=Ken+Fried"
        },
        {
            name = "Sarah Chen";
            title = "Partner";
            bio = "Former tech executive specializing in AI and blockchain investments.";
            imageUrl = "https://placehold.co/400x500?text=Sarah+Chen"
        },
        {
            name = "David Park";
            title = "Principal";
            bio = "Technology researcher focused on emerging technologies and market analysis.";
            imageUrl = "https://placehold.co/400x500?text=David+Park"
        }
    ];

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
        }
    ];

    public query func getTeam() : async [TeamMember] {
        teamMembers
    };

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
