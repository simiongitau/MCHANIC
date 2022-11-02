import React, { Component } from 'react';
import Link from 'react';

class Cars extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link href='toyota'>Toyota</Link></li>
                    <li><Link>Nisan</Link></li>
                    <li><Link>Mercedes Benz</Link></li>
                    <li><Link>Land Rover</Link></li>
                    <li><Link>Jeep</Link></li>
                    <li><Link>Land cruiser</Link></li>
                    <li><Link>Ford</Link></li>


                </ul>
            </div>
        );
    }
}

export default Cars;