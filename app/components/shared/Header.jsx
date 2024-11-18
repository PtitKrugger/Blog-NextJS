import Link from 'next/link'

export default function Header() {
    return (
        <div className="d-flex flex-row align-items-center py-2 ps-2 gap-3 bg-light">
            <h4 className="mb-0">Mon blog</h4>
            <Link href="/">Accueil</Link>
            <span>Contact</span>                
        </div>
    );
}