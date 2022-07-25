class PartitionType {
    // public children: PartitionType[] = []   递归 + 默认值
    constructor(public id: number, public name: string, public children: PartitionType[] = []) {

    }
}

// data => 数据  转成 菜单下实例
function createPatitionTypes(data: any[]): PartitionType[] {
    return data.map(item => new PartitionType(item.tid, item.typename))
}

export {
    PartitionType,
    createPatitionTypes
}