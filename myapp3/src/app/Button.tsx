
'use client'

export default function Button(props: any){

    // const buttonName : string = 'Hello';
    const buttonStyle = {
        backgroundColor : props.color,
        color : 'white',
        width : 'fitContent',
        padding : '6px',
        borderRadius: '5px',
        // margin: '1px',
       
        
    }
    const clickHandler = () =>{
        alert('you just clicked the button!')
    }

  return(
    <button onClick={clickHandler} style={buttonStyle}>{props.name}</button>
  )
}