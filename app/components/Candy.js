import React from 'react'

export default function Candy(props) {
    return props.map(candy => {
        return (
            <tr key={candy.id}>
                <td>candy.name</td>
                <td>candy.description</td>
                <td>candy.quantity</td>
                <td>candy.image</td>
            </tr>
        );
    });
}
