import { Video } from '@/models/index'


export const getVideosRequest = (): Promise<Video[]> => {
    const p = new Promise<Video[]>((resolve, reject) => {
        // setTimeout(() => {
        //     resolve(Video)
        // },1000)

        fetch('http://localhost:3300/getVideos')
            .then(data => data.json())
            .then(data => {
                console.log(data);
                resolve(data)
            })
    })
    return p
}

export const getHotwordRequest = (): Promise<any[]> => {
    const p = new Promise<any[]>((resolve, reject) => {
        fetch('http://localhost:3300/search/hotword')
            .then(data => data.json())
            .then(data => {
                console.log(data);
                resolve(data);
            })
    })
    return p
} 