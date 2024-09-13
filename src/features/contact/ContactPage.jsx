import React from 'react';
import ContactTable from './ContactTable';
import ContactButtons from './ContactButtons';
import './Contact.css';

export default function ContactPage() {
  return (
    <div className="contact">
      <h1>CONTACT</h1>
      <ContactButtons />
      <ContactTable />
    </div>
  );
}
