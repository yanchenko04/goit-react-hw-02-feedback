 import css from './FeedbackOptions.module.css'
 import PropTypes from 'prop-types';


 export default function FeedbackOptions({options, onLeaveFeedback}){
    return(
        <div className={css.options}>

        {options.map(option => {
            return (
            <button
                type="button"
                name={option}
                onClick={() => onLeaveFeedback(option)}
                className={css.options_button}
            >
                {option}
            </button>
            );
        })}
    
    </div>
   
    )
 }
 
 FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };