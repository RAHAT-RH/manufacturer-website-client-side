import React from 'react';

const ManageOrderRow = ({ order, index, refetch, setDeletingProduct }) => {
    const {_id, product, img, orderQuantity, totalPrice, userName, userEmail } = order;
    //  console.log(setDeletingProduct)
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
            <th><div class="badge badge-sm">unpaid</div></th>
            <th>
                <label onClick={() => setDeletingProduct(_id)} for="delete-confirm-modal" class="btn modal-button btn-xs btn-error">Delete</label>
            </th>
        </tr>
    );
};

export default ManageOrderRow;