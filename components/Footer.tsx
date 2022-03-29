import { Twitter, Github, Linkedin, Devdotto, Ethereum } from '@icons-pack/react-simple-icons';
import Link from 'next/link';
const Footer = () => {
    return (
        <div className="flex justify-end my-2 rounded-lg bg-white-400">
            <Link href="https://dev.to/josevelez">
                <a className='text-slate-600 hover:text-slate-400 pr-3' target="_blank" rel='noreferrer'>
                    <Devdotto size={24} />
                </a>
            </Link>
            <Link href="https://etherscan.io/address/0x564b1ac3ac8407db3377bec75ad7062164c82db0">
                <a className='text-slate-600 hover:text-slate-400 pr-3' target="_blank" rel='noreferrer'>
                    <Ethereum size={24} />
                </a>
            </Link>
            <Link href="https://twitter.com/JoseLionelVelez">
                <a className='text-slate-600 hover:text-slate-400 pr-3' target="_blank" rel='noreferrer'>
                    <Twitter size={24} />
                </a>
            </Link>
            <Link href="https://github.com/joselvelez">
                <a className='text-slate-600 hover:text-slate-400 pr-3' target="_blank" rel='noreferrer'>
                    <Github size={24} />
                </a>
            </Link>
            <Link href="https://www.linkedin.com/in/joselvelez/">
                <a className='text-slate-600 hover:text-slate-400 pr-3' target="_blank" rel='noreferrer'>
                    <Linkedin size={24} />
                </a>
            </Link>
        </div>
    )
}

export default Footer;