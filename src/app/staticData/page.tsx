export default function GetStaticProps(props: { data: any; }) {
    const {data}  = props
    return (
        <div>
            <header>getStaticProps</header>
            <main>{data}</main>
        </div>
    );
}

// @ts-ignore
export async function getStaticProps(){
    const data = 'Hello World';
    console.log('call getStaticProps');

    return {
        props: {
            data
        }
    };
};
