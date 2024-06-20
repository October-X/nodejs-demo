export async function GET() {
    return new Response(JSON.stringify(
        {
            data:{
                a:1,
                b:2
            },
            message: 'This is a GET request'
        }
        ),
        {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
