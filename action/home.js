const API = process.env.REACT_APP_API;

export const latestMovie = async() =>{
    const res = await fetch(`${API}/carousal`);
    const data = await res.json();
    if (res.status === 201) {
        return data;
    }else{
        let data =  [];
    }
}
export const SliderMovie = async (req) =>{
    console.log(req)
    const res = await fetch(`${API}/${req}/1/7/-1`)
    const data = await res.json();
    if (res.status === 201) {
        return data;
    }else{
        let data =  [];
    }
}
