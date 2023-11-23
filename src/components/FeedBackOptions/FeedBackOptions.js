export const FeedBackOptions = ({options,onLeaveFeedback}) =>{
   
    return(
        
    <div>
      {options.map(option =>
         <button key={option} onClick={()=>onLeaveFeedback(option)} type="button" name={option}>
         {option}
           </button>
       )}
   
    </div>
  )
}