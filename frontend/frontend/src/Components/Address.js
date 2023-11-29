import React, { useState, useEffect } from 'react';
import "../styles/address.css"

const Address = () => {
    const [addresses, setAddresses] = useState([]);
    const [newAddress, setNewAddress] = useState({
        f_name: '',
        l_name: '',
        phone_number: '',
        street_add: '',
        city: '',
        zipcode: '',
        states: '',
    });
    const [editingAddress, setEditingAddress] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAddresses();
    }, []);

    const fetchAddresses = async () => {
        try {
            const response = await fetch('http://localhost:5000/address');
            const data = await response.json();
            setAddresses(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching addresses:', error);
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        //name is the name of the element 
        //value is the current value of the element
        const { name, value } = e.target;
        setNewAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/address', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newAddress),
            });

            if (response.ok) {
                await fetchAddresses();
                setNewAddress({
                    f_name: '',
                    l_name: '',
                    phone_number: '',
                    street_add: '',
                    city: '',
                    zipcode: '',
                    states: '',
                });
            } else {
                console.error('Failed to add address. Status:', response.status);
            }
        } catch (error) {
            console.error('Error adding address:', error);
        }
    };

    const handleEdit = (address) => {
        setEditingAddress(address);
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
        setEditingAddress(null);
    };

    const handleEditSubmit = async () => {
        try {
            const response = await fetch(`http://localhost:5000/address/${editingAddress.address_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editingAddress),
            });

            if (response.ok) {
                await fetchAddresses();
                setShowEditModal(false);
                setEditingAddress(null);
            } else {
                console.error('Failed to update address. Status:', response.status);
            }
        } catch (error) {
            console.error('Error updating address:', error);
        }
    };

    const handleDelete = async (address_id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this address?');

        if (confirmDelete) {
            try {
                const response = await fetch(`http://localhost:5000/address/${address_id}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    await fetchAddresses();
                } else {
                    console.error('Failed to delete address. Status:', response.status);
                }
            } catch (error) {
                console.error('Error deleting address:', error);
            }
        }
    };

    return (
        <div className='address'>
            <h2>Addresses</h2>
            {addresses.length > 0 && (
                <div className='address_table'>
                    {loading ? (
                        <p>Loading addresses...</p>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Phone Number</th>
                                    <th>Street Address</th>
                                    <th>City</th>
                                    <th>Zipcode</th>
                                    <th>State</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {addresses.map((address) => (
                                    <tr key={address.address_id}>
                                        <td>{address.f_name}</td>
                                        <td>{address.l_name}</td>
                                        <td>{address.phone_number}</td>
                                        <td>{address.street_add}</td>
                                        <td>{address.city}</td>
                                        <td>{address.zipcode}</td>
                                        <td>{address.states}</td>
                                        <td>
                                            <button onClick={() => handleEdit(address)}>Edit</button>
                                            <button onClick={() => handleDelete(address.address_id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    {/* Edit Modal */}
                    {showEditModal && (
                        <EditAddressModal
                            editingAddress={editingAddress}
                            setEditingAddress={setEditingAddress}
                            handleEditSubmit={handleEditSubmit}
                            handleCloseEditModal={handleCloseEditModal}
                        />
                    )}
                </div>
            )}

            <h2>Add Address</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>First Name:</td>
                            <td>
                                <input
                                    type="text"
                                    name="f_name"
                                    value={newAddress.f_name}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Last Name:</td>
                            <td>
                                <input
                                    type="text"
                                    name="l_name"
                                    value={newAddress.l_name}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Phone Number:</td>
                            <td>
                                <input
                                    type="text"
                                    name="phone_number"
                                    value={newAddress.phone_number}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Street Address:</td>
                            <td>
                                <input
                                    type="text"
                                    name="street_add"
                                    value={newAddress.street_add}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>City:</td>
                            <td>
                                <input
                                    type="text"
                                    name="city"
                                    value={newAddress.city}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Zipcode:</td>
                            <td>
                                <input
                                    type="text"
                                    name="zipcode"
                                    value={newAddress.zipcode}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>State:</td>
                            <td>
                                <input
                                    type="text"
                                    name="states"
                                    value={newAddress.states}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit">Submit</button>
            </form>

        </div>
    );
};

const EditAddressModal = ({
    editingAddress,
    setEditingAddress,
    handleEditSubmit,
    handleCloseEditModal,
}) => (
    <dialog open>
        <div className="modal-container">
            <table>
                <thead>
                    <tr>
                        <th colSpan="2">Edit Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>First Name:</td>
                        <td>
                            <input
                                type="text"
                                name="f_name"
                                value={editingAddress.f_name}
                                onChange={(e) =>
                                    setEditingAddress((prevAddress) => ({
                                        ...prevAddress,
                                        f_name: e.target.value,
                                    }))
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Last Name:</td>
                        <td>
                            <input
                                type="text"
                                name="l_name"
                                value={editingAddress.l_name}
                                onChange={(e) =>
                                    setEditingAddress((prevAddress) => ({
                                        ...prevAddress,
                                        l_name: e.target.value,
                                    }))
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Phone Number:</td>
                        <td>
                            <input
                                type="text"
                                name="phone_number"
                                value={editingAddress.phone_number}
                                onChange={(e) =>
                                    setEditingAddress((prevAddress) => ({
                                        ...prevAddress,
                                        phone_number: e.target.value,
                                    }))
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Street Address:</td>
                        <td>
                            <input
                                type="text"
                                name="street_add"
                                value={editingAddress.street_add}
                                onChange={(e) =>
                                    setEditingAddress((prevAddress) => ({
                                        ...prevAddress,
                                        street_add: e.target.value,
                                    }))
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>City:</td>
                        <td>
                            <input
                                type="text"
                                name="city"
                                value={editingAddress.city}
                                onChange={(e) =>
                                    setEditingAddress((prevAddress) => ({
                                        ...prevAddress,
                                        city: e.target.value,
                                    }))
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Zipcode:</td>
                        <td>
                            <input
                                type="text"
                                name="zipcode"
                                value={editingAddress.zipcode}
                                onChange={(e) =>
                                    setEditingAddress((prevAddress) => ({
                                        ...prevAddress,
                                        zipcode: e.target.value,
                                    }))
                                }
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>State:</td>
                        <td>
                            <input
                                type="text"
                                name="states"
                                value={editingAddress.states}
                                onChange={(e) =>
                                    setEditingAddress((prevAddress) => ({
                                        ...prevAddress,
                                        states: e.target.value,
                                    }))
                                }
                            />
                        </td>
                    </tr>
                    {/* Add more rows for additional fields */}
                </tbody>
            </table>
            <div className="modal-buttons">
                <button type="button" onClick={handleEditSubmit}>
                    Submit
                </button>
                <button type="button" onClick={handleCloseEditModal}>
                    Close
                </button>
            </div>
        </div>
    </dialog>
);


export default Address;
