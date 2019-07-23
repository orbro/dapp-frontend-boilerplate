/* --- Global Dependencies --- */
import React from 'react'
import PropTypes from 'prop-types'

/* --- Local Dependencies --- */
import logo from './logo.png'
import './style.css'

/* --- React Component --- */
class VerifiableCredential extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  
  /* Will Update */
  componentWillUpdate()
  {

  }

  /* Did Update */
  componentDidUpdate()
  {

  }

  /* Will Mount */
  componentWillUnmount()
  {

  }


  render(){
    return(
      <div className='verifiable-credential'>
        <div className='area--issuer'>
          <img className='issuer-avatar' src={logo} alt='verifiable credential issuer icon' />
          <h4 className='issuer-name'>{this.props.issuer}</h4>
          <span className='issuer-address'>{this.props.issuerAddress}</span>
          
          <a className='issuer-profile' href={this.props.issuerProfile}>View Issuer Profile</a>

          <h4 className='registry-address'>trustanchors.eth</h4>
          <span className='registry-label'>registry</span>

          <button className='button--save-claim'>Save Claim</button>
          <button className='button--verify-credential'>Verify Credential</button>
        </div>
        <div className='area--subject'>
          <div className='claim--header'>
            <div className='claim--header--left'>
              <h4 className='credential-title'>Claim</h4>
              <span className='claim--expand' href="#" >View Full Claim</span>
            </div>
            <div className='claim--header--right'>
              <h5 className='subject--name'>Kames Cox-Geraghty</h5>
              <span className='subject--email'>kames@consensys.net</span>
            </div>
          </div>
          <div className='claim--body'>
            {
              this.props.credentialTitle && <h3 className='claim-title'>{this.props.credentialTitle}</h3>
            }
            {/* <ClaimValue label='name' value='KamesCG'/> */}
            {Object.keys(this.props.decoded).map( claim => <ClaimValue label={claim} value={this.props.decoded[claim]} />)}
          </div>
          <div className='claim--footer'>
            <span className='subject-address'>0xfA67ddE98346d6033f3Da0b157b70fe8434a48cE</span>
            <span className='subject-label'>subject</span>
          </div>

        </div>
      </div>
    )
  }
}

VerifiableCredential.propTypes = {
  decoded: PropTypes.object,
  description: PropTypes.string,
  encoded: PropTypes.string,
  issuerAddress: PropTypes.string,
  issuerName: PropTypes.string,
  registryAddress: PropTypes.string,
  subjectAddress: PropTypes.string,
}

const ClaimValue = ({ label, value }) => <p className='claim' ><span className='claim-label'>{label}:</span> <span className='claim-value'>{value}</span></p>

export default VerifiableCredential