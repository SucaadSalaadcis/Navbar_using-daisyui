import React from 'react'

function Diff() {
  return (
    <div className="diff aspect-[40/9] mt-[200px]">
    <div className="diff-item-1">
      <div className="bg-red-400 text-primary-content text-9xl font-black grid place-content-center">Suad</div>
    </div>
    <div className="diff-item-2">
      <div className="bg-base-200 text-9xl font-black grid place-content-center">Suad</div>
    </div>
    <div className="diff-resizer"></div>
  </div>
  )
}

export default Diff