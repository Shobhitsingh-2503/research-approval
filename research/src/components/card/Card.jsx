import { ethers } from 'ethers'
import React from 'react'
import '../card/Card.css'
import { abi, deployedAddress } from '../../const'
import { FaFileDownload } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'
require('dotenv').config()
// Use the JWT key

const Card = ({ topic, auth, cid, index, approval, setList }) => {
  async function delPaper() {
    const res = await fetch(`https://api.pinata.cloud/pinning/unpin/${cid}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${process.env.JWT}`,
      },
    })
    console.log(res)
    if (window.ethereum) {
      const provider = new ethers.JsonRpcProvider(process.env.PROVIDER_API_KEY)
      const signer = await provider.getSigner()
      const contract = new ethers.Contract(deployedAddress, abi, signer)
      contract
        .deletePaper(index)
        .then(async () => {
          await contract.getPapers().then((res) => {
            setList(res)
          })
        })
        .catch((err) => {
          alert(err.reason)
        })
    } else {
      alert(`install a wallet to interact`)
    }
  }
  async function approve() {
    if (window.ethereum) {
      const provider = new ethers.JsonRpcProvider(process.env.PROVIDER_API_KEY)
      const signer = await provider.getSigner()
      const contract = new ethers.Contract(deployedAddress, abi, signer)
      await contract
        .vote(index)
        .then(async () => {
          alert('Approved !')
          await contract.getPapers().then((res) => {
            setList(res)
          })
        })
        .catch((err) => {
          err.reason ? alert(err.reason) : alert(`Already Approved`)
          console.error(err)
        })
    } else {
      alert(`connect to a wallet first`)
    }
  }
  return (
    <div id="card">
      <span id="topic">{topic}</span>
      <span>
        <i>by</i>
      </span>
      <span>{auth}</span>
      <span id="download">
        <a href={`${process.env.DOMAIN}/ipfs/${cid}`} id="link" target="_blank">
          <FaFileDownload />
        </a>
        <p>DOWNLOAD</p>
      </span>
      <button onClick={approve}>Approve</button>
      <span>
        <p>Approved by:-</p>
        {approval}
      </span>
      <span id="del" onClick={delPaper}>
        <MdDeleteForever />
      </span>
    </div>
  )
}

export default Card
