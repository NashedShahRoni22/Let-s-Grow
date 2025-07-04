import { CheckCircle, Briefcase, TrendingUp, Building2 } from "lucide-react";

export default function Portfolio() {
    const projects = [
        {
            title: "GreenWave Ventures",
            subtitle: "Sustainable Energy Investment",
            description: "Invested in a clean-energy startup focusing on solar grids across rural Asia.",
            value: "$1.2M Invested",
            date: "Jan 2024",
        },
        {
            title: "BlockTradeX",
            subtitle: "AI-based Crypto Arbitrage",
            description: "High-frequency trading system driven by AI market analysis and real-time insights.",
            value: "$3.5M Invested",
            date: "Apr 2024",
        },
        {
            title: "AgroLift Fund",
            subtitle: "Smart Farming Tech",
            description: "Funding precision-agriculture drones and smart irrigation systems.",
            value: "$980K Invested",
            date: "Feb 2024",
        },
    ];

    const highlights = [
        { title: "Avg Monthly ROI", value: "8.6%", note: "Across all investment packages" },
        { title: "Fastest Growing Sector", value: "AI Trading", note: "142% YoY growth" },
        { title: "Total Users", value: "1.2M+", note: "Global Investors" },
        { title: "Withdrawals Processed", value: "$9.3M+", note: "In last 6 months" },
    ];
    return (
        <section className="min-h-[80vh] bg-gradient-to-br from-slate-900 via-gray-900 to-emerald-950 flex items-center overflow-hidden px-6">
            <div className="max-w-7xl mx-auto space-y-16">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Our <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">Portfolio</span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        See how Let's Grow is empowering innovation through intelligent investments in real-world businesses and technologies.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group bg-black/30 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/40 rounded-2xl p-6 transition duration-300 hover:-translate-y-2"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="text-emerald-400 font-semibold text-sm">{project.date}</div>
                                <CheckCircle className="h-5 w-5 text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                            <p className="text-emerald-400 font-medium mb-2">{project.subtitle}</p>
                            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                            <div className="text-sm font-semibold text-emerald-300">{project.value}</div>
                        </div>
                    ))}
                </div>

                {/* Impact Stats */}
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div>
                        <TrendingUp className="mx-auto text-emerald-400 h-8 w-8 mb-2" />
                        <h4 className="text-2xl font-bold text-white">$7.2M+</h4>
                        <p className="text-gray-400 text-sm">Total Capital Deployed</p>
                    </div>
                    <div>
                        <Briefcase className="mx-auto text-emerald-400 h-8 w-8 mb-2" />
                        <h4 className="text-2xl font-bold text-white">20+</h4>
                        <p className="text-gray-400 text-sm">Projects Funded</p>
                    </div>
                    <div>
                        <Building2 className="mx-auto text-emerald-400 h-8 w-8 mb-2" />
                        <h4 className="text-2xl font-bold text-white">8</h4>
                        <p className="text-gray-400 text-sm">Industries Touched</p>
                    </div>
                    <div>
                        <CheckCircle className="mx-auto text-emerald-400 h-8 w-8 mb-2" />
                        <h4 className="text-2xl font-bold text-white">92%</h4>
                        <p className="text-gray-400 text-sm">Success Rate</p>
                    </div>
                </div>

                {/* Performance Highlights */}
                {/* <section className="mt-24">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">
                            Platform <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">Performance</span> Snapshot
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
                            {highlights.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-black/30 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/40 rounded-xl p-6 transition-all duration-200"
                                >
                                    <div className="text-3xl font-bold text-emerald-400 mb-2">{item.value}</div>
                                    <div className="text-white font-medium">{item.title}</div>
                                    <div className="text-sm text-gray-400 mt-1">{item.note}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}
            </div>
        </section>

    )
}
