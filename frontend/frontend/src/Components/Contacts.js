import React, { useState, useEffect } from 'react';
import "../styles/contacts.css"
const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const [newContact, setNewContact] = useState({
        f_name: '',
        l_name: '',
        phone_number: '',
    });
    const [editingContact, setEditingContact] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const response = await fetch('http://localhost:5000/contacts');
            const data = await response.json();
            setContacts(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching contacts:', error);
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewContact((prevContact) => ({ ...prevContact, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newContact),
            });

            if (response.ok) {
                await fetchContacts();
                setNewContact({
                    f_name: '',
                    l_name: '',
                    phone_number: '',
                });
            } else {
                console.error('Failed to add contacts. Status:', response.status);
            }
        } catch (error) {
            console.error('Error adding contact:', error);
        }
    };

    const handleEdit = (contact) => {
        setEditingContact(contact);
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
        setEditingContact(null);
    };

    const handleEditSubmit = async () => {
        try {
            const response = await fetch(`http://localhost:5000/contacts/${editingContact.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editingContact),
            });

            if (response.ok) {
                await fetchContacts();
                setShowEditModal(false);
                setEditingContact(null);
            } else {
                console.error('Failed to update contact. Status:', response.status);
            }
        } catch (error) {
            console.error('Error updating contact:', error);
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this contact?');

        if (confirmDelete) {
            try {
                const response = await fetch(`http://localhost:5000/contacts/${id}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    await fetchContacts();
                } else {
                    console.error('Failed to delete contact. Status:', response.status);
                }
            } catch (error) {
                console.error('Error deleting contact:', error);
            }
        }
    };

    return (

        <div className='contacts'>
            <h2>Contacts</h2>
            {contacts.length > 0 && (

                <div className='contact_table'>


                    {
                        loading ? (
                            <p> Loading contacts...</p>
                        ) : (

                            <table>

                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Phone Number</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>



                                <tbody>
                                    {contacts.map((contact) => (
                                        <tr key={contact.id}>
                                            <td>{contact.f_name}</td>
                                            <td>{contact.l_name}</td>
                                            <td>{contact.phone_number}</td>
                                            <td>
                                                <button onClick={() => handleEdit(contact)}>Edit</button>
                                                <button onClick={() => handleDelete(contact.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )
                    }
                </div>
            )}

            {/* Edit Modal */}
            {
                showEditModal && (
                    <EditContactModal

                        editingContact={editingContact}
                        setEditingContact={setEditingContact}
                        handleEditSubmit={handleEditSubmit}
                        handleCloseEditModal={handleCloseEditModal}
                    />
                )
            }


            <h2>Add Contact</h2>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="text" name="f_name" value={newContact.f_name} onChange={handleChange} />
                        </td>
                        <td>
                            <input type="text" name="l_name" value={newContact.l_name} onChange={handleChange} />
                        </td>
                        <td>
                            <input
                                type="text"
                                name="phone_number"
                                value={newContact.phone_number}
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <button onClick={handleSubmit}>Add</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div >

    );
};

const EditContactModal = ({
    editingContact,
    setEditingContact,
    handleEditSubmit,
    handleCloseEditModal,
}) => (
    <dialog open>
        <div className="modal-container">
            <table>
                <thead>
                    <tr>
                        <th colSpan="2">Edit Contact</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>First Name:</td>
                        <td>
                            <input
                                type="text"
                                name="f_name"
                                value={editingContact.f_name}
                                onChange={(e) =>
                                    setEditingContact((prevContact) => ({ ...prevContact, f_name: e.target.value }))
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
                                value={editingContact.l_name}
                                onChange={(e) =>
                                    setEditingContact((prevContact) => ({ ...prevContact, l_name: e.target.value }))
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
                                value={editingContact.phone_number}
                                onChange={(e) =>
                                    setEditingContact((prevContact) => ({ ...prevContact, phone_number: e.target.value }))
                                }
                            />
                        </td>
                    </tr>
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

export default Contacts;


