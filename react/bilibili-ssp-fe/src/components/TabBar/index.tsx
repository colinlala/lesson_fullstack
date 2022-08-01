import React from 'react'
import { PartitionType } from '@/models'

interface TabBarProps {
    data: PartitionType[];
    type: string;
    onClick: () => void
}

const TabBar :React.FC<TabBarProps> = (props) => {
  return (
    <div>
      tabbar
    </div>
  )
}

export default TabBar
