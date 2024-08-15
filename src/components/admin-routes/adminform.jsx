import React, { useEffect, useState } from 'react'
import Web3 from 'web3'
import { Link } from 'react-router-dom'

const Adminform = () => {
    const marketplaceAddress = '0x214e49F80d03486734C7901e003C111044DfFaEe'
    const abi = [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "initialOwner",
                    "type": "address"
                },
                {
                    "internalType": "contract IERC721",
                    "name": "_NftMinting",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_USDCAddress",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                }
            ],
            "name": "AddressEmptyCode",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "AddressInsufficientBalance",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "listIndex",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "price",
                    "type": "uint256"
                }
            ],
            "name": "buyNft",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "listIndex",
                    "type": "uint256"
                }
            ],
            "name": "CancelListForSale",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "FailedInnerCall",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_mintContract",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_price",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "listNft",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "OwnableInvalidOwner",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "OwnableUnauthorizedAccount",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                }
            ],
            "name": "SafeERC20FailedOperation",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getAllNftListedNfts",
            "outputs": [
                {
                    "components": [
                        {
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "owner",
                                    "type": "address"
                                },
                                {
                                    "internalType": "address",
                                    "name": "seller",
                                    "type": "address"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "tokenId",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "count",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "uint256",
                                    "name": "price",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "bool",
                                    "name": "listed",
                                    "type": "bool"
                                }
                            ],
                            "internalType": "struct NFTMarketplace.ListNft",
                            "name": "listedData",
                            "type": "tuple"
                        },
                        {
                            "internalType": "uint256",
                            "name": "listCount",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "uriData",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct NFTMarketplace.ListedNftNftTokenId[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "listCount",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "contractAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "nextNftListId",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "NftContract",
            "outputs": [
                {
                    "internalType": "contract IERC721",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "tokenAddress",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "userCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "userListCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "userNftListings",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "seller",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "count",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "price",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "listed",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
    
        const [nfts, setnfts] = useState([])
        const [loading, setloading] = useState(false)
    

    const getAllLandNfts = async () => {
        setloading(true)
        if (typeof window.ethereum === 'undefined') {
            console.error("MetaMask is not installed");
            return;
        }
        try {

            const web3 = new Web3(window.ethereum);
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log(accounts,'metamask acc');
            
        
            const marketContract = new web3.eth.Contract(abi, marketplaceAddress);

            if (typeof marketContract.methods.getAllNftListedNfts !== 'function') {
                throw new Error('Method getAllLandListedNfts not found in ABI');
            }
        
            const GetAllLandNfts = await marketContract.methods.getAllNftListedNfts().call();
            console.log(GetAllLandNfts,'LISTlandnfts');
            setnfts(GetAllLandNfts)
        
            
        } catch (error) {
            console.error('Error fetching NFTs:', error);
            
        }
        finally{
            setloading(false)
        }
    };
    useEffect(()=>{
        

        getAllLandNfts();
    },[])
    const handleAccountsChanged = () => {
    getAllLandNfts();
    };

    const handleChainChanged = () => {
    getAllLandNfts();
    };

    window.ethereum.on('accountsChanged', handleAccountsChanged);
    window.ethereum.on('chainChanged', handleChainChanged);
    const buyNFTs = async (listIndex, price) => {
        if (typeof window.ethereum === 'undefined') {
          console.error("MetaMask is not installed");
          return;
        }
        try {
          const web3 = new Web3(window.ethereum);
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          const account = accounts[0];
    
          const marketContract = new web3.eth.Contract(abi, marketplaceAddress);
          await marketContract.methods.buyNft(listIndex, web3.utils.toWei(price, 'ether')).send({ from: account });
    
          console.log('NFT purchased successfully');
          getAllLandNfts(); // Refresh the list after purchase
    
        } catch (error) {
          console.error('Error buying NFT:', error);
        }
      };

    return (
        <div className='text-white' style={{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",flexDirection:"column"}}>
        
            
            {loading?(

                <>
                <div className="spinner">
        <div></div>   
        <div></div>    
        <div></div>    
        <div></div>    
        <div></div>    
        <div></div>    
        <div></div>    
        <div></div>    
        <div></div>    
        <div></div>    
        </div>
                
                </>
            ):(
                <>
                <h1>Buy NFTs</h1>
                {nfts.map((item, index) => (
                    <div
                        key={item.listCount || index}
                        style={{
                            border: "3px solid rgb(255,200,16)",
                            boxShadow: "1px 1px 1px 1px solid gray",
                            padding: "3px",
                            marginBottom: "10px"
                        }}
                    >
                        <p>{item.uriData}</p>
                        <p>Price: {item[0].price} ETH</p>
                        <button onClick={()=>buyNFTs(item.listCount,item[0].price)}>Buy NFT</button>
                    </div>
                ))}
            </>
            )}
    
        </div>
    )
    }

    export default Adminform