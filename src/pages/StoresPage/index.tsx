import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import ReorderableTable from '../../components/table/ReorderableTable';
import { addStore, removeStore, reorderStores } from '../../store/storesSlice';
import StoreFormModal from './StoreFormModal';

const StoresPage = () => {
    const dispatch = useDispatch();
    const stores = useSelector((state: RootState) => state.stores.stores);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const columns = [
        {
            key: 'sno',
            header: 'S.No',
            render: (row: any) => row.order + 1,
        },
        {
            key: 'name',
            header: 'Store',
            render: (row: any) => row.name,
        },
        {
            key: 'city',
            header: 'City',
            render: (row: any) => row.city,
        },
        {
            key: 'state',
            header: 'State',
            render: (row: any) => row.state,
        },
    ];

    const onFormSubmit = (store: string, city: string, state: string) => {
        dispatch(addStore({ name: store, city, state }));
    }


    return (
        <div className="p-2 h-9/10">
            <ReorderableTable
                columns={columns}
                data={stores}
                onReorder={(startIndex, endIndex) => dispatch(reorderStores({ startIndex, endIndex }))}
                onRemove={(id) => dispatch(removeStore(id))}
            />

            <div className="mt-4">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-amber-700 text-white px-4 py-2 rounded-md hover:bg-amber-800 transition duration-300">
                    New Store
                </button>
            </div>

            <StoreFormModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} onFormSubmit={onFormSubmit} mode={'add'} />
        </div>
    );
};

export default StoresPage;
