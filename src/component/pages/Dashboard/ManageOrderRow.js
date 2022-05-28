import React, { useState } from 'react';

const ManageOrderRow = ({ order, index,  setDeletingProduct }) => {
    const {_id, product, img, orderQuantity, transactionId, totalPrice, userName, userEmail } = order;
    console.log(setDeletingProduct(order))
    //  console.log(setDeletingProduct)
    const [shipped, setShipped] = useState("pending")
    const changeStatus = () => {
        setShipped('shipped')
    }
    console.log(shipped)

    return (
        <tr className='text-normal'>
            <th>{index + 1}</th>
            <th>{userName}</th>
            <th>
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
            </th>
            <th>{orderQuantity}</th>
            <th>{totalPrice}</th>
            <th>{userEmail}</th>
            {/* <th>{transactionId  && <div class="badge badge-sm">pending</div>} </th> */}
            <th>{(!transactionId) ? <div class="badge badge-sm p-3">not payment</div> : <div class="badge badge-sm p-3 badge-warning">{shipped}</div>} </th>
            <th>
                <label disabled={transactionId}  for="delete-confirm-modal" class="btn modal-button btn-xs btn-error">Delete</label>
                <label onClick={changeStatus}  class="btn modal-button btn-xs btn-error"> Shipped </label>
                
            </th>
        </tr>
    );
};

export default ManageOrderRow;