/*
 * @FilePath: /Users/i104/bambam/src/components/customTextArea.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */

import React, { useEffect, useCallback, useState, useRef, useMemo } from 'react';

// Components
import { Button, Modal } from 'antd';

// Vendors
import classNames from 'classnames';
import { registerEvent, removeEvent } from 'utils/CustomEvent'

// Styles
import './style.less'

const isValidEmail = (value) => {
    return !!value && value.length > 0 && value.length <= 128
        && /^([a-zA-Z0-9]+[\_\|\.\-]+)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[\_\|\.\-]+)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
            .test(trim(value));
}

const CustomTextArea = () => {

    const addRef = useRef(null)
    const memorized = useRef(null)

    const [valid, setValid] = useState([])
    const [inValid, setInValid] = useState([])
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(1)

    const btnDisabled = useMemo(() => valid.length === 0 || inValid.length > 0, [valid, inValid])

    const handleOpen = useCallback(() => {
        setOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        if (step === 1) {
            memorized.current = null
            setOpen(false);
        } else {
            setStep(1);
            setTimeout(() => batchAddTags(addRef.current), 0)
        }
    }, [memorized.current, batchAddTags, addRef.current, step]);

    const handleOk = useCallback(() => {
        if (step === 1) {
            memorized.current = addRef.current.innerText
            setStep(2)
        } else {
            console.log(valid)
        }
    }, [step, addRef.current, memorized.current, valid]);

    // 展示光标
    const showInlast = useCallback((textArea) => {
        if (window.getSelection && textArea.innerText.trim() !== '') {
            textArea.focus(); //解决ff不获取焦点无法定位问题
            const sel = window.getSelection();//创建range
            sel.selectAllChildren(textArea);//range 选择obj下所有子内容
            sel.collapseToEnd();//光标移至最后
        }
    }, [])

    // 删除tag
    const deleteTag = useCallback(child => {
        memorized.current = null
        const [tempValid, tempInValid] = convertToEmails(addRef.current)
        const [cls, email] = child.id.split('~'),
            deleteType = cls.includes('inValid'),
            target = deleteType ? [...tempInValid] : [...tempValid],
            idx = (deleteType ? tempInValid : tempValid).findIndex(item => item === email),
            matchBlank = document.getElementById(`${cls}-blank~${email}`);  // 找到批量添加时创建的对应的blank
        target.splice(idx, 1)
        deleteType ? setInValid(target) : setValid(target)
        addRef.current.removeChild(matchBlank)
        addRef.current.removeChild(child)
        // 当有效输入为空时移除tag容器
        if ((deleteType && target.length === tempValid.length && tempValid.length === 0) || (!deleteType && target.length === tempInValid.length && tempInValid.length === 0) && addRef.current) {
            const wrapperSpans = addRef.current.getElementsByTagName('span')
            Array.from(wrapperSpans).forEach(item => {
                addRef.current.removeChild(item)
            })
        }
        convertToEmails(addRef.current)
        showInlast(addRef.current)
    }, [addRef.current, memorized.current, showInlast, convertToEmails])

    // 创建email tag
    const addTag = useCallback((parent, email = '', cls = '') => {
        const span = document.createElement('span')
        span.contentEditable = false
        span.className = cls
        span.title = email
        span.id = `${cls}~${email}`
        const label = document.createElement('label')
        label.innerHTML = cls.includes('blank') ? ' ' : email
        span.appendChild(label)
        if (!cls.includes('blank') && email !== ' ') {
            const icon = document.createElement('i')
            icon.contentEditable = false
            icon.className = 'dsicon dsicon-close-circle-sd close-icon' // miss the icon
            registerEvent(icon, 'click', e => deleteTag(span))
            span.appendChild(icon)
        }
        parent.appendChild(span)
    }, [deleteTag])

    // 实时更新并获取合法/非法email
    const convertToEmails = useCallback(textArea => {
        const content = memorized.current || textArea.innerText || ''
        const emailList = [...new Set([...content?.replaceAll('\n', ' ')?.replaceAll(/\,/g, ' ')?.replaceAll(/\，/g, ' ')?.trim()?.split(/\s+/)])]
        const tempValid = [],
            tempInValid = []
        emailList.forEach(item => {
            const email = item?.trim();
            email && (isValidEmail(email) ? tempValid : tempInValid).push(email)
        })
        setValid(tempValid)
        setInValid(tempInValid)
        return [tempValid, tempInValid]
    }, [memorized.current])

    // 批量添加标
    const batchAddTags = useCallback((textArea, code) => {
        const [tempValid, tempInValid] = convertToEmails(textArea)
        textArea.innerText = null
        if (tempValid.filter(item => item).length || tempInValid.filter(item => item).length) {
            tempValid?.forEach(item => {
                if (item.trim()) {
                    addTag(textArea, item, 'bulk-add-valid')
                    addTag(textArea, item, 'bulk-add-valid-blank')
                }
            })
            tempInValid?.forEach(item => {
                if (item.trim()) {
                    addTag(textArea, item, 'bulk-add-inValid')
                    addTag(textArea, item, 'bulk-add-inValid-blank')
                }
            })
        }
        code && showInlast(addRef.current)
    }, [convertToEmails, addTag, showInlast])

    useEffect(() => {
        if (addRef.current) {
            registerEvent(addRef.current, 'blur', e => {
                memorized.current = null
                batchAddTags(addRef.current)
            })
            registerEvent(addRef.current, 'focus', e => showInlast(addRef.current))
            registerEvent(addRef.current, 'keydown', e => {
                if (e.keyCode === 188) {
                    memorized.current = null
                    // 解决输入,后光标无法定位在最后且,无法清空的情况
                    setTimeout(() => batchAddTags(addRef.current, e.keyCode), 0)
                }
            })
        }
    }, [addRef.current, batchAddTags, showInlast, memorized])

    useEffect(() => {
        return () => {
            if (addRef.current) {
                removeEvent(addRef.current, 'blur')
                removeEvent(addRef.current, 'focus')
                removeEvent(addRef.current, 'keydown')
            }
        }
    }, [])

    useEffect(() => {
        setTimeout(() => addRef.current && open && batchAddTags(addRef.current), 0)
    }, [open, batchAddTags, addRef.current])

    return (
        <>
            <Button type='primary' onClick={handleOpen} style={{ marginRight: 8 }}>Test Function</Button>
            <Modal
                width={416}
                title='Test Function'
                okButtonProps={{ size: 'middle', disabled: btnDisabled }}
                okText={step === 1 ? 'Send Invitations' : 'Confirm'}
                cancelText='Go Back'
                cancelButtonProps={{ type: 'text', size: 'middle', style: { display: step === 1 ? 'none' : 'inline-block' } }}
                bodyStyle={{ padding: '24px' }}
                open={open}
                onOk={handleOk}
                onCancel={handleClose}>
                {
                    step === 1 && (
                        <>
                            <div className='bulk-add'>
                                <div className='bulk-add-label'>Enter email address below</div>
                                <div
                                    ref={addRef}
                                    className={classNames('bulk-add-el', {
                                        'bulk-add-el-error': inValid.length > 0
                                    })}
                                    suppressContentEditableWarning
                                    contentEditable
                                    data-placeholder='You can copy and paste a list of emails...' />
                            </div>
                            {inValid.length > 0 && <div className='bulk-add-error-info'>Please remove invalid emails</div>}
                        </>
                    )
                }
                {
                    step === 2 && (
                        <>
                            <div className='flex-box' style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                                {valid.map(item => <div className='bulk-add-valid' key={item} style={{ marginBottom: 8 }}>{item}</div>)}
                            </div>
                        </>
                    )
                }
            </Modal>
        </>
    );
};

export default CustomTextArea
