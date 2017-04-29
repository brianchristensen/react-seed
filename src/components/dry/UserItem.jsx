import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Li from 'components/styled/Li';

export default class UserItem extends PureComponent {
    static propTypes = {
        'id': PropTypes.number.isRequired,
        'name': PropTypes.string.isRequired,
        'email': PropTypes.string.isRequired,
        'phone': PropTypes.string.isRequired,
        'website': PropTypes.string.isRequired,
        'showDetail': PropTypes.bool.isRequired,
        'onClick': PropTypes.func,
    }

    render() {
        let detail;
        if (this.props.showDetail) {
            detail = (
                <div>
                    <div>{ this.props.email }</div>
                    <div>{ this.props.phone }</div>
                    <div>{ this.props.website }</div>
                    <hr />
                </div>            
            );
        }

        let name;
        if (this.props.showDetail) { 
            name = <strong>{ this.props.name }</strong>;
        } else {
            name = <div>{ this.props.name }</div>
        }

        return (
            <Li data-id={this.props.data_id} onClick={this.props.onClick} color="green">                
                { name }
                { detail }
            </Li>
        );
    }
}