import Link from 'next/link';

const Nav = () => {
    return (
        <div>
            <p>
                <Link href="/"><a>Home</a></Link>
            </p>
            <p>
                <Link href="/sell"><a>Sell</a></Link>
            </p>
        </div>
    )
}

export default Nav
