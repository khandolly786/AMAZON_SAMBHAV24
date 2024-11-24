// const hre = require("hardhat");

// async function main() {
//     const ProductCertification = await hre.ethers.getContractFactory("ProductCertification");
//     const productCertification = await ProductCertification.deploy();

//     await productCertification.deployed();

//     console.log("ProductCertification deployed to:", productCertification.address);
// }

// main().catch((error) => {
//     console.error(error);
//     process.exitCode = 1;
// });
const hre = require("hardhat");

async function main() {
    // Compile the contract (ensures you're deploying the latest version)
    await hre.run("compile");

    // Fetch contract factory and deploy
    const ProductCertification = await hre.ethers.getContractFactory("ProductCertification");
    const contract = await ProductCertification.deploy();

    // Wait until it's deployed
    await contract.deployed();

    console.log("Contract deployed to:", contract.address);
}

main().catch((error) => {
    console.error("Error during deployment:", error);
    process.exitCode = 1;
});
