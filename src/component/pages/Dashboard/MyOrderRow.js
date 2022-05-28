import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderRow = ({ myOrder, index }) => {
    const { product, img, orderQuantity, totalPrice, userEmail, userName } = myOrder;
    return (
        <tr class=''>
            <th>{index + 1}</th>
            <td>{userName}</td>
            <td >
                <div className='flex items-center gap-2'>
                    <div class="avatar ">
                        <div class="w-14 rounded">
                            <img src={img} alt="Tailwind-CSS-Avatar-component" />
                        </div>
                    </div>
                    <div>
                        {product}
                    </div>
                </div>
            </td>
            <td>{totalPrice}</td>
            <td>{orderQuantity}</td>
            <td>{userEmail}</td>
            <td><Link to='/' class="btn btn-xs text-white">Pay</Link></td>
        </tr>
    );
};

export default MyOrderRow;