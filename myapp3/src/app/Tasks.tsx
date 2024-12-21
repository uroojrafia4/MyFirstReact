export default function Tasks(props: any) {
    // const ulStyle = {
    //   textAlign: 'left',
    //   listStyleType: 'none', // Example: Removes default bullets
    //   padding: '10px',
    //   margin: '0',
    // };
  
    const liStyle = {
      padding: '0px',
      borderBottom: '1px solid #ccc',
    };
  
    return (
      <ul>
        <li style={liStyle}>{props.text}</li>
      </ul>
    );
  }
  