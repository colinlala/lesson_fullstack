/*
 * @Date         : 2022-06-16 11:17:20
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-16 13:50:14
 * @description  : 
 */
import { useState } from 'react'
import Modal from './components/common/modal/modal'

function App() {
  const [visible, setVisible] = useState(false)
  const onModalClose = () => {
    console.log('modal closed')
    setVisible(false)
  }
  const onModalConfirm = () => {
    console.log('modal confirm')
    setVisible(false)
  }

  return (
    <div className="App">
      <Modal
        visible={visible}
        title="登錄"
        onClose={onModalClose}
        onConfirm={onModalConfirm}
      >
        <div>
          <h3>這裏是自定義内容區別</h3>
          <p>!!!!!!!!!!!!!!!!!!</p>
        </div>
      </Modal>
      <button onClick={() => setVisible(true)}>click here</button>
    </div>
  )
}

export default App
