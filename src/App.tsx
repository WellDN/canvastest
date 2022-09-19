import { useEffect, useRef, useState } from "react";

class CanvasRenderer {

constructor(
    private canvas: HTMLCanvasElement,
    private context: CanvasRenderingContext2D,
    ) {

    }
    
}

export function App() {
    
    const canvasRef = useRef<HTMLCanvasElement>(null); //reference object: it will hold reference to the canvas element
    const contextRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas == null) throw new Error("could not get canvas") //
    canvas.width = window.innerWidth * 2;
    canvas.width = window.innerWidth * 2;
    canvas.width = window.innerWidth * 2;
    canvas.style.height = `${window.innerWidth}px`;     //pixel density
    canvas.style.height = `${window.innerHeight}px`;    //the canvas width make it supports high density widths ex: Macbooks etc
            
    const context = canvas.getContext("2d");
    if (context == null) throw new Error("Could not get context");
    context.scale(2,2)
    context.lineCap = "round"
    context.strokeStyle = "black"
    context.lineWidth = 5
    contextRef.current = context;
    
    }, []) //[] make it trigger only once

const startDrawing = ({nativeEvent}) => {
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true)
}

const finishDrawing = () => {
    contextRef.current.closePath()
    setIsDrawing(false)
}

const draw = ({nativeEvent}) => {
    if(!isDrawing) {
        return 
    }
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke()
    }


   return(
       <canvas 
       onMouseDown={startDrawing}
       onMouseUp={finishDrawing}
       onMouseMove={draw}
       ref={canvasRef}/>
       )
    }
    
    export default App