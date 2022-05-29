import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ refetch, deletingProduct, setDeletingProduct}) => {
    const { product, _id, transactionId } = deletingProduct

    const handleDelete = () => {
        fetch(`http://localhost:5000/delete/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${product} is deleted`)
                    setDeletingProduct(null)
                    refetch()
                }
            })
    }

    return (
        <div>

            {/* <label for="delete-confirm-modal" class="btn modal-button">open modal</label> */}

            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure Want to delete {product}?</h3>
                    <p class="py-4">This user not payment</p>
                    <div class="modal-action">
                        <button disabled={transactionId} onClick={handleDelete} className="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>




        </div >
    );
};

export default DeleteConfirmModal;