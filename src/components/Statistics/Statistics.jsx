import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({good, neutral, bad, total, positivePercentage}) {

    return(
        <div className={css.statistics}>
             <h3 className={css.statistics_title}>Statistics</h3>
        <ul className={css.statistics_list}>
            <li className={css.statistics_item}>Good: 
                <span className={css.statistics_value}>{good}</span>
            </li>
            <li className={css.statistics_item}>Neutral: 
                <span className={css.statistics_value}>{neutral}</span>
            </li>
            <li className={css.statistics_item}>Bad:
                <span className={css.statistics_value}>{bad}</span>
            </li>
            <li className={css.statistics_item}>Total:
                <span className={css.statistics_value}>{total}</span>
            </li>
            <li className={css.statistics_item}>Positive Feedback:
                <span className={css.statistics_value}>{positivePercentage}%</span>
            </li>
        </ul>

    </div>  
       
    )
}
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }
