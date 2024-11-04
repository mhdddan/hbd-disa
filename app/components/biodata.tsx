'use client'; // Tambahkan ini di baris pertama

import React, { useState } from 'react';

const PersonalInfo = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const personalData = {
    name: 'Disa Indah Ramadanti',
    birthDate: '02 November 2003',
    email: 'disaindah02@gmail.com',
    phone: '081286955823',
    address: 'Di planet Mars',
    occupation: 'Seleb Mukbang',
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Informasi Pribadi</h2>
      <ul style={styles.list}>
        {Object.entries(personalData).map(([key, value]) => (
          <li key={key} style={styles.listItem}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
    container: {
      border: '1px solid  #0004ff',
      borderRadius: '5px',
      padding: '20px',
      maxWidth: '900px',
      margin: '20px auto',
      backgroundColor: '#black',
      fontFamily: 'Roboto, sans-serif', // Ganti font di sini
    },
    title: {
      color: 'red',
      fontFamily: 'Roboto, sans-serif', // Ganti font judul di sini
      fontWeight: '700', // Menggunakan berat font yang lebih tebal
    },
    list: {
      listStyleType: 'none',
      padding: 0,
    },
    listItem: {
      marginBottom: '10px',
      color: 'white',
    },
  };

export default PersonalInfo;