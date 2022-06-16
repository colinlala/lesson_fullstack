/*
 * @Date         : 2022-06-16 11:29:16
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-16 13:48:28
 * @description  : 
 */
import React, { useState, useEffect } from "react";
import './modal.css'

/**
 * @description: 
 * @param {visible boolean} props 控制顯示
 * @return {*}
 */
const Modal = (props) => {
    const [visible, setVisible] = useState(false)
    const { visible: show, children, title } = props;
    const { onClose,onConfirm } = props;

    // 
    useEffect(() => {
        // console.log('111111111111111111')
        setVisible(show)
    }, [show])

    const closeModal=()=>{
        console.log('關閉')
        setVisible(false)
        onClose && onClose()
    }

    const confirm =()=>{
        console.log('你確定？')
        setVisible(false)
        onConfirm && onConfirm()
    }

    const maskClick=()=>{
        setVisible(false)
        onClose && onClose()
    }

    return (
        visible && <div className="modal-wrapper">
            <div className="modal">
                <div className="modal-title">{title}</div>
                <div className="modal-content">{children}</div>
                <div className="modal-operator">
                    <button 
                        onClick={closeModal}
                        className="modal-operator-close"
                    >取消</button>
                    <button 
                        onClick={confirm}
                        className="modal-operator-confirm"
                    >确定</button>
                </div>
            </div>
            <div className="mask" onClick={maskClick}></div>
        </div>
    )
}

export default Modal;