import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderRow = ({ myOrder, index }) => {
    const {_id, product, img, orderQuantity, totalPrice, userEmail, userName } = myOrder;
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
            <td>{(totalPrice && !totalPrice.paid) && <Link to={`/dashboard/payment/${_id}`}><button className="btn btn-xs btn-success">Pay</button></Link>}
                {(totalPrice && totalPrice.paid) && <div>
                    <p><span className="text-success">Paid</span></p>
                    <p>Transaction id: <span className="text-success"> {totalPrice.transactionId}</span></p>
                </div>}</td>
        </tr>
    );
};

export default MyOrderRow;