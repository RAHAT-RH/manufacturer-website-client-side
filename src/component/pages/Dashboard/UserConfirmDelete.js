import React from 'react';
import { toast } from 'react-toastify';

const UserConfirmDelete = ({deleteUser, setDeleteUser, refetch}) => {
    const {_id, email,} = deleteUser;

    const handleDelete = () => {
        fetch(`http://localhost:5000/user/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${email} is deleted`)
                    setDeleteUser(null)
                    refetch()
                }
            })
    }
    return (
        <div>
            {/* <label for="delete-confirm-user-modal" class="btn modal-button">open modal</label> */}
            <input type="checkbox" id="delete-confirm-user-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure want to delete <span className='text-red-500'>{email} ?</span></h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <label onClick={handleDelete} class="btn btn-xs btn-error">Delete</label>
                        <label for="delete-confirm-user-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserConfirmDelete;