'use client'

import '@/app/ui/home.css'
import { usePathname } from 'next/navigation';

export default function GetStaticProps(props: { data: any; }) {
    const pathName = usePathname();
    const CurrentPage = pathName?.replace('/','')
    return (
        <div>
            <header>getStaticProps</header>
            <p>{CurrentPage}</p>
            <div className={"box"}>样式引入示例</div>
        </div>
    );
}

