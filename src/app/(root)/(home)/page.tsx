import React from 'react';

export default function HomePage() {
    return (
        <div style={styles.container}>
            <h1>Welcome to Talent Talk</h1>
            <p>Your platform for talent discovery and growth.</p>
        </div>
    );
}

const styles = {
    container: {
        padding: '2rem',
        textAlign: 'center' as const,
        fontFamily: 'Arial, sans-serif'
    }
};