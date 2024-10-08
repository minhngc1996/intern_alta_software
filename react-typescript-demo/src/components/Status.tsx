import React from 'react'
type StatusProps = {
    status: 'loading' | 'success' | 'error' //Thay vì gắn kiểu string thì có thể gắn nó là 1 string cụ thể
}
const Status = (props: StatusProps) => {
    let message
    if(props.status === 'loading'){
        message = 'Loading'   
    }else if(props.status === 'success'){
        message = 'Data fetched successfully!'
    }else if(props.status === 'error'){
        message = 'Error fetching data'
    }
  return (
    <div>
      Status - {message}
    </div>
  )
}

export default Status
