import { Twitter, Github, Linkedin } from '@icons-pack/react-simple-icons';
import Link from 'next/link';
const Footer = () => {
    return (
        <div className="flex justify-end my-2 rounded-lg bg-white-400">
            <Link href="https://twitter.com/JoseLionelVelez">
                <a className='text-slate-600 hover:text-slate-400 pr-3'>
                    <Twitter size={24} />
                </a>
            </Link>
            <Link href="https://github.com/joselvelez">
                <a className='text-slate-600 hover:text-slate-400 pr-3'>
                    <Github size={24} />
                </a>
            </Link>
            <Link href="https://www.linkedin.com/in/joselvelez/">
                <a className='text-slate-600 hover:text-slate-400 pr-3'>
                    <Linkedin size={24} />
                </a>
            </Link>
        </div>
    )
}

export default Footer;