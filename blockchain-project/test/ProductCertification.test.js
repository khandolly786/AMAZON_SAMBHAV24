const { expect } = require("chai");

describe("ProductCertification", function () {
    it("Should create a product and fetch its green score", async function () {
        const ProductCertification = await ethers.getContractFactory("ProductCertification");
        const productCertification = await ProductCertification.deploy();
        await productCertification.deployed();

        await productCertification.createProduct(1, "EcoBag", "Organic", 85);
        const greenScore = await productCertification.getGreenScore(1);

        expect(greenScore).to.equal(85);
    });
});
