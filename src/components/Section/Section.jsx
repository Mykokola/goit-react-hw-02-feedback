import PropTypes from 'prop-types';
export const Section = ({title,child}) => {
    return (
        <> 
        <h3>{title}</h3>
        {child}
        </>

    )
}
Section.propTypes = {
    title: PropTypes.string.isRequired,
    child: PropTypes.node,
  };