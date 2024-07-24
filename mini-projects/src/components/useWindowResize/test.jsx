import useWindowResize from "."


export default function UseWindowResizeTest(){
    const windowSize = useWindowResize()
    console.log(windowSize)
    const {width,height} =windowSize
    
    return <div>
        <h1>use window resize hook</h1>

        <p>
            width is {width}
        </p>
        <p>
            height is {height}
        </p>
    </div>
}