import request from './request'

export async function getData(page=1,limit=20){
    let resp = await request.get("/api/movie",{
        params:{
            page,
            limit
        }
    });
    return resp.data;
}