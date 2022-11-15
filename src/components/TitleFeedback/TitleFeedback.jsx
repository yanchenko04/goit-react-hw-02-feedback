import css from './TitleFeedback.module.css'
import PropTypes from 'prop-types';

export default function TitleFeedback({title}){
    return(
        <h2 className={css.title}>{title}</h2>
    )

}
TitleFeedback.propTypes = {
    title: PropTypes.string.isRequired,
  };