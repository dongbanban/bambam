/*
 * @FilePath: /click/Users/i104/vite3/src/views/memoTest.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import React, { useState, memo } from 'react'

const Child1 = props => {
  console.log('我是子组件1', props)
  return <div>我是子组件1</div>
}

const isEqual = (prevProps, nextProps) => {
  return prevProps.count !== nextProps.count
}
const Child2 = props => {
  console.log('我是子组件2', props)
  return <div>我是子组件2</div>
}

const ChildMemo = memo(Child2, isEqual)

function MemoTest() {
  console.log(111)
  const [count, setCount] = useState(0)
  return (
    <>
      <button type="button" onClick={() => setCount(c => c + 1)}>
        {count}
      </button>
      <Child1 count={count} />
      <ChildMemo count={count} />
    </>
  )
}

export default MemoTest
