import firstDisplayImage from './../../Assets/Images/gdave4.jpg';

 function Body () {
    return ( 
    <>
    <div>  
        <div className="intro" style={{backgroundImage : require(firstDisplayImage)}}>
            <div className="spacer"></div>
            <h1 className="heading">Welcome to GDave</h1>
            <p>The Body components go in here</p>
        </div>
    </div>
    </>
    );
}

export default Body;