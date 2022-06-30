import React from 'react'
import { Button, ErrorBlock } from 'antd-mobile'

export default function Addresslist() { 
  return (
    <ErrorBlock
        image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
        style={{
          '--image-height': '150px',
        }}
        description={
            <span>开启通讯录，快速找到好友</span>
        }
      >
        <Button color='primary'>同意请求</Button>
      </ErrorBlock>
  )
}
