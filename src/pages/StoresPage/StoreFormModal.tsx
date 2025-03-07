import React from 'react';
import { InputField, Modal, ModalBody, ModalFooter, ModalHeader } from '../../components';

interface StoreFormModalProps {
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
    onFormSubmit: (store: string, city: string, state: string) => void;
    mode: 'add' | 'edit';
    initialData?: { store: string; city: string; state: string };
}

const StoreFormModal: React.FC<StoreFormModalProps> = ({
    isModalOpen,
    setIsModalOpen,
    onFormSubmit,
    mode,
    initialData,
}) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const store = form.store.value.trim();
        const city = form.city.value.trim();
        const state = form.state.value.trim();

        if (store.length < 1 || city.length < 1 || state.length < 1) {
            alert('All fields must have at least 1 character.');
            return;
        }

        onFormSubmit(store, city, state);
        setIsModalOpen(false);
    };

    return (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <ModalHeader
                title={mode === 'add' ? 'Add Store' : 'Edit Store'}
                onClose={() => setIsModalOpen(false)}
            />
            <ModalBody>
                <form onSubmit={handleSubmit}>
                    <InputField
                        label="Store"
                        id="store"
                        name="store"
                        required
                        defaultValue={initialData?.store}
                    />
                    <InputField
                        label="City"
                        id="city"
                        name="city"
                        required
                        defaultValue={initialData?.city}
                    />
                    <InputField
                        label="State"
                        id="state"
                        name="state"
                        required
                        defaultValue={initialData?.state}
                    />
                    <ModalFooter>
                        <button
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            {mode === 'add' ? 'Add Store' : 'Update Store'}
                        </button>
                    </ModalFooter>
                </form>
            </ModalBody>
        </Modal>
    );
};

export default StoreFormModal;
