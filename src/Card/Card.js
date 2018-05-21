import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { getProps, defaultProps } from '../utils/proptypes'
import { dispatchEvent } from '../utils/dom/element'
import { cardClass } from '../styles'
import { Provider } from './context'

class Card extends PureComponent {
  constructor(props) {
    super(props)

    this.state = { collapsed: props.defaultCollapsed }

    this.bindElement = this.bindElement.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCollapse = this.handleCollapse.bind(this)
  }

  getCollapsed() {
    const { collapsible, collapsed } = this.props
    if (!collapsible) return undefined
    return collapsed !== undefined ? collapsed : this.state.collapsed
  }

  bindElement(el) {
    this.element = el
  }

  handleCollapse() {
    const collapsed = !this.getCollapsed()
    if (this.props.onCollapse) this.props.onCollapse(collapsed)
    else this.setState({ collapsed })
  }

  handleSubmit() {
    const form = this.element.querySelector('form')
    if (form) dispatchEvent(form, 'submit')
    else console.error('No form found.')
  }

  render() {
    const shadow = this.props.shadow === true ? 'shadow' : this.props.shadow
    const className = classnames(
      cardClass('_', shadow),
      this.props.className,
    )

    const provierValue = {
      onCollapse: this.handleCollapse,
      collapsible: this.props.collapsible,
      collapsed: this.getCollapsed(),
      onSubmit: this.handleSubmit,
    }

    return (
      <div className={className} ref={this.bindElement} style={this.props.style}>
        <Provider value={provierValue}>
          {this.props.children}
        </Provider>
      </div>
    )
  }
}

Card.propTypes = {
  ...getProps(),
  shadow: PropTypes.oneOf([true, false, 'hover']),
}

Card.defaultProps = {
  ...defaultProps,
  defaultCollapsed: true,
  collapsible: false,
}

export default Card
