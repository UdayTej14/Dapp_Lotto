import bitcoin from '../assets/bitcoin.png'
import background from '../assets/background.jpg'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { connectWallet, truncate } from '@/services/blockchain'
import Link from 'next/link'

const Header = () => {
  const { wallet } = useSelector((state) => state.globalState)

  return (
    <div
      className="px-5 md:px-40"
      style={{ background: `url('https://wallpapers.com/images/high/lottery-winner-balls-wrojm7fegt531xht.webp') fixed no-repeat top/cover` }}
    >
      <div className="flex items-center justify-between text-white py-5">
        <div>
          <h1 className="text-xl font-bold">DappLottery</h1>
        </div>

        <div className="hidden text-3xl lg:flex items-center space-x-3 font-extrabold text-emerald-700">
  <h1 className="relative">
    L&ensp;O&ensp;T&ensp;T&ensp;E&ensp;R&ensp;Y
  </h1>
</div>


        {wallet ? (
          <button
            className="flex flex-nowrap border py-2 px-4 rounded-full bg-amber-500
          hover:bg-rose-600 cursor-pointer font-semibold text-sm"
          >
            {truncate(wallet, 4, 4, 11)}
          </button>
        ) : (
          <button
            onClick={connectWallet}
            className="flex flex-nowrap border py-2 px-4 rounded-full bg-amber-500
          hover:bg-rose-600 cursor-pointer font-semibold text-sm"
          >
            Connect Wallet
          </button>
        )}
      </div>

      <div className="flex items-center justify-between pb-5">
        <div>
          <div className="text-white py-5">
            <h2 className="text-4xl font-bold py-4 ">
            Decentralized Luck, <br />Unstoppable Fun!
            </h2>

            <p className="text-xl">
            Participate in fair and transparent lottery draws <br />
            powered by blockchain technology.
            </p>
          </div>
        </div>
        <div className="py-5 hidden sm:block">
          <Image src={bitcoin} alt="network" className="rounded-lg w-80" />
        </div>
      </div>

      <div className="pb-10">
        <Link
          href={'/create'}
          className="bg-amber-500 hover:bg-rose-600 text-white rounded-md
        cursor-pointer font-semibold py-3 px-5"
        >
          Create Jackpot
        </Link>
      </div>
    </div>
  )
}

export default Header
