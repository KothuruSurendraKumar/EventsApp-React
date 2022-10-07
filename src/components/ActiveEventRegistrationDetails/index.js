// Write your code here
import './index.css'

const apiStausCalls = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}
const ActiveEventRegistrationDetails = props => {
  const {getActiveEventStatus} = props

  const renderNoActiveEvents = () => (
    <p className="no-active">
      Click on an event, to view its registration details
    </p>
  )

  const renderYetToRegister = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-image"
      />
      <p className="register-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-here-button">
        Register Here
      </button>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="registered-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderClosedRegisterView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderViewContainer = () => {
    switch (getActiveEventStatus) {
      case apiStausCalls.yetToRegister:
        return renderYetToRegister()
      case apiStausCalls.registered:
        return renderRegisteredView()
      case apiStausCalls.registrationClosed:
        return renderClosedRegisterView()
      default:
        return renderNoActiveEvents()
    }
  }

  return (
    <div className="registration-status-container">{renderViewContainer()}</div>
  )
}
export default ActiveEventRegistrationDetails
