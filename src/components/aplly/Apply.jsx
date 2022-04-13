import React, { Component } from 'react'
import './Apply.css'

class Apply extends Component {
  render() {
    const {contents} = this.props;
    return (
      <div className='apply-main'>
        <div className="apply">
          <div className="apply-title">
              <h1>{contents.applyTitle}</h1>
          </div>
          <div className="apply-content">
              <p>
                {contents.applyText}
              </p>
          </div>
          <div className="apply-button">
              <a href='#contact' class="cta">
                <span>{contents.applyBtn}</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </a>
          </div>
        </div>
      </div>
    )
  }
}
export default Apply;