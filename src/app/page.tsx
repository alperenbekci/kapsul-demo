"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center">
      {/* Navbar */}
      <nav className="bg-blue-500 w-full py-4 px-6 sticky top-0 text-center">
        <h1 className="text-3xl font-bold text-white tracking-wide">
          Kapsul Education Sources
        </h1>
      </nav>

      {/* Content */}
      <div className="container mx-auto p-6 flex flex-col items-center">
        <Section
          title="Kapsul Education Demo"
          links={[
            {
              name: "Kapsul Demo",
              url: "https://github.com/alperenbekci/kapsul-demo",
            },
          ]}
        />
        {/* Section Component */}
        <Section
          title="Soft Tools ✍🏼"
          links={[
            { name: "Notion", url: "https://www.notion.com/" },
            { name: "Pitch", url: "https://pitch.com/" },
            { name: "Spline", url: "https://spline.design/" },
            { name: "Obsidian", url: "https://obsidian.md/" },
            { name: "Figma", url: "https://figma.com" },
            { name: "Trello", url: "https://trello.com/tr" },
          ]}
        />

        <Section
          title="Tech and Docs 🧑🏼‍💻"
          links={[
            {
              name: "WSL Install",
              url: "https://learn.microsoft.com/en-us/windows/wsl/install",
            },
            { name: "Oh My Zsh", url: "https://github.com/ohmyzsh/ohmyzsh" },
            { name: "Git", url: "https://git-scm.com/" },
            { name: "VS Code", url: "https://code.visualstudio.com/" },
            { name: "Node.js", url: "https://nodejs.org/en" },
            { name: "Rust", url: "https://www.rust-lang.org/" },
            {
              name: "Rust Cookbook",
              url: "https://rust-lang-nursery.github.io/rust-cookbook/",
            },
            {
              name: "Rust Book",
              url: "https://doc.rust-lang.org/stable/book/",
            },
            { name: "Go", url: "https://go.dev/" },
            { name: "Solidity", url: "https://soliditylang.org/" },
            { name: "Remix", url: "https://remix.ethereum.org/" },
            { name: "Foundry", url: "https://book.getfoundry.sh/" },
            { name: "Hardhat", url: "https://hardhat.org/" },
            { name: "React", url: "https://react.dev/" },
            { name: "Next.js", url: "https://nextjs.org/" },
            { name: "Expo", url: "https://expo.dev/" },
            { name: "Vercel", url: "https://vercel.com/" },
            { name: "Ethers.js", url: "https://docs.ethers.org/v5/" },
            { name: "Web3.js", url: "https://www.web3js.org/" },
          ]}
        />

        <Section
          title="Blockchain Tools ⛓️‍💥"
          links={[
            {
              name: "Blockchain Demo",
              url: "https://andersbrownworth.com/blockchain",
            },
            { name: "Updraft", url: "https://updraft.cyfrin.io/" },
            { name: "OpenZeppelin", url: "https://www.openzeppelin.com/" },
            { name: "Thirdweb", url: "https://thirdweb.com/" },
            { name: "Moralis", url: "https://docs.moralis.com/" },
            { name: "QuickNode", url: "https://www.quicknode.com/" },
            {
              name: "Alchemy Dashboard",
              url: "https://dashboard.alchemy.com/chains",
            },
            { name: "BuidlGuidl", url: "https://buidlguidl.com/" },
            { name: "Speedrun Ethereum", url: "https://speedrunethereum.com/" },
            { name: "Vitalik", url: "https://vitalik.eth.limo/" },
            { name: "CoinMarketCap", url: "https://coinmarketcap.com/" },
            { name: "Phantom", url: "https://phantom.com/" },
            { name: "Metamask", url: "https://metamask.io/" },
            { name: "Etherscan", url: "https://etherscan.io/" },
          ]}
        />

        <Section
          title="Check Us 🤯"
          links={[
            { name: "trilema", url: "https://trilema.io/" },
            { name: "trio labs", url: "https://trioblockchainlabs.com/" },
          ]}
        />
      </div>

      <footer className="bg-neutral-900 pb-8 px-6 text-center">
        <h1 className="text-xl text-blue-500 font-semibold tracking-wide">
          made by{" "}
          <a
            href="https://alperenbekci.vercel.app/"
            target="_blank"
            className="text-blue-500 underline hover:text-blue-400"
          >
            alperenbekci
          </a>{" "}
          and{" "}
          <a
            href="https://bento.me/murathanje"
            target="_blank"
            className="text-blue-500 underline hover:text-blue-400"
          >
            murathan
          </a>
          🐳
        </h1>
      </footer>
    </div>
  );
}

interface SectionProps {
  title: string;
  links: { name: string; url: string }[];
}

function Section({ title, links }: SectionProps) {
  return (
    <div className="mb-10 text-center max-w-2xl">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index} className="space-y-8">
            <Link href={link.url}>
              <p className="text-blue-400 hover:underline hover:text-blue-300">
                {link.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
