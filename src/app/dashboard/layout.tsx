export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-row overflow-hidden">
            <div className="w-full flex-none w-64 bg-amber-50 items-center">
               <div className="text-center">
                   sidbar
               </div>
            </div>
            <div className="flex-grow p-6">{children}</div>
        </div>
    );  
}