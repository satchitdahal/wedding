// import React, { useState, useEffect } from 'react';

// const Contacts = () => {
//     const [contacts, setContacts] = useState([]);
//     const [newContact, setNewContact] = useState({
//         f_name: '',
//         l_name: '',
//         phone_number: '',
//     });

//     // Fetch existing contacts on component mount
//     useEffect(() => {
//         fetchContacts();
//     }, []);

//     const fetchContacts = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/contacts');
//             const data = await response.json();
//             setContacts(data);
//         } catch (error) {
//             console.error('Error fetching contacts:', error);
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setNewContact((prevContact) => ({ ...prevContact, [name]: value }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch('http://localhost:5000/contacts', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     f_name: newContact.f_name,
//                     l_name: newContact.l_name,
//                     phone_number: newContact.phone_number,
//                 }),
//             });

//             if (response.ok) {
//                 // If the request is successful, fetch the updated list of contacts
//                 await fetchContacts();
//                 // After submitting, you may want to clear the form fields
//                 setNewContact({
//                     f_name: '',
//                     l_name: '',
//                     phone_number: '',
//                 });
//             } else {
//                 console.error('Failed to add contacts. Status:', response.status);
//             }
//         } catch (error) {
//             console.error('Error adding contact:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Add Contact</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     First Name:
//                     <input
//                         type="text"
//                         name="f_name"
//                         value={newContact.f_name}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <br />
//                 <label>
//                     Last Name:
//                     <input
//                         type="text"
//                         name="l_name"
//                         value={newContact.l_name}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <br />
//                 <label>
//                     Phone Number:
//                     <input
//                         type="text"
//                         name="phone_number"
//                         value={newContact.phone_number}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <br />
//                 <button type="submit">Add Contact</button>
//             </form>

//             <h2>Contacts</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Phone Number</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {contacts.map((contact) => (
//                         <tr key={contact.id}>
//                             <td>{contact.f_name}</td>
//                             <td>{contact.l_name}</td>
//                             <td>{contact.phone_number}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Contacts;
// import React, { useState, useEffect } from 'react';

// const Contacts = () => {
//     const [contacts, setContacts] = useState([]);
//     const [newContact, setNewContact] = useState({
//         f_name: '',
//         l_name: '',
//         phone_number: '',
//     });

//     useEffect(() => {
//         fetchContacts();
//     }, []);

//     const fetchContacts = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/contacts');
//             const data = await response.json();
//             setContacts(data);
//         } catch (error) {
//             console.error('Error fetching contacts:', error);
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setNewContact((prevContact) => ({ ...prevContact, [name]: value }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch('http://localhost:5000/contacts', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(newContact),
//             });

//             if (response.ok) {
//                 await fetchContacts();
//                 setNewContact({
//                     f_name: '',
//                     l_name: '',
//                     phone_number: '',
//                 });
//             } else {
//                 console.error('Failed to add contacts. Status:', response.status);
//             }
//         } catch (error) {
//             console.error('Error adding contact:', error);
//         }
//     };

//     const handleEdit = async (id) => {
//         // Implement your logic for handling edit here
//         console.log(`Edit contact with ID ${id}`);
//     };

//     const handleDelete = async (id) => {
//         try {
//             const response = await fetch(`http://localhost:5000/contacts/${id}`, {
//                 method: 'DELETE',
//             });

//             if (response.ok) {
//                 await fetchContacts();
//             } else {
//                 console.error('Failed to delete contact. Status:', response.status);
//             }
//         } catch (error) {
//             console.error('Error deleting contact:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Add Contact</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     First Name:
//                     <input
//                         type="text"
//                         name="f_name"
//                         value={newContact.f_name}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <br />
//                 <label>
//                     Last Name:
//                     <input
//                         type="text"
//                         name="l_name"
//                         value={newContact.l_name}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <br />
//                 <label>
//                     Phone Number:
//                     <input
//                         type="text"
//                         name="phone_number"
//                         value={newContact.phone_number}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <br />
//                 <button type="submit">Add Contact</button>
//             </form>

//             <h2>Contacts</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Phone Number</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {contacts.map((contact) => (
//                         <tr key={contact.id}>
//                             <td>{contact.f_name}</td>
//                             <td>{contact.l_name}</td>
//                             <td>{contact.phone_number}</td>
//                             <td>
//                                 <button onClick={() => handleEdit(contact.id)}>Edit</button>
//                                 <button onClick={() => handleDelete(contact.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Contacts;
// import React, { useState, useEffect } from 'react';

// const Contacts = () => {
//     const [contacts, setContacts] = useState([]);
//     const [newContact, setNewContact] = useState({
//         f_name: '',
//         l_name: '',
//         phone_number: '',
//     });
//     const [editingContact, setEditingContact] = useState(null);
//     const [showEditModal, setShowEditModal] = useState(false);

//     useEffect(() => {
//         fetchContacts();
//     }, []);

//     const fetchContacts = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/contacts');
//             const data = await response.json();
//             setContacts(data);
//         } catch (error) {
//             console.error('Error fetching contacts:', error);
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setNewContact((prevContact) => ({ ...prevContact, [name]: value }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch('http://localhost:5000/contacts', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(newContact),
//             });

//             if (response.ok) {
//                 await fetchContacts();
//                 setNewContact({
//                     f_name: '',
//                     l_name: '',
//                     phone_number: '',
//                 });
//             } else {
//                 console.error('Failed to add contacts. Status:', response.status);
//             }
//         } catch (error) {
//             console.error('Error adding contact:', error);
//         }
//     };

//     const handleEdit = (contact) => {
//         setEditingContact(contact);
//         setShowEditModal(true);
//     };

//     const handleCloseEditModal = () => {
//         setShowEditModal(false);
//         setEditingContact(null);
//     };

//     const handleEditSubmit = async () => {
//         try {
//             const response = await fetch(`http://localhost:5000/contacts/${editingContact.id}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(editingContact),
//             });

//             if (response.ok) {
//                 await fetchContacts();
//                 setShowEditModal(false);
//                 setEditingContact(null);
//             } else {
//                 console.error('Failed to update contact. Status:', response.status);
//             }
//         } catch (error) {
//             console.error('Error updating contact:', error);
//         }
//     };

//     const handleDelete = async (id) => {
//         try {
//             const response = await fetch(`http://localhost:5000/contacts/${id}`, {
//                 method: 'DELETE',
//             });

//             if (response.ok) {
//                 await fetchContacts();
//             } else {
//                 console.error('Failed to delete contact. Status:', response.status);
//             }
//         } catch (error) {
//             console.error('Error deleting contact:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Add Contact</h2>
//             <form onSubmit={handleSubmit}>
//                 {/* ... (existing code for the add contacts form) */}
//             </form>

//             <h2>Contacts</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Phone Number</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {contacts.map((contact) => (
//                         <tr key={contact.id}>
//                             <td>{contact.f_name}</td>
//                             <td>{contact.l_name}</td>
//                             <td>{contact.phone_number}</td>
//                             <td>
//                                 <button onClick={() => handleEdit(contact)}>Edit</button>
//                                 <button onClick={() => handleDelete(contact.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             {/* Edit Modal */}
//             {showEditModal && (
//                 <div className="edit-modal">
//                     <h2>Edit Contact</h2>
//                     <form>
//                         {/* Render form fields with existing contact details */}
//                         <label>
//                             First Name:
//                             <input
//                                 type="text"
//                                 name="f_name"
//                                 value={editingContact.f_name}
//                                 onChange={(e) => setEditingContact((prevContact) => ({ ...prevContact, f_name: e.target.value }))}
//                             />
//                         </label>
//                         <br />
//                         <label>
//                             Last Name:
//                             <input
//                                 type="text"
//                                 name="l_name"
//                                 value={editingContact.l_name}
//                                 onChange={(e) => setEditingContact((prevContact) => ({ ...prevContact, l_name: e.target.value }))}
//                             />
//                         </label>
//                         <br />
//                         <label>
//                             Phone Number:
//                             <input
//                                 type="text"
//                                 name="phone_number"
//                                 value={editingContact.phone_number}
//                                 onChange={(e) => setEditingContact((prevContact) => ({ ...prevContact, phone_number: e.target.value }))}
//                             />
//                         </label>
//                         <br />
//                         <button type="button" onClick={handleEditSubmit}>Submit</button>
//                         <button type="button" onClick={handleCloseEditModal}>Close</button>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Contacts;
import React, { useState, useEffect } from 'react';

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const [newContact, setNewContact] = useState({
        f_name: '',
        l_name: '',
        phone_number: '',
    });
    const [editingContact, setEditingContact] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const response = await fetch('http://localhost:5000/contacts');
            const data = await response.json();
            setContacts(data);
        } catch (error) {
            console.error('Error fetching contacts:', error);
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
    };

    return (
        <div>
            <h2>Add Contact</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="f_name"
                        value={newContact.f_name}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="l_name"
                        value={newContact.l_name}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Phone Number:
                    <input
                        type="text"
                        name="phone_number"
                        value={newContact.phone_number}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Add Contact</button>
            </form>

            <h2>Contacts</h2>
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

            {/* Edit Modal */}
            {showEditModal && (
                <div className="edit-modal">
                    <h2>Edit Contact</h2>
                    <form>
                        <label>
                            First Name:
                            <input
                                type="text"
                                name="f_name"
                                value={editingContact.f_name}
                                onChange={(e) => setEditingContact((prevContact) => ({ ...prevContact, f_name: e.target.value }))}
                            />
                        </label>
                        <br />
                        <label>
                            Last Name:
                            <input
                                type="text"
                                name="l_name"
                                value={editingContact.l_name}
                                onChange={(e) => setEditingContact((prevContact) => ({ ...prevContact, l_name: e.target.value }))}
                            />
                        </label>
                        <br />
                        <label>
                            Phone Number:
                            <input
                                type="text"
                                name="phone_number"
                                value={editingContact.phone_number}
                                onChange={(e) => setEditingContact((prevContact) => ({ ...prevContact, phone_number: e.target.value }))}
                            />
                        </label>
                        <br />
                        <button type="button" onClick={handleEditSubmit}>Submit</button>
                        <button type="button" onClick={handleCloseEditModal}>Close</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Contacts;
