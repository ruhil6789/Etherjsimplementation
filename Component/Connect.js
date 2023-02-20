import React from 'react'
import { Contract, ethers, parseUnits, parseEther, formatEther, formatUnits, VoidSigner, Wallet, verifyMessage } from 'ethers'
import utils from 'ethers'
import Tokenc from "../assets/abis/front.json"

const Connect = () => {


    const connect1 = async () => {

        const provider = new ethers.BrowserProvider(window.ethereum);
        console.log(provider, "provider")

        // const sign=  new Wallet(id("test"))
        // console.log(sign,"sssss")


        // const message = "hello world";
        // const sign=  await sign.
        const signer = await provider.getSigner()
        console.log(signer, "signer");
        const contract = new Contract("0xc30127CE2FB78a092841c2039C61586A91640306", Tokenc, signer)
        console.log(contract, "contract instance to sign ")
        // const amount = parseUnits("1.0", "ether");
        const amount = parseUnits("5.0", "ether")
        console.log(amount, "amounttttt")

        const symbol = contract.symbol()
        console.log(symbol, "symbol")

        // const ee = await contract.estimateGas.transfer("0x69B05390B12769161947DC1C313C957aED6bc94c", "0.00001")
        //or
        //estimate gas
        // const estgas = await provider.estimateGas({
        //     to: "0xF7798c7939Cddb0440f97D9464ca6EfbF9D6a589",
        //     value: parseEther('0.0000001',"gwei"),
        //     gasLimit: 69414805499,
        //     gasPrice: parseUnits('10', 'gwei'),
        //     nonce: await provider.getTransactionCount("0xF7798c7939Cddb0440f97D9464ca6EfbF9D6a589")

        // })
        // console.log(estgas, "eeeee")
        const txn = await provider.getTransaction("0xa4bc53eaa1cf2e974d3dc6b94f56643658eace8bdd0444aab4ca005f46664312");
        console.log(txn, "txxxxnn")



        // const message = "hello";
        // const sign = await signer.signMessage(message);
        // console.log(sign, "signnnn");

        // //verify a message
        // verifyMessage(message, sign)
        const feeedata = await provider.getFeeData();
        console.log(feeedata, "fffffeeee")
        // const estt = signer.estimateGas("0xcb1ccd426c52705b8c391cd5dedb886ca0fc45d6853393ea645887086863524c")
        // console.log(estt, "hello")



        // sending Transaction
        //  let txxx= {
        //      to: "0xF7798c7939Cddb0440f97D9464ca6EfbF9D6a589",
        //      value:ethers.utils.parseEther("0.1");

        //  }



        //         let data =  ethers.utils.hexDataSlice(ethers.utils.id('symbol()'),0,4)
        // //Transaction Method
        //  const txn=  await provider.call({
        //      to: "0xF7798c7939Cddb0440f97D9464ca6EfbF9D6a589",
        //      dat
        //  })




        // const gasingwei = ethers.utils.formatUnits(gasPrice, "gwei")
        //  console.log(gasingwei,"dfref")

        const gasestimate = await contract.estimateGas.transfer("0x69B05390B12769161947DC1C313C957aED6bc94c", "0.00001");
        console.log(gasestimate, "gassssss")
        // const tx = await contract.transfer("0x69B05390B12769161947DC1C313C957aED6bc94c", amount)
        // console.log(tx, "tx send to mempool")
        // await tx.wait()

        // const tx = await signer.sendTransaction({
        //     to: "0x69B05390B12769161947DC1C313C957aED6bc94c",
        //     value: parseEther("1.0")
        // })
        // console.log(tx, "txxxxxxx")

        // const a = await contract.staticCall.transferFrom("0xF7798c7939Cddb0440f97D9464ca6EfbF9D6a589", "0x69B05390B12769161947DC1C313C957aED6bc94c", "0.00001")

        // console.log(a,"aaaaaa")

        // const approve= await signer.signTransaction()
        // const estimateGasLimit = await contract.estimateGas.approve("0xc30127CE2FB78a092841c2039C61586A91640306", "1")
        // console.log(estimateGasLimit,"eeeeeeeeeeee")
        const apro = await contract.approve("0xc30127CE2FB78a092841c2039C61586A91640306", "1")
        console.log(apro, "approveeee")

        const appTxSignerd = await signer.signTransaction(apro);
        console.log(appTxSignerd, "approve tx signed")


    }

    const transfer = async () => {
        const provider = new ethers.BrowserProvider(window.ethereum)


        console.log(provider, "provider");
        const blockno = await provider.getBlockNumber()
        console.log(blockno, "block number")

        const signer = await provider.getSigner();
        console.log(signer, "signerrrrr");
        // sendeing transaction
        // to get transactio count
        const txCount = await provider.getTransactionCount("0xF7798c7939Cddb0440f97D9464ca6EfbF9D6a589")
        console.log(txCount, "txCcount")
        const network = await provider.getNetwork();
        console.log(network, "network")
        const chainId = network.chainId;
        console.log(chainId, "chain      ")

        const balance = await provider.getBalance("0xF7798c7939Cddb0440f97D9464ca6EfbF9D6a589")
        // 182222n
        console.log(balance, "balanceeeeee")
        // 0.1888
        const frtEther = formatEther(balance)
        console.log(frtEther, "frmt ether")

        // const message="hello";
        // const sign=  await signer.signMessage(message);
        // console.log(sign,"signnnn");

        // //verify a message
        //  verifyMessage(message,sign)

        const tx = await signer.sendTransaction({
            to: "0x69B05390B12769161947DC1C313C957aED6bc94c",
            value: parseEther(".0000001")
        })

        console.log(tx, "hhhhhhh")
        const recpt = await tx.await();
        console.log(recpt, "recpttttt")
        const contract = new Contract("0xc30127CE2FB78a092841c2039C61586A91640306", Tokenc, signer)
        console.log(contract, "contract instance to sign ")

        const symbol = contract.symbol()
        console.log(symbol, "symbol")
        // const calll = signer.call("0xcb1ccd426c52705b8c391cd5dedb886ca0fc45d6853393ea645887086863524c")
        // console.log(calll,"hello")


        // const filterss = contract.filters.transfer
        // console(filterss, "filterssssss");
    }

    const State = async () => {
        const provider = new ethers.BrowserProvider(window.ethereum)


        console.log(provider, "provider");
        const blockno = await provider.getBlockNumber()
        console.log(blockno, "block number")

        const signer = await provider.getSigner();
        console.log(signer, "signerrrrr");

        const contract = new Contract("0xc30127CE2FB78a092841c2039C61586A91640306", Tokenc, signer)
        console.log(contract, "contract instance to sign ")

        const symbol = contract.symbol()
        console.log(symbol, "symbol")


        const decimal = await contract.decimals();
        console.log(decimal, "decimal") //18n 'decimal'
        const balance = await provider.getBalance("0xF7798c7939Cddb0440f97D9464ca6EfbF9D6a589")
        console.log(balance, "balanceee") //607945209082579269n 'balanceeeeee'
        const hum = formatUnits(balance, decimal)
        console.log(hum, "hummmmmmm") //0.607249977391458269 hummmmmmm

        const amount = parseUnits("0.0000001", 18)
        console.log(amount, "amountttttt")  //1000000000000000000n 'amountttttt'


        // signing tx from otjer accountaddress
        //  const transferr = await contract.transfer.staticCall("0xF7798c7939Cddb0440f97D9464ca6EfbF9D6a589", amount)
        // console.log(transferr, "transferrrr")

        const other = new VoidSigner("0x69B05390B12769161947DC1C313C957aED6bc94c");
        console.log(other, "otherrrrrr")

        const signfromOther = await contract.connect(provider);
        console.log(signfromOther, "signer from other waddress")

        const transfr = await signfromOther.transfer.staticCall("", amount);
        console.log(transfr, "transfer from other account")

        //  const filterss= contract.filters.transfer
        //  console( filterss,"filterssssss");
        //         const events = await contract.queryFilter(filter, -100)
        // console.log(events,"ebentt")
        //         events.length

    }

    const eventt = async () => {
        const provider = new ethers.BrowserProvider(window.ethereum)


        console.log(provider, "provider");
        const blockno = await provider.getBlockNumber()
        console.log(blockno, "block number")

        const signer = await provider.getSigner();
        console.log(signer, "signerrrrr");
        const contract = new Contract("0xc30127CE2FB78a092841c2039C61586A91640306", Tokenc, signer);

        console.log(contract, "contract")
        //     contract.on("Transfer", "0xF7798c7939Cddb0440f97D9464ca6EfbF9D6a589", "0x69B05390B12769161947DC1C313C957aED6bc94c", "0.00000001")=> {
        // const amountt = formatEther("0.00000001", 18);


        // const contract = new ethers.Contract(usdtAddress, usdtABI, provider);
        // contract.on("Transfer", (from, to, value, event) => {
        //     let info = {
        //         from: from,
        //         to: to,
        //         value: ethers.utils.formatUnits(value, 6),
        //         data: event,
        //     };
        //     console.log(JSON.stringify(info, null, 4));
        // });

    }



    return (
        <>
            <div>Connect</div>
            <button onClick={connect1}>Connect</button>
            <button onClick={transfer}>Transfer</button>
            <button onClick={State}>State</button>
            <button onlick={eventt}>Event</button>
        </>
    )
}

export default Connect