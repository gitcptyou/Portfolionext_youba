import Link from "next/link";
const Header = () => {
    return (
        <div className="divp" style={{backgroundColor:"aqua", height:"40px"}}>
             <ul style={{display:'flex', justifyContent:'space-around'}}>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
            <li><Link href='/project'>Projets</Link></li>
            <li><Link href='/Knowldges'>Knowldges</Link></li>
            <li><Link href='/temoinage'>temoinage</Link></li>
        </ul>
        </div>
    );
}

export default Header;