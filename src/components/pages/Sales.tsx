import React, { useEffect } from 'react'

function Sales() {

        useEffect(()=>{
        document.title="Sales";
    }, [])
  return (
    <div>Sales</div>
  )
}

export default Sales