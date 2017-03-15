import React  from 'react'
import config from '../config.js'
import {connect} from 'react-redux'
import {AbstractModelComponent, mixerConnector} from 'react-arc'
import <%= capitalizeName %>Container from '../containers/<%= capitalizeName %>Container'

class <%= capitalizeName %>Component extends AbstractModelComponent {
    static defaultProps = {
        ARCConfig: config
    }

    render() {
        const error = this.getError()
        if (error) {
            console.error(error)
            return (<div>{error.data}</div>)
        }
        if (!this.isLoaded()) return (<div>loading</div>)
        return (<<%= capitalizeName %>Container <%= lowercaseName %>={this.getModel()} />)
    }
}

export default mixerConnector(connect, config)(<%= capitalizeName %>Component)
