import PropTypes from 'prop-types';

export const Notification = ({ message }) => <p style={{fontWeight: 'bold'}}>{message}</p>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
