import React, { useState } from 'react';
import moment from 'moment';

class WatchClass extends React.Component {
    constructor(props) {
        super(props);
        const { item, onDelete } = props;

        this.id = item.id;
        this.name = item.name;
        this.timeZone = Number(item.timeZone);
        this.onDelete = onDelete;
        this.state = {
            timeZone: moment().utcOffset(this.timeZone).format('HH:mm:ss'),
        };
    }

    componentDidMount() {
        this.intID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intID);
    }

    tick() {
        this.setState({
            timeZone: moment().utcOffset(this.timeZone).format('HH:mm:ss'),
        });
    }

    render() {
        return (
            <div className='card mt-3 me-2 p-2 rounded-pill'>
                <div className='card-body'>
                    <h5 className='card-title text-center' style={{ color: 'blue' }}>
                        {this.name}
                    </h5>

                    <p className='card-text text-center mt-3 fw-bold'>
                        {this.state.timeZone}
                    </p>
                    <button className='btn btn-primary fw-bold' onClick={this.onDelete}>
                        удалить
                    </button>
                </div>
            </div>
        );
    }
}

export default WatchClass;