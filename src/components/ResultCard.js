function ResultCard (props){
    return(   
        <div className='summary-card container-card' style={{backgroundColor: props.background}} >
                <div className='left'>
                    {props.icon}
                    <span className='summary-card-text' style={{color: props.color}}>{props.title}</span>
                </div> 
                <div className='right'>
                   <span className='b-o-mark'>{props.obtain} <span className='b-t-mark'>/ 100</span></span>
                </div>
        </div>
    );  
}
export default function allResultCards(val){
    
    return(
    
      <ResultCard 
        title = {val.title}
        icon = {val.icon}
        background = {val.background}
        obtain= {val.obtain}
        color = {val.color}
      />
    );
  }