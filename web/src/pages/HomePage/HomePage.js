import { Button, Text } from '@chakra-ui/react'
import { useEthers, useContractCall, useContractFunction } from '@usedapp/core'
import { utils, Contract } from 'ethers'
import { useEffect } from 'react'
import ABI from '../../common/ABI/TOKEN'
const HomePage = () => {
  const { account, library } = useEthers()

  const tokenAddress = '0x7ae1d57b58fa6411f32948314badd83583ee0e8c'
  const contract = new Contract(tokenAddress, ABI, library.getSigner())

  const { state, send } = useContractFunction(contract, 'claimAllForOwner', {
    transactionName: 'ClaimAll',
  })

  console.log('Contract State: ', state)

  const tokenBal = useContractCall({
    abi: new utils.Interface(ABI),
    address: tokenAddress,
    method: 'balanceOf',
    args: [account],
  })

  const claimAllForOwner = useContractFunction({
    abi: new utils.Interface(ABI),
    address: tokenAddress,
    method: 'claimAllForOwner',
    args: [],
  })

  useEffect(() => {
    const getStatus = async () => {
      send()
    }

    getStatus();
  }, [])

  console.log('Token Balance', tokenBal?.toString())
  return (
    <>
      <p>
        $PAPER Balance is:{' '}
        {tokenBal ? utils.formatEther(tokenBal.toString(), 'wei') : 0}
      </p>
      <Button onClick={() => send()}>Claim All</Button>

      <Text>
        {state.status == 'Exception'
          ? 'No $PAPER availible to claim for this Address'
          : state.status}{' '}
      </Text>
    </>
  )
}

export default HomePage
