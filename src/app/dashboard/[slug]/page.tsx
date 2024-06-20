'use client'

import React from 'react';
import {Button} from "antd";
import { useRouter } from 'next/navigation'

const DashboardDetail = ({ params }: { params: { slug: string } }) => {
    // const userId = params.slug
    const router = useRouter();
    return (
        <div className={"bg-white min-h-screen p-4"}>
            <div className="flex gap-2">
                <Button onClick={() => router.push('/dashboard')}>Back</Button>
            </div>
            <div className={"mt-2"}>
                <p>信息详情页</p>
                {/*<p>用户id为{userId}</p>*/}
            </div>
        </div>
    );
};

export default DashboardDetail;