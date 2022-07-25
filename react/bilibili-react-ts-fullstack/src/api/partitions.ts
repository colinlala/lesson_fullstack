import { PartitionType } from '@/models'
// 模块化 接口多
export const getParitionsRequest = (): Promise<PartitionType[]> => {
    const p = new Promise<PartitionType[]>((resolve, reject) => {
        fetch('http://localhost:3300/partitions')
            .then(data => data.json())
            .then(data => {
                console.log(data, '2233344');
                resolve(data);
            })
    })
    return p
} 