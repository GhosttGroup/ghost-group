import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Email = {
    id: number;
    full_name: string;
    email_address: string;
    services: string;
    phone_number: string;
    company_name: string;
    additional_info: string;
};

const EmailsList: React.FC = () => {
    const [emails, setEmails] = useState<Email[]>([]);

    useEffect(() => {
        const fetchEmails = async () => {
            try {
                const response = await axios.get('http://localhost:9000/users');
                setEmails(response.data);
            } catch (error) {
                console.error('Error fetching emails:', error);
            }
        };

        fetchEmails();
    }, []);

    return (
        <div>
            <h1>Emails List</h1>
            <ul>
                {emails.map(email => (
                    <li key={email.id}>
                        <p><strong>Full Name:</strong> {email.full_name}</p>
                        <p><strong>Email Address:</strong> {email.email_address}</p>
                        <p><strong>Services:</strong> {email.services}</p>
                        <p><strong>Phone Number:</strong> {email.phone_number}</p>
                        <p><strong>Company Name:</strong> {email.company_name}</p>
                        <p><strong>Additional Info:</strong> {email.additional_info}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmailsList;
