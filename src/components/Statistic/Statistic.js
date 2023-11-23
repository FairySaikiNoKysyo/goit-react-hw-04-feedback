export const Statistic = ({good,neutral,bad,total,positivePercentage}) =>{
    return(
         <div>
         
          <p>good:{good}</p>
          <p>neutral:{neutral}</p>
          <p>bad:{bad}</p>
          <p>Total:{total}</p>
          <p>Positive Feedback:{positivePercentage}%</p>
        </div>
    )
}