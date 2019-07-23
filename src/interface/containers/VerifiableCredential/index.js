/* --- Global Dependencies --- */
import PropTypes from 'prop-types'
import { compose, lifecycle, withStateHandlers } from "recompose";

/* --- Local Dependencies --- */

/* --- Module Dependencies --- */
import Component from "./component";

/* ----------------------------  
          Container 
---------------------------- */
/* -- Lifecycle -- */
const QueryLifecycle = lifecycle(
{
  componentDidMount()
  {

  },
  componentDidUpdate(prevProps)
  {

  }
});

/* -- State Handler -- */
const StateHandler = withStateHandlers(
  () => ({
    state: undefined,
  }),
  {
    setState: () => (value) => ({
      state: value,
    }),
  }
)

/* --- Export --- */
const ContainerComponent = compose(
  StateHandler,
  QueryLifecycle,
)(Component);

ContainerComponent.propTypes = {
  decoded: PropTypes.object,
  description: PropTypes.string,
  encoded: PropTypes.string,
  issuer: PropTypes.string,
  registry: PropTypes.string,
  title: PropTypes.string,
}


export default ContainerComponent