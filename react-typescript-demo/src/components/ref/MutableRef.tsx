import { useEffect, useRef, useState } from "react"

export const MutableRef = () => {
    const [timer, setTimer] = useState(0)// Khởi tạo state 'timer' với giá trị ban đầu là 0
    const intervalRef = useRef<number | null>(null) // Khởi tạo ref để lưu trữ ID của interval

    const stopTimer = () => {
        if(intervalRef.current) // Kiểm tra nếu intervalRef.current không null
        window.clearInterval(intervalRef.current)  // Xóa interval
    }

    useEffect(() => {
        intervalRef.current = window.setInterval(()=>{ // Thiết lập interval, lưu ID vào intervalRef.current
            setTimer((timer) => timer + 1) // Cập nhật state 'timer' mỗi giây
        },1000)
        return () => {
            stopTimer() // Dọn dẹp interval khi component unmount
        }
    },[])
    return (
        <>
            HookTimer - {timer} - 
            <button onClick={() => {stopTimer()}}>Stop Timer</button>
        </>
    )
}