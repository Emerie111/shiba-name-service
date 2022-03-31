const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const domainContractFactory = await hre.ethers.getContractFactory("Domains");
    const domainContract = await domainContractFactory.deploy("shib");
    await domainContract.deployed();
    console.log("Contract deployed to:", domainContract.address);
    console.log('Contract deployed by:', owner.address);

    let txn = await domainContract.register("emerie", {value: hre.ethers.utils.parseEther("0.1")});
    await txn.wait();

    const address = await domainContract.getAddress("emerie");
    console.log("Owner of domain emerie:", address);

    const balance = await hre.ethers.provider.gr

    //Trying to set a record that doesn't belong to me!
    //txn = await domainContract.connect(randomPerson).setRecord("doom", "Haha my domain now!")

};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    }catch(error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();

