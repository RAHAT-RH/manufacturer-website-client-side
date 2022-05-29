import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading/Loading'
import DeleteConfirmModal from './DeleteConfirmModal';
import ManageOrderRow from './ManageOrderRow';
const ManageOrders = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);
    const { data: orders, isLoading, refetch } = useQuery('all orders', () => fetch('http://localhost:5000/manageOrder', {
        method: "GET"
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    
    return (
        <div className='py-2'>
            <h1 className='text-2xl font-bold'>This is a Manage Orders: {orders.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
      
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map( (order, index) => <ManageOrderRow
                             key={order._id} 
                             index={index} 
                             order={order}
                            refetch={refetch}
                            setDeletingProduct={setDeletingProduct}
                             >
                             </ManageOrderRow>)
                        }
        
                      
          
                    </tbody>
                </table>
            </div>
            {/* {
                orders.map(order => <DeleteConfirmModal
                deletingProduct={deletingProduct}
                refetch={refetch}
                setDeletingProduct = {setDeletingProduct}
                order={order}
                ></DeleteConfirmModal>)
            } */}
            {
                deletingProduct && 
                <DeleteConfirmModal
                deletingProduct={deletingProduct}
                refetch={refetch}
                setDeletingProduct={setDeletingProduct}
                ></DeleteConfirmModal>
            }
        </div>
    );
};

export default ManageOrders;