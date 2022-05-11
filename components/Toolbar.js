import Link from 'next/link'

const Toolbar = () => {
    return (
        <>
            <aside>
            <Link href={'/'}>Home</Link><br></br>
            <Link href={'/monsters'}>Monsters</Link><br></br>
            <Link href={'/equipment'}>Equipment</Link><br></br>
            <Link href={'/spells'}>Spells</Link>
            <hr></hr>
            <Link href={'/spells'}>Dice Roller</Link>
            <div style={{"minHeight": "10ch"}}></div>
            <Link href={'/spells'}>Loot Gen</Link>
            <div style={{"minHeight": "10ch"}}></div>
            <Link href={'/spells'}>Encounter Log</Link>
        </aside>
        </>
    );
}

export default Toolbar