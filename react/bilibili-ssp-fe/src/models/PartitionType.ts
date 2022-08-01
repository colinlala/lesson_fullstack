/**
 * 分类
 */
 interface PartitionType {
    id: number;
    name: string;
    children?: PartitionType[]
}


//  class PartitionType {
//     constructor(public id: number, public name: string, 
//         public children: PartitionType[] = []) {}
// }
// function createPartitionTypes(data: any[]): PartitionType[] {
//     return data.map((item) => new PartitionType(item.tid, item.typename));
// }

// export {
//     PartitionType,
//     createPartitionTypes
// };


export type {
    PartitionType,
};

