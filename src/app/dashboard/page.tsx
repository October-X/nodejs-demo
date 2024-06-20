'use client'
import React from 'react';
import './index.css'
import Link from "next/link";
import { useRouter,redirect } from 'next/navigation'
import {Button} from "antd";
import {getData} from '../../services/dataService'


const Page = () => {
    const router = useRouter();
    console.log("dashboard render")
    getData().then(resp=>{
        console.log(resp)
    })

    // async function getData() {
    //     const res = await fetch('http://yuanjin.tech:5005/api/movie?page=1&limit=20')
    //     // The return value is *not* serialized
    //     // You can return Date, Map, Set, etc.
    //
    //     if (!res.ok) {
    //         // This will activate the closest `error.js` Error Boundary
    //         throw new Error('Failed to fetch test')
    //     }
    //     console.log(res.json)
    //     return res.json()
    // }
    //
    // getData()


    return (
        <>
            <div className={"container p-5"}>
                <div className="flex gap-2">
                    {/*<Link href="/dashboard/1">userDetail</Link>*/}
                    {/*<Link href="/dashboard">back</Link>*/}
                    <Button onClick={() => router.push('/')}>Home</Button>
                    <Button onClick={() => router.push('/dashboard/12873651267')}>userDetail</Button>
                </div>
                <div className="mt-5">
                    dashboard后台
                </div>
            </div>
        </>
    );
};

export default Page;