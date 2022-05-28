import React, { useState } from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ order, refetch, deletingProduct, setDeletingProduct }) => {
    // const [deleteProduct, setDeleteProduct] = useState(null)
    // set
    const { product, _id } = order;
    // console.log(product, _id)

    const handlerDelete = (id) => {

        const url = `http://localhost:5000/delete/${id}`
        console.log(url)
        fetch(url, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                
                if (data.deletedCount) {
                    toast.success(`Product: ${id} is deleted`)
                }
                refetch()
            })

    }


    return (
        <div>
            {/* <label for="delete-confirm-modal" class="btn modal-button">open modal</label> */}

            <input type="checkbox" id="" class="modal-toggle" />
            {/* <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    {product}
                    <h3 class="font-bold text-lg text-red-500">Are you sure want to delete !</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button onClick={()=>handlerDelete(_id)} class="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div> */}
            <button></button>
        </div >
    );
};

export default DeleteConfirmModal;